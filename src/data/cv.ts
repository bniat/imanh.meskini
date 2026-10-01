import type { ImageMetadata } from 'astro';
import etsi from '../assets/logos/etsi-informatica.png';
import nics from '../assets/logos/nics.png';
import uma from '../assets/logos/uma.png';

export interface Logo {
  src: ImageMetadata;
  alt: string;
}

/** Institution logos for the timeline; drop new ones into src/assets/logos/. */
const logos = {
  etsi: { src: etsi, alt: 'ETSI Informática, University of Málaga' },
  nics: { src: nics, alt: 'NICS Lab' },
  uma: { src: uma, alt: 'University of Málaga' },
} satisfies Record<string, Logo>;

export const researchProfile =
  'Cybersecurity researcher and PhD candidate at NICS Lab, University of Málaga, with more than four years of professional experience and three years of research. Focused on adversarial AI threats and countermeasures in critical infrastructures and on cybersecurity digital twins.';

export interface TimelineEntry {
  /** Omitted when the date is not relevant. */
  period?: string;
  role: string;
  where: string;
  location?: string;
  summary?: string;
  bullets?: string[];
  skills?: string[];
  logo?: Logo;
}

export const experience: TimelineEntry[] = [
  {
    period: 'Nov 2024 – Present',
    role: 'PhD Candidate',
    logo: logos.nics,
    where: 'NICS Lab, University of Málaga',
    location: 'Málaga, Spain',
    bullets: [
      'Research on adversarial AI attacks and their detection against cybersecurity AI/ML models in industrial and critical infrastructure scenarios.',
      'Research on cybersecurity digital twins to protect AI-integrated critical infrastructures, enabled by the simulation of offensive and defensive scenarios powered by offensive and defensive AI.',
    ],
  },
  {
    period: 'Feb 2023 – Present',
    role: 'Cybersecurity Researcher',
    logo: logos.uma,
    where: 'University of Málaga',
    location: 'Málaga, Spain',
    bullets: [
      'State-of-the-art research on digital twins in industrial and critical environments and related technologies such as Big Data and Artificial Intelligence.',
      'Specification of cybersecurity requirements in critical environments.',
      'Specification, development, implementation and validation of cybersecurity services in operational scenarios, such as access control mechanisms.',
      'Research on Intrusion Detection Systems (IDS) applying ML/AI.',
    ],
  },
  {
    period: 'Jun 2026 – Oct 2026',
    role: 'Guest Researcher',
    where: 'UBITECH, R&D Company',
    location: 'Athens, Greece',
    bullets: [
      'Research stay under the DUCA Horizon Europe project (Marie Skłodowska-Curie Actions – Staff Exchanges).',
      'Research activities related to the protection of AI and Big Data technologies in Smart Grids.',
    ],
  },
  {
    period: 'Jul 2025 – Nov 2025',
    role: 'Guest Researcher',
    where: 'K3Y, R&D Company',
    location: 'Sofia, Bulgaria',
    bullets: [
      'Research stay under the AIAS Horizon Europe project (Marie Skłodowska-Curie Actions – Staff Exchanges).',
      'Research activities related to adversarial AI attack impact and detection.',
    ],
  },
  {
    period: 'Jul 2025 – Nov 2025',
    role: 'Guest Researcher',
    where: 'FOGUS, R&D Company',
    location: 'Athens, Greece',
    bullets: [
      'Research stay under the AIAS Horizon Europe project (Marie Skłodowska-Curie Actions – Staff Exchanges).',
      'Research activities related to adversarial AI attack analysis in collaborative AI scenarios.',
    ],
  },
  {
    period: 'May 2020 – Feb 2023',
    role: 'RPA Developer & Technical Lead',
    where: 'Proyectos formación y servicios S.L.',
    location: 'Remote',
    bullets: [
      'Functional analysis of automatable projects, documentation and development using UiPath.',
      'Analysis and creation of proofs of concept using Low-Code technologies such as Appian or Microsoft Power Apps.',
      'Technical leadership and team management support.',
    ],
  },
  {
    period: 'Jun 2019 – May 2020',
    role: 'System Administrator',
    where: 'Automóviles Rueda, Málaga S.L.',
    location: 'Málaga, Spain',
    bullets: [
      'Management of internal IT incidents, permissions management and server monitoring.',
      'Technical support and training provided to non-technical teams for the ERP migration (from Aswin to ERP Quiter).',
    ],
  },
];

