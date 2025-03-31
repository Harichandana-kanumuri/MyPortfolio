import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.jpg";

export const HERO_CONTENT = `As a Software Developer, I specialize in crafting intuitive user interfaces and developing scalable back-end systems. I am passionate about turning complex concepts into smooth and interactive web experiences. Proficient in modern frameworks like React and Spring Boot, I focus on delivering high-quality, user-centered applications. Let’s collaborate and create something remarkable!`;

export const ABOUT_TEXT = `A results-driven Software Developer with around 7 years of experience in software development and specializing in Java and JavaScript technologies across the Healthcare, Financial, and Retail industries.

Proficient in building scalable, secure, and high-performance applications using Java, Spring Boot, ReactJS, and microservices architecture.

Well-versed in modern frontend frameworks like React and Vue.js, along with backend technologies such as Spring MVC, Spring Security, Hibernate, and RESTful APIs.

Experienced in utilizing AWS services (EC2, S3, RDS, Lambda) and deploying cloud-native solutions with Docker and Kubernetes.

Strong background in Test-Driven Development (TDD), Agile (Scrum) workflows, and collaborating with cross-functional teams to create user-focused applications with high-quality standards.

`;

export const EXPERIENCES = [
  {
    year: "2023 - Present",
    role: "Software Developer",
    company: "Uline-Pleasant Prairie, WI,USA",
    description: `Led a team in developing and maintaining web applications using JavaScript, React.js, and Node.js. I specialize in developing RESTful APIs, integrating cloud services, and optimizing microservices with Kubernetes and Docker. With expertise in database management (Oracle, MySQL, PostgreSQL, Cassandra) and real-time event-driven architectures (Kafka, RabbitMQ), I create high-performance solutions. Passionate about CI/CD automation, security best practices, and Agile methodologies, I thrive in delivering efficient, modern software solutions.`,
    technologies: ["Java", "RESTful Web Services", "Microservices", "Spring Boot", "Spring MVC", "Spring Security", "OAuth2", "JWT", "React", "TypeScript", "RxJS", "Spring Data JPA", "Hibernate", "Oracle", "MySQL", "Cassandra"],
  },
  {
    year: "2021 - 2023",
    role: "Software Developer",
    company: "Legacy Health-Portland, OR,USA",
    description: `Developed responsive web interfaces using Angular, enhancing user accessibility and incorporating dynamic updates with TypeScript best practices. Engineered scalable backend services with Node.js and Express.js, managing APIs and complex data operations. Integrated secure Oracle databases for efficient patient data handling and utilized RabbitMQ for robust message queuing. Deployed applications via Azure Kubernetes Service for optimal container management and system scalability. Conducted rigorous testing with Karma and actively engaged in Agile processes to continuously refine project execution. Implemented and maintained a CI/CD pipeline, automating deployments to ensure consistency and high-quality updates.`,
    technologies: ["Node.js", "Express.js", "Oracle", "RabbitMQ", "Angular", "TypeScript", "Angular Material", "Azure Kubernetes", "Agile Scrum", "CI/CD", 
      "Karma"],
  },
  {
    year: "2019 - 2021",
    role: "Software Developer",
    company: "German American Bank-Jasper, IN, USA",
    description: `Developed responsive and interactive web interfaces using React for banking operations, optimizing user experiences. Implemented backend services with Spring Boot and Hibernate to manage complex transactional data, complemented by RESTful services for seamless front-end to database communication. Utilized Kafka for real-time notifications and deployed the application on AWS, enhancing scalability and reliability via Docker and Kubernetes. Managed MySQL databases and optimized queries to ensure performance and data integrity. Established and monitored a CI/CD pipeline using Jenkins and Maven, significantly reducing downtime and maintaining compliance with financial regulations.`,
    technologies: ["React", "Java", "Spring Boot", "Hibernate", "MySQL", "Kafka", "AWS", "Docker", "Kubernetes", "Maven", "Jenkins"],
  },
  {
    year: "2018 - 2019",
    role: " Software Developer",
    company: "HashTag Technoligies-Coimbatore, India",
    description: `I was involved in the development and enhancement of a Java-based enterprise web application following J2EE architecture to manage business operations efficiently. The application was built using Struts (MVC2 pattern) for clean separation of concerns, with JSP, HTML, and JavaScript for dynamic user interface development. I developed and deployed Servlets on IBM WebSphere Application Server and implemented Spring's Dependency Injection to manage service and DAO layers for better modularity and testability.`,
    technologies: ["J2EE", "JSP", "Servlets", "JDBC", "HTML", "JavaScript", "WebSphere", "Ant", "Oracle", "Eclipse"],
  },
];

export const PROJECTS = [
  {
    title: "Scalable and Secure E-Commerce Platform",
    image: project1,
    description:
      "The project involved developing a robust e-commerce platform for Uline, aimed at enhancing the online shopping experience for customers while ensuring scalability and security. This platform was designed to manage a vast inventory of products and handle high volumes of user interactions and transactions efficiently.",
    technologies: ["HTML", "CSS", "React", "Node.js", "MongoDB"],
  },
  {
    title: "Integrated Patient Care and Operations Platform for Legacy Health",
    image: project2,
    description:
      "Developed a comprehensive application to enhance patient care and streamline operations at Legacy Health. The platform integrates critical features, such as appointment scheduling and medical record access, into a user-friendly interface.",
    technologies: ["HTML", "CSS", "Angular", "Firebase"],
  },
  {
    title: "Secure and Scalable Online Banking Platform for Enhanced Customer Engagement",
    image: project3,
    description:
      "Developed an innovative online banking platform to enhance customer engagement and streamline banking operations. The platform integrated key financial services such as account management, fund transfers, and real-time notifications, focusing on security, scalability, and ease of access.",
    technologies: ["HTML", "CSS", "React", "Bootstrap"],
  },
  {
    title: "Enterprise Web Application",
    image: project4,
    description:
      "A J2EE-based enterprise web application with features like user management, data processing, and client-server communication, using JSP, Servlets, and Struts (MVC2) with Oracle Database integration.",
    technologies: ["HTML", "CSS", "Vue.js", "Express", "mySQL"],
  },
];

export const EDUCATION = [
  { degree: "Master’s in Computer Science", institution: "Missouri State University", duration: "Aug 2023 - Dec 2024" },
  { degree: "Bachelor’s in Computer Science", institution: "Vignan's University" },
];



// src/constants.js
export const SOCIAL_MEDIA_LINKS = [
  { href: "https://github.com/Harichandana-Kanumuri", icon: "github" },
  { href: "https://www.linkedin.com/in/harichandana-kanumuri", icon: "linkedin" },
  { href: "https://medium.com/@chandu.k6798", icon: "medium" },
];


