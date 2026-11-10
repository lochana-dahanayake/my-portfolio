import type { IconType } from 'react-icons';
import { FaBook, FaCar, FaHeartbeat, FaMusic, FaChalkboardTeacher, FaSearch, FaShieldAlt, FaEnvelopeOpenText, FaHospital, FaSitemap, FaLayerGroup, FaBookOpen, FaBell, FaClipboardList, FaBoxes } from 'react-icons/fa';
export interface PersonalData {
  name: string;
  title: string;
  bio: string;
  introduction: string;
  education: {
    school: string;
    degree: string;
    period: string;
    location?: string;
    stream?: string;
    description: string;
    resultsPdf?: string;
  }[];
  sports: {
    name: string;
    achievements: string;
    duration: string;
    years?: string;
  }[];
  art: {
    mediums: string[];
    achievements: string;
  };
  clubs: {
    name: string;
    organization: string;
    role: string;
    period: string;
    highlights: string[];
  }[];
  socialLinks: {
    platform: string;
    url: string;
    icon: string;
  }[];
}

export interface ArtPiece {
  id: number;
  title: string;
  imageUrl: string;
}

export interface ProjectMedia {
  type: 'image' | 'video';
  url: string;
  caption: string;
}

export interface Project {
  id: number;
  title: string;
  description: string;
  tags: string[];
  icon: IconType;
  githubUrl: string;
  additionalGithubUrls?: string[];
  /** The deployed app, when there is one. */
  liveUrl?: string;
  media: ProjectMedia[];
}

export const personalData: PersonalData = {
  name: "Lochana Kavindu Dahanayake",
  title: "Student | Developer | Tinkerer",
  bio: "Exploring software engineering, building practical solutions, and continuously improving through every project.",
  introduction: "Technology, music, and sports are a few things that always find their way into my world. Most of the time, it's about exploring creative ideas, building fun little projects, or making useful tools that make everyday life a bit easier. A bit of a perfectionist who likes things organized, well thought out, and done properly. Always curious to learn something new, especially through hands-on projects and learning from others. And through all of this, one thing stays constant: music in the background, no matter what's going on.",
  education: [
    {
      school: "D.S. Senanayake College",
      degree: "Advanced Level (A/L)",
      period: "2022",
      location: "Colombo 7, Sri Lanka",
      stream: "Commerce Stream",
      description: "Completed Advanced Level examinations in Commerce stream. This curriculum provided a strong foundation for my higher education and offered valuable insights into business and economic environments."
    },
    {
      school: "SLIIT (Sri Lanka Institute of Information Technology)",
      degree: "BSc (Hons) in Information Technology, Specialising in Software Engineering",
      period: "2024 - Present",
      location: "Sri Lanka",
      description: "Currently pursuing a BSc (Hons) in Information Technology, Specialising in Software Engineering, applying academic knowledge to solve real-world problems through hands-on project work.",
      resultsPdf: "/results.pdf"
    }
  ],
  sports: [
    {
      name: "Swimming",
      achievements: "Competed at school sports meets and at the national level, representing my school in All Sri Lanka Inter-School Tournaments — two years of consistent training and preparation.",
      duration: "2 years",
      years: "2014 - 2015"
    },
    {
      name: "Cricket",
      achievements: "Played for the Under-13 A team and Under-15 C Team over a five-year period. Participating in numerous school cricket tournaments was a great experience in learning about teamwork, sportsmanship and sports skills.",
      duration: "5 years",
      years: "2015 - 2019"
    }
  ],
  art: {
    mediums: ["Pencil Arts", "Pastels"],
    achievements: "My passion for art, expressed through working with pencil and pastels, has led to winning titles in several art competitions throughout my school career."
  },
  clubs: [],
  socialLinks: [
    {
      platform: "Email",
      url: "mailto:loch214@gmail.com",
      icon: "mail"
    },
    {
      platform: "GitHub",
      url: "https://github.com/lochana-dahanayake",
      icon: "github"
    },
    {
      platform: "LinkedIn",
      url: "https://www.linkedin.com/in/lochana-dahanayake-211034372",
      icon: "linkedin"
    }
  ]
};

