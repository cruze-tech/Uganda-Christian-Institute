export const site = {
  name: 'Uganda Christian Institute of Nursing and Midwifery',
  shortName: 'UCI Lira',
  tagline: 'Faith-rooted nursing and midwifery education for compassionate healthcare leaders.',
  description:
    'A modern institutional website concept for Uganda Christian Institute of Nursing and Midwifery, designed for admissions, programmes, gallery, news, and contact.',
  phonePrimary: '+256 781 425432',
  phoneSecondary: '+256 392 942986',
  whatsAppDisplay: '0761435295',
  whatsAppNumber: '256761435295',
  email: 'info@uci.ac.ug',
  location: 'Opelo Cell, Boroboro West Ward, Lira City East Division, Lira City, Uganda',
  admissionsPortal: '/online-portal',
  downloadsUrl: '/downloads',
  applicationFormsUrl: '/application-forms',
  profileUrl: 'https://www.uci.ac.ug/topic/about',
  galleryUrl: 'https://www.uci.ac.ug/pictorials'
};

export const stats = [
  { value: '6+', label: 'Core public-facing sections refined for fast discovery' },
  { value: '100%', label: 'Responsive layout across mobile, tablet and desktop' },
  { value: '24/7', label: 'Admissions access through clear call-to-action paths' },
  { value: 'Faith', label: 'Values-first positioning carried throughout the experience' }
];

export const programmes = [
  {
    slug: 'certificate-in-enrolled-nursing',
    title: 'Certificate in Enrolled Nursing',
    category: 'Certificate',
    duration: 'Typically 2.5 years',
    image: '/images/training/nursing-training-1.webp',
    blurb: 'A foundation programme designed to build safe, compassionate, practice-ready nursing professionals.',
    highlights: ['Practical training emphasis', 'Clinical professionalism', 'Values-based care']
  },
  {
    slug: 'certificate-in-midwifery',
    title: 'Certificate in Midwifery',
    category: 'Certificate',
    duration: 'Typically 2.5 years',
    image: '/images/midwifery/midwife-training-1.webp',
    blurb: 'Focused preparation for maternal and newborn care through hands-on learning and supervised practice.',
    highlights: ['Maternal health focus', 'Simulation-led learning', 'Community impact']
  },
  {
    slug: 'diploma-in-nursing-direct',
    title: 'Diploma in Nursing Direct',
    category: 'Diploma',
    duration: 'Typically 3 years',
    image: '/images/training/nursing-training-2.webp',
    blurb: 'Advanced nursing education pathway for students aiming for broader clinical competence and leadership growth.',
    highlights: ['Expanded clinical depth', 'Professional growth', 'Direct-entry route']
  },
  {
    slug: 'diploma-in-midwifery-direct',
    title: 'Diploma in Midwifery Direct',
    category: 'Diploma',
    duration: 'Typically 3 years',
    image: '/images/midwifery/midwife-training-2.webp',
    blurb: 'A professional preparation pathway for student midwives who want strong practical grounding and confidence in care delivery.',
    highlights: ['Women-centered care', 'Practice readiness', 'Direct-entry route']
  },
  {
    slug: 'diploma-in-nursing-extension',
    title: 'Diploma in Nursing Extension',
    category: 'Diploma Extension',
    duration: 'Extension route',
    image: '/images/training/nursing-training-3.webp',
    blurb: 'An upgrade pathway for practitioners seeking to strengthen credentials, competence, and career progression.',
    highlights: ['Flexible progression', 'Professional upgrade', 'Career advancement']
  },
  {
    slug: 'diploma-in-midwifery-extension',
    title: 'Diploma in Midwifery Extension',
    category: 'Diploma Extension',
    duration: 'Extension route',
    image: '/images/graduation/graduation-1.webp',
    blurb: 'For practicing midwifery professionals who want to deepen their knowledge, competence, and service impact.',
    highlights: ['Professional extension', 'Skills growth', 'Service-centered learning']
  }
];

export interface ProgrammeDetail {
  summary: string;
  award: string;
  mode: string;
  intake: string;
  learningAreas: string[];
  entryRequirements: string[];
  careerPathways: string[];
  practicum: string;
}

