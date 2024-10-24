export const navLinks = [
  {
    id: 1,
    name: "Home",
    href: "#home",
  },
  {
    id: 2,
    name: "About",
    href: "#about",
  },
  {
    id: 3,
    name: "Education",
    href: "#work",
  },
  {
    id: 4,
    name: "Contact",
    href: "#contact",
  },
];

export const clientReviews = [
  {
    id: 1,
    name: "Emily Johnson",
    position: "Marketing Director at GreenLeaf",
    img: "assets/review1.png",
    review:
      "lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua obcaecati ipsa assumenda doloremque ipsam eos cupiditate libero fuga provident nemo architecto deserunt magnam praesentium.",
  },
  {
    id: 2,
    name: "Mark Rogers",
    position: "Founder of TechGear Shop",
    img: "assets/review2.png",
    review:
      "lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua obcaecati ipsa assumenda doloremque ipsam eos cupiditate libero fuga provident nemo architecto deserunt magnam praesentium",
  },
  {
    id: 3,
    name: "John Dohsas",
    position: "Project Manager at UrbanTech ",
    img: "assets/review3.png",
    review:
      "lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua obcaecati ipsa assumenda doloremque ipsam eos cupiditate libero fuga provident nemo architecto deserunt magnam praesentium",
  },
  {
    id: 4,
    name: "Ether Smith",
    position: "CEO of BrightStar Enterprises",
    img: "assets/review4.png",
    review:
      "lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua obcaecati ipsa assumenda doloremque ipsam eos cupiditate libero fuga provident nemo architecto deserunt magnam praesentium.",
  },
];

export const myProjects = [
  {
    title: "E-Com Platform",
    desc: "Developed a comprehensive e-commerce platform featuring multiple pages and essential functionalities to enhance user experience and product management.",
    subdesc:
      "Developed a multi-page e-commerce platform using HTML, CSS, JavaScript, and React with user registration, role-based authentication, and full CRUD functionality. Integrated a cart system for easy product management, allowing users to add, update, and remove items, while admins efficiently manage product listings.",
    href: "https://reactshopapp-3ce64.firebaseapp.com/",
    texture: "/textures/project/project1.mp4",
    logo: "/assets/project-logo1.png",
    logoStyle: {
      backgroundColor: "#2A1816",
      border: "0.2px solid #36201D",
      boxShadow: "0px 0px 60px 0px #AA3C304D",
    },
    spotlight: "/assets/spotlight1.png",
    tags: [
      {
        id: 1,
        name: "React.js",
        path: "/assets/react.svg",
      },
      {
        id: 2,
        name: "TailwindCSS",
        path: "assets/tailwindcss.png",
      },
      {
        id: 3,
        name: "firebaseJs",
        path: "/assets/firebase.svg",
      },
      {
        id: 4,
        name: "html",
        path: "/assets/html.svg",
      },
      {
        id: 5,
        name: "css",
        path: "/assets/css.svg",
      },
      {
        id: 6,
        name: "javaScript",
        path: "/assets/javaScript.svg",
      },
    ],
  },
  {
    title: "Let’s Connect",
    desc: "Engineered a real-time chat application utilizing the MERN stack and REST API architecture to deliver seamless communication experiences with security and scalability.",
    subdesc:
      "Integrated JWT authentication for secure user signup and login, ensuring data protection and access control. The app supports one-to-one and group chat features, along with a robust notification system for real-time updates. Additionally, it was successfully scaled to accommodate 10+ concurrent users, ensuring optimal performance and reliability.",
    href: "https://mern-chat-app-q2n6.onrender.com/",
    texture: "/textures/project/project2.mp4",
    logo: "/assets/project-logo2.png",
    logoStyle: {
      backgroundColor: "#13202F",
      border: "0.2px solid #17293E",
      boxShadow: "0px 0px 60px 0px #2F6DB54D",
    },
    spotlight: "/assets/spotlight2.png",
    tags: [
      {
        id: 1,
        name: "React.js",
        path: "/assets/react.svg",
      },
      {
        id: 2,
        name: "TailwindCSS",
        path: "assets/tailwindcss.png",
      },
      {
        id: 3,
        name: "node",
        path: "/assets/node.svg",
      },
      {
        id: 4,
        name: "Chakra Ui",
        path: "/assets/chakraUi.svg",
      },
      {
        id: 5,
        name: "html",
        path: "/assets/html.svg",
      },
      {
        id: 6,
        name: "css",
        path: "/assets/css.svg",
      },
      {
        id: 7,
        name: "javaScript",
        path: "/assets/javaScript.svg",
      },
    ],
  },
  {
    title: " Real-Time Device  Tracker website",
    desc: "An innovative web application which can find location of device ",
    subdesc:
      "Using  Socket.io and geolocation Api it can detect the exact location of device in which it is running . And shown in map using Leaflet Api . All connected users can see each other’s locations in real-time",
    href: "real-time-tracker-w3d0.onrender.com",
    texture: "/textures/project/project3.mp4",
    logo: "/assets/project-logo3.png",
    logoStyle: {
      backgroundColor: "#60f5a1",
      background:
        "linear-gradient(0deg, #60F5A150, #60F5A150), linear-gradient(180deg, rgba(255, 255, 255, 0.9) 0%, rgba(208, 213, 221, 0.8) 100%)",
      border: "0.2px solid rgba(208, 213, 221, 1)",
      boxShadow: "0px 0px 60px 0px rgba(35, 131, 96, 0.3)",
    },
    spotlight: "/assets/spotlight3.png",
    tags: [
      {
        id: 1,
        name: "html",
        path: "/assets/html.svg",
      },
      {
        id: 2,
        name: "css",
        path: "/assets/css.svg",
      },
      {
        id: 3,
        name: "javaScript",
        path: "/assets/javaScript.svg",
      },
    ],
  },
  {
    title: "Snake - Game",
    desc: "A simple traditional Snake game using html , css and javaScript",
    subdesc:
      "A player can play game within the given grid with four directional (Up , Down , Left , Right,) . Also player can see his score and the highest Score",
    href: "https://shiny-gecko-2a8c01.netlify.app/",
    texture: "/textures/project/project4.mp4",
    logo: "/assets/project-logo4.png",
    logoStyle: {
      backgroundColor: "#0E1F38",
      border: "0.2px solid #0E2D58",
      boxShadow: "0px 0px 60px 0px #2F67B64D",
    },
    spotlight: "/assets/spotlight4.png",
    tags: [
      {
        id: 1,
        name: "html",
        path: "/assets/html.svg",
      },
      {
        id: 2,
        name: "css",
        path: "/assets/css.svg",
      },
      {
        id: 3,
        name: "javaScript",
        path: "/assets/javaScript.svg",
      },
    ],
  },
];