export const artData: ArtPiece[] = [
  {
    id: 1,
    title: "Pencil Sketch on Paper",
    imageUrl: "/art/piece1.jpeg"
  },
  {
    id: 2,
    title: "Digital Abstract Art",
    imageUrl: "/art/piece2.png"
  },
  {
    id: 3,
    title: "Pastel Landscape",
    imageUrl: "/art/piece3.jpeg"
  }
];

export const projectsData: Project[] = [
  {
    id: 13,
    title: "Story-sim",
    description: "Story-sim turns one changed rule of reality into a short picture book. You type a \"what if\", like the moon being twice as close to Earth, and it checks it understood you before writing anything. Gemini then works out the knock-on effects of the rule and writes a 12-page story from the most interesting ones, and Cloudflare Workers AI draws a picture for every page. The first chapter fixes an art style that every later chapter reuses, so you can add another rule to the same world and the pictures still look like one book. Everything is kept in your browser, with no accounts and no server database.",
    tags: ["TypeScript", "Next.js", "React", "Tailwind CSS", "Gemini", "Cloudflare Workers AI", "IndexedDB"],
    icon: FaBookOpen,
    githubUrl: "https://github.com/lochana-dahanayake/story-sim",
    liveUrl: "https://story-sim.vercel.app",
    media: [
      { type: 'video', url: 'https://www.youtube.com/embed/278FYoei_fg', caption: 'Walkthrough: typing a rule, then reading the picture book it becomes.' },
    ]
  },
  {
    id: 14,
    title: "CourseWeb Notifications Filter",
    description: "SLIIT's CourseWeb shows every student the notifications for every group, campus and batch, so your own deadlines get buried among everyone else's. This browser extension reads each title, works out who it's meant for, and hides the ones that aren't for your group in the notification bell and the timeline, and the bell count only includes your own unread notifications. On module pages it greys other groups' activities out instead of hiding them, so you can still open anything. It never clicks, submits or marks anything as read. There's also a matching set of Outlook rules for the CourseWeb emails.",
    tags: ["JavaScript", "Browser Extension", "Manifest V3", "Outlook Rules"],
    icon: FaBell,
    githubUrl: "https://github.com/lochana-dahanayake/courseweb-notifications-filter",
    media: [
      { type: 'video', url: 'https://www.youtube.com/embed/iwl-yqYkWDQ', caption: 'On the real CourseWeb: changing the sub-group, campus and batch, and the module page showing which lab link is yours.' },
    ]
  },
  {
    id: 12,
    title: "Tech Stack Advisor",
    description: "Tech Stack Advisor is the companion to Architecture Advisor. Once you know the shape of your system, it recommends the tools to build it with: a language, a frontend, a backend, a database and hosting that work together. You answer a few questions about the project, the team and the budget, and a fixed set of rules built from published books, official docs and developer surveys ranks the options with scores and reasons you can see. Every fact carries its source and the date it was checked, and the same answers always give the same result. An AI model then explains the stack in plain words and can only nudge a few scores a little; the app works fully with the AI turned off.",
    tags: ["TypeScript", "Next.js", "React", "Tailwind CSS", "Vitest", "Playwright", "AI"],
    icon: FaLayerGroup,
    githubUrl: "https://github.com/lochana-dahanayake/tech-stack-advisor",
    liveUrl: "https://tech-stack-advisor-one.vercel.app",
    media: [
      { type: 'video', url: 'https://www.youtube.com/embed/B5gsfuyz2Ac', caption: 'Walkthrough: from the questions to a recommended stack with its AI explanation.' },
    ]
  },
  {
    id: 11,
    title: "Architecture Advisor",
    description: "Architecture Advisor is a free web app that helps you pick a software architectural style for a system you're planning. You describe what matters to you, like scalability, cost or how fast the team needs to ship, and it ranks 13 styles with scores you can see. The ranking comes from a fixed set of rules built on published architecture books, so the same answers always give the same result. An AI model then writes a plain explanation and can only nudge each score a little, and the app still works fully if the AI is turned off.",
    tags: ["TypeScript", "Next.js", "React", "Tailwind CSS", "Vitest", "AI"],
    icon: FaSitemap,
    githubUrl: "https://github.com/lochana-dahanayake/architecture-advisor",
    liveUrl: "https://architecture-advisor-pink.vercel.app",
    media: [
      { type: 'video', url: 'https://www.youtube.com/embed/fHSjsP3lNMc', caption: 'Walkthrough: describing a project and comparing the ranked architecture styles.' },
    ]
  },
  {
    id: 10,
    title: "CareLanka Hospital Management System",
    description: "CareLanka is our group project for the Year 3 Semester 1 SE3090 module. It brings four parts of a hospital (emergency, staff, equipment and patients) into one system, and each part has its own AI agent. The agents run a step-by-step loop we wrote ourselves in C# on top of Google Gemini: they look up live hospital data through a short list of read-only tools, weigh the options and draft a suggestion, like which ambulance to send or how to reply to a patient. They can never change records themselves. Fixed rules check every suggestion twice, a person approves it before anything happens, and if Gemini is down the agents fall back to plain rules. I built the patient part, including its agent that drafts replies to patient messages for a doctor or nurse to review. Staff use a React website, patients and ambulance crews use a Flutter phone app, and both talk to one shared .NET backend.",
    tags: ["AI Agents", "Gemini", "C#", ".NET", "React", "Flutter", "PostgreSQL"],
    icon: FaHospital,
    githubUrl: "https://github.com/lochana-dahanayake/carelanka",
    liveUrl: "https://carelanka.vercel.app",
    media: [
      { type: 'video', url: 'https://www.youtube.com/embed/O3VtEQj4WMc', caption: 'Walkthrough of CareLanka across the staff website and the phone app.' },
    ]
  },
  {
    id: 15,
    title: "Complaint Management System",
    description: "This is a group project: a complaint management system that several companies share. Customers and employees file complaints against a company and attach evidence, the super admin reviews each one and assigns it to an admin, and the case then moves through departments to a resolution, with chat and internal notes along the way. Customers, employees, company admins, department users, admins and the super admin each get their own portal and only see what their role allows. The live demo starts with sample data and resets whenever it restarts; you can sign in as the customer cust_kavindi (Customer@123) or an admin, admin_nimal (Admin@123).",
    tags: ["Java", "Spring Boot", "Spring Security", "MySQL", "JavaScript", "Bootstrap"],
    icon: FaClipboardList,
    githubUrl: "https://github.com/lochana-dahanayake/company-complaint-system",
    liveUrl: "https://company-complaint-system.onrender.com",
    media: [
      { type: 'video', url: 'https://www.youtube.com/embed/HcOH_accfX4', caption: 'Walkthrough: a customer files a complaint, the super admin assigns it and an admin picks it up.' },
    ]
  },
  {
    id: 1,
    title: "Chapterly E-commerce Bookstore",
    description: "Chapterly Bookstore was my first real shot at building a full-stack app on my own. It’s basically an online bookstore where you can browse, add items to a cart, and check out. Since I was still learning and didn't know much about databases, I didn't use a real one—I just saved data in memory or files. That made it pretty limited, but it helped me understand how to connect the frontend to the backend and manage user actions.",
    tags: ["Java", "Spring Boot", "Thymeleaf", "MySQL", "Maven"],
    icon: FaBook,
    githubUrl: "https://github.com/lochana-dahanayake/Chapterly-Bookstore",
    media: [
      { type: 'video', url: 'https://www.youtube.com/embed/7IeUJAgBgwY', caption: 'A full video walkthrough of the Chapterly Bookstore.' },
    ]
  },
  {
    id: 2,
    title: "Learn Mate System",
    description: "This is the project I built for the Year 2 Semester 1 SE2030 module. It's a simple management platform with separate dashboards for students, teachers, and admins. The main focus was on role-based access and actions, so each type of user only sees and does what they are allowed to inside the system. The live demo starts with sample classes and students and resets whenever it restarts; you can sign in as the admin, admin (Admin@12345), or a student, student1 (Student@123).",
    tags: ["Java", "Spring Boot", "Thymeleaf", "MySQL"],
    icon: FaChalkboardTeacher,
    githubUrl: "https://github.com/lochana-dahanayake/learn-mate-system",
    liveUrl: "https://learn-mate-system.onrender.com",
    media: [
      { type: 'video', url: 'https://www.youtube.com/embed/B6u5wYHMLtw', caption: 'Full walkthrough showing role-based flows inside Learn Mate.' },
    ]
  },
  {
    id: 16,
    title: "IMS-185 Inventory Management System",
    description: "IMS-185 was our group project for the OOP module: a web app for keeping track of stock. You add items with a quantity, price and expiry date, search them, sort them so the ones expiring soonest come first, and get alerts when stock runs low, along with simple reports and an analytics page. There's no database; everything is saved to text files, and the list of recently changed items runs on a stack we wrote ourselves. To try the live demo, sign up first; it starts with some sample stock and resets whenever it restarts.",
    tags: ["Java", "Servlets", "JSP", "Tomcat", "OOP"],
    icon: FaBoxes,
    githubUrl: "https://github.com/lochana-dahanayake/Inventory-Stock-Management-System",
    liveUrl: "https://ims-185-inventory.onrender.com",
    media: [
      { type: 'video', url: 'https://www.youtube.com/embed/hYrp-8Ek4E8', caption: 'Walkthrough: signing up, adding an item, then search, sorting, alerts and reports.' },
    ]
  },
  {
    id: 3,
    title: "Car Brand Detection API",
    description: "This was an experiment to see if I could build and deploy a real-time AI service entirely on my own. The biggest challenge by far was training a YOLOv5 model on my personal laptop. With a limited dataset and hardware, the model's accuracy is not high enough for a production environment. However, i did engineering the complete pipeline: training the model, diagnosing its weaknesses, and deploying it as a stable REST API using FastAPI.",
    tags: ["Python", "FastAPI", "YOLOv5", "PyTorch", "Computer Vision"],
    icon: FaCar,
    githubUrl: "https://github.com/lochana-dahanayake/car-brand-detection-API",
    media: [
      { type: 'video', url: 'https://www.youtube.com/embed/XdOVrvLiZUE', caption: 'Live demo showing the API identifying car brands in real-time.' },
      { type: 'video', url: 'https://www.youtube.com/embed/-Wu_t6wKU9w', caption: 'Short video covering the 150-epoch model training workflow.' },
    ]
  },
  {
    id: 4,
    title: "AI Diabetes Prediction",
    description: "I built this during our second-year AIML module as a first try at a full machine learning pipeline. I used a Random Forest model and got around 90% accuracy, but that only came after a lot of data cleaning, preprocessing, and tuning with GridSearchCV. Most of the work was actually on getting the dataset into a usable state before training.",
    tags: ["Python", "Machine Learning", "Scikit-learn", "Random Forest"],
    icon: FaHeartbeat,
    githubUrl: "https://github.com/lochana-dahanayake/AI-Diabetes-Prediction",
    media: [
      { type: 'video', url: 'https://www.youtube.com/embed/UjL3vI7j3Bk', caption: 'Google Colab run-through from dataset upload to live predictions.' },
    ]
  },
  {
    id: 5,
    title: "Song Genre Classifier",
    description: "This project turned out to be a fantastic lesson in the difficulty of machine learning. The goal was to classify songs into 10 genres, but the final model's accuracy topped out around 65%—far from reliable. It frequently confused similar genres like rock and metal. The low performance wasn't a failure, but a discovery: classifying something as subjective as music requires more than standard features. This project taught me more from its shortcomings than any success could have, highlighting the critical importance of feature engineering and the need for deep learning on complex, nuanced data.",
    tags: ["Python", "Machine Learning", "Streamlit", "Librosa", "Scikit-learn"],
    icon: FaMusic,
    githubUrl: "https://github.com/lochana-dahanayake/Song-GenreClassifier",
    media: [
      { type: 'video', url: 'https://youtube.com/embed/your-video-id', caption: 'A video showing the Streamlit app classifying different songs.' },
      { type: 'image', url: '/projects/genre-1.png', caption: 'The user interface of the genre classification app.' },
    ]
  },
  {
    id: 8,
    title: "Phish-Hawk V1",
    description: "This tool analyzes suspicious emails to spot phishing attempts. A user can upload an email file (.eml, .pdf) or paste its raw text. The application then scans for common red flags. It checks for technical issues like faked sender addresses and misleading links that point to different domains than the sender's. It also uses Apache PDFBox to read and analyze the text inside PDF attachments. The backend is built with Java and Spring Boot, serving a REST API. The frontend is a simple static page using HTML, CSS, and vanilla JavaScript to interact with the API. The main limitation is its reliance on a fixed keyword list, which can incorrectly flag legitimate emails (false positives). The next step is to replace this keyword-based logic with a trained AI model that can understand the context of the email for more accurate threat detection.",
    tags: ["Java", "Spring Boot", "HTML", "CSS", "JavaScript", "Apache PDFBox", "Security"],
    icon: FaEnvelopeOpenText,
    githubUrl: "https://github.com/lochana-dahanayake/Phish-Hawk",
    media: [
      { type: 'video', url: 'https://www.youtube.com/embed/7S0rk_1c0Nc', caption: 'Demo showing how Phish-Hawk flags phishing emails.' }
    ]
  },
  {
    id: 9,
    title: "Phish-Hawk V2",
    description: "This project is the next version of Phish-Hawk, upgrading its core logic from a simple keyword-checker to a smart AI model. While users still upload files or paste text just like in V1, the analysis is now far more intelligent.\nThe biggest change was replacing the old, rigid keyword system that caused false positives. I built a custom deep learning model in Python using PyTorch, training it on over 190,000 real emails. This new \"brain\" can now understand the context of an email, making it much better at spotting real phishing patterns while ignoring legitimate messages.\nTo make this work, I re-architected the project into two parts: the main Java/Spring Boot application and a separate Python microservice (using FastAPI) that serves the AI model. The Java app calls the Python service to get an analysis, showing how different technologies can work together in a modern application. The result is a more accurate and powerful Phish-Hawk that fixes the main limitation of the original version.",
    tags: ["Java", "Spring Boot", "Python", "FastAPI", "PyTorch", "Microservices", "AI", "Security"],
    icon: FaEnvelopeOpenText,
    githubUrl: "https://github.com/lochana-dahanayake/phish-hawk-v2.git",
    additionalGithubUrls: ["https://github.com/lochana-dahanayake/phish-hawk-AI"],
    media: [
      { type: 'video', url: 'https://www.youtube.com/embed/ATui4X2aVi4', caption: 'YouTube demo for Phish-Hawk V2' }
    ]
  },
  {
    id: 7,
    title: "Lens Lock Metadata Tool",
    description: "Lens-Lock is a digital privacy tool that scans images for hidden metadata like GPS coordinates and device details. Users can visualize the location on a map and download a sanitized \"safe\" version with the data removed. Built with Java Spring Boot, React, and Tailwind CSS.",
    tags: ["Java", "Spring Boot", "React", "Tailwind CSS", "Privacy"],
    icon: FaShieldAlt,
    githubUrl: "https://github.com/lochana-dahanayake/lens-lock-metadata-tool",
    media: []
  }
];

