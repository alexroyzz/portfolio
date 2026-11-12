export type Shot = {
  src: string
  alt: string
  caption?: string
  browserUrl?: string
}

export type Project = {
  id: string
  index: string
  badge: string
  title: string
  subtitle: string
  description: string
  technologies: string[]
  features: string[]
  hero: Shot
  gallery: Shot[]
  layout: "showcase" | "split" | "grid" | "dashboard"
  liveUrl?: string
  githubUrl?: string
  result?: { value: string; text: string }
  detail?: {
    eyebrow: string
    heading: string
    body: string
    shots: Shot[]
  }
  flow?: string[]
}

export const projects: Project[] = [
  {
    id: "alyona",
    index: "01",
    badge: "Freelance client",
    title: "Alyona Bags",
    subtitle: "E-commerce & Wholesale Platform",
    description:
      "A complete direct-to-consumer storefront with a wholesale enquiry track. Customers browse a live catalogue, filter and search, build a cart or wishlist, check out through Razorpay and track their order \u2014 while the client runs the entire business from a custom seven-section admin dashboard.",
    technologies: [
      "React",
      "Node.js",
      "Express.js",
      "MongoDB",
      "REST APIs",
      "JWT Auth",
      "Razorpay",
      "Cloudinary",
      "Tailwind CSS",
      "Redis",
      "Brevo",
    ],
    features: [
      "48 REST API endpoints across storefront, orders, payments and admin",
      "Redis caching and lazy loading \u2014 API responses cut from ~450 ms to under 90 ms",
      "JWT auth with email verification, password reset and order tracking",
      "Automatic PDF invoice emails, saving ~10 minutes of manual work per order",
      "Razorpay with server-side pricing, signature verification and automatic refunds",
      "Rate limiting, Helmet and input validation, backed by 45 automated tests",
    ],
    layout: "showcase",
    liveUrl: "https://alyonabags.com/",
    hero: {
      src: "/assets/alyona-hero.webp",
      alt: "Alyona Bags storefront homepage with the headline bags built for the shelf, not the season",
      browserUrl: "alyonabags.com",
    },
    gallery: [
      {
        src: "/assets/alyona-categories.webp",
        alt: "Alyona Bags shop by category grid",
        caption: "Category navigation",
      },
      {
        src: "/assets/alyona-products.webp",
        alt: "Alyona Bags product listing with prices",
        caption: "Catalogue, search & filtering",
      },
      {
        src: "/assets/alyona-checkout.webp",
        alt: "Alyona Bags checkout page titled complete your order",
        caption: "Checkout flow",
      },
      {
        src: "/assets/alyona-payment.webp",
        alt: "Alyona Bags order summary with proceed to secure payment button",
        caption: "Razorpay payment integration",
      },
    ],
    detail: {
      eyebrow: "Behind the storefront",
      heading: "An admin system the client actually runs the business on.",
      body: "A seven-section admin dashboard covering products, orders, enquiries, content and more \u2014 so the owner runs the entire store alone, without developer help.",
      shots: [
        {
          src: "/assets/alyona-admin-dashboard.webp",
          alt: "Alyona admin dashboard with product, category and enquiry stat cards",
        },
        {
          src: "/assets/alyona-admin-products.webp",
          alt: "Alyona admin products table with add product button",
        },
      ],
    },
    result: {
      value: "80+ units sold",
      text: "and 23+ new customers, including bulk buyers, in the first month \u2014 with 100/100 Lighthouse Performance and SEO and a page load under 1.2 s.",
    },
  },
  {
    id: "baghaus",
    index: "02",
    badge: "Freelance client",
    title: "BagHaus",
    subtitle: "B2B Wholesale Platform",
    description:
      "A wholesale-first platform built for retailers, distributors and private-label brands. Instead of a cart, the entire journey is engineered around enquiry conversion \u2014 browse the catalogue, review MOQs, then submit a wholesale enquiry or jump straight to WhatsApp and Call Now.",
    technologies: ["React", "Node.js", "Express.js", "MongoDB", "REST APIs", "JWT Auth", "Cloudinary", "Tailwind CSS", "Framer Motion"],
    features: [
      "10 products across 6 categories, each with a detail page",
      "23 REST endpoints for catalogue, categories, enquiries, image uploads and site settings",
      "Request Quote, WhatsApp and Call Now \u2014 3 enquiry types stored so no lead is lost",
      "5-section admin panel tracking each enquiry through 4 stages, new to closed",
      "JWT authentication, Helmet, rate limiting and protected enquiry endpoints",
      "SEO-optimised with Framer Motion animations \u2014 Lighthouse 96 / 100 / 100",
    ],
    result: {
      value: "32+ bulk enquiries",
      text: "generated in the first 6 weeks \u2014 with about 45% of enquiries arriving through WhatsApp.",
    },
    layout: "split",
    liveUrl: "https://baghaus.in/",
    hero: {
      src: "/assets/baghaus-hero.webp",
      alt: "BagHaus B2B homepage with the headline bags built for the businesses that carry them further",
      browserUrl: "baghaus.in",
    },
    gallery: [
      {
        src: "/assets/baghaus-featured.webp",
        alt: "BagHaus featured products with bestseller badges and minimum order quantities",
        caption: "Featured products & MOQ",
      },
      {
        src: "/assets/baghaus-categories.webp",
        alt: "BagHaus shop by category collections grid",
        caption: "Collections",
      },
      {
        src: "/assets/baghaus-contact.webp",
        alt: "BagHaus contact page with wholesale inquiry form, WhatsApp and call now buttons",
        caption: "Enquiry & WhatsApp workflow",
      },
    ],
  },
  {
    id: "studyai",
    index: "03",
    badge: "AI product",
    title: "AI Study Assistant",
    subtitle: "AI-powered learning platform",
    description:
      "Upload a PDF and the platform extracts its text, then uses the Grok API (Llama 3.3 70B) to generate study notes, build quizzes and answer questions about the document. Built on a MERN backend with Multer and Cloudinary handling uploads and JWT securing every personalised dashboard.",
    technologies: ["MERN", "Grok API", "REST APIs", "JWT", "Cloudinary", "Multer", "Axios", "Tailwind CSS", "Vercel", "Render"],
    features: [
      "PDF upload with text extraction",
      "AI notes and quizzes \u2014 note-making cut from ~1 min to under 9 sec per PDF",
      "Chat with your PDF",
      "24 REST APIs and 5 MongoDB schemas",
      "JWT auth, bcrypt hashing and rate limiting",
      "Quiz progress tracking and a personal dashboard per user",
    ],
    result: {
      value: "~1 min \u2192 under 9 sec",
      text: "to turn a PDF into study notes. Deployed on Vercel and Render and used by 5 students (14+ notes, 10+ quizzes).",
    },
    layout: "grid",
    liveUrl: "https://ai-study-assistent-eight.vercel.app",
    githubUrl: "https://github.com/alexroyzz/Ai-study-assistent",
    flow: ["PDF Upload", "AI Processing", "Notes", "Quiz", "Chat with PDF"],
    hero: {
      src: "/assets/studyai-dashboard.webp",
      alt: "StudyAI dashboard showing 4 PDFs uploaded, 2 notes generated, 1 quiz taken and a 70% average quiz score, with quick actions and recent activity",
      browserUrl: "ai-study-assistent-eight.vercel.app",
      caption: "Personalised dashboard — live study stats per user",
    },
    gallery: [
      {
        src: "/assets/studyai-upload.webp",
        alt: "StudyAI upload PDF screen with a drag and drop dropzone, document title field and tips for best results",
        caption: "PDF upload & validation",
        browserUrl: "ai-study-assistent-eight.vercel.app",
      },
      {
        src: "/assets/studyai-pdfs.webp",
        alt: "StudyAI my PDFs library with four uploaded documents showing page counts and notes, quiz and chat counters",
        caption: "Document library",
        browserUrl: "ai-study-assistent-eight.vercel.app",
      },
      {
        src: "/assets/studyai-generate.webp",
        alt: "StudyAI generate AI notes panel with document selector and concise, detailed and summary note types",
        caption: "Note generation options",
        browserUrl: "ai-study-assistent-eight.vercel.app",
      },
      {
        src: "/assets/studyai-notes.webp",
        alt: "StudyAI generated concise notes for a Python roadmap PDF with formatted headings, tables and inline code",
        caption: "AI-generated notes",
        browserUrl: "ai-study-assistent-eight.vercel.app",
      },
      {
        src: "/assets/studyai-quiz.webp",
        alt: "StudyAI quiz player showing question one of ten with four options, a timer and question pagination",
        caption: "Timed quiz player",
        browserUrl: "ai-study-assistent-eight.vercel.app",
      },
      {
        src: "/assets/studyai-result.webp",
        alt: "StudyAI quiz result screen showing a 70% score, 7 of 10 correct, completion time and per-question explanations",
        caption: "Scoring & explanations",
        browserUrl: "ai-study-assistent-eight.vercel.app",
      },
    ],
  },
  {
    id: "taskledger",
    index: "04",
    badge: "Role-based system",
    title: "TaskLedger",
    subtitle: "Employee Management System",
    description:
      "A two-role internal tool for running team operations. Admins create and assign tasks, track attendance, manage teams and salary records; employees log in to a separate dashboard scoped to only their own work. Same codebase, two entirely different experiences \u2014 enforced by role-based access control.",
    technologies: ["MERN", "REST APIs", "JWT", "Axios", "React Router", "date-fns"],
    features: [
      "Employee records, teams, attendance, leave and salary modules",
      "Task CRUD with priority, deadlines and status tracking",
      "Two roles \u2014 Admin and Employee \u2014 with protected routes",
      "Notifications and per-employee activity reporting",
    ],
    layout: "dashboard",
    liveUrl: "https://employee-task-manager-gold.vercel.app",
    githubUrl: "https://github.com/alexroyzz/employee-task-manager",
    hero: {
      src: "/assets/ems-admin-dashboard.webp",
      alt: "TaskLedger admin dashboard with total tasks, employees, completed and overdue cards plus employee activity table",
      browserUrl: "employee-task-manager-gold.vercel.app",
      caption: "Admin \u2014 live overview of tasks and team activity",
    },
    gallery: [
      {
        src: "/assets/ems-tasks.webp",
        alt: "TaskLedger admin task table with assignee, priority, deadline, status and actions",
        caption: "Admin \u2014 task management & filters",
      },
      {
        src: "/assets/ems-new-task.webp",
        alt: "TaskLedger new task modal with title, description, assign to employee or team, priority and deadline",
        caption: "Admin \u2014 assign to employee or team",
      },
      {
        src: "/assets/ems-employee-dashboard.webp",
        alt: "TaskLedger employee dashboard with assigned task counts and today's attendance status",
        caption: "Employee \u2014 personal dashboard & attendance",
      },
      {
        src: "/assets/ems-employee-tasks.webp",
        alt: "TaskLedger employee task view showing assigned tasks with priority and due dates",
        caption: "Employee \u2014 scoped task list",
      },
    ],
  },
]
