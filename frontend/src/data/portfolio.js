export const profile = {
  name: 'Mopuri Yaswanth',
  role: 'Java Developer',
  headline: 'Java developer focused on practical, user-friendly software.',
  summary: 'B.Tech Computer Science and Engineering graduate with experience in full-stack development, Java and Spring Boot APIs, database-driven applications, and machine-learning project work. I enjoy turning real requirements into reliable, user-friendly software.',
  location: 'Kadapa, Andhra Pradesh, India',
  email: 'yaswanthmopuri2004@gmail.com',
  phone: '+91-7989065960',
  github: 'https://github.com/MOPURIYASWANTH',
  linkedin: 'https://linkedin.com/in/Mopuri-yaswanth',
  resumePath: '/resume.pdf',
  photoPath: '/profile-yaswanth.png'
};

export const skills = [
  { group: 'Programming', items: ['Java', 'JavaScript', 'SQL'] },
  { group: 'Backend', items: ['Spring Boot', 'Spring Data JPA', 'Hibernate', 'REST APIs', 'JDBC', 'JSP', 'Servlets'] },
  { group: 'Frontend', items: ['HTML', 'CSS', 'JavaScript'] },
  { group: 'Database & Tools', items: ['MySQL', 'Git', 'GitHub', 'Maven', 'Eclipse', 'VS Code', 'Postman', 'Apache Tomcat'] }
];

export const projects = [
  {
    title: 'AutoCare',
    type: 'Vehicle Service Management System',
    image: '/project-images/autocare-screenshot.png',
    imageAlt: 'AutoCare vehicle service management dashboard screenshot',
    description: 'A vehicle service platform that organizes customer registration, vehicle records, service bookings, mechanic assignment, invoices, and payments.',
    details: ['Designed a layered Controller, Service, Repository, DTO and Entity structure', 'Modeled MySQL relationships and booking status tracking', 'Added exception handling, invoice validation and duplicate-payment prevention'],
    stack: ['Java 21', 'Spring Boot', 'Spring Data JPA', 'Hibernate', 'REST APIs', 'MySQL'],
    repo: '', demo: '', icon: 'wrench', featured: true
  },
  {
    title: 'Foodify',
    type: 'Full-Stack Food Ordering System',
    image: '/project-images/foodify-screenshot.png',
    imageAlt: 'Foodify food ordering application screenshot',
    description: 'A food ordering experience with account authentication, restaurant and menu browsing, favorites, cart, checkout, orders, and order history.',
    details: ['Built JSP/Servlet request handling with JDBC and DAO architecture', 'Implemented session handling, quantity updates and accurate billing', 'Designed responsive restaurant discovery and order-management screens'],
    stack: ['Java', 'JSP', 'Servlets', 'JDBC', 'MySQL', 'HTML', 'CSS', 'JavaScript'],
    repo: '', demo: '', icon: 'utensils', featured: true
  },
  {
    title: 'Job Portal',
    type: 'Full-Stack Job Search Application',
    image: '/project-images/job-portal.svg',
    imageAlt: 'Illustration of a job search dashboard',
    description: 'A responsive job-search platform created with a three-person team for GDG Innohacks 2K25, supporting job listings and filtering.',
    details: ['Built responsive interfaces using HTML, CSS and Bootstrap', 'Connected application features to MySQL-backed job listings', 'Earned runner-up position among 50+ competing teams'],
    stack: ['JavaScript', 'HTML5', 'CSS3', 'Bootstrap', 'MySQL', 'GitHub'],
    repo: '', demo: '', icon: 'briefcase', featured: true
  },
  {
    title: 'Smart Grid Attack Detection',
    type: 'Final-Year Machine Learning Project',
    image: '/project-images/smart-grid.svg',
    imageAlt: 'Illustration of a smart electrical grid and analytics',
    description: 'A smart-grid false data injection attack detection project that accepts uploaded data and presents model predictions through a web application.',
    details: ['Used LASSO regression for feature selection', 'Explored Random Forest, AdaBoost, CNN-LSTM and GNN models', 'Integrated LIME explanations and a Flask interface for data upload and result visualization'],
    stack: ['Python', 'Flask', 'LASSO', 'Random Forest', 'AdaBoost', 'CNN-LSTM', 'GNN', 'LIME'],
    repo: '', demo: '', icon: 'activity', featured: false
  }
];

export const experience = [
  {
    role: 'Java Full Stack Developer Intern',
    organization: 'Tap Academy',
    period: '6-month internship',
    bullets: [
      'Practiced Core Java, JDBC, Servlets, JSP, Spring Boot, Hibernate and MySQL through full-stack development work.',
      'Developed and tested REST APIs using Spring Boot and Spring Data JPA, connecting backend services to MySQL.',
      'Worked with relational data design, SQL queries and Hibernate/JPA entity mapping for CRUD operations.'
    ],
    tags: ['Java', 'Spring Boot', 'Hibernate/JPA', 'REST APIs', 'MySQL']
  },
  {
    role: 'Full Stack Developer Intern',
    organization: 'SmartBridge',
    period: 'Internship',
    bullets: [
      'Worked on responsive web application development across frontend and backend tasks.',
      'Practiced integrating REST APIs between web interfaces and backend services to support dynamic data updates.',
      'Worked with relational data design and MySQL queries for application data management.'
    ],
    tags: ['HTML', 'CSS', 'JavaScript', 'Bootstrap', 'REST APIs', 'MySQL']
  }
];

export const achievements = [
  {
    title: 'Hackathon Runner-Up — GDG Innohacks 2K25',
    date: 'March 2025',
    description: 'Secured 2nd position among 50+ competing teams while building and demonstrating a full-stack application with a 3-person team.'
  }
];

export const education = {
  degree: 'Bachelor of Technology in Computer Science and Engineering',
  institution: 'Sri Venkateswara College of Engineering, Tirupati',
  period: '2022–2026',
  score: 'CGPA: 8.41/10'
};

export const certifications = [
  'Full Stack Web Development — Tap Academy (September 2026)',
  'SQL and Database Management — Udemy (November 2024)',
  'Java Programming — Udemy (April 2024 – January 2025)'
];
