export const resumeData = {
  basics: {
    name: "Sidhartha Pulluri",
    location: "Northlake, TX, USA",
    phone: "214-475-4851",
    email: "Sidhartha1729@gmail.com",
    linkedin: "https://www.linkedin.com/in/sidhartha-pulluri-7a9150238",
    github: "https://github.com/SidharthaPulluri",
    portfolio: "https://sidhartha-portfolio-three.vercel.app",
  },
  summary:
    "Computer Science graduate student with hands-on experience building generative AI, machine learning, computer vision, and automation systems from development through deployment. Strong foundation in Python, SQL, Flask, TensorFlow, PyTorch, and production-minded application design across repo-backed projects, research, and data workflows.",
  education: [
    {
      school: "The University of Texas at Dallas",
      location: "Richardson, TX",
      degree: "Master of Science in Computer Science",
      details: ["Expected Dec 2027", "GPA: 3.77/4.00"],
      coursework: [
        "Artificial Intelligence",
        "Natural Language Processing",
        "Database Design",
        "Statistical Methods",
        "Data Analysis",
      ],
    },
    {
      school: "Chaitanya Bharathi Institute of Technology",
      location: "Hyderabad, India",
      degree: "Bachelor of Technology in Artificial Intelligence and Machine Learning",
      details: ["May 2025", "CGPA: 8.7/10"],
    },
  ],
  skillGroups: [
    {
      title: "Programming",
      items: ["Python", "SQL", "R", "JavaScript"],
    },
    {
      title: "AI and ML",
      items: [
        "PyTorch",
        "TensorFlow",
        "Keras",
        "scikit-learn",
        "Hugging Face Transformers",
        "Transfer Learning",
        "CNNs",
      ],
    },
    {
      title: "Generative AI and Automation",
      items: [
        "Conversational AI",
        "Prompt-driven workflows",
        "Text-to-speech pipelines",
        "Batch processing",
        "API integration",
        "Workflow automation",
      ],
    },
    {
      title: "Data and Backend",
      items: [
        "Pandas",
        "NumPy",
        "Data Cleaning",
        "Feature Engineering",
        "Model Evaluation",
        "Flask",
        "SQLite",
        "MySQL",
        "PostgreSQL",
      ],
    },
    {
      title: "Tools and Deployment",
      items: [
        "Git",
        "GitHub",
        "Vercel",
        "Railway",
        "Docker",
        "Jupyter Notebook",
        "Google Colab",
        "Tableau",
      ],
    },
  ],
  projects: [
    {
      name: "YouTube Shorts Story Generator",
      subtitle: "GitHub-backed Flask application for AI-assisted short-form video generation",
      repo: "https://github.com/SidharthaPulluri/Yt-shorts-story-generator",
      bullets: [
        "Built and deployed a Flask-based story-to-video pipeline that converts raw text into 9:16 short-form videos with AI voice narration, timed captions, and optional YouTube upload support.",
        "Added both web UI and CLI workflows with environment-based configuration, health endpoints, and cloud deployment readiness using Docker and Railway.",
        "Supported repeatable content generation through batch-oriented processing, file upload inputs, and structured runtime logging.",
      ],
      tech: ["Python", "Flask", "Edge TTS", "Docker", "Railway", "YouTube API"],
    },
    {
      name: "Returnly | QR Lost and Found Platform",
      subtitle: "Live QR recovery platform with owner authentication and finder workflows",
      repo: "https://github.com/SidharthaPulluri/Qr-Returnly-site",
      demo: "https://qr-returnly.vercel.app",
      bullets: [
        "Built and deployed a QR-powered lost-and-found platform with owner login, signup, email verification, item dashboards, finder reports, QR downloads, and item management flows.",
        "Implemented production-oriented data handling with PostgreSQL support in production and SQLite fallback for local development.",
        "Shipped a live recovery workflow that supports real scans, owner actions, and finder submissions without requiring QR regeneration.",
      ],
      tech: ["Python", "Flask", "PostgreSQL", "SQLite", "QR Codes", "Vercel"],
    },
    {
      name: "Ayurvedic Herb Scraper",
      subtitle: "Configurable Python CLI for structured medicinal herb data collection",
      repo: "https://github.com/SidharthaPulluri/Ayurvedic-herb-scraper",
      bullets: [
        "Built a Python CLI scraper for the Planet Ayurveda herbs directory with index and detailed scrape modes, configurable ranges, retries, timeouts, and CSV export.",
        "Improved scraper reliability through reusable parsing utilities, safer output paths, pause controls, and logging for long-running collection workflows.",
        "Produced structured datasets for exploratory analysis, search, labeling workflows, and downstream medicinal plant ML experimentation.",
      ],
      tech: ["Python", "Web Scraping", "CLI", "CSV Data Pipelines"],
    },
    {
      name: "Sidhartha Utilities | Full-Stack To-Do and Utility Hub",
      subtitle: "Deployed web hub integrating static utilities with a React/Vite todo workflow",
      repo: "https://github.com/SidharthaPulluri/My-Utilities",
      demo: "https://sidhartha-utilities.vercel.app/todo",
      bullets: [
        "Built and deployed a multi-utility web platform featuring a React and Vite to-do application with REST-backed CRUD workflows and Vercel serverless API routing.",
        "Integrated static utility experiences and backend-connected task management into a single deployable user-facing product.",
        "Added build automation for the todo client and deploy-ready routing to support consistent Vercel releases.",
      ],
      tech: ["React", "Vite", "Node.js", "REST API", "Vercel"],
    },
    {
      name: "Medicinal Leaf Classification Research",
      subtitle: "Publication-backed applied computer vision project",
      bullets: [
        "Developed a custom medicinal leaf classification workflow using EfficientNetB0 and BiFPN-inspired modeling for medicinal plant identification.",
        "Built an interactive inference interface for real-time prediction and result visualization.",
        "Connected experimentation and evaluation into a publication presented at ICICT-2024.",
      ],
      tech: ["TensorFlow", "Computer Vision", "EfficientNet", "BiFPN", "Model Evaluation"],
    },
  ],
  publications: [
    {
      title: "EfficientDet-Based Framework for Medicinal Leaf Detection and Therapeutic Usage",
      venue: "International Conference on Innovative Computing Technologies (ICICT-2024), Hyderabad",
    },
  ],
  leadership: [
    {
      role: "Placement Coordinator, AIML Section",
      org: "Chaitanya Bharathi Institute of Technology",
      bullets: [
        "Coordinated communication among students, recruiters, and faculty during placement cycles.",
        "Maintained tracking sheets, updates, and follow-ups to support milestone completion.",
      ],
    },
  ],
  certifications: [
    "Data Science Foundation",
    "Machine Learning",
    "Introduction to Databases (SQL)",
    "Full Stack Development",
  ],
  additionalInfo: [
    "Open to internships and full-time opportunities in Generative AI, Machine Learning, and Data Science.",
    "Open to relocation within the United States.",
  ],
};
