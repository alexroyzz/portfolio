export const site = {
  name: "Deepak",
  title: "MERN Stack Developer",
  location: "Delhi, India",
  education: "BCA, MDU — 2026",
  email: "deepakrak201601@gmail.com",
  github: "https://github.com/alexroyzz/",
  githubHandle: "@alexroyzz",
  linkedin: "https://www.linkedin.com/in/deepak-kumar-29b8732a5/",
  headline: {
    before: "I build real-world web products that turn ideas into ",
    accent: "business.",
  },
  intro:
    "I'm Deepak, a full-stack developer specialising in React, Node.js, Express and MongoDB. I've shipped live e-commerce, B2B wholesale and AI-powered platforms — from database schema to payment gateway to production deploy.",
  availability: "Available for freelance & full-time roles",
} as const

export const navLinks = [
  { label: "Home", href: "#top" },
  { label: "About", href: "#about" },
  { label: "Work", href: "#work" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
] as const

export const tech = [
  "React", "JavaScript", "Node.js", "Express.js", "MongoDB", "REST APIs", "JWT Auth",
  "Tailwind CSS", "Mongoose", "Cloudinary", "Razorpay", "Git & GitHub", "Vercel", "Render", "Postman",
] as const

export const stats = [
  { kicker: "Alyona Bags", value: 35, suffix: "+", label: "Online customers served in the first month of launch" },
  { kicker: "Alyona Bags", value: 10, suffix: "+", label: "Customer-facing features from catalogue to order tracking" },
  { kicker: "Admin system", value: 8, label: "Admin modules — products, orders, coupons, enquiries & more" },
  { kicker: "Live products", value: 4, label: "Full-stack applications deployed and publicly accessible" },
] as const

export const services = [
  {
    icon: "monitor",
    title: "Frontend Development",
    body: "Component-driven React interfaces with client-side routing, API integration and responsive layouts that hold up on every screen size.",
    chips: ["React", "JavaScript ES6+", "Tailwind CSS", "HTML5", "CSS3", "React Router", "Axios"],
  },
  {
    icon: "code",
    title: "Backend Development",
    body: "REST APIs on Node.js and Express with secure authentication, hashed credentials, protected routes and clean, predictable endpoints.",
    chips: ["Node.js", "Express.js", "REST APIs", "JWT", "bcrypt"],
  },
  {
    icon: "database",
    title: "Database Design",
    body: "MongoDB schema modelling with Mongoose — relationships, validation and queries designed around how the product actually gets used.",
    chips: ["MongoDB", "Mongoose", "MongoDB Atlas"],
  },
  {
    icon: "rocket",
    title: "Deployment & Integrations",
    body: "Getting it live and keeping it live — plus the third-party pieces real businesses need: payments, media hosting and customer messaging.",
    chips: ["Vercel", "Render", "Hostinger", "Cloudinary", "Razorpay", "WhatsApp workflows", "Postman", "Git"],
  },
] as const

export const process = [
  { n: "01", title: "Understand", body: "Start with the business, not the stack. What does this product need to do, who uses it, and what counts as success?" },
  { n: "02", title: "Architect", body: "Data model, API surface and component structure decided up front — so features can be added later without rewrites." },
  { n: "03", title: "Build", body: "Backend endpoints and React interfaces built in parallel, in reusable pieces, with responsive behaviour baked in from the first commit." },
  { n: "04", title: "Integrate", body: "Payments, media uploads, authentication and messaging workflows wired in and verified against real scenarios." },
  { n: "05", title: "Test", body: "Every endpoint exercised in Postman, flows walked end to end, edge cases and error states handled before anything ships." },
  { n: "06", title: "Deploy", body: "Shipped to Vercel, Render or Hostinger with environment configuration, a live database and a client who can run it themselves." },
] as const

export const experience = [
  {
    when: "MAY — JUNE",
    place: "Delhi, India",
    role: "Freelance Client Project",
    title: "Alyona — Bags E-commerce & Wholesale",
    body: "Built and deployed a complete e-commerce platform with over ten customer-facing features and an eight-module admin system covering products, categories, orders, coupons, enquiries, content and settings. Integrated Razorpay for payments and Cloudinary for media. The store served 35+ online customers in its first month.",
  },
  {
    when: "JULY — AUG",
    place: "Delhi, India",
    role: "Freelance Client Project",
    title: "BagHaus B2B — Bags B2B Wholesale",
    body: "Developed a B2B wholesale platform with a product catalogue, categories and detail pages, a wholesale enquiry system, WhatsApp and Call Now contact workflows, and an admin interface for catalogue management.",
  },
] as const

export const certifications = [
  { title: "PRDV401: Introduction to JavaScript I", issuer: "Saylor University" },
  { title: "PRDV402: Introduction to JavaScript II", issuer: "Saylor University" },
  { title: "How to Become a Web Developer", issuer: "IBM SkillsBuild" },
  { title: "Software Product Developer", issuer: "Skill India Digital Hub" },
  { title: "Web Developer", issuer: "nasscom" },
  { title: "Bachelor of Computer Applications", issuer: "Maharishi Dayanand University — 2026", education: true },
] as const

export const moreProjects = [
  { n: "01", title: "Blog Website", body: "A content-driven blog built with the MERN stack — posts, routing and a clean reading layout.", href: "https://github.com/alexroyzz/" },
  { n: "02", title: "MidNightCafe", body: "A cafe website focused on layout, typography and a warm, atmospheric front-end experience.", href: "https://github.com/alexroyzz/" },
  { n: "03", title: "Weather App", body: "A React app consuming a third-party weather API with live search and clean state handling.", href: "https://github.com/alexroyzz/" },
] as const
