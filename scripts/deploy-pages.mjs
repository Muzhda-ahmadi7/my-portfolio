#!/usr/bin/env node
// Builds the site and publishes dist/ to the gh-pages branch (GitHub Pages source).
// Usage: npm run deploy   (or VITE_BASE=/other/ npm run deploy)

import { execFileSync, execSync } from "node:child_process";
import { cpSync, existsSync, mkdtempSync, readdirSync, rmSync, writeFileSync } from "node:fs";
import { tmpdir } from "node:os";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const BRANCH = "gh-pages";
const BASE = process.env.VITE_BASE || "/my-portfolio/";

const git = (args, cwd = root) => execFileSync("git", args, { cwd, stdio: "inherit" });

// 1. build
console.log(`\n> Building with VITE_BASE=${BASE}`);
execSync("npm run build", { cwd: root, stdio: "inherit", env: { ...process.env, VITE_BASE: BASE } });

const distDir = join(root, "dist");
if (!existsSync(join(distDir, "index.html"))) {
  console.error("Build output missing dist/index.html");
  process.exit(1);
}
// tell GitHub Pages to skip Jekyll
if (!existsSync(join(distDir, ".nojekyll"))) writeFileSync(join(distDir, ".nojekyll"), "");

// 2. put dist/ content on the gh-pages branch (via a temporary worktree)
// remove stale auxiliary worktrees first (git itself refuses to remove the main one)
const list = execFileSync("git", ["worktree", "list", "--porcelain"], { cwd: root, encoding: "utf8" });
for (const line of list.split(/\r?\n/)) {
  if (line.startsWith("worktree ")) {
    try {
      execFileSync("git", ["worktree", "remove", "--force", line.slice(9).trim()], { cwd: root });
    } catch {
      /* main worktree or already gone */
    }
  }
}
try {
  git(["worktree", "prune"]);
} catch {
  /* nothing to prune */
}

const work = mkdtempSync(join(tmpdir(), "gh-pages-"));
try {
  try {
    git(["fetch", "origin", BRANCH]);
  } catch {
    /* first deploy: branch does not exist on origin yet */
  }
  try {
    git(["worktree", "add", work, BRANCH]);
  } catch {
    try {
      git(["worktree", "add", "-B", BRANCH, work, `origin/${BRANCH}`]);
    } catch {
      git(["worktree", "add", "-B", BRANCH, work, "HEAD"]);
    }
  }

  git(["rm", "-rf", "."], work);
  for (const entry of readdirSync(distDir)) {
    cpSync(join(distDir, entry), join(work, entry), { recursive: true });
  }

  git(["add", "-A"], work);
  try {
    git(["commit", "-m", `Deploy site ${new Date().toISOString().slice(0, 16).replace("T", " ")}`], work);
  } catch {
    console.log("\n> No changes to deploy.");
    process.exit(0);
  }
  git(["push", "origin", BRANCH], work);
  console.log(`\n> Pushed to ${BRANCH} — GitHub Pages republishes in about a minute.`);
  console.log("> Live at https://muzhda-ahmadi7.github.io/my-portfolio/");
} finally {
  try {
    git(["worktree", "remove", "--force", work]);
  } catch {
    rmSync(work, { recursive: true, force: true });
  }
}
