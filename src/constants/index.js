import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  carrent,
  jobit,
  tripguide,
  threejs,
  microverse,
  junction,
  weabers,
  drsight
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
  {
    id: "resume",
    title: "Resume"
  }
];

const services = [
  {
    title: "Full Stack Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "NextJS Developer",
    icon: backend,
  },
  {
    title: "Ruby On Rails Developer",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Full Stack Developer",
    company_name: "Microverse ",
    icon: microverse,
    iconBg: "#383E56",
    date: "",
    points: [
      "Developing and maintaining web applications using Ruby on Rails, React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers/junior trainee.",
    ],
  },
  {
    title: "Full stack Developer",
    company_name: "Junction",
    icon: junction,
    iconBg: "#E6DEDD",
    date: "",
    points: [
      "Helped Organize more than 2500+ projects and 20k+ participants",
      "Volunteered 80+ projects. ",
      "Collaborated with 1k+ developers from all over the world.",
      "Performed more than 1000+ Code Reviews and Features",
    ],
  },
  {
    title: "Dev Ops Engineer | CTO",
    company_name: "Weabers",
    icon: weabers,
    iconBg: "#383E56",
    date: "",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "React Native Developer",
    company_name: "Drsight",
    icon: drsight,
    iconBg: "#E6DEDD",
    date: "",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },

];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rony proved me wrong.",
    name: "Salwa",
    designation: "Full Stack Developer",
    company: "Microverse",
    image: "https://avatars.githubusercontent.com/u/110976050?v=4",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rony does.",
    name: "Samu Rotko",
    designation: "CTO",
    company: "Hack Junction",
    image: "https://res.cloudinary.com/dflkan5fc/image/upload/v1689255204/samu-rotko_qhurjj.jpg",
  },
  {
    testimonial:
      "After Rony optimized our website, our traffic increased by 50%. We can't thank him enough!",
    name: "Barry",
    designation: "Full Stack Developer",
    company: "Microverse",
    image: "https://avatars.githubusercontent.com/u/111948881?v=4",
  },
];

const projects = [
  {
    name: "Car Rent / Reserve A Car",
    description:
      "RENTCAR is a collaborative project, it's about luxury car rental platform built with Rails and React. Users can browse and reserve available models, manage reservations, and contribute by adding or deleting cars. It offers a seamless experience for renting luxury cars with ease.",
    tags: [
      {
        name: "react/rails",
        color: "blue-text-gradient",
      },
      {
        name: "postgresql",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: "https://user-images.githubusercontent.com/77187003/247969832-9c8ecfdf-cd89-49ef-8cc0-51e78376fd82.png",
    source_code_link: "https://github.com/roniy68/capstone-rails",
    live_link: "https://capstone-rails.onrender.com"
  },
  {
    name: "Junciton App",
    description:
      "Junction App is a community-driven open source project. We are developing the application in the open and always keened to have contributors for the project. If you find a bug or have a smaller feature please post them to github issues.",
    tags: [
      {
        name: "node/react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: "https://res.cloudinary.com/dflkan5fc/image/upload/v1689256069/Screenshot_2023-07-13_191702_csnkeb.jpg",
    source_code_link: "https://github.com/roniy68/JunctionApp",
    live_link: "https://www.hackjunction.com"
  },
  {
    name: "Make My Trip - Clone",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "MERN_Stack",
        color: "blue-text-gradient",
      },
      {
        name: "NodeMailer/API",
        color: "green-text-gradient",
      },
      {
        name: "MaterialUI/Styled",
        color: "pink-text-gradient",
      },
      {
        name: "Payment/RealtimeAirFetch",
        color: "green-text-gradient",
      },
    ],
    image: "https://camo.githubusercontent.com/569135ccd15942e452264748111b4ef21cd6fefe55ed53119325e095c16e4b95/68747470733a2f2f63646e2e686173686e6f64652e636f6d2f7265732f686173686e6f64652f696d6167652f75706c6f61642f76313633363831393736333337362f7a6a494845424445302e706e67",
    source_code_link: "https://github.com/roniy68/make-my-trip-react-clone",
    live_link: "https://clones.ahroniy.me",
  },
  {
    name: "Web Matrix",
    description:
      "A Monitoring App with Responsive UI. Generate a comprehensive Folder Structure for React App 💻Understand the concept of setting up a project with redux 📈Beautifully designed and easy-to-use 🎨Continuous Monitoring 📸Development Tools : Auto refresh and Hot Reload 🔗",
    tags: [
      {
        name: "React/Redux",
        color: "blue-text-gradient",
      },
      {
        name: "API / Monitor",
        color: "green-text-gradient",
      },
      {
        name: "CSS/SCSS",
        color: "pink-text-gradient",
      },
    ],
    image: "https://res.cloudinary.com/dflkan5fc/image/upload/v1689257003/Screenshot_2023-07-13_193304_kj3v7y.jpg",
    source_code_link: "https://github.com/roniy68/web-matrics",
    live_link: "https://roniy68.github.io/web-matrics/",
  },
  {
    name: "Other Projects",
    description:
      "To See My Other Projects, Keep an EYE on my Github Feed 😇  ",
    tags: [
      {
        name: "Happy Coding",
        color: "blue-text-gradient",
      },
      {
        name: "Opensource",
        color: "green-text-gradient",
      },
      {
        name: "Development",
        color: "pink-text-gradient",
      },
      {
        name: "AHRONIY",
        color: "green-text-gradient",
      },
    ],
    image: "https://avatars.githubusercontent.com/u/77187003?v=4",
    source_code_link: "https://github.com/roniy68",
    live_link: "https://github.com/roniy68/roniy68/blob/master/my_projects.md",
  },
];

export { services, technologies, experiences, testimonials, projects };