export const programmeDetails: Record<string, ProgrammeDetail> = {
  'certificate-in-enrolled-nursing': {
    summary:
      'This foundational nursing pathway prepares learners for safe bedside support, professional conduct, and practical healthcare teamwork in supervised environments.',
    award: 'Certificate in Enrolled Nursing',
    mode: 'Full-time, school-based with practical rotations',
    intake: 'Main and follow-up intake windows (as announced)',
    learningAreas: [
      'Foundations of anatomy, physiology, and basic pharmacology',
      'Infection prevention, patient safety, and ward procedures',
      'Nursing ethics, communication, and documentation',
      'Community health introduction and health education practice'
    ],
    entryRequirements: [
      'Relevant secondary education qualifications as guided by admissions',
      'Valid identification and required application documentation',
      'Readiness for practical learning and supervised clinical conduct'
    ],
    careerPathways: [
      'Enrolled nurse support roles in hospitals and health centres',
      'Community-based care support and outreach programmes',
      'Progression to diploma-level nursing pathways'
    ],
    practicum: 'Learners complete guided practical sessions and supervised facility exposure to translate classroom training into real care scenarios.'
  },
  'certificate-in-midwifery': {
    summary:
      'A practical midwifery foundation focused on maternal and newborn care, communication with families, and safe support within reproductive health services.',
    award: 'Certificate in Midwifery',
    mode: 'Full-time with simulation and supervised skills sessions',
    intake: 'Published per admissions calendar',
    learningAreas: [
      'Maternal and newborn care fundamentals',
      'Antenatal, delivery, and postnatal support principles',
      'Emergency awareness and referral readiness',
      'Compassionate communication and record-keeping'
    ],
    entryRequirements: [
      'Admission qualifications aligned to current institute guidance',
      'Required identification and supporting academic records',
      'Commitment to practical skills practice and professionalism'
    ],
    careerPathways: [
      'Midwifery assistant roles in maternity settings',
      'Community maternal health support services',
      'Progression into diploma midwifery tracks'
    ],
    practicum: 'The course includes simulation-based practice and facility observation/placement blocks to strengthen competence in maternal care environments.'
  },
  'diploma-in-nursing-direct': {
    summary:
      'This direct-entry diploma expands nursing depth through stronger clinical reasoning, professional leadership growth, and broader patient management capability.',
    award: 'Diploma in Nursing (Direct Entry)',
    mode: 'Full-time, structured theory-to-practice model',
    intake: 'Admissions windows announced by the institute',
    learningAreas: [
      'Advanced medical-surgical nursing concepts',
      'Patient assessment, care planning, and evaluation',
      'Public health integration and interdisciplinary teamwork',
      'Leadership, quality care standards, and professional ethics'
    ],
    entryRequirements: [
      'Direct-entry qualifications per current admissions criteria',
      'Required academic transcripts and identity documents',
      'Completion of application and verification steps'
    ],
    careerPathways: [
      'Diploma-level nursing roles across clinical settings',
      'Team coordination and supervisory support responsibilities',
      'Future progression toward advanced health training'
    ],
    practicum: 'Students undertake rotational clinical placements with guided reflection, case discussions, and competency-focused assessments.'
  },
  'diploma-in-midwifery-direct': {
    summary:
      'A direct-entry diploma route centered on professional midwifery practice, safe maternal care delivery, and confidence in high-responsibility clinical settings.',
    award: 'Diploma in Midwifery (Direct Entry)',
    mode: 'Full-time with blended practical and classroom training',
    intake: 'Available according to admissions announcements',
    learningAreas: [
      'Advanced maternal and newborn care planning',
      'Clinical decision support in reproductive health contexts',
      'Safe delivery practice and postnatal monitoring',
      'Professional communication, ethics, and referral systems'
    ],
    entryRequirements: [
      'Direct-entry eligibility as set by admissions guidance',
      'Required supporting documents and complete application profile',
      'Readiness for practical and supervised clinical learning'
    ],
    careerPathways: [
      'Diploma midwifery roles in hospital and clinic environments',
      'Maternal health programme support roles',
      'Progression to advanced specialist studies over time'
    ],
    practicum: 'Learners engage in guided maternity placement experiences, simulation reinforcement, and competency review with supervisors.'
  },
  'diploma-in-nursing-extension': {
    summary:
      'This extension pathway supports practicing personnel upgrading to diploma-level nursing competence with stronger clinical and leadership capacity.',
    award: 'Diploma in Nursing (Extension)',
    mode: 'Extension-format programme for professional upgrade',
    intake: 'Based on extension intake timelines',
    learningAreas: [
      'Clinical skill consolidation and advanced patient care',
      'Evidence-informed nursing decision support',
      'Leadership communication and professional accountability',
      'Quality assurance and service improvement basics'
    ],
    entryRequirements: [
      'Relevant prior nursing training credentials for extension entry',
      'Verification documents and valid professional identity details',
      'Compliance with institute extension application procedures'
    ],
    careerPathways: [
      'Upgraded nursing roles with broader responsibility',
      'Improved eligibility for supervisory and senior support functions',
      'Pathway toward further professional development opportunities'
    ],
    practicum: 'The programme integrates supervised practical reinforcement to connect prior experience with advanced diploma standards.'
  },
  'diploma-in-midwifery-extension': {
    summary:
      'Designed for practicing midwifery personnel seeking diploma upgrade, with emphasis on safer outcomes, stronger clinical confidence, and service leadership.',
    award: 'Diploma in Midwifery (Extension)',
    mode: 'Extension pathway combining advanced theory and practical reinforcement',
    intake: 'Scheduled extension intakes as communicated by admissions',
    learningAreas: [
      'Advanced maternal care approaches and monitoring',
      'Practice quality, patient safety, and complication awareness',
      'Community-centered maternal and reproductive health support',
      'Documentation, ethics, and teamwork for care continuity'
    ],
    entryRequirements: [
      'Recognized prior midwifery qualification for extension admission',
      'Application documents and verification of required credentials',
      'Availability for practical reinforcement activities'
    ],
    careerPathways: [
      'Enhanced midwifery roles across maternity care settings',
      'Broader responsibilities in maternal health programmes',
      'Long-term progression toward specialist or supervisory tracks'
    ],
    practicum: 'Practical blocks focus on integrating upgraded knowledge into real maternal care service delivery under supervision.'
  }
};

