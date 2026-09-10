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
      "A complete direct-to-consumer storefront with a wholesale enquiry track. Customers browse a live catalogue, filter and search, build a cart or wishlist, check out through Razorpay and track their order \u2014 while the client runs the entire business from a custom eight-module admin panel.",
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
    ],
    features: [
      "Product & category CRUD with image uploads via Cloudinary",
      "Order management and coupon engine",
      "Wholesale enquiry inbox with WhatsApp follow-up workflow",
      "JWT-authenticated admin access",
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
      body: "Eight dedicated modules \u2014 dashboard, products, categories, orders, coupons, enquiries, an editable About Us page and settings \u2014 so the owner can manage inventory, pricing and customer enquiries without touching code.",
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
      value: "35+ customers",
      text: "served online in the first month after launch \u2014 the platform started generating orders immediately.",
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
    technologies: ["React", "Node.js", "Express.js", "MongoDB", "REST APIs", "Cloudinary", "Tailwind CSS"],
    features: [
      "Product catalogue with categories and detail pages",
      "Wholesale enquiry form wired to the backend",
      "WhatsApp and Call Now contact workflows",
      "Admin catalogue management",
    ],
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
      "Upload a PDF and the platform extracts its text, then uses the Grok API to generate study notes, build quizzes and answer questions about the document. Built on a MERN backend with Multer and Cloudinary handling uploads and JWT securing every personalised dashboard.",
    technologies: ["MERN", "Grok API", "REST APIs", "JWT", "Cloudinary", "Multer", "Axios", "Tailwind CSS"],
    features: [
      "PDF upload with text extraction",
      "AI-generated notes and quizzes",
      "Chat with your PDF",
      "Authenticated, personalised dashboard",
    ],
    layout: "grid",
    liveUrl: "https://alexroyzz-lsmiusjlr-alexroyzzs-projects.vercel.app/",
    githubUrl: "https://github.com/alexroyzz/Ai-study-assistent",
    flow: ["PDF Upload", "AI Processing", "Notes", "Quiz", "Chat with PDF"],
    hero: {
      src: "/assets/studyai-dashboard.webp",
      alt: "StudyAI dashboard showing 4 PDFs uploaded, 2 notes generated, 1 quiz taken and a 70% average quiz score, with quick actions and recent activity",
      browserUrl: "alexroyzz-lsmiusjlr-alexroyzzs-projects.vercel.app",
      caption: "Personalised dashboard — live study stats per user",
    },
    gallery: [
      {
        src: "/assets/studyai-upload.webp",
        alt: "StudyAI upload PDF screen with a drag and drop dropzone, document title field and tips for best results",
        caption: "PDF upload & validation",
        browserUrl: "alexroyzz-lsmiusjlr-alexroyzzs-projects.vercel.app",
      },
      {
        src: "/assets/studyai-pdfs.webp",
        alt: "StudyAI my PDFs library with four uploaded documents showing page counts and notes, quiz and chat counters",
        caption: "Document library",
        browserUrl: "alexroyzz-lsmiusjlr-alexroyzzs-projects.vercel.app",
      },
      {
        src: "/assets/studyai-generate.webp",
        alt: "StudyAI generate AI notes panel with document selector and concise, detailed and summary note types",
        caption: "Note generation options",
        browserUrl: "alexroyzz-lsmiusjlr-alexroyzzs-projects.vercel.app",
      },
      {
        src: "/assets/studyai-notes.webp",
        alt: "StudyAI generated concise notes for a Python roadmap PDF with formatted headings, tables and inline code",
        caption: "AI-generated notes",
        browserUrl: "alexroyzz-lsmiusjlr-alexroyzzs-projects.vercel.app",
      },
      {
        src: "/assets/studyai-quiz.webp",
        alt: "StudyAI quiz player showing question one of ten with four options, a timer and question pagination",
        caption: "Timed quiz player",
        browserUrl: "alexroyzz-lsmiusjlr-alexroyzzs-projects.vercel.app",
      },
      {
        src: "/assets/studyai-result.webp",
        alt: "StudyAI quiz result screen showing a 70% score, 7 of 10 correct, completion time and per-question explanations",
        caption: "Scoring & explanations",
        browserUrl: "alexroyzz-lsmiusjlr-alexroyzzs-projects.vercel.app",
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
