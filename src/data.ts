// Edit the site's content here. Every tile on the home screen comes from `items`.
import type { IconName } from './components/Icons';

export type Tab = 'projects' | 'about';

export interface Action {
  label: string;
  /** Link to open (new tab for web links and PDFs). */
  href?: string;
  /** Jump to another tile by its id. */
  goto?: string;
  /** Open the detail sheet for this tile. */
  open?: boolean;
  primary?: boolean;
  icon?: IconName;
}

export interface SkillGroup {
  category: string;
  items: string[];
}

export interface Contact {
  label: string;
  value: string;
  href: string;
  icon: IconName;
}

export interface Item {
  id: string;
  tab: Tab;
  /** Short name shown beside the selected tile. */
  label: string;
  kicker: string;
  title: string;
  summary: string;
  /** Colour the background shifts to while this tile is selected. */
  accent: string;
  image?: string;
  imagePosition?: string;
  /** Icon for tiles without an image. */
  icon?: IconName;
  tags?: string[];
  points?: string[];
  skillGroups?: SkillGroup[];
  contacts?: Contact[];
  actions: Action[];
}

export const links = {
  email: 'mailto:canyalec@uoguelph.ca',
  emailAddress: 'canyalec@uoguelph.ca',
  linkedin: 'https://www.linkedin.com/in/chizo-anyalechi-48aa19312/',
  github: 'https://github.com/ChizoromAnyalechi',
  resume: '/resume/Chizorom_Anyalechi_Resume.pdf',
};

export const tabs: { id: Tab; label: string }[] = [
  { id: 'projects', label: 'Projects' },
  { id: 'about', label: 'About Me' },
];

const projectActions: Action[] = [
  { label: 'Open', open: true, primary: true, icon: 'play' },
  { label: 'GitHub profile', href: links.github, icon: 'github' },
];