export const reasons = [
  {
    title: 'Modern, welcoming digital experience',
    body: 'The site is designed to feel elevated, clear, and professional while staying easy to use for applicants and guardians on any device.'
  },
  {
    title: 'Admissions-first information flow',
    body: 'Visitors can move quickly from discovery to action through clear programme cards, application guidance, and admissions calls-to-action.'
  },
  {
    title: 'Strong visual storytelling',
    body: 'Campus scenes, training moments, and graduation imagery create trust and help the school feel real, active, and aspirational.'
  },
  {
    title: 'Built for Netlify and easy iteration',
    body: 'A static Astro codebase keeps the site lightweight, dependable, and simple to revise during client testing and review.'
  }
];

export const news = [
  {
    title: 'Admissions support made clearer for prospective applicants',
    date: 'March 2026',
    excerpt: 'The redesigned admissions experience puts online application access, form downloads, and campus enquiry paths in one visible flow.',
    href: '/admissions'
  },
  {
    title: 'Gallery-led storytelling now highlights campus and skills training',
    date: 'March 2026',
    excerpt: 'A refreshed gallery direction helps visitors see campus life, student engagement, and the practical side of health training at a glance.',
    href: '/gallery'
  },
  {
    title: 'Programme discovery improved for nursing and midwifery prospects',
    date: 'March 2026',
    excerpt: 'Visitors can browse certificates, direct diplomas, and extension pathways in a cleaner, more confidence-building layout.',
    href: '/programmes'
  }
];

export const gallery = [
  { src: '/images/campus/campus-1.webp', alt: 'Campus building and open learning environment', tag: 'Campus' },
  { src: '/images/campus/campus-2.webp', alt: 'Students moving through the central institute grounds', tag: 'Campus' },
  { src: '/images/campus/campus-3.webp', alt: 'Iconic institute landmark within the campus compound', tag: 'Campus' },
  { src: '/images/training/nursing-training-1.webp', alt: 'Nursing practical training with simulation support', tag: 'Training' },
  { src: '/images/training/nursing-training-2.webp', alt: 'Nursing students in uniform within the main learning spaces', tag: 'Training' },
  { src: '/images/training/nursing-training-3.webp', alt: 'Students practicing digital skills in a computer lab', tag: 'Training' },
  { src: '/images/midwifery/midwife-training-1.webp', alt: 'Midwifery learners practicing in supervised computer lab sessions', tag: 'Midwifery' },
  { src: '/images/midwifery/midwife-training-2.webp', alt: 'Students in collaborative discussion during training hours', tag: 'Midwifery' },
  { src: '/images/academic/library-1.webp', alt: 'Library reading and study support for learners', tag: 'Academic' },
  { src: '/images/academic/study-1.webp', alt: 'Academic computer use in supervised study rooms', tag: 'Academic' },
  { src: '/images/graduation/graduation-1.webp', alt: 'Graduation procession celebrating student achievement', tag: 'Graduation' },
  { src: '/images/graduation/graduation-2.webp', alt: 'Graduates during ceremony celebrations at campus', tag: 'Graduation' }
];

export const admissionSteps = [
  {
    title: 'Choose your programme pathway',
    body: 'Review available certificate and diploma options, then identify the route that matches your academic and professional goals.'
  },
  {
    title: 'Prepare required documents',
    body: 'Gather your academic records, identification details, and any supporting documents required for the selected intake.'
  },
  {
    title: 'Apply online through the official portal',
    body: 'Open the online portal page and continue with admissions support to complete all required submission details accurately.'
  },
  {
    title: 'Track updates and contact admissions',
    body: 'Follow communication from the institute and use the admissions contacts for guidance on deadlines and next steps.'
  }
];

export const admissionsChecklist = [
  'National ID or valid identification details',
  'Academic transcripts/results for relevant level',
  'Passport-size photograph for application records',
  'Active phone number and email for communication',
  'Programme selection and preferred intake information'
];

export const faqs = [
  {
    q: 'Can visitors apply online directly from the site?',
    a: 'Yes. The admissions page links to the online portal and forms flow, with direct contact support available while full portal features are being finalized.'
  },
  {
    q: 'Is the demo suitable for client review on Netlify?',
    a: 'Yes. The codebase is static, lightweight, and prepared for quick deployment and review on Netlify.'
  },
  {
    q: 'Can official school photos replace the current asset pack later?',
    a: 'Yes. All local images can be swapped by replacing files in the public/images folders without rewriting page structure.'
  }
];
