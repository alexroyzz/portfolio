export const site = {
  name: "Deepak",
  title: "Full Stack Developer",
  location: "Delhi, India",
  education: "BCA, MDU — 2026",
  email: "Deepakkmr.dev@gmail.com",
  github: "https://github.com/alexroyzz",
  githubHandle: "@alexroyzz",
  linkedin: "https://www.linkedin.com/in/deepaklinkdin",
  linkedinHandle: "in/deepaklinkdin",
  headline: {
    before: "I build real-world web products that turn ideas into ",
    accent: "business.",
  },
  intro:
    "I'm Deepak, a full-stack developer specialising in React, Next.js, Node.js, Express and MongoDB. I've launched live e-commerce and B2B wholesale platforms for real clients \u2014 with fast APIs, secure payment and authentication workflows, and admin tools the owner can run without a developer.",
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
  "React", "Next.js", "TypeScript", "JavaScript", "Node.js", "Express.js", "MongoDB", "MySQL", "PostgreSQL", "Redis",
  "REST APIs", "JWT Auth", "Tailwind CSS", "Framer Motion", "Razorpay", "Cloudinary", "Docker", "CI/CD", "Git & GitHub", "Postman",
] as const

export const stats = [
  { kicker: "Alyona Bags", value: 80, suffix: "+", label: "Units sold in the first month, with 23+ new customers including bulk buyers" },
  { kicker: "Alyona Bags", value: 80, suffix: "%", label: "Faster API responses \u2014 ~450 ms down to under 90 ms with Redis caching" },
  { kicker: "BagHaus B2B", value: 32, suffix: "+", label: "Bulk wholesale enquiries generated in the first 6 weeks" },
  { kicker: "Alyona Bags", value: 100, label: "Lighthouse Performance and SEO score on desktop, with page load under 1.2 s" },
] as const

export const services = [
  {
    icon: "monitor",
    title: "Frontend Development",
    body: "Component-driven React and Next.js interfaces with client-side routing, API integration and responsive layouts \u2014 tuned for Lighthouse performance and smooth Framer Motion interactions.",
    chips: ["React", "Next.js", "TypeScript", "JavaScript ES6+", "Tailwind CSS", "Bootstrap", "Framer Motion", "HTML5"],
  },
  {
    icon: "code",
    title: "Backend Development",
    body: "REST APIs on Node.js and Express with JWT authentication, rate limiting, Helmet hardening and Redis caching \u2014 built to be fast, secure and predictable.",
    chips: ["Node.js", "Express.js", "REST APIs", "JWT", "Redis", "Helmet", "Rate limiting"],
  },
  {
    icon: "database",
    title: "Database Design",
    body: "Schema design, validation and queries shaped around how the product is actually used \u2014 on MongoDB, MySQL or PostgreSQL, with Redis caching on the hot paths.",
    chips: ["MongoDB", "MySQL", "PostgreSQL", "Redis"],
  },
  {
    icon: "rocket",
    title: "Deployment & Integrations",
    body: "Getting it live and keeping it live \u2014 plus the third-party pieces real businesses need: payments, transactional email, media hosting and customer messaging.",
    chips: ["Docker", "CI/CD", "Vercel", "Render", "Cloudinary", "Razorpay", "Brevo", "WhatsApp workflows", "Postman", "Git"],
  },
] as const

export const process = [
  { n: "01", title: "Understand", body: "Start with the business, not the stack. What does this product need to do, who uses it, and what counts as success?" },
  { n: "02", title: "Architect", body: "Data model, API surface and component structure decided up front — so features can be added later without rewrites." },
  { n: "03", title: "Build", body: "Backend endpoints and React interfaces built in parallel, in reusable pieces, with responsive behaviour baked in from the first commit." },
  { n: "04", title: "Integrate", body: "Payments with server-side price checks, email, media uploads, authentication and messaging workflows wired in and verified against real scenarios." },
  { n: "05", title: "Test", body: "Endpoints exercised in Postman and covered by automated tests for orders, payments and security \u2014 flows walked end to end before anything ships." },
  { n: "06", title: "Deploy", body: "Shipped to Vercel or Render with environment configuration, a live database and a client who can run it themselves." },
] as const

export const experience = [
  {
    when: "MAR \u2014 JUN 2026",
    place: "Delhi, India",
    role: "Full Stack Developer \u00b7 Freelance",
    title: "Alyona Bags \u2014 E-commerce & Wholesale",
    body: "Built a full-stack e-commerce platform with 48 REST API endpoints, bringing in 23+ new customers and 80+ units sold in the first month. Added Redis caching and lazy loading to cut API response time from ~450 ms to under 90 ms, and implemented JWT auth, order tracking and automatic PDF invoice emails. Integrated Razorpay with server-side pricing, signature verification and automatic refunds, delivered a 7-section admin dashboard, and backed it with 45 automated tests \u2014 scoring 100/100 on Lighthouse Performance and SEO.",
  },
  {
    when: "JUN \u2014 AUG 2026",
    place: "Delhi, India",
    role: "Full Stack Developer \u00b7 Freelance",
    title: "BagHaus B2B \u2014 Bags Wholesale",
    body: "Built a B2B wholesale lead-generation site for a tote bag manufacturer \u2014 10 products across 6 categories and 23 REST endpoints \u2014 generating 32+ bulk enquiries in the first 6 weeks. Designed a lead-capture flow with Request Quote, WhatsApp and Call Now (about 45% of enquiries arrive via WhatsApp), secured the backend with JWT, Helmet and rate limiting, and created a 5-section admin panel that tracks every enquiry through 4 stages.",
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
  { n: "01", title: "LabelCrop", body: "A free Next.js tool that turns A4 Flipkart/Meesho shipping-label PDFs into 4\u00d76 thermal-printer pages, saving sellers ~25 minutes per 100 labels. Fully client-side \u2014 no backend, no uploads \u2014 with batch processing for up to 20 PDFs and a copyable SKU picklist.", href: "https://croplabelfree.online", cta: "Visit live site" },
  { n: "02", title: "Blog Website", body: "A content-driven blog built with the MERN stack \u2014 posts, routing and a clean reading layout.", href: "https://github.com/alexroyzz", cta: "View on GitHub" },
  { n: "03", title: "MidNightCafe", body: "A cafe website focused on layout, typography and a warm, atmospheric front-end experience.", href: "https://github.com/alexroyzz", cta: "View on GitHub" },
  { n: "04", title: "Weather App", body: "A React app consuming a third-party weather API with live search and clean state handling.", href: "https://github.com/alexroyzz", cta: "View on GitHub" },
] as const
