/**
 * Single source of truth for all site content.
 * Every value below is taken from the résumé (Yasaswini_Dharmavarapu_Resume.docx).
 */

export type NavItem = { label: string; href: string; id: string };

export type Profile = {
  name: string;
  eyebrow: string;
  heroHeading: string;
  heroIntro: string;
  aboutLead: string;
  aboutParagraphs: string[];
  aboutHighlights: { title: string; text: string }[];
  languages: { name: string; level: string }[];
  resumeHref: string;
  characterImage: { src: string; alt: string; width: number; height: number };
};

export type SkillGroup = { id: string; label: string; skills: string[] };

export type Project = {
  number: string;
  title: string;
  summary: string;
  highlights: string[];
  stack: string[];
  visual: "rag" | "eval" | "copilot" | "analytics" | "hmi";
  /** Only set when a verified URL exists in the résumé. None do at present. */
  href?: string;
};

export type ExperienceItem = {
  role: string;
  org: string;
  period: string;
  type?: string;
  points: string[];
};

export type EducationItem = {
  degree: string;
  school: string;
  period: string;
  note: string;
};

export type Publication = { title: string; venue: string; date: string };

export type Contact = {
  email: string;
  location: string;
  links: { label: string; href: string; display: string }[];
};

export const navigation: NavItem[] = [
  { label: "About", href: "#about", id: "about" },
  { label: "Skills", href: "#skills", id: "skills" },
  { label: "Projects", href: "#projects", id: "projects" },
  { label: "Experience", href: "#experience", id: "experience" },
  { label: "Education", href: "#education", id: "education" },
  { label: "Contact", href: "#contact", id: "contact" },
];

export const profile: Profile = {
  name: "Yasaswini Dharmavarapu",
  eyebrow: "AI • Automation • Software Engineering",
  heroHeading: "Building intelligent solutions that make work simpler.",
  heroIntro:
    "M.Sc. Artificial Intelligence student at BTU Cottbus. I build AI workflows with LLMs, workflow automation and APIs, replacing manual tasks with working solutions.",
  aboutLead:
    "M.Sc. Artificial Intelligence student at Brandenburg University of Technology (BTU) Cottbus, with hands-on experience in AI workflows, LLM applications, process automation and data-driven solutions.",
  aboutParagraphs: [
    "I build AI workflows with LLMs (GPT-4, LangChain, LangGraph), workflow automation (Zoho Flow, webhooks, Chatbase) and APIs, replacing manual tasks with working solutions.",
    "I implement CRM and process automations for a client, build data dashboards (Power BI, SQL, Supabase), document clearly and explain technical topics to non-technical users. My approach is a practical 80/20 mindset: ship early, then improve.",
  ],
  aboutHighlights: [
    {
      title: "Master's in AI",
      text: "Currently studying Artificial Intelligence at BTU Cottbus, expected graduation 2027.",
    },
    {
      title: "LLM applications",
      text: "Built LLM-based applications with GPT-4, LangChain and LangGraph, evaluated against benchmarks.",
    },
    {
      title: "Workflow & CRM automation",
      text: "Zoho Bigin CRM stage automations and a Zoho Flow booking-to-CRM workflow for a client.",
    },
    {
      title: "Research pipelines",
      text: "A reproducible PyTorch research pipeline with GitLab CI/CD and automated data preparation.",
    },
    {
      title: "For every audience",
      text: "Guides and weekly reports written for non-technical users, alongside the technical build.",
    },
  ],
  languages: [
    { name: "English", level: "Fluent, written and spoken" },
    { name: "German", level: "A2, actively improving" },
  ],
  resumeHref: "/documents/Yasaswini_Dharmavarapu_Resume.docx",
  characterImage: {
    src: "/images/yasaswini-character.png",
    alt: "3D cartoon-style full-body portrait of Yasaswini: long dark wavy hair, white shirt with rolled sleeves, black trousers and white sneakers, hands in pockets.",
    width: 528,
    height: 941,
  },
};

export const skillGroups: SkillGroup[] = [
  {
    id: "ai",
    label: "AI & LLM Applications",
    skills: [
      "GPT-4",
      "Claude",
      "Llama",
      "LangChain",
      "LangGraph",
      "Prompt engineering",
      "Agentic workflows",
      "MCP",
      "A2A",
      "Whisper",
      "RAG",
    ],
  },
  {
    id: "automation",
    label: "Workflow Automation & CRM",
    skills: [
      "Zoho Flow",
      "Zoho Bigin CRM",
      "Zoho Books",
      "Chatbase",
      "Webhooks",
      "REST APIs",
      "Workflow automation",
      "Process analysis",
    ],
  },
  {
    id: "backend",
    label: "Programming & Backend",
    skills: ["Python", "SQL", "PostgreSQL", "FastAPI", "Node.js", "MongoDB", "Docker"],
  },
  {
    id: "data",
    label: "Data & Machine Learning",
    skills: [
      "PyTorch",
      "pandas",
      "Power BI",
      "ETL pipelines",
      "Hugging Face",
      "MLflow",
      "ONNX",
      "FAISS",
      "Pinecone",
    ],
  },
  {
    id: "cloud",
    label: "Cloud & Dev Tools",
    skills: ["AWS", "Git", "GitHub", "GitLab CI/CD", "Supabase"],
  },
];

