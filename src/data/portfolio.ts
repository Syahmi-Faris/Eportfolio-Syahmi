export type Project = {
  slug: string;
  title: string;
  summary: string;
  description?: string;
  skills: string[];
  highlight?: boolean;
  github?: string;
  pdfPath?: string;
  videoPath?: string;
  liveUrl?: string;
  role?: string;
};

export type Subject = {
  code?: string;
  slug: string;
  name: string;
  short: string;
  summary: string;
  projects: Project[];
};

export type Semester = {
  number: number;
  slug: string;
  title: string;
  year: string;
  summary: string;
  subjects: Subject[];
};

export const portfolio: Semester[] = [
  {
    number: 1,
    slug: 'sem-1',
    title: 'Semester 1',
    year: '2023 / 2024',
    summary:
      'Foundation year. First exposure to programming (C++), digital logic, and core computing concepts. Built the base I have leaned on every semester since.',
    subjects: [
      {
        slug: 'dl',
        name: 'Digital Logic',
        short: 'DL',
        summary:
          'Boolean algebra, combinational and sequential circuits, designed working logic circuits with Proteus / circuit simulation.',
        projects: [
          {
            slug: 'elevator-switch-circuit',
            title: 'Up/Down Elevator Switch Circuit',
            summary:
              'Designed a sequential logic circuit simulating an elevator up/down switch with full system implementation report.',
            skills: ['Digital Logic', 'Circuit Design', 'Proteus'],
          },
        ],
      },
      {
        slug: 'ds',
        name: 'Discrete Structure',
        short: 'DS',
        summary:
          'Sets, relations, logic, graph theory and proofs. Mathematical foundation for algorithms and computer science.',
        projects: [],
      },
      {
        slug: 'pt',
        name: 'Programming Technique I',
        short: 'PT',
        summary:
          'First programming course. C++ fundamentals: variables, control flow, functions, arrays, file I/O, and structured problem-solving with flowcharts.',
        projects: [
          {
            slug: 'pt-assignments',
            title: 'C++ Programming Assignments',
            summary:
              'Series of C++ assignments solved with flowcharts (drawio) before implementation. Built early discipline in designing solutions before coding.',
            skills: ['C++', 'Flowcharts', 'Problem Solving'],
          },
        ],
      },
      {
        slug: 'tis',
        name: 'Technology & Information Systems',
        short: 'TIS',
        summary:
          'Survey of IT concepts: hardware, software, networks, and how organisations use information systems. Included a group project covering newsletter, poster, prototype and PC assembly.',
        projects: [
          {
            slug: 'tis-group-project',
            title: 'TIS Group Project — Multi-deliverable',
            summary:
              'Group project delivered across multiple media: newsletter, poster, prototype, video and a PC assembly walkthrough.',
            skills: ['Group Work', 'Documentation', 'Hardware Literacy', 'Communication'],
          },
        ],
      },
    ],
  },
  {
    number: 2,
    slug: 'sem-2',
    title: 'Semester 2',
    year: '2023 / 2024',
    summary:
      'Deeper into computer science: assembly language, statistics in R, system analysis, and continuing C++. The semester I learned what software development actually involves.',
    subjects: [
      {
        slug: 'coa',
        name: 'Computer Organization & Architecture',
        short: 'COA',
        summary:
          'How a computer works under the hood. Wrote programs in x86 Assembly using MASM, completed lab assessments, and built a group project.',
        projects: [
          {
            slug: 'coa-assembly-lab',
            title: 'Assembly Language Labs & Assessment',
            summary:
              'Wrote arithmetic and control-flow programs in x86 Assembly (MASM). Submitted a video walkthrough of the lab assessment.',
            skills: ['x86 Assembly', 'MASM', 'Low-level programming'],
          },
          {
            slug: 'coa-project',
            title: 'COA Group Project',
            summary: 'Group project applying assembly and computer architecture concepts.',
            skills: ['Assembly', 'Group Work'],
          },
        ],
      },
      {
        slug: 'hci',
        name: 'Human-Computer Interaction',
        short: 'HCI',
        summary:
          'Principles of usability, user-centered design, and interface evaluation.',
        projects: [
          {
            slug: 'hci-assignment',
            title: 'HCI Assignment',
            summary: 'Applied usability heuristics and design principles to evaluate interfaces.',
            skills: ['Usability', 'UX'],
          },
        ],
      },
      {
        slug: 'psda',
        name: 'Probability & Statistical Data Analysis',
        short: 'PSDA',
        summary:
          'Probability, hypothesis testing, chi-square, ANOVA — applied in R. Group project on real data analysis.',
        projects: [
          {
            slug: 'psda-project',
            title: 'Statistical Analysis Project (R)',
            summary:
              'Group project (SECI2143) performing statistical analysis in R: descriptive stats, hypothesis testing, and inferential conclusions.',
            skills: ['R', 'Statistics', 'Hypothesis Testing', 'ANOVA'],
            highlight: true,
          },
        ],
      },
      {
        slug: 'pt-ii',
        name: 'Programming Technique II',
        short: 'PT II',
        summary:
          'Object-oriented and modular programming in C++. Group cinema project.',
        projects: [
          {
            slug: 'cinema-project',
            title: 'Cinema Management Project (C++)',
            summary:
              'Group project implementing a cinema-style booking/management system in C++.',
            skills: ['C++', 'Modular Programming'],
          },
        ],
      },
      {
        slug: 'sad',
        name: 'System Analysis & Design',
        short: 'SAD',
        summary:
          'SDLC, requirements gathering, OOAD, UML modelling. Capstone-style project documenting a real system.',
        projects: [
          {
            slug: 'kada-project',
            title: 'KADA System Analysis & Design Project',
            summary:
              'Full SAD project documenting the analysis and design of the KADA system, applying SDLC and OOAD techniques.',
            skills: ['SDLC', 'OOAD', 'UML', 'Requirements Analysis'],
            highlight: true,
          },
        ],
      },
      {
        slug: 'ulrs',
        name: 'Ethics & Civilisation (ULRS)',
        short: 'ULRS',
        summary:
          'Penghayatan Etika dan Peradaban — Malaysian university requirement covering ethics and civilization studies.',
        projects: [],
      },
    ],
  },
  {
    number: 3,
    slug: 'sem-3',
    title: 'Semester 3',
    year: '2024 / 2025',
    summary:
      'First semester where I felt like a real software engineer. Database design, software engineering process, networks, and a PHP web system — all built end-to-end with groups.',
    subjects: [
      {
        slug: 'dsa',
        name: 'Data Structure & Algorithm',
        short: 'DSA',
        summary:
          'Stacks, queues, linked lists, trees, sorting and searching — implemented in C++. Wrote a doubly linked list from scratch.',
        projects: [
          {
            slug: 'doubly-linked-list',
            title: 'Doubly Linked List Implementation',
            summary:
              'Implemented a doubly linked list in C++ from scratch with insertion, deletion, and traversal operations.',
            skills: ['C++', 'Data Structures', 'Linked Lists'],
          },
        ],
      },
      {
        slug: 'database',
        name: 'Database',
        short: 'DB',
        code: 'SECP2523',
        summary:
          'Full database design lifecycle across three project phases — from proposal to conceptual model to physical implementation. Plus two individual assignments on normalization and SQL.',
        projects: [
          {
            slug: 'db-3phase-project',
            title: '3-Phase Database Design Project',
            summary:
              'Group project across three phases — (P1) Proposal, (P2) Conceptual Design Report, (P3) Final Database Implementation. Covered the full database design lifecycle.',
            skills: ['ER Modelling', 'Normalization', 'SQL', 'Database Design'],
            highlight: true,
          },
          {
            slug: 'db-assignments',
            title: 'Database Individual Assignments',
            summary:
              'Two individual assignments practicing relational algebra, SQL DDL/DML, and normalization to BCNF.',
            skills: ['SQL', 'Normalization', 'Relational Algebra'],
          },
        ],
      },
      {
        slug: 'network-comm',
        name: 'Network Communication',
        short: 'NetComm',
        code: 'SECR1213',
        summary:
          'TCP/IP fundamentals, addressing, routing, and protocols. Group project simulating a real network with Cisco Packet Tracer.',
        projects: [
          {
            slug: 'netcomm-floorplan',
            title: 'Network Design — Floor Plan Project',
            summary:
              'Designed and simulated a multi-floor network in Cisco Packet Tracer (Project_(Floor_Plan_lvl_1).pkt). Final report (T6) covered topology, addressing, and protocol choices.',
            skills: ['Networking', 'Cisco Packet Tracer', 'Network Design', 'TCP/IP'],
            highlight: true,
          },
        ],
      },
      {
        slug: 'software-engineering',
        name: 'Software Engineering',
        short: 'SE',
        summary:
          'Software process, requirements engineering, agile methodology. Group project producing a full Software Requirements Specification (SRS) for an Agile-driven project.',
        projects: [
          {
            slug: 'alphatech-srs',
            title: 'AlphaTech — Agile SRS Project',
            summary:
              'Group software engineering project: proposal, full Agile-driven SRS document covering requirements, use cases, and system documentation.',
            skills: ['SRS', 'Agile', 'Requirements Engineering', 'Software Process'],
            highlight: true,
          },
        ],
      },
      {
        slug: 'sdt',
        name: 'System Development & Technology',
        short: 'SDT',
        summary:
          'End-to-end web system development — first time building a real working web app with PHP and a database backend.',
        projects: [
          {
            slug: 'yt-track',
            title: 'YT Track — Web System (PHP)',
            summary:
              'Built a web-based tracking system in PHP with database integration. Includes registration flow and a full project report.',
            skills: ['PHP', 'Web Development', 'SQL', 'Full-stack'],
            highlight: true,
          },
        ],
      },
    ],
  },
  {
    number: 4,
    slug: 'sem-4',
    title: 'Semester 4',
    year: '2024 / 2025',
    summary:
      'Heavy technical semester. Data analytics in Python, data mining with real ML, object-oriented design in Java, and operating systems with a concurrency simulation. Four substantial projects in one semester.',
    subjects: [
      {
        slug: 'dap',
        name: 'Data Analytics Programming',
        short: 'DAP',
        code: 'SECP3223',
        summary:
          'Python for data analytics: pandas, NumPy, matplotlib. Three assignments and a final project on real datasets.',
        projects: [
          {
            slug: 'dap-final-project',
            title: 'Data Analytics Final Project',
            summary:
              'Final project analysing real-world datasets (FuelConsumption, Cars 2025) — cleaning, exploration, and visualisation in Jupyter.',
            skills: ['Python', 'pandas', 'matplotlib', 'Data Analysis'],
            highlight: true,
          },
          {
            slug: 'dap-assignments',
            title: 'DAP Assignments (A1, A2, A3)',
            summary:
              'Three notebooks: ride data exploration, intermediate analysis, and a deep dive into rainfall data with multiple plot types (bar, box, heatmap, line, scatter, faceted grids).',
            skills: ['Python', 'Jupyter', 'Data Visualization'],
          },
        ],
      },
      {
        slug: 'dm',
        name: 'Data Mining',
        short: 'DM',
        summary:
          'Full ML pipeline: data preprocessing, feature engineering, classification (KNN), and unsupervised learning. Two project reports plus a presentation video.',
        projects: [
          {
            slug: 'dm-obesity-classification',
            title: 'Obesity Classification — Data Mining Project 1 & 2',
            summary:
              'Two-part data mining project on the Obesity dataset and Student Performance dataset. Built KNN classifier with confusion matrix evaluation and unsupervised learning analysis. Includes presentation and reflection videos.',
            skills: ['Python', 'KNN', 'Classification', 'Unsupervised Learning', 'scikit-learn'],
            highlight: true,
          },
          {
            slug: 'dm-assignment',
            title: 'DM Assignment — CPU Performance & Liver Datasets',
            summary:
              'Dataset exploration assignment: discretization, normalisation, and feature analysis on CPU performance and liver datasets.',
            skills: ['Data Mining', 'Feature Engineering', 'RapidMiner'],
          },
        ],
      },
      {
        slug: 'oop',
        name: 'Object-Oriented Programming',
        short: 'OOP',
        summary:
          'Java OOP: classes, inheritance, polymorphism, abstract classes, interfaces. Mini project plus several lab exercises.',
        projects: [
          {
            slug: 'oop-mini-project',
            title: 'OOP Mini Project — Student Management (Java)',
            summary:
              'Java mini project with class hierarchy (User → Person → Student → Undergraduate / Postgraduate) and Course management. Submitted with full report and video demo.',
            skills: ['Java', 'OOP', 'Inheritance', 'Polymorphism'],
            highlight: true,
          },
          {
            slug: 'oop-labs',
            title: 'OOP Lab Exercises',
            summary:
              'Multiple lab exercises: ArrayLab, SchoolSystem, ShareStoreSystem, Classroom — each practicing specific OOP concepts.',
            skills: ['Java', 'OOP'],
          },
        ],
      },
      {
        slug: 'os',
        name: 'Operating Systems',
        short: 'OS',
        code: 'SECR2043',
        summary:
          'Process management, threading, synchronisation. Group project implementing and visualising the Peterson Algorithm for mutual exclusion.',
        projects: [
          {
            slug: 'peterson-algorithm',
            title: "Peterson's Algorithm Simulation (C++)",
            summary:
              "Implemented Peterson's mutual exclusion algorithm in C++ with an animated simulation. Group project (Kernel Three) with full report and presentation videos.",
            skills: ['C++', 'Concurrency', 'Synchronisation', 'Operating Systems'],
            highlight: true,
          },
        ],
      },
      {
        slug: 'ict-dc',
        name: 'ICT & Data Center',
        short: 'ICT & DC',
        summary:
          'Data center fundamentals, security modules, business alignment of IT infrastructure.',
        projects: [],
      },
      {
        slug: 'english',
        name: 'Report Writing (English)',
        short: 'ENG',
        code: 'UHLB2122',
        summary:
          'Academic report writing and group discussions. Developed technical writing and presentation skills.',
        projects: [],
      },
      {
        slug: 'phil',
        name: 'Philosophy',
        short: 'PHIL',
        summary:
          'Epistemology and current issues. Reflective and individual reports.',
        projects: [],
      },
      {
        slug: 'techno',
        name: 'Technopreneurship',
        short: 'TECHNO',
        summary:
          'Tech entrepreneurship. Organised a Blockchain TechTalk seminar as part of Group 23 — proposal, planning, execution, final report.',
        projects: [
          {
            slug: 'blockchain-techtalk',
            title: 'Blockchain TechTalk Seminar',
            summary:
              'Co-organised a Blockchain TechTalk seminar including activity planning, proposal writing, poster design, and final reporting.',
            skills: ['Event Management', 'Proposal Writing', 'Leadership'],
          },
        ],
      },
    ],
  },
  {
    number: 5,
    slug: 'sem-5',
    title: 'Semester 5',
    year: '2025 / 2026',
    summary:
      'Advanced specialisation. Artificial intelligence, advanced database programming, enterprise systems, and business pitching. Started thinking about systems at scale and how technology serves business.',
    subjects: [
      {
        slug: 'ai',
        name: 'Artificial Intelligence',
        short: 'AI',
        summary:
          'Search algorithms, problem-solving structures, classical AI techniques applied to a group project.',
        projects: [
          {
            slug: 'ai-group-project',
            title: 'AI Group Project (Group 6)',
            summary:
              'Applied AI problem-solving and search techniques in a full group project (GROUP6_ARTIFICIAL_INTELLIGENCE) with presentation.',
            skills: ['AI', 'Search Algorithms', 'Problem Solving'],
            highlight: true,
          },
        ],
      },
      {
        slug: 'dp',
        name: 'Database Programming',
        short: 'DP',
        summary:
          'Advanced SQL — stored procedures, functions, triggers, indexes, transactions. Plus NoSQL/MongoDB. Worked with ClassicModel and Sakila databases.',
        projects: [
          {
            slug: 'dp-project',
            title: 'Advanced Database Programming Project',
            summary:
              'Project covering advanced SQL operations on ClassicModel database — stored procedures, transactions, indexing — plus MongoDB NoSQL operations.',
            skills: ['SQL', 'Stored Procedures', 'Transactions', 'MongoDB', 'NoSQL'],
            highlight: true,
          },
        ],
      },
      {
        slug: 'esdm',
        name: 'Enterprise Systems Development & Management',
        short: 'ESDM',
        summary:
          'Enterprise architecture, business systems design. Project on real company (Entellica) and PPG industry exploration.',
        projects: [
          {
            slug: 'esdm-project',
            title: 'ESDM Project — Entellica Enterprise Architecture',
            summary:
              'Individual and combined group reports on enterprise architecture for Entellica. Included PPG exploration and Schneider Electric case study.',
            skills: ['Enterprise Architecture', 'Business Analysis', 'Systems Design'],
            highlight: true,
          },
        ],
      },
      {
        slug: 'pcs-2',
        name: 'Professional Communication Skills 2',
        short: 'PCS 2',
        code: 'UHLB3132',
        summary:
          'Business proposal writing, pitching, intonation training. Built communication skills for product pitching.',
        projects: [
          {
            slug: 'cu-mart-proposal',
            title: 'CU Mart — Business Proposal & Pitch',
            summary:
              'Authored full business proposal and pitching slides for CU Mart, including hook ad-libs and pitch outline. Practiced intonation and delivery.',
            skills: ['Business Writing', 'Pitching', 'Presentation Skills'],
            highlight: true,
          },
          {
            slug: 'snackdash-proposal',
            title: 'SnackDash — Business Proposal',
            summary: 'Secondary business proposal exploring a snack-delivery concept.',
            skills: ['Business Writing', 'Product Ideation'],
          },
        ],
      },
      {
        slug: 'psc',
        name: 'Professional Skills Course',
        short: 'PSC',
        summary:
          'Career-oriented professional skills training (DAO, DTE, QM, TCM modules) and tips for writing the Engineer Competency Statement.',
        projects: [],
      },
      {
        slug: 'mandarin',
        name: 'Mandarin Chinese',
        short: 'MAN',
        summary:
          'Introductory Mandarin: self-introduction, family, numbers. Cross-cultural communication skill.',
        projects: [],
      },
      {
        slug: 'landscape',
        name: 'Introduction to Landscape Architecture',
        short: 'LAND',
        code: 'SBEZ1652',
        summary:
          'Elective on landscape architecture principles, ecology, and green infrastructure. Broadened design and environmental thinking.',
        projects: [],
      },
    ],
  },
  {
    number: 6,
    slug: 'sem-6',
    title: 'Semester 6',
    year: '2025 / 2026',
    summary:
      'Strongest technical semester. Built a real web-scraping pipeline (100k rows), an NLP review-analysis project, a full Power BI BI project, and a data engineering capstone — plus a hackathon entry (GX Prism).',
    subjects: [
      {
        slug: 'ad',
        name: 'Application Development',
        short: 'AD',
        summary:
          'Modern application development — proposal and architecture for a real product (DevSync).',
        projects: [
          {
            slug: 'devsync-proposal',
            title: 'DevSync — Application Proposal',
            summary:
              'Group proposal for DevSync application (Section 01, Lab 2). Defined the product vision, requirements and architecture.',
            skills: ['Software Architecture', 'Product Proposal', 'Requirements'],
            highlight: true,
          },
        ],
      },
      {
        slug: 'bi',
        name: 'Business Intelligence',
        short: 'BI',
        code: 'SECP3123',
        summary:
          'BI architecture, data preprocessing, semantic layers, Power BI dashboards. Three-phase BI project on real sales data.',
        projects: [
          {
            slug: 'bi-powerbi-dashboard',
            title: 'Power BI Sales Dashboard — 3-Phase Project',
            summary:
              'Three-phase BI project: data ingestion (customers, orders, products, order_items CSVs), modelling, and a final Power BI dashboard (.pbix). Includes Alteryx workflow for Sales & Products analysis.',
            skills: ['Power BI', 'Alteryx', 'Data Modelling', 'BI Architecture', 'SQL'],
            highlight: true,
          },
          {
            slug: 'bi-industry-talk',
            title: 'BI Industry Talk Report',
            summary: 'Industry talk reflection — practical BI in industry.',
            skills: ['BI', 'Reflection'],
          },
        ],
      },
      {
        slug: 'hpdp',
        name: 'High Performance Data Processing',
        short: 'HPDP',
        summary:
          'Two major projects: a web scraping pipeline that collected 100k rows from Carlist, and an NLP analysis of Grab reviews.',
        projects: [
          {
            slug: 'webminer-carlist',
            title: 'WebMiner — Carlist Scraper (100k rows)',
            summary:
              'Built a Python web scraping pipeline using Playwright to collect 100,000 car listings from Carlist and MotorTrader. Engineered to handle pagination, state persistence, and resume-on-failure (carlist_pw_state.json).',
            skills: ['Python', 'Playwright', 'Web Scraping', 'Data Engineering'],
            highlight: true,
          },
          {
            slug: 'grab-reviews-nlp',
            title: 'Grab Reviews — NLP Analysis',
            summary:
              'Project 2: scraped Grab reviews and built an NLP pipeline — preprocessing, feature extraction, and ML models — to analyse user sentiment and review patterns.',
            skills: ['Python', 'NLP', 'Machine Learning', 'Web Scraping'],
            highlight: true,
          },
        ],
      },
      {
        slug: 'entrepreneurship',
        name: 'Entrepreneurship',
        short: 'ENT',
        summary:
          'Built and pitched a real product concept — EduBridge AI — and ran a coffee brand exercise (La Creme Kohii).',
        projects: [
          {
            slug: 'edubridge-ai',
            title: 'EduBridge AI — Group Product Concept',
            summary:
              'Group coursework: developed EduBridge AI as a startup-style product concept. Includes pitch deck and full product write-up.',
            skills: ['Product Concept', 'Pitching', 'AI', 'Entrepreneurship'],
            highlight: true,
          },
          {
            slug: 'la-creme-kohii',
            title: 'La Creme Kohii — Brand Exercise',
            summary:
              'Brand and marketing exercise for La Creme Kohii (coffee concept) including promotional video.',
            skills: ['Marketing', 'Branding'],
          },
        ],
      },
      {
        slug: 'special-topic',
        name: 'Special Topic — Data Engineering',
        short: 'DE',
        code: 'SECP3843',
        summary:
          'Capstone-style data engineering course. Real industry project (PPG), full data architecture, Power BI dashboard, and a proceeding paper.',
        projects: [
          {
            slug: 'ppg-data-engineering',
            title: 'PPG Industry Data Engineering Project',
            summary:
              'Industry project with PPG: data collection, preparation, architecture design, Power BI dashboard, and group + individual reports. Group 4 and Group 7 deliverables.',
            skills: ['Data Engineering', 'Power BI', 'Data Architecture', 'Industry Project'],
            highlight: true,
          },
        ],
      },
    ],
  },
];