export const items: Item[] = [
  // ---------- Projects ----------
  {
    id: 'maps',
    tab: 'projects',
    label: 'Maps App',
    kicker: 'Project · Front-end',
    title: 'Interactive Maps Application',
    summary: 'A user-centered maps interface for getting around Guelph, with destination display and route selection.',
    accent: '#22b07d',
    image: '/imgs/MapApp.png',
    tags: ['Front-end', 'UX design', 'Navigation'],
    points: [
      'Designed a user-centered maps interface for navigating Guelph.',
      'Built a responsive front-end with intuitive navigation flow.',
      'Implemented dynamic destination display and route selection.',
      'Improved usability and reduced task steps by ~50%.',
    ],
    actions: projectActions,
  },
  {
    id: 'wheelchair',
    tab: 'projects',
    label: 'Autonomous Wheelchair',
    kicker: 'Project · Robotics',
    title: 'Autonomous Wheelchair',
    summary: 'A wheelchair prototype that detects obstacles and navigates using integrated sensors and control logic.',
    accent: '#4f7cff',
    image: '/imgs/TBWC.JPG',
    tags: ['Robotics', 'AutoCAD', 'Sensors', 'Control logic'],
    points: [
      'Designed an autonomous wheelchair with obstacle detection.',
      'Modeled the mechanical system using AutoCAD.',
      'Integrated sensors and control logic for navigation.',
      'Optimized stability and achieved a successful prototype build.',
    ],
    actions: projectActions,
  },
  {
    id: 'helpdesk',
    tab: 'projects',
    label: 'AI Help Desk',
    kicker: 'Project · Full-stack',
    title: 'AI-Assisted IT Help Desk System',
    summary: 'A ticketing system where the Gemini API suggests a category, priority and troubleshooting steps for each request.',
    accent: '#8b5cf6',
    image: '/imgs/IT_HelpDesk_System.png',
    tags: ['Flask', 'SQLite', 'Gemini API', 'Python'],
    points: [
      'Built a full-stack IT ticketing system with Flask and SQLite for submitting, tracking, and managing support requests.',
      'Connected the Gemini API to automatically suggest ticket category, priority, and troubleshooting steps.',
      'Added status tracking, input validation, and filtering to keep the workflow organized.',
      'Built in fallback handling so ticketing still works if the AI service goes down.',
    ],
    actions: projectActions,
  },
  {
    id: 'cpu',
    tab: 'projects',
    label: '16-Bit CPU',
    kicker: 'Project · Digital design',
    title: '16-Bit CPU Design and Implementation',
    summary: 'A 16-bit CPU built in VHDL, from the ALU and register file to a custom control unit, verified in simulation.',
    accent: '#14b8a6',
    image: '/imgs/16Bit_CPU.png',
    tags: ['VHDL', 'Computer architecture', 'Simulation'],
    points: [
      'Designed and built a 16-bit CPU in VHDL supporting 11 instruction types, with a full datapath including ALU, register file, and memory.',
      'Created a custom control unit generating 9 signals to drive R-, I-, and J-type instructions.',
      'Added branch and jump support to enable dynamic program flow.',
      'Verified reliability through simulation waveforms and edge-case testing.',
    ],
    actions: projectActions,
  },
  {
    id: 'recycling',
    tab: 'projects',
    label: 'Recycling Robot',
    kicker: 'Project · Competition',
    title: 'Autonomous Recycling Vehicle',
    summary: 'An Arduino vehicle built for the Guelph Engineering Competition that finds and collects recyclable targets on its own.',
    accent: '#7cc72a',
    image: '/imgs/CompRobot.png',
    tags: ['Arduino', 'Sensors', 'DC motors', 'Mechanical design'],
    points: [
      'Built an Arduino-based vehicle for the Guelph Engineering Competition to detect and collect recyclable targets in a simulated landfill.',
      'Combined color and distance sensors with DC motors and a custom collection mechanism for autonomous retrieval.',
      'Built a lightweight, reusable chassis for a sustainable, easy-to-disassemble design.',
      'Tested the vehicle to catch wiring and weight issues, then used the findings to improve reliability.',
    ],
    actions: projectActions,
  },

  // ---------- About Me ----------
  {
    id: 'about',
    tab: 'about',
    label: 'Profile',
    kicker: 'Computer Engineering · University of Guelph',
    title: 'Chizorom Anyalechi',
    summary:
      'A Computer Engineering student who loves problem-solving and building practical solutions in software and robotics. My main interests are robotics, software and computer systems.',
    accent: '#2f6bff',
    image: '/imgs/ChizoromAnyalechi.jpg',
    imagePosition: 'center 25%',
    points: [
      'I enjoy tackling complex engineering challenges and building efficient, reliable and scalable systems.',
      'I’m passionate about robotics and AI, especially how they can automate tasks and improve everyday life.',
      'In my free time I design and build technology that makes everyday tasks easier for others.',
    ],
    actions: [
      { label: 'View resume', href: links.resume, primary: true, icon: 'doc' },
      { label: 'Contact', goto: 'contact', icon: 'mail' },
      { label: 'LinkedIn', href: links.linkedin, icon: 'linkedin' },
    ],
  },
  {
    id: 'experience',
    tab: 'about',
    label: 'Experience',
    kicker: 'Work experience · Summer 2023',
    title: 'Summer Camp Activity Coordinator',
    summary: 'Coordinated daily activities for 50+ children at Heartland Church Connected’s summer camp in Mississauga.',
    accent: '#f59e0b',
    image: '/imgs/Heartland.jpg',
    tags: ['Heartland Church Connected', 'Mississauga, ON'],
    points: [
      'Supervised and coordinated daily activities for 50+ children in a team-based environment.',
      'Planned schedules, organized materials, and led group activities to ensure smooth program flow.',
      'Maintained clear communication with staff and participants in a fast-paced setting.',
    ],
    actions: [{ label: 'Open', open: true, primary: true, icon: 'play' }],
  },
  {
    id: 'skills',
    tab: 'about',
    label: 'Skills',
    kicker: 'Toolkit',
    title: 'Skills',
    summary: 'The languages and tools I use across frontend, backend and hardware work.',
    accent: '#e0457b',
    icon: 'stack',
    skillGroups: [
      { category: 'Frontend', items: ['HTML', 'CSS', 'JavaScript', 'React'] },
      { category: 'Backend', items: ['C++', 'Python', 'Java'] },
      { category: 'Hardware', items: ['Arduino', 'VHDL', 'C++'] },
    ],
    actions: [{ label: 'See them in projects', goto: 'maps', primary: true, icon: 'play' }],
  },
  {
    id: 'resume',
    tab: 'about',
    label: 'Resume',
    kicker: 'PDF',
    title: 'Resume',
    summary: 'Education, projects, technical skills and experience, all in one place.',
    accent: '#0ea5e9',
    icon: 'doc',
    actions: [{ label: 'Open resume', href: links.resume, primary: true, icon: 'external' }],
  },
  {
    id: 'contact',
    tab: 'about',
    label: 'Contact',
    kicker: 'Get in touch',
    title: 'Let’s talk',
    summary: 'Reach out about projects, roles, or anything robotics and software.',
    accent: '#10b981',
    icon: 'mail',
    contacts: [
      { label: 'Email', value: links.emailAddress, href: links.email, icon: 'mail' },
      { label: 'LinkedIn', value: 'chizo-anyalechi', href: links.linkedin, icon: 'linkedin' },
      { label: 'GitHub', value: 'ChizoromAnyalechi', href: links.github, icon: 'github' },
    ],
    actions: [
      { label: 'Send email', href: links.email, primary: true, icon: 'mail' },
      { label: 'LinkedIn', href: links.linkedin, icon: 'linkedin' },
      { label: 'GitHub', href: links.github, icon: 'github' },
    ],
  },
];