export const projects: Project[] = [
  {
    number: "01",
    title: "RAG-Based Generative AI Workflow Orchestrator",
    summary:
      "A RAG application over 100 unstructured documents, with agentic workflows and an evaluation workflow for retrieval quality and answer accuracy.",
    highlights: [
      "Document ingestion, chunking, embeddings and vector search over 100 unstructured documents.",
      "Agentic workflows built with LangGraph.",
      "Deployed with Docker on AWS.",
      "Evaluation workflow for retrieval quality and answer accuracy.",
    ],
    stack: ["Python", "LangGraph", "Pinecone", "FastAPI", "Docker", "AWS"],
    visual: "rag",
  },
  {
    number: "02",
    title: "LLM Evaluation & Edge MLOps Framework",
    summary:
      "A benchmark for hallucination and reasoning quality of fine-tuned LLMs, tracked in MLflow.",
    highlights: [
      "Benchmark measuring hallucination and reasoning quality of fine-tuned LLMs.",
      "Experiments tracked in MLflow.",
      "The basis for judging whether generated answers can be trusted.",
    ],
    stack: ["PyTorch", "Hugging Face", "ONNX", "MLflow", "Jetson"],
    visual: "eval",
  },
  {
    number: "03",
    title: "AI Career Copilot: Multi-Agent Job Discovery System",
    summary:
      "A solo-built, deployed multi-agent system that screens job listings and shows scores and priority in a FastAPI dashboard.",
    highlights: [
      "Multi-agent job screening with scores and priority in a FastAPI dashboard.",
      "RAG matcher using FAISS and Llama 3.3 70B.",
      "Traced a scoring collapse to retrieval and prompt issues, and fixed it.",
      "Built solo and deployed with Docker on Render.",
    ],
    stack: ["Python", "LangGraph", "FAISS", "FastAPI", "Docker", "Render"],
    visual: "copilot",
  },
  {
    number: "04",
    title: "Job Market Analytics Pipeline",
    summary:
      "A data pipeline with ETL into a PostgreSQL star schema and Power BI dashboards for job-market analytics.",
    highlights: [
      "ETL workflow written in Python.",
      "PostgreSQL star schema for analytics.",
      "Power BI dashboards for job-market analytics.",
    ],
    stack: ["Python", "PostgreSQL", "ETL", "Power BI"],
    visual: "analytics",
  },
  {
    number: "05",
    title: "Multimodal Agentic AI for Automotive HMI",
    summary:
      "A multi-agent assistant with MCP/A2A tool calling and safety guardrails, tested on 100+ multi-turn interactions.",
    highlights: [
      "Multi-agent assistant built with LangGraph.",
      "MCP/A2A tool calling and Whisper speech input.",
      "Safety guardrails around the assistant's actions.",
      "Tested on 100+ multi-turn interactions.",
    ],
    stack: ["Python", "LangGraph", "MCP", "A2A", "Whisper", "FastAPI"],
    visual: "hmi",
  },
];

export const experience: ExperienceItem[] = [
  {
    role: "Academic Research Assistant",
    org: "BTU Cottbus",
    period: "Feb 2026 – Present",
    points: [
      "Built a reproducible PyTorch research pipeline for ongoing publications.",
      "Maintain a GitLab CI/CD pipeline.",
      "Automated data preparation, making it 50%+ faster.",
    ],
  },
  {
    role: "CRM Systems & Full-Stack Automation Engineer",
    org: "Kilimis Mentoring",
    period: "Mar 2026 – Present",
    type: "Freelance",
    points: [
      "Implemented a Zoho Bigin CRM with stage automations.",
      "Built a Zoho Flow booking-to-CRM workflow, including webhook debugging.",
      "Built a Node.js web app.",
      "Wrote a 9-page guide and weekly reports for a non-technical client.",
    ],
  },
  {
    role: "Associate Software Engineer",
    org: "Availity",
    period: "Jun 2024 – Mar 2025",
    points: [
      "Developed an LLM-based assistant (GPT-4, LangChain) for a healthcare platform and evaluated it against benchmarks before every release.",
      "Built real-time data modules (X12 270/271, 276/277) ensuring accurate, compliant data exchange between providers and insurers.",
    ],
  },
  {
    role: "AI & ML Intern",
    org: "Availity",
    period: "Jan 2024 – Jun 2024",
    points: [
      "Built an LLM note-generation pipeline (Whisper, LangChain) and iterated on prompts until reliable, saving ~25 minutes per session.",
    ],
  },
  {
    role: "Machine Learning Intern",
    org: "Fractal Analytics",
    period: "Jun 2023 – Aug 2023",
    points: [
      "Fine-tuned BERT (95%+ accuracy) on 500+ text records.",
      "Automated data cleaning, cutting manual effort by 65%.",
    ],
  },
];

export const education: EducationItem[] = [
  {
    degree: "M.Sc. Artificial Intelligence",
    school: "Brandenburg University of Technology (BTU), Cottbus",
    period: "Apr 2025 – Present",
    note: "Expected graduation: 2027",
  },
  {
    degree: "B.Tech Computer Science and Engineering",
    school: "Amrita School of Computing, Coimbatore",
    period: "Aug 2020 – Jun 2024",
    note: "CGPA: 7.2/10",
  },
];

export const publications: Publication[] = [
  {
    title:
      "Bilingual Speech Translation Between Tamil and Telugu with Elimination of Dependency on Any Intermediate Languages",
    venue: "AIST-2024 (Springer)",
    date: "November 2024",
  },
];

export const contact: Contact = {
  email: "yasaswani.dharmavarapu@gmail.com",
  location: "Cottbus, Germany",
  links: [
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/yasaswiniD",
      display: "linkedin.com/in/yasaswiniD",
    },
    {
      label: "GitHub",
      href: "https://github.com/Yassu-24",
      display: "github.com/Yassu-24",
    },
  ],
};