// Side projects, hackathons, certifications, and leadership pulled from MYSELF/
export type Activity = {
  slug: string;
  title: string;
  summary: string;
  category: 'hackathon' | 'cert' | 'leadership' | 'side-project';
  year?: string;
  skills?: string[];
};

export const activities: Activity[] = [
  {
    slug: 'gx-prism',
    title: 'GX Prism — UXHMAC 2025 Hackathon',
    summary:
      'Hackathon entry under team MochiCoders. Built a product with pitch deck, presentation video, and a working code repo (gx-prism-mochicoders).',
    category: 'hackathon',
    year: '2025',
    skills: ['Hackathon', 'Product Design', 'Team Lead'],
  },
  {
    slug: 'utm-x-hackathon-24',
    title: 'UTMxHackathon 2024 — Crew',
    summary: 'Crew certificate for UTMxHackathon 2024.',
    category: 'hackathon',
    year: '2024',
  },
  {
    slug: 'aws-cloud-foundations',
    title: 'AWS Academy Graduate — Cloud Foundations',
    summary: 'AWS Academy training badge and certificate for cloud foundations.',
    category: 'cert',
    year: '2026',
    skills: ['AWS', 'Cloud'],
  },
  {
    slug: 'azure-dp-900',
    title: 'Microsoft Certified — Azure Data Fundamentals (DP-900)',
    summary: 'Microsoft DP-900 certification covering core Azure data services.',
    category: 'cert',
    skills: ['Azure', 'Data Fundamentals'],
  },
  {
    slug: 'foi',
    title: 'Sijil FOI',
    summary: 'FOI participation certificate.',
    category: 'leadership',
  },
  {
    slug: 'persaka',
    title: 'PERSAKA — Student Organisation',
    summary:
      'Active member across Semesters 3, 4 and 6. Participated in organisational activities and event organising.',
    category: 'leadership',
  },
  {
    slug: 'merit-programs',
    title: 'MERIT Programmes — Multi-event',
    summary:
      'Earned merit badges across multiple university programmes: BCTT, CODE 25, OPERA 25, UNBOCS 24, KGPP 2025, RFU 25, SUKBU, CELCOMDIGI x UTM, JARVIS 25.',
    category: 'leadership',
  },
  {
    slug: 'jarvis-25',
    title: 'JARVIS 25 — Academic Event',
    summary: 'Co-organised JARVIS 25 academic event with full proposal and financial documentation.',
    category: 'leadership',
    year: '2025',
  },
];

export function findSemester(slug: string): Semester | undefined {
  return portfolio.find((s) => s.slug === slug);
}

export function findSubject(
  semSlug: string,
  subSlug: string,
): { semester: Semester; subject: Subject } | undefined {
  const semester = findSemester(semSlug);
  if (!semester) return undefined;
  const subject = semester.subjects.find((s) => s.slug === subSlug);
  if (!subject) return undefined;
  return { semester, subject };
}

export function findProject(
  semSlug: string,
  subSlug: string,
  projSlug: string,
):
  | { semester: Semester; subject: Subject; project: Project }
  | undefined {
  const found = findSubject(semSlug, subSlug);
  if (!found) return undefined;
  const project = found.subject.projects.find((p) => p.slug === projSlug);
  if (!project) return undefined;
  return { ...found, project };
}
