
const menuBtn=document.querySelector(".menu-toggle");
const menu=document.querySelector(".nav-menu");
if(menuBtn&&menu){
  menuBtn.addEventListener("click",()=>{
    const open=menu.classList.toggle("open");
    menuBtn.classList.toggle("open",open);
    menuBtn.setAttribute("aria-expanded",open?"true":"false");
  });
}
document.querySelectorAll(".nav-menu a").forEach(a=>a.addEventListener("click",()=>{
  menu?.classList.remove("open");
  menuBtn?.classList.remove("open");
  menuBtn?.setAttribute("aria-expanded","false");
}));
document.querySelectorAll(".faq-q").forEach(q=>q.addEventListener("click",()=>{
  q.parentElement.classList.toggle("open");
}));

/* Hero entrance animation */
requestAnimationFrame(()=>{
  document.querySelector(".hero")?.classList.add("hero-in");
});

/* Sticky nav shadow on scroll */
const siteNav=document.querySelector(".site-nav");
if(siteNav){
  const onScroll=()=>siteNav.classList.toggle("scrolled",window.scrollY>10);
  onScroll();
  window.addEventListener("scroll",onScroll,{passive:true});
}

/* Highlight current page in nav */
const here=location.pathname.split("/").pop()||"index.html";
document.querySelectorAll(".nav-menu a").forEach(a=>{
  const target=a.getAttribute("href").split("/").pop();
  if(target===here) a.classList.add("active");
});

/* Scroll-reveal animation for repeating content blocks */
const revealSelectors=[
  ".project",".work-card",".service",".org",".timeline-row",".stack-card",".faq-item",
  ".stat",".detail-block",".meta",".about-grid",".quote",".final-cta",".contact-box"
];
const revealEls=document.querySelectorAll(revealSelectors.join(","));
if("IntersectionObserver"in window && revealEls.length){
  revealEls.forEach((el,i)=>{
    el.classList.add("reveal");
    el.style.transitionDelay=(i%4)*90+"ms";
  });
  const io=new IntersectionObserver((entries)=>{
    entries.forEach(entry=>{
      if(entry.isIntersecting){
        entry.target.classList.add("in-view");
        io.unobserve(entry.target);
      }
    });
  },{threshold:.15,rootMargin:"0px 0px -60px 0px"});
  revealEls.forEach(el=>io.observe(el));
}

/* Feature project card: subtle 3D tilt that follows the cursor */
const featureCard=document.querySelector(".work-card.feature");
const featureVisual=featureCard?.querySelector(".work-card-visual");
if(featureCard && featureVisual && matchMedia("(pointer:fine)").matches){
  featureCard.addEventListener("mousemove",(e)=>{
    const r=featureCard.getBoundingClientRect();
    const px=(e.clientX-r.left)/r.width-.5;
    const py=(e.clientY-r.top)/r.height-.5;
    featureVisual.style.transform=`rotateY(${px*8}deg) rotateX(${-py*8}deg)`;
  });
  featureCard.addEventListener("mouseleave",()=>{
    featureVisual.style.transform="rotateY(0deg) rotateX(0deg)";
  });
}

/* Magnetic hover for primary buttons */
if(matchMedia("(pointer:fine)").matches){
  document.querySelectorAll(".btn,.work-cta").forEach(btn=>{
    btn.addEventListener("mousemove",(e)=>{
      const r=btn.getBoundingClientRect();
      const x=(e.clientX-r.left-r.width/2)*.25;
      const y=(e.clientY-r.top-r.height/2)*.35;
      btn.style.transform=`translate(${x}px,${y}px)`;
    });
    btn.addEventListener("mouseleave",()=>{
      btn.style.transform="";
    });
  });
}

/* Count-up animation for stat numbers */
const statEls=document.querySelectorAll(".stat strong");
if("IntersectionObserver"in window && statEls.length){
  const animateCount=(el)=>{
    const raw=el.textContent.trim();
    const match=raw.match(/^([\d.]+)(.*)$/);
    if(!match){return;}
    const end=parseFloat(match[1]);
    const suffix=match[2];
    const decimals=(match[1].split(".")[1]||"").length;
    const duration=1100;
    const start=performance.now();
    const step=(now)=>{
      const progress=Math.min((now-start)/duration,1);
      const eased=1-Math.pow(1-progress,3);
      const value=end*eased;
      el.textContent=(decimals?value.toFixed(decimals):Math.round(value))+suffix;
      if(progress<1){requestAnimationFrame(step);}
    };
    requestAnimationFrame(step);
  };
  const statIo=new IntersectionObserver((entries)=>{
    entries.forEach(entry=>{
      if(entry.isIntersecting){
        animateCount(entry.target);
        statIo.unobserve(entry.target);
      }
    });
  },{threshold:.4});
  statEls.forEach(el=>statIo.observe(el));
}
