/* All project content transcribed from the original static site — text unchanged. */
const img = (name) => `${import.meta.env.BASE_URL}images/${name}`;

export const projects = [
  {
    slug: "dreamhome",
    title: "Findit Real Estate",
    pageTitle: "DreamHome",
    kicker: "WEB DEVELOPMENT · NETLINKS BOOTCAMP",
    intro:
      "A collaborative real estate website created during the Netlinks Web Development Bootcamp Challenge. Our five-member team recreated a provided reference website using HTML and CSS, working collaboratively across layout, styling, and visual implementation.",
    meta: [
      { label: "Year", value: "2026" },
      { label: "Role", value: "Front-End Developer · Team Member" },
      { label: "Team", value: "5 members" },
      { label: "Result", value: "1st Place Within Class" },
    ],
    image: img("dreamhome.png"),
    imageAlt: "project preview",
    bg: "bg-lime",
    blocks: [
      {
        title: "Description",
        text: "Findit Real Estate is a collaborative web development project created as part of the Netlinks Web Development Bootcamp Challenge. Our team was given a reference website and challenged to recreate it through our own implementation. We worked together to build the page structure, responsive layouts, styling, and visual details while maintaining the overall direction of the reference design.",
      },
      {
        title: "My Contribution",
        text: "As a Front-End Developer and team member, I contributed to the planning, HTML structure, CSS styling, layout implementation, and refinement of different sections of the website. I worked closely with the team to maintain consistency across the interface and helped bring the final design together.",
      },
      { title: "Technologies", tags: ["HTML", "CSS", "GitHub"] },
      { title: "Result", text: "1st Place Within Class" },
      {
        title: "Additional Note",
        text: "AI tools were permitted during the challenge and were used as supporting tools during the development process.",
      },
      {
        title: "Project Links",
        link: { href: "https://gentle-crepe-bd2e19.netlify.app/", label: "Live / GitHub" },
      },
    ],
    list: {
      label: "01 · Netlinks Bootcamp · Web Development · 2026",
      title: "Dream Home",
      sub: "Team Bootcamp · 1st Place in Class",
      text: "Five-member collaborative website recreation project.",
      imageAlt: "The dream home project preview",
    },
    home: {
      label: "Netlinks Bootcamp · Web Development",
      title: "Dream Home",
      text: "A collaborative real-estate website recreated as part of the Netlinks Web Development Bootcamp Challenge. Our five-member team developed the website from a provided reference and achieved 1st place in class.",
      tags: ["Team Bootcamp Project", "1st Place in Class"],
      imageAlt: "the dreamhome project preview",
      plainImage: true,
    },
  },
  {
    slug: "ecommerce",
    title: "Essential — E-Commerce Website",
    pageTitle: "E-Commerce Website",
    kicker: "HTML & CSS · NETLINKS BOOTCAMP",
    intro:
      "A foundational e-commerce website created during my first Netlinks Web Development Bootcamp. The project focused on building a structured webpage using HTML and CSS, with an emphasis on layout, typography, spacing, and visual design.",
    meta: [
      { label: "Year", value: "2026" },
      { label: "Focus", value: "HTML · CSS" },
      { label: "Team", value: "5 members" },
      { label: "Type", value: "Bootcamp Project" },
    ],
    image: img("skincare.png"),
    imageAlt: "E-Commerce Website project preview",
    bg: "bg-gray",
    blocks: [
      {
        title: "Description",
        text: "Essential is an e-commerce website concept created during my first Netlinks Web Development Bootcamp. The project was designed to practice the fundamentals of front-end development by translating a visual concept into a structured webpage using HTML and CSS.",
      },
      {
        title: "Project Goal",
        text: "The main goal was to build a complete webpage while developing a strong understanding of HTML structure and CSS styling. The project focused on creating clear layouts, organizing content, and maintaining a consistent visual design.",
      },
      { title: "Technologies", tags: ["HTML", "CSS", "GitHub"] },
      {
        title: "Responsive Status",
        text: "Desktop-focused project: This project was created during the early stage of my front-end learning journey. The focus of the bootcamp was HTML structure and CSS design, so responsive development was not part of the project requirements.",
      },
      {
        title: "My Role",
        text: "I worked on the HTML structure and CSS styling of the website, building the page sections and implementing the visual design. This project helped me understand how HTML provides the structure while CSS controls the visual presentation",
      },
      {
        title: "Project Links",
        link: { href: "https://muzhda-ahmadi7.github.io/Netlinks-Bootcamp-Project/", label: "Live" },
      },
    ],
    list: {
      label: "02 · Netlinks · Web Development · 2026",
      title: "Essential — E-Commerce Website",
      sub: "Team Project",
      text: "Website focused on Essential — E-Commerce Website.",
      imageAlt: "skincare project preview",
    },
    home: {
      label: "HTML & CSS · Netlinks Bootcamp · 2026",
      title: "Essential — E-Commerce Website",
      text: "A foundational e-commerce website created during my first Netlinks Bootcamp, focused on HTML structure and CSS design.",
      tags: ["Team Project"],
      imageAlt: "the skincare project preview",
    },
  },
  {
    slug: "form",
    title: "Responsive Contact Form",
    pageTitle: "Contact Form",
    kicker: "HTML & CSS · RESPONSIVE DESIGN",
    intro:
      "A front-end project focused on creating a clean and responsive contact form using HTML and CSS. The project was developed to practice structured HTML, CSS styling, responsive layouts, and form design across different screen sizes.",
    meta: [
      { label: "Year", value: "2026" },
      { label: "Role", value: "Front-End Developer" },
      { label: "Focus", value: "HTML · CSS · Responsive Design" },
      { label: "Type", value: "Bootcamp / Practice Project" },
    ],
    image: img("conntect.png"),
    imageAlt: "project preview",
    bg: "bg-cream",
    blocks: [
      {
        title: "Description",
        text: "This project focuses on building a functional-looking contact form interface from the ground up. The main emphasis was on creating a clear HTML structure and using CSS to develop the visual design while ensuring that the layout adapts to different screen sizes.",
      },
      {
        title: "Project Goal",
        text: "The main goal was to strengthen my understanding of HTML and CSS while learning how to create responsive interfaces. The project also provided practical experience designing and organizing form fields in a clear and user-friendly layout.",
      },
      { title: "Technologies", tags: ["HTML", "CSS", "GitHub"] },
      {
        title: "My Role",
        text: "I was responsible for building the HTML structure and implementing the CSS styling and responsive behavior of the interface. I focused on creating a clean layout, organizing the form elements, and adapting the design for different screen sizes.",
      },
      {
        title: "Responsive Design",
        text: "The project was designed to adapt to different screen sizes using responsive CSS techniques and media queries. The layout was adjusted to remain clear and usable across desktop, tablet, and mobile screen widths.",
      },
      {
        title: "Project Links",
        link: { href: "https://nimble-monstera-e1fbef.netlify.app/", label: "Live" },
      },
    ],
    list: {
      label: "HTML & CSS · Responsive Design · 2026",
      title: "Responsive Contact Form",
      sub: "Self Project",
      text: "A responsive contact form project focused on HTML structure, CSS styling, responsive layouts, and user-friendly form design.",
      imageAlt: "project preview",
    },
    home: {
      label: "Netlinks · HTML & CSS · Responsive Design · 2026",
      title: "Responsive Contact Form",
      text: "A responsive contact form project focused on HTML structure, CSS styling, responsive layouts, and user-friendly form design.",
      tags: ["Self Project"],
      imageAlt: "contact form project preview",
    },
  },
  {
    slug: "fig",
    title: "Personal Portfolio Website",
    pageTitle: "Figma",
    kicker: "Solo Practice Project.UI DESIGN · FIGMA",
    intro:
      "A personal portfolio website concept designed in Figma to create a clean, refined, and distinctive digital presence for a front-end developer. The design focuses on clear typography, thoughtful spacing, visual hierarchy, and a minimal interface.",
    meta: [
      { label: "Year", value: "2026" },
      { label: "Role", value: "UI Designer" },
      { label: "Tool", value: "Figma" },
      { label: "Type", value: "Personal Project" },
    ],
    image: img("figma.png"),
    imageAlt: "project preview",
    bg: "bg-blue",
    blocks: [
      {
        title: "Description",
        text: "This project explores the visual design of a personal portfolio for a front-end developer. The goal was to create an interface that feels clean, intentional, and professional while allowing the projects and work to remain the main focus.",
      },
      {
        title: "Goal",
        text: "The goal was to design a portfolio that communicates both technical ability and visual thinking without relying on a generic portfolio template. The interface uses a restrained layout, strong typography, generous whitespace, and subtle visual accents to create a distinctive identity.",
      },
      { title: "Technologies", tags: ["figma"] },
      { title: "Result", text: "Practice Build" },
      {
        title: "My Role",
        text: "I designed the portfolio interface in Figma, working on the visual direction, layout, typography, spacing, navigation, and presentation of featured projects.",
      },
      {
        title: "Project Links",
        link: {
          href: "https://www.figma.com/design/BpRKwVN0ACnoee7s8rT73d/Untitled?node-id=0-1&t=99M2k3FZ06fdQjNt-1",
          label: "Live / Figma",
        },
      },
    ],
    list: {
      label: "04 · Personal Practice · UI DESIGN · FIGMA · 2026",
      title: "Personal Portfolio Website",
      sub: "",
      text: "A personal portfolio concept designed in Figma to present my work, skills, and identity as a front-end developer through a clean and thoughtful visual system.",
      imageAlt: "project preview",
    },
  },
  {
    slug: "card-design",
    title: "Card Design",
    pageTitle: "Card Design",
    kicker: "Solo Practice Project",
    intro:
      "A practice project where the layout was designed in Figma and then recreated in VS Code.",
    meta: [
      { label: "Year", value: "2026" },
      { label: "Role", value: "Designer & Developer" },
      { label: "Team", value: "Solo" },
      { label: "Result", value: "Practice Build" },
    ],
    image: img("card.png"),
    imageAlt: "Card Design project preview",
    bg: "bg-pink",
    blocks: [
      {
        title: "Description",
        text: "A practice project where the layout was designed in Figma and then recreated in VS Code.",
      },
      {
        title: "My Contribution",
        text: "The goal was to create a simple and organized course-browsing interface where users can quickly scan available courses and understand the key information before choosing a course.",
      },
      { title: "Technologies", tags: ["HTML", "CSS", "Figma", "GitHub"] },
      { title: "Result", text: "Practice Build" },
      {
        title: "My Role",
        text: "I was responsible for structuring the webpage, implementing the course-card layout, styling the interface, organizing the content, and refining the overall visual presentation.",
      },
      {
        title: "Project Links",
        link: { href: "https://thriving-jalebi-a39775.netlify.app/", label: "Live" },
      },
    ],
    list: {
      label: "05 · Personal Practice · HTML / CSS / Figma · 2026",
      title: "Card Design",
      sub: "",
      text: "Designed in Figma, recreated in VS Code, and published through GitHub.",
      imageAlt: "Card Design project preview",
    },
  },
];

/* The three projects featured on the Home page. */
export const homeProjects = projects.filter((p) => p.home);

export const images = {
  portrait: img("muzhda.jpg"),
  dreamhome: img("dreamhome.png"),
  skincare: img("skincare.png"),
  contact: img("conntect.png"),
  figma: img("figma.png"),
  card: img("card.png"),
};

export const social = {
  github: "https://github.com/Muzhda-ahmadi7",
  linkedin:
    "https://www.linkedin.com/in/muzhda-ahmadi-a066013a6?utm_source=share_via&utm_content=profile&utm_medium=member_android",
  email: "mailto:muzhdaahmadi2009@gmail.com",
  emailText: "muzhdaahmadi2009@gmail.com",
};
