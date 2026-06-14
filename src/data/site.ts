export const site = {
  name: "Riya Joshi",
  role: "Software Engineer / Backend + Data Platforms",
  location: "San Francisco",


  thesis: "I build backend systems for data-intensive applications.",

 
  sub:
    "Software engineer at Stanford building production services across AWS, APIs, data platforms,. " +
    "My work spans backend development, cloud infrastructure, RAG systems, automation, and the operational tooling that keeps systems reliable in production.",


  links: {
    github: "https://github.com/riya2820",
    linkedin: "https://www.linkedin.com/in/riyasjoshi/",
    resume: "/resume.pdf",
    email: "riya2820@gmail.com",
  },


  // status: "operational" | "stable" | "shipped" | "archived"
  projects: [
    {
      id: "svc/navigator-api",
      title: "Student Data Lake / Navigator API",
      status: "operational",
      metric: "api · lambda · dynamodb",
      blurb:
        "Backend services powering student-facing course and class data through API-ready models. " +
        "Built and maintained Lambda-based services backed by DynamoDB and Redshift, with a focus on correctness, reliability, and downstream consumer needs.",
      stack: ["Python", "AWS Lambda", "DynamoDB", "Redshift", "REST APIs"],
      demo: "",
    },
    {
      id: "svc/rag-slack-assistant",
      title: "AI Slack Assistant for FAQ Retrieval",
      status: "shipped",
      metric: "90% accuracy · rag",
      blurb:
        "An AI-powered Slack bot that uses Retrieval-Augmented Generation to answer FAQs from internal documents. " +
        "Integrated LLMs, LlamaIndex, Redis, Google Drive ingestion, and automated refresh workflows to improve retrieval quality and response speed.",
      stack: ["Python", "LLMs", "LlamaIndex", "Redis", "Airflow", "Slack API"],
      demo: "",
    },

    {
      id: "svc/go-infra-automation",
      title: "Backend Microservices for Infra Automation",
      status: "stable",
      metric: "go · observability",
      blurb:
        "Lightweight Go services for health checks, log parsing, and API usage tracking across distributed systems. " +
        "Designed for operational visibility, service monitoring, and repeatable infrastructure workflows.",
      stack: ["Go", "REST APIs", "Redis", "S3", "Docker"],
      demo: "",
    },
    {
      id: "svc/content-processing-pipeline",
      title: "Content Processing Pipeline",
      status: "shipped",
      metric: "30% faster indexing",
      blurb:
        "Backend system for processing and indexing audiobook content, with optimized database access patterns and automated processing workflows. " +
        "Improved content indexing speed and reduced deployment friction through containerized services and CI/CD automation.",
      stack: ["Python", "PostgreSQL", "DynamoDB", "Docker", "CI/CD"],
      demo: "",
    },
    {
      id: "svc/search-engine",
      title: "Custom Search Engine",
      status: "archived",
      metric: "35k+ queries · ir",
      blurb:
        "Built a custom information retrieval system using cosine similarity, term-document matrices, and ranking logic. " +
        "Processed 35,000+ queries with test coverage around indexing, retrieval, and scoring behavior.",
      stack: ["Python", "scikit-learn", "Pytest", "Information Retrieval"],
      demo: "",
    },
  ],

  // tech stack
  stack: [
    {
      group: "Languages",
      items: ["Python", "Go", "Java", "C++", "SQL"],
    },
    {
      group: "Backend & Infrastructure",
      items: [
        "REST APIs",
        "Docker",
        "Kubernetes",
        "Terraform",
        "GitLab CI/CD",
        "Apache Airflow",
      ],
    },
    {
      group: "Cloud & Data",
      items: [
        "AWS",
        "Lambda",
        "S3",
        "EC2",
        "Redshift",
        "DynamoDB",
        "PostgreSQL",
        "MongoDB",
      ],
    },
    {
      group: "AI & ML",
      items: [
        "LLMs",
        "RAG",
        "LlamaIndex",
        "LangChain",
        "Redis",
        "PyTorch",
        "TensorFlow",
      ],
    },
  ],

  // about me /current stuff
  about: [
    "I'm a software engineer with experience building backend services,and cloud infrastructure. At Stanford, I work across AWS, APIs, data platforms, automation, and production systems, owning projects from implementation through deployment and operational support.",

    "My work sits at the intersection of backend engineering and data-intensive systems: Lambda services, DynamoDB-backed APIs, Redshift models, Airflow orchestration, CI/CD workflows, and RAG applications built with LLMs, Redis, and LlamaIndex.",

    "I'm currently interested in backend engineering, AI infrastructure, platform engineering, and forward-deployed engineering roles where I can work close to users while building reliable production systems.",
  ],
} as const;

export type Site = typeof site;
