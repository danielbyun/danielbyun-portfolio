import { v4 as uuidv4 } from "uuid";

const importAll = (directory) => {
  const images = {};

  directory.keys().forEach((item, index) => {
    images[item.replace("./", "")] = directory(item);
  });

  return images;
};

const covid = importAll(
  require.context(
    "../../assets/images/covidTracker",
    false,
    /\.(png|jpe?g|svg)$/
  )
);

export const projects = [
  {
    id: uuidv4(),
    title: "E-Commerce Project",
    demoLink: "https://ecommerce-store-live.herokuapp.com/",
    thumbnail: "",
    shortSummary:
      "This is a demo E-commerce website that is built with React, Redux, Redux-Thunk, Redux-Persist, Stripe API.",
    longSummary: "How should do this",
    images: [],
    tags: [],
    githubLink: "",
  },
  {
    id: uuidv4(),
    title: "MERN DevConnector Project",
    demoLink: "http://mernproject-devconnector.herokuapp.com/",
    thumbnail: "",
    shortSummary:
      "This is a demo social networking website that devs can sign up / sign in and upload a profile and connect with other developers. This project uses the MERN stack, along with redux, redux-thunk, redux-persist.",
    longSummary: "",
    images: [],
    tags: [
      "React",
      "Redux",
      "Redux-Thunk",
      "Redux-Persist",
      "Mongo",
      "Express",
      "Node.js",
    ],
    githubLink: "",
  },
  {
    id: uuidv4(),
    title: "PPM Tool",
    demoLink: "https://ppmt-react-spring.herokuapp.com/",
    thumbnail: "",
    shortSummary:
      "PPM (Personal Project Management) Tool that lets you register, login and manage your projects and the tasks within those projects.",
    longSummary:
      "This is a project management tool built with Spring Boot, MySQL, React, Redux, and Redux-Thunk.",
    images: [],
    tags: [],
    githubLink: "",
  },
  {
    id: uuidv4(),
    title: "Covid Tracker",
    demoLink: "",
    thumbnail: "",
    shortSummary:
      "This is a covid-19 tracking website that the user can choose a country to see a nice graphic visualization of the covid cases occurring around the world.",
    longSummary: "",
    images: [],
    tags: [],
  },
  {
    id: uuidv4(),
    title: "Socket Chat",
    demoLink: "",
    thumbnail: "",
    shortSummary:
      "This is a chat sample website that the users can join a room and chat in real-time. This project utilizes socket.io, socket.io-client, react, redux, and redux-thunk",
    longSummary: "",
    images: [],
    tags: [],
    githubLink: "",
  },
  {
    id: uuidv4(),
    title: "Flower Store",
    demoLink: "",
    thumbnail: "",
    shortSummary:
      "This is a demo flower shop websiite that includes a store, and an admin panel. This is built with Spring Boot, Spring Security, Hibernate, MySQL, Thymeleaf and JPA.",
    longSummary: "",
    images: [],
    tags: [],
    githubLink: "",
  },
  {
    id: uuidv4(),
    title: "Material UI",
    demoLink: "",
    thumbnail: "",
    shortSummary: "",
    longSummary: "",
    images: [],
    tags: [],
    githubLink: "https://github.com/danielbyun/material-ui/",
  },
];
