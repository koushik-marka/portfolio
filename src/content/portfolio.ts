export type Project = {
  id: string;
  name: string;
  year: string;
  category: string;
  description: string;
  focus: string;
  tech: string[];
  link: string;
  accent: string;
};

export const portfolio = {
  name: "Koushik Marka",
  firstName: "Koushik",
  lastName: "Marka",
  role: "Distributed AI Builder",
  roleLabel: "AI Systems // Full-Stack // CSE",
  location: "Hyderabad, India",
  coordinates: "Hyderabad // 17.39 N",
  email: "koushik.luffy007@gmail.com",
  linkedin: "https://linkedin.com/in/koushik-marka",
  github: "https://github.com/koushik-marka",
  resumePath: "/Koushik_Marka_Resume.pdf",
  resumeFileName: "Koushik_Marka_Resume.pdf",
  summary:
    "Computer science student building distributed AI systems, workflow orchestration tools, multimodal NLP products, and browser-native machine learning experiences.",
  tagline:
    "I like problems where systems must stay explainable, composable, and fast under real-world constraints.",
  heroFocus:
    "Building the depth, speed, and ambition needed to create large-scale AI systems that solve real problems.",
  availability:
    "Open to internships, collaborations, and engineering opportunities across AI products, backend systems, and developer tooling.",
  heroHighlights: [
    "CGPA 8.9/10",
    "Semester Topper",
    "Distributed AI",
    "FastAPI + ReactFlow",
  ],
  education: {
    school: "SR University",
    degree: "Bachelor of Technology in Computer Science and Engineering",
    period: "Jun 2024 - May 2028",
    detail: "CGPA 8.9/10, Semester Topper, ranked 1st in the CSE department.",
  },
  currentFocus: [
    "Pushing myself to master AI systems, backend architecture, and product thinking by building projects that feel bigger than my current level.",
    "Turning every project into a chance to grow toward becoming the kind of engineer who can build ambitious, real-world products from the ground up.",
    "Learning fast, experimenting boldly, and building the technical depth needed to create impactful systems at a much larger scale.",
  ],
  focusAreas: [
    {
      title: "Distributed AI Systems",
      label: "// orchestration",
      description:
        "Building graph-driven AI workflow tools with validation, structured execution, and clear abstractions.",
    },
    {
      title: "Multimodal Intelligence",
      label: "// summarization",
      description:
        "Working across text, audio, video, and documents with modular NLP pipelines and transformer-based summarization.",
    },
    {
      title: "Browser ML Experiences",
      label: "// local inference",
      description:
        "Prototyping privacy-aware AI interactions that run directly in the browser without depending on a server.",
    },
  ],
  skillGroups: [
    {
      title: "Languages & Core",
      description:
        "Using strong programming fundamentals and data structures to keep systems maintainable as they scale.",
      skills: [
        "Python",
        "JavaScript",
        "Java",
        "C++",
        "Go",
        "OOP",
        "Concurrency",
      ],
    },
    {
      title: "AI & ML",
      description:
        "Working with transformers, retrieval workflows, NLP pipelines, and computer vision in practical product settings.",
      skills: [
        "LLMs",
        "BART",
        "RAG",
        "Vector Search",
        "OpenCV",
        "TensorFlow.js",
        "NLP",
      ],
    },
    {
      title: "Backend & Product",
      description:
        "Shipping full-stack applications with clean APIs, strong validation, and reusable UI abstractions.",
      skills: [
        "FastAPI",
        "REST APIs",
        "Pydantic",
        "React",
        "ReactFlow",
        "Zustand",
        "Streamlit",
      ],
    },
    {
      title: "Cloud & Tools",
      description:
        "Working comfortably with version control, developer tooling, and foundational cloud platforms.",
      skills: [
        "Git",
        "GitHub",
        "Azure AI-900",
        "AWS Cloud Foundations",
        "Oracle Vector DB",
        "Chrome Extensions API",
      ],
    },
  ],
  techTabs: [
    {
      id: "systems",
      label: "SYSTEMS",
      sub: "Algorithms // Backend",
      description:
        "Building robust backend flows with graph validation, API design, composable node abstractions, and predictable data movement.",
      tools: [
        { name: "Python", img: "/tech-icons/python.svg" },
        { name: "FastAPI", img: "/tech-icons/fastapi.svg" },
        { name: "JavaScript", img: "/tech-icons/javascript.svg" },
        { name: "Node.js", img: "/tech-icons/nodejs.svg" },
        { name: "React", img: "/tech-icons/react.svg" },
        { name: "Git", img: "/tech-icons/git.svg" },
      ],
    },
    {
      id: "ai-ml",
      label: "AI & ML",
      sub: "Transformers // NLP",
      description:
        "Combining transformer models, retrieval workflows, text pipelines, and multimodal processing into practical user-facing tools.",
      tools: [
        { name: "PyTorch", img: "/tech-icons/pytorch.svg" },
        { name: "Pandas", img: "/tech-icons/pandas.svg" },
        { name: "NumPy", img: "/tech-icons/numpy.svg" },
        { name: "Scikit-learn", img: "/tech-icons/scikit-learn.svg" },
        { name: "Streamlit", img: "/tech-icons/streamlit.svg" },
        { name: "React Native", img: "/tech-icons/react-native.svg" },
      ],
    },
    {
      id: "cloud",
      label: "CLOUD & TOOLS",
      sub: "Credentials // Delivery",
      description:
        "Using modern tooling and cloud foundations to move from prototypes to polished demos and deployable systems.",
      tools: [
        { name: "AWS", img: "/tech-icons/aws.svg" },
        { name: "C++", img: "/tech-icons/cpp.svg" },
        { name: "C", img: "/tech-icons/c.svg" },
        { name: "TypeScript", img: "/tech-icons/typescript.svg" },
        { name: "Next.js", img: "/tech-icons/nextjs.svg" },
        { name: "MongoDB", img: "/tech-icons/mongodb.svg" },
      ],
    },
  ],
  projects: [
    {
      id: "pipeline-orchestrator",
      name: "Distributed AI Pipeline Orchestrator",
      year: "2025",
      category: "Workflow Orchestration",
      description:
        "Visual full-stack pipeline system with composable node types for building and validating AI workflows at scale.",
      focus:
        "Graph validation, DAG parsing, dynamic variable wiring, and clean node abstraction.",
      tech: ["React", "ReactFlow", "Python", "FastAPI", "Graph Algorithms"],
      link: "https://github.com/koushik-marka",
      accent: "from-orange-500/30 via-red-500/20 to-transparent",
    },
    {
      id: "multimodal-summarization",
      name: "Multi-Modal AI Summarization Platform",
      year: "2025",
      category: "NLP Product",
      description:
        "Modular summarization system processing text, PDF, MP3, MP4, and WAV inputs through extractive and abstractive NLP stages.",
      focus:
        "Multiformat ingestion, audio cleanup, transcription support, and transformer-based summarization.",
      tech: ["Python", "BART", "NLTK", "pydub", "Streamlit"],
      link: "https://github.com/koushik-marka",
      accent: "from-cyan-500/25 via-blue-500/15 to-transparent",
    },
    {
      id: "traffic-signal",
      name: "AI Traffic Signal Management System",
      year: "2025",
      category: "Computer Vision",
      description:
        "Real-time traffic intelligence system analyzing four video lanes and adjusting signal timing from live vehicle detection.",
      focus:
        "Concurrent video processing, modular CV architecture, and fast decision loops under hackathon constraints.",
      tech: ["Python", "OpenCV", "NumPy", "Streamlit"],
      link: "https://github.com/koushik-marka",
      accent: "from-emerald-500/25 via-lime-500/15 to-transparent",
    },
    {
      id: "memory-helper",
      name: "Memory Helper",
      year: "2025",
      category: "Browser ML",
      description:
        "Privacy-first browser inference tool using local face tracking and speech integration without a server dependency.",
      focus:
        "TensorFlow.js inference, offline-capable UX, and secure local storage with caregiver management.",
      tech: ["JavaScript", "TensorFlow.js", "face-api.js", "Chrome APIs"],
      link: "https://github.com/koushik-marka",
      accent: "from-fuchsia-500/25 via-pink-500/15 to-transparent",
    },
  ] satisfies Project[],
  achievements: [
    "Selected among the Top 50 teams at SR University in Smart India Hackathon 2025 for the AI Traffic Signal Management System.",
    "Ranked 1st in the CSE department as Semester Topper with a CGPA of 8.9/10.",
    "Selected attendee for Microsoft VS Code Dev Days 2025 in Hyderabad.",
    "Active member of the Computer Society of India chapter, supporting technical events and peer learning.",
  ],
  certifications: [
    "Microsoft Azure AI Fundamentals (AI-900)",
    "Oracle AI Vector Search Certified Professional",
    "AWS Academy Graduate - Cloud Foundations",
  ],
  principles: [
    {
      title: "Composable Architecture",
      standard:
        "I prefer systems made of small, understandable modules over large feature blocks that are hard to extend.",
      outcome:
        "New capabilities can be added faster without rewriting the whole application.",
    },
    {
      title: "Explainable Workflows",
      standard:
        "I build flows that make data movement, validation, and execution order visible rather than implicit.",
      outcome:
        "Debugging stays practical even as graphs, pipelines, and inputs grow more complex.",
    },
    {
      title: "Real Product Thinking",
      standard:
        "I care about usable interfaces, resilient APIs, and deployment-minded decisions instead of isolated demos.",
      outcome:
        "Projects feel closer to real software products and less like one-off prototypes.",
    },
  ],
} as const;