export const calculateSizes = (isSmall, isMobile, isTablet) => {
  return {
    deskScale: isSmall ? 0.05 : isMobile ? 0.06 : 0.065,
    deskPosition: isMobile ? [0.5, -4.5, 0] : [0.25, -5.5, 0],
    cubePosition: isSmall
      ? [4, -5, 0]
      : isMobile
      ? [5, -5, 0]
      : isTablet
      ? [5, -5, 0]
      : [9, -5.5, 0],
    reactLogoPosition: isSmall
      ? [3, 4, 0]
      : isMobile
      ? [5, 4, 0]
      : isTablet
      ? [5, 4, 0]
      : [12, 3, 0],
    ringPosition: isSmall
      ? [-5, 7, 0]
      : isMobile
      ? [-10, 10, 0]
      : isTablet
      ? [-12, 10, 0]
      : [-24, 10, 0],
    targetPosition: isSmall
      ? [-5, -10, -10]
      : isMobile
      ? [-9, -10, -10]
      : isTablet
      ? [-11, -7, -10]
      : [-13, -13, -10],
  };
};

export const workExperiences = [
  {
    id: 1,
    name: "Darbhanga College of Engineering",
    pos: "Darbhanga , Bihar",
    duration: "Sep-2018 - Feb-2023",
    title: "B.Tech in Computer Science and Engineering(CGPA : 7.76)",
    icon: "/assets/figma.svg",
    animation: "victory",
  },
  {
    id: 2,
    name: "College of Commerce , Arts and Science",
    pos: "Rajender Nagar , Patna",
    duration: "2015 - 2017",
    title: "Aggergate: 71% ",
    icon: "/assets/figma.svg",
    animation: "clapping",
  },
  {
    id: 3,
    name: "Panchshila Awashiya High School",
    pos: "Kumhrar , Patna",
    duration: "2014 - 2015",
    title: "Aggergate : 80% ",
    icon: "/assets/figma.svg",
    animation: "salute",
  },
];
