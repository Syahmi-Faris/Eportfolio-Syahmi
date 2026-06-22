export type WorkType = 'project' | 'assignment' | 'lab' | 'tutorial' | 'report';

export type Work = {
  slug: string;
  title: string;
  type: WorkType;
  description: string;
  // External URL that the View Work button opens. Falls back to the coursework
  // folder for this subject if not set.
  viewUrl?: string;
};

export type Subject = {
  slug: string;
  code?: string;
  name: string;
  summary: string;
  works: Work[];
  // Used to compute the default View URL for any work that doesn't set its own.
  // e.g. 'coursework/sem-6/ad'
  basePath?: string;
};

export type Semester = {
  slug: string;
  number: number;
  title: string;
  year: string;
  tagline: string;
  summary: string;
  // If set, the home tile links to this URL instead of an internal page.
  externalUrl?: string;
  subjects: Subject[];
};

const REPO_BASE =
  'https://github.com/Syahmi-Faris/Eportfolio-Syahmi/tree/main';

export function defaultViewUrl(subject: Subject, work: Work): string {
  if (work.viewUrl) return work.viewUrl;
  if (subject.basePath) {
    return `${REPO_BASE}/${subject.basePath}`;
  }
  return REPO_BASE;
}

export const portfolio: Semester[] = [
  {
    slug: 'sem-1',
    number: 1,
    title: 'Semester 1',
    year: '2023 / 2024',
    tagline: 'First year — foundation',
    summary:
      'My very first eportfolio. Built when I was learning the basics of HTML and web design. Kept online as a record of where I started.',
    externalUrl: 'https://syahmifaris.github.io/',
    subjects: [],
  },
  {
    slug: 'sem-5',
    number: 5,
    title: 'Semester 5',
    year: '2025 / 2026',
    tagline: 'Third year — specialisation',
    summary:
      'Advanced specialisation: artificial intelligence, advanced database programming, enterprise systems, and business pitching. Started thinking about systems at scale.',
    subjects: [
      {
        slug: 'ai',
        name: 'Artificial Intelligence',
        summary:
          'Search algorithms, problem-solving structures, and classical AI techniques applied to a real group project.',
        basePath: 'coursework/sem-5/ai',
        works: [
          {
            slug: 'group-project',
            title: 'AI Group Project (Group 6)',
            type: 'project',
            description:
              'Full group AI project applying search algorithms and problem-solving structures to a real problem. Submitted with a final report and presentation.',
            viewUrl: `${REPO_BASE}/coursework/sem-5/ai/group-project`,
          },
          {
            slug: 'assignment-1',
            title: 'Assignment 1',
            type: 'assignment',
            description:
              'Individual AI assignment exploring problem-solving structures and core algorithms.',
          },
          {
            slug: 'presentation',
            title: 'AI Presentation',
            type: 'tutorial',
            description:
              'Class presentation accompanying the group project — slides explaining our approach and results.',
          },
        ],
      },
      {
        slug: 'dp',
        name: 'Database Programming',
        summary:
          'Advanced SQL — stored procedures, transactions, indexing. Plus NoSQL and MongoDB. Worked with the ClassicModel and Sakila datasets.',
        basePath: 'coursework/sem-5/dp',
        works: [
          {
            slug: 'project',
            title: 'Advanced Database Programming Project',
            type: 'project',
            description:
              'Project covering advanced SQL operations on the ClassicModel database — stored procedures, transactions, indexing — plus MongoDB NoSQL operations.',
            viewUrl: `${REPO_BASE}/coursework/sem-5/dp/advanced-database-project`,
          },
          {
            slug: 'lab',
            title: 'SQL & MongoDB Labs',
            type: 'lab',
            description:
              'Lab exercises practising advanced SQL operations, indexes, stored procedures and MongoDB basic + advanced operations.',
          },
          {
            slug: 'assignment',
            title: 'Course Assignments',
            type: 'assignment',
            description:
              'Individual assignments on SQL operations and database programming topics.',
          },
        ],
      },
      {
        slug: 'esdm',
        name: 'Enterprise Systems Development & Management',
        summary:
          'Enterprise architecture and business systems. Project on a real company (Entellica) and exposure to PPG industry case studies.',
        basePath: 'coursework/sem-5/esdm',
        works: [
          {
            slug: 'entellica-ea',
            title: 'Entellica — Enterprise Architecture Project',
            type: 'project',
            description:
              'Individual + combined group reports on the enterprise architecture of Entellica. Covered current state, future state, gap analysis, and a final EA presentation.',
            viewUrl: `${REPO_BASE}/coursework/sem-5/esdm/entellica-enterprise-architecture`,
          },
          {
            slug: 'pechakucha',
            title: 'PechaKucha — Assignment 1',
            type: 'assignment',
            description:
              'PechaKucha style presentation (20 slides x 20 seconds) on an enterprise systems topic.',
          },
          {
            slug: 'doa-flutter',
            title: 'DOA Flutter Exercise',
            type: 'tutorial',
            description:
              'Mobile prototype work in Flutter as part of the enterprise systems studio.',
          },
        ],
      },
      {
        slug: 'pcs-2',
        name: 'Professional Communication Skills 2',
        summary:
          'Business proposal writing, pitching, and intonation training. Built communication skills for product pitching.',
        basePath: 'coursework/sem-5/pcs-2',
        works: [
          {
            slug: 'cu-mart',
            title: 'CU Mart — Business Proposal & Pitch',
            type: 'project',
            description:
              'Full business proposal and pitching slides for CU Mart, including hook ad-libs and pitch outline. Practised intonation, delivery, and Q&A handling.',
            viewUrl: `${REPO_BASE}/coursework/sem-5/pcs-2/cu-mart-proposal`,
          },
          {
            slug: 'snackdash',
            title: 'SnackDash — Business Proposal',
            type: 'project',
            description:
              'Second business proposal exploring a snack-delivery concept. Used as practice for the main pitch.',
            viewUrl: `${REPO_BASE}/coursework/sem-5/pcs-2/snackdash-proposal`,
          },
          {
            slug: 'hook-adlib',
            title: 'Hook Ad-Lib & Pitching Practice',
            type: 'tutorial',
            description:
              'Series of hook ad-lib scripts and attention-grabber drills to open a pitch.',
          },
        ],
      },
    ],
  },
  {
    slug: 'sem-6',
    number: 6,
    title: 'Semester 6',
    year: '2025 / 2026',
    tagline: 'Third year — production work',
    summary:
      'My strongest technical semester so far. Built a real web-scraping pipeline (100k rows), an NLP review-analysis project, a full Power BI dashboard, and a data engineering capstone.',
    subjects: [
      {
        slug: 'ad',
        name: 'Application Development',
        summary:
          'Modern application development — architecture, proposal writing, and full product design for a real application (DevSync).',
        basePath: 'coursework/sem-6/ad',
        works: [
          {
            slug: 'devsync-proposal',
            title: 'DevSync — Application Proposal',
            type: 'project',
            description:
              'Group proposal for the DevSync application (Section 01, Lab 2). Defined the product vision, requirements, and high-level architecture.',
            viewUrl: `${REPO_BASE}/coursework/sem-6/ad/devsync-proposal`,
          },
          {
            slug: 'lab-1',
            title: 'Lab Assignment 1',
            type: 'lab',
            description:
              'First lab assignment laying groundwork for the AD project.',
          },
        ],
      },
      {
        slug: 'bi',
        code: 'SECP3123',
        name: 'Business Intelligence',
        summary:
          'BI architecture, data preprocessing, semantic layers, and Power BI dashboards. Three-phase BI project on real sales data.',
        basePath: 'coursework/sem-6/bi',
        works: [
          {
            slug: 'powerbi-dashboard',
            title: 'Power BI Sales Dashboard — 3-Phase Project',
            type: 'project',
            description:
              'Three-phase BI project: data ingestion (customers, orders, products, order_items), modelling in a semantic layer, and a final Power BI dashboard (.pbix). Also includes an Alteryx workflow for the Sales & Products analysis.',
            viewUrl: `${REPO_BASE}/coursework/sem-6/bi/powerbi-dashboard`,
          },
          {
            slug: 'industry-talk',
            title: 'BI Industry Talk Report',
            type: 'report',
            description:
              'Reflection report on a Business Intelligence industry talk — connecting classroom theory to how BI is used in industry.',
            viewUrl: `${REPO_BASE}/coursework/sem-6/bi/industry-talk-report`,
          },
          {
            slug: 'lab',
            title: 'BI Labs',
            type: 'lab',
            description:
              'Labs covering Power BI install, dataset preprocessing, and basic dashboard exercises.',
          },
          {
            slug: 'group-discussion',
            title: 'BI Group Discussion',
            type: 'tutorial',
            description:
              'Group discussion deliverable applying BI concepts to a case-style prompt.',
          },
        ],
      },
      {
        slug: 'hpdp',
        name: 'High Performance Data Processing',
        summary:
          'Two end-to-end projects: a Playwright web-scraping pipeline that collected 100k rows, and an NLP analysis of Grab reviews.',
        basePath: 'coursework/sem-6/hpdp',
        works: [
          {
            slug: 'webminer-carlist',
            title: 'WebMiner — Carlist Scraper (100k rows)',
            type: 'project',
            description:
              'Python web-scraping pipeline using Playwright to collect 100,000 car listings from Carlist and MotorTrader. Engineered with pagination handling, state persistence, and resume-on-failure logic. Includes cleaning and optimisation notebooks.',
            viewUrl: `${REPO_BASE}/coursework/sem-6/hpdp/webminer-carlist`,
          },
          {
            slug: 'grab-reviews-nlp',
            title: 'Grab Reviews — NLP Analysis',
            type: 'project',
            description:
              'Project 2: scraped Grab reviews and built an NLP pipeline — preprocessing, feature extraction, and ML models — to analyse user sentiment and review patterns.',
            viewUrl: `${REPO_BASE}/coursework/sem-6/hpdp/grab-reviews-nlp`,
          },
          {
            slug: 'presentations',
            title: 'HPDP Presentations',
            type: 'tutorial',
            description:
              'In-class presentations explaining the scraping pipeline architecture and NLP modelling decisions.',
          },
        ],
      },
      {
        slug: 'entrepreneurship',
        name: 'Entrepreneurship',
        summary:
          'Real product concept work — built and pitched EduBridge AI, plus a coffee brand exercise (La Creme Kohii).',
        basePath: 'coursework/sem-6/entrepreneurship',
        works: [
          {
            slug: 'edubridge-ai',
            title: 'EduBridge AI — Group Product Concept',
            type: 'project',
            description:
              'Group coursework: developed EduBridge AI as a startup-style product concept. Includes pitch deck and full product write-up.',
            viewUrl: `${REPO_BASE}/coursework/sem-6/entrepreneurship/edubridge-ai`,
          },
          {
            slug: 'la-creme-kohii',
            title: 'La Creme Kohii — Brand Exercise',
            type: 'project',
            description:
              'Brand and marketing exercise for La Creme Kohii (coffee concept) including a promotional video and brand identity work.',
            viewUrl: `${REPO_BASE}/coursework/sem-6/entrepreneurship/la-creme-kohii`,
          },
        ],
      },
      {
        slug: 'special-topic',
        code: 'SECP3843',
        name: 'Special Topic — Data Engineering',
        summary:
          'Capstone-style data engineering: real industry project (PPG), full data architecture, Power BI dashboard, and a proceeding paper.',
        basePath: 'coursework/sem-6/special-topic',
        works: [
          {
            slug: 'ppg-data-engineering',
            title: 'PPG Industry Data Engineering Project',
            type: 'project',
            description:
              'Industry project with PPG: data collection, preparation, architecture design, Power BI dashboard, and final group + individual reports. Group 4 and Group 7 deliverables, plus a proceeding paper.',
            viewUrl: `${REPO_BASE}/coursework/sem-6/special-topic/ppg-data-engineering`,
          },
          {
            slug: 'lab',
            title: 'Data Engineering Labs',
            type: 'lab',
            description:
              'Labs covering data engineering foundations, pipeline patterns, and tooling.',
          },
          {
            slug: 'tutorial',
            title: 'Data Engineering Tutorial',
            type: 'tutorial',
            description: 'Tutorial deliverables supporting the lecture material.',
          },
          {
            slug: 'self-learning',
            title: 'Data Engineering Self-Learning',
            type: 'report',
            description:
              'Self-learning slides on Data Engineering Foundations + certification reflection.',
          },
        ],
      },
    ],
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

export const WORK_TYPE_LABEL: Record<WorkType, string> = {
  project: 'Project',
  assignment: 'Assignment',
  lab: 'Lab',
  tutorial: 'Tutorial',
  report: 'Report',
};

export const WORK_TYPE_COLOR: Record<WorkType, string> = {
  project: 'bg-cyan-50 text-cyan-700 border-cyan-200',
  assignment: 'bg-amber-50 text-amber-800 border-amber-200',
  lab: 'bg-emerald-50 text-emerald-700 border-emerald-200',
  tutorial: 'bg-violet-50 text-violet-700 border-violet-200',
  report: 'bg-rose-50 text-rose-700 border-rose-200',
};

export const SUBJECT_GRADIENTS: string[] = [
  'from-cyan-500 to-blue-600',
  'from-emerald-500 to-teal-600',
  'from-violet-500 to-fuchsia-600',
  'from-amber-500 to-orange-600',
  'from-rose-500 to-pink-600',
  'from-sky-500 to-indigo-600',
];

export const SEMESTER_GRADIENTS: Record<string, string> = {
  'sem-1': 'from-slate-700 to-slate-900',
  'sem-5': 'from-cyan-600 to-blue-700',
  'sem-6': 'from-fuchsia-600 to-purple-700',
};