export const education: TimelineEntry[] = [
  {
    period: 'Nov 2024 – Present',
    role: 'Ph.D. in Computer Engineering',
    logo: logos.uma,
    where: 'University of Málaga',
    location: 'Málaga, Spain',
    bullets: ['Specialization in Cybersecurity and Artificial Intelligence.'],
    skills: ['Cybersecurity', 'Artificial Intelligence', 'Adversarial AI', 'Digital Twins'],
  },
  {
    period: 'Oct 2024 – May 2025',
    role: 'C2 English Course for Proficiency Exam Preparation',
    where: 'Cambridge Assessment English',
    bullets: ['Preparation program for the Cambridge English: C2 Proficiency examination.'],
  },
  {
    period: 'Sep 2021 – Jul 2024',
    role: "Master's in Computer Engineering",
    logo: logos.etsi,
    where: 'University of Málaga',
    location: 'Málaga, Spain',
    bullets: [
      'Specialization in Cybersecurity (part-time student).',
      "Master's Thesis developed in collaboration with NICS Lab: early detection tool for interconnected scenarios leveraging LLM technology.",
    ],
    skills: ['Cybersecurity', 'Intrusion Detection', 'Large Language Models'],
  },
  {
    period: 'Aug 2023 – Sep 2023',
    role: 'XXII International School on Foundations of Security Analysis and Design (FOSAD)',
    where: 'University Residential Center of Bertinoro',
    location: 'Bertinoro, Italy',
    bullets: ['Advanced coursework in Computer and Information Systems Security / Information Assurance.'],
  },
  {
    period: 'May 2023 – Jul 2023',
    role: 'University Expert in Reverse Engineering and Malware Intelligence',
    logo: logos.uma,
    where: 'University of Málaga',
    location: 'Málaga, Spain',
    bullets: ['Static and dynamic malware analysis, automated identification and reverse engineering.'],
    skills: ['Malware Analysis', 'Reverse Engineering'],
  },
  {
    period: 'Sep 2015 – Oct 2020',
    role: "Bachelor's in Computer Engineering",
    logo: logos.etsi,
    where: 'University of Málaga',
    location: 'Málaga, Spain',
    bullets: [
      'Mention in Computer Science.',
      'Final Degree Project developed in collaboration with the Centre for Applied Social Research (CISA): web platform transforming survey form structures into multiplatform interactive models.',
    ],
  },
  {
    period: 'Aug 2017 – Aug 2018',
    role: 'International Mobility Student',
    where: "Duksung Women's University",
    location: 'Seoul, South Korea',
    bullets: [
      'Scholarship awarded by the University of Málaga.',
      'Key coursework included Cybersecurity for Information Systems and Cryptography.',
    ],
  },
];

export const awards: TimelineEntry[] = [
  {
    period: 'Mar 2026',
    role: "International Award for Best Master's Thesis",
    where: 'Smart Rural IoT and Secured Environments (C056/23-UNED), in collaboration with INCIBE',
    summary:
      "Awarded for the Master's Thesis “Early Detection of Anomalies and Intrusions in Interconnected Systems”, supervised by María Cristina Alcaraz Tello and Francisco Javier López Muñoz, in collaboration with the National Cybersecurity Institute of Spain (INCIBE).",
  },
];

export const certifications: TimelineEntry[] = [
  {
    period: 'Sep 2024',
    role: 'Certificate in Advanced English (C1)',
    where: 'Cambridge University Press & Assessment',
    summary: 'Credential ID: C8687299',
  },
];

export const languages = [
  { name: 'Spanish', level: 'Native' },
  { name: 'English', level: 'Advanced – Proficiency' },
  { name: 'Korean', level: 'Basic – Intermediate' },
];

export const researchInterests = [
  'Adversarial AI',
  'Adversarial attack detection',
  'Cybersecurity Digital Twins',
  'Critical Infrastructures',
  'Intrusion Detection Systems',
  'Smart Grids',
];
