// ============================================================
// Portfolio Data — Karan Dongare
// Update this file to change all personal information,
// project details, experience, and social links.
// ============================================================

export const personalInfo = {
  name: "Karan Dongare",
  title: "Generative AI Engineer | Python Developer",
  tagline:
    "Building AI-powered workflows, intelligent applications and scalable backend systems.",
  about: `I'm a Computer Engineering graduate (2026) with a strong interest in Artificial Intelligence, Generative AI, Machine Learning and Python Development. I enjoy solving real-world problems by building intelligent applications, scalable APIs and practical software solutions. I continuously explore emerging technologies and improve my development skills through hands-on projects.`,
  location: "Pune, India",
  degree: "B.E. Computer Engineering",
  graduation: "2026",
  hackathon: "Smart India Hackathon 2024 Finalist",
  email: "kdongare1@gmail.com",
  phone: "+91-8767392534",
  resumeUrl: "/resume-ai-engineer.pdf", // Default resume
  resumes: [
    { label: "AI Engineer", url: "/resume-ai-engineer.pdf", accent: "purple" },
    { label: "Python Developer", url: "/resume-python-developer.pdf", accent: "blue" },
    { label: "Data Analyst", url: "/resume-data-analyst.pdf", accent: "cyan" },
  ],
  profileImage: "/profile.jpeg", // Place your profile photo in the public/ folder as profile.jpg
};

export const socialLinks = {
  github: "https://github.com/Karan5959",
  linkedin: "https://www.linkedin.com/in/karan-dongare-03b1a7288/",
};

export const heroHighlights = [
  { label: "Generative AI", icon: "Sparkles" },
  { label: "Python", icon: "Code2" },
  { label: "Machine Learning", icon: "Brain" },
  { label: "Full Stack", icon: "Layers" },
];

export const skills = [
  {
    category: "Programming Languages",
    icon: "Code2",
    items: ["Python", "Java", "C++", "SQL", "JavaScript"],
  },
  {
    category: "Generative AI",
    icon: "Sparkles",
    items: [
      "LangChain",
      "LangGraph",
      "LlamaIndex",
      "RAG",
      "Prompt Engineering",
      "Ollama",
      "OpenRouter",
    ],
  },
  {
    category: "Machine Learning",
    icon: "Brain",
    items: [
      "Scikit-learn",
      "Pandas",
      "NumPy",
      "NLP",
      "Hugging Face",
      "Sentence Transformers",
      "Feature Engineering",
    ],
  },
  {
    category: "Web Development",
    icon: "Globe",
    items: [
      "React.js",
      "Node.js",
      "Express.js",
      "Django",
      "Flask",
      "FastAPI",
      "REST APIs",
    ],
  },
  {
    category: "Databases & Tools",
    icon: "Database",
    items: [
      "MySQL",
      "PostgreSQL",
      "Redis",
      "Celery",
      "Git",
      "GitHub",
      "Docker",
      "Power BI",
      "Excel",
      "VS Code",
      "Jupyter Notebook",
    ],
  },
  {
    category: "Additional Familiarity",
    icon: "Puzzle",
    items: [
      "TensorFlow",
      "AWS Fundamentals",
      "Azure",
      "Kubernetes",
      "JWT",
      "n8n",
    ],
  },
];

export const projects = [
  {
    title: "Token Guard AI",
    subtitle: "Secure Multi-Provider LLM Gateway",
    description:
      "A unified gateway for multiple LLM providers with intelligent provider routing, health checks, retries, fallbacks, caching, streaming, rate limiting and usage analytics. Includes security features such as JWT/RBAC, encrypted credentials, prompt-injection detection, PII redaction and output-secret scanning.",
    technologies: [
      "Python",
      "FastAPI",
      "Ollama",
      "OpenRouter",
      "PostgreSQL",
      "Redis",
      "Celery",
      "Docker",
    ],
    icon: "Shield",
    github: "#", // Replace with actual URL
    liveDemo: null,
    status: null,
  },
  {
    title: "Review Guard",
    subtitle: "AI-Based Fake Product Review Detection System",
    description:
      "An AI-powered system that identifies suspicious and fake product reviews using Natural Language Processing, semantic analysis and machine learning. Includes real-time classification, bulk CSV analysis, review history and secure API authentication.",
    technologies: [
      "Python",
      "NLP",
      "Scikit-learn",
      "TF-IDF",
      "Hugging Face",
      "Sentence Transformers",
      "FastAPI",
      "PostgreSQL",
    ],
    icon: "Search",
    github: "#", // Replace with actual URL
    liveDemo: null,
    status: null,
  },
  {
    title: "AI Invoice & Procurement Platform",
    subtitle: "Exception Resolution Platform",
    description:
      "An intelligent invoice processing and procurement platform that extracts invoice information, reconciles it with purchase orders and contracts, and identifies duplicate invoices and pricing, tax, quantity or missing-PO exceptions. Uses a stateful RAG workflow to generate cited recommendations with human approval and auditable actions.",
    technologies: ["LangGraph", "LlamaIndex", "LangChain", "RAG", "n8n"],
    icon: "FileText",
    github: "#", // Replace with actual URL
    liveDemo: null,
    status: "In Development",
  },
];

export const experience = [
  {
    role: "AI/ML Intern",
    company: "Bluestock Fintech",
    period: "December 2025 – May 2026",
    type: "Hybrid",
    points: [
      "Developed and evaluated machine learning models using Python and Scikit-learn.",
      "Performed data preprocessing, feature engineering and normalization.",
      "Collaborated on practical AI/ML solutions.",
    ],
  },
  {
    role: "Java Development Intern",
    company: "Slash Mark IT Solutions",
    period: "February 2025 – March 2025",
    type: null,
    points: [
      "Developed Java web applications using OOP, JSP, Servlets, JDBC and MySQL.",
      "Implemented CRUD operations and database connectivity.",
      "Optimized SQL queries, improving reported database response time by 20%.",
    ],
  },
];

export const education = {
  degree: "B.E. Computer Engineering",
  institution: "Ajeenkya D Y Patil School of Engineering, Pune",
  university: "Savitribai Phule Pune University (SPPU)",
  period: "2022 – 2026",
  cgpa: "7.0/10",
};

export const achievements = [
  {
    title: "Smart India Hackathon (SIH) 2024",
    subtitle: "Finalist",
    icon: "Trophy",
  },
  {
    title: "Oracle Certified Foundations Associate",
    subtitle: "Agentic AI (2026)",
    icon: "Award",
  },
  {
    title: "Research Paper Presenter",
    subtitle: '"Smart Bridge", ICICCT',
    icon: "BookOpen",
  },
  {
    title: "Deloitte Data Analytics",
    subtitle: "Job Simulation (2026)",
    icon: "BarChart3",
  },
  {
    title: "DSA Using Python",
    subtitle: "2024",
    icon: "Code2",
  },
  {
    title: "Sports Head",
    subtitle: "Association of Computer Engineering (ACE)",
    icon: "Medal",
  },
];

export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];
