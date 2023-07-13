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
    image: carrent,
    source_code_link: "https://github.com/roniy68/capstone-rails",
    live_link: "https://capstone-rails.onrender.com"
  },
  {
    name: "Job IT",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
