// Edit the site's content here. Components read from these lists.

export const links = {
  email: 'mailto:canyalec@uoguelph.ca',
  linkedin: 'https://www.linkedin.com/in/chizo-anyalechi-48aa19312/',
  github: 'https://github.com/ChizoromAnyalechi',
  resume: '/resume/Chizorom_Anyalechi_Resume.pdf',
};

export const navItems = [
  { label: 'Home', href: '#' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Work Experience', href: '#work-experience' },
];

export const skills = [
  { category: 'Frontend', items: ['HTML', 'CSS', 'JavaScript', 'React'] },
  { category: 'Backend', items: ['C++', 'Python', 'Java'] },
  { category: 'Hardware', items: ['Arduino', 'VHDL', 'C++'] },
];

export const logos = [
  { src: '/imgs/html.png', alt: 'HTML' },
  { src: '/imgs/css.png', alt: 'CSS' },
  { src: '/imgs/javascript.png', alt: 'JavaScript' },
  { src: '/imgs/vscode.png', alt: 'VSCode' },
  { src: '/imgs/Java-Logo.png', alt: 'Java' },
  { src: '/imgs/VHDL.png', alt: 'VHDL' },
  { src: '/imgs/C++.png', alt: 'C++' },
  { src: '/imgs/C.png', alt: 'C' },
];

export const projects = [
  {
    title: 'Interactive Maps Application',
    image: '/imgs/MapApp.png',
    points: [
      'Designed a user-centered maps interface for navigating Guelph.',
      'Built a responsive front-end with intuitive navigation flow.',
      'Implemented dynamic destination display and route selection.',
      'Improved usability and reduced task steps by ~50%.',
    ],
  },
  {
    title: 'Autonomous Wheelchair',
    image: '/imgs/TBWC.JPG',
    points: [
      'Designed an autonomous wheelchair with obstacle detection.',
      'Modeled mechanical system using AutoCAD.',
      'Integrated sensors and control logic for navigation.',
      'Optimized stability and achieved successful prototype build.',
    ],
  },
  {
    title: 'AI-Assisted IT Help Desk System',
    image: '/imgs/IT_HelpDesk_System.png',
    points: [
      'Built a full-stack IT ticketing system with Flask and SQLite for submitting, tracking, and managing support requests.',
      'Connected the Gemini API to automatically suggest ticket category, priority, and troubleshooting steps.',
      'Added status tracking, input validation, and filtering to keep the workflow organized.',
      'Built in fallback handling so ticketing still works if the AI service goes down.',
    ],
  },
  {
    title: '16-Bit CPU Design and Implementation',
    image: '/imgs/16Bit_CPU.png',
    points: [
      'Designed and built a 16-bit CPU in VHDL supporting 11 instruction types, with a full datapath including ALU, register file, and memory.',
      'Created a custom control unit generating 9 signals to drive R-, I-, and J-type instructions.',
      'Added branch and jump support to enable dynamic program flow.',
      'Verified reliability through simulation waveforms and edge-case testing.',
    ],
  },
  {
    title: 'Autonomous Recycling Vehicle',
    image: '/imgs/CompRobot.png',
    points: [
      'Built an Arduino-based vehicle for the Guelph Engineering Competition to detect and collect recyclable targets in a simulated landfill.',
      'Combined color and distance sensors with DC motors and a custom collection mechanism for autonomous retrieval.',
      'Built a lightweight, reusable chassis for a sustainable, easy-to-disassemble design.',
      'Tested the vehicle to catch wiring and weight issues, then used the findings to improve reliability.',
    ],
  },
];

export const jobs = [
  {
    title: 'Summer Camp Activity Coordinator',
    organization: 'Heartland Church Connected',
    location: 'Mississauga, ON',
    dates: 'Summer 2023',
    image: '/imgs/Heartland.jpg',
    imageAlt: 'Heartland Church Summer Camp',
    points: [
      'Supervised and coordinated daily activities for 50+ children in a team-based environment.',
      'Planned schedules, organized materials, and led group activities to ensure smooth program flow.',
      'Maintained clear communication with staff and participants in a fast-paced setting.',
    ],
  },
];
