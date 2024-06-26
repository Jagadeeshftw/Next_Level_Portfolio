import svg from "./svg";
import reverseSnake from "../Assets/Projects/reverse_snake.png";
import pathVisualization from "../Assets/Projects/path-visual.png";
import timeQuest from "../Assets/Projects/time_quest.png";
import portfolio from "../Assets/Projects/Portfolio.png";

const Projects = [
  {
    Id: 1,
    Title: "Portfolio",
    Description:
      "Next Level Portfolio is a modern web portfolio crafted using Next.js, featuring a sleek design and interactive elements to highlight professional skills and showcase various projects.",
    oneLineDescription:
      "A stylish and interactive portfolio website built with Next.js showcasing skills and projects.",
    Icon: [
      {
        id: 1,
        name: "Nextjs",
        purpose: "Superset of React",
        image: svg.nextJs,
      },
      {
        id: 2,
        name: "Typescript",
        purpose: "Superset of Javascript",
        image: svg.typeScript,
      },
      {
        id: 3,
        name: "Tailwind CSS",
        purpose: "Utility-first CSS framework",
        image: svg.tailwind,
      },
      {
        id: 4,
        name: "Javascript",
        purpose: "Programming language",
        image: svg.javascript,
      },
      {
        id: 5,
        name: "Framer Motion",
        purpose: "Production-ready motion library",
        image: svg.framer,
      },
      {
        id: 6,
        name: "Html",
        purpose: "Markup language",
        image: svg.html,
      },
      {
        id: 7,
        name: "css",
        purpose: "CSS preprocessor",
        image: svg.css,
      },
    ],
    Image: portfolio,
    DemoLink: "https://jagadeeshftw.netlify.app/",
    ProjectLink: "https://github.com/Jagadeeshftw/Next_Level_Portfolio",
  },
  {
    Id: 2,
    Title: "Path-Visualization",
    Description:
      "Finds a path depending on the algorithm from the starting point to an ending point. A path can be blocked by the user using walls. Generate a maze (Randomized DFS) and apply path-finding algorithms to the maze.",
    oneLineDescription: "Path finding and maze generation using algorithms.",
    Icon: [
      {
        id: 1,
        name: "Javascript",
        purpose: "Programming language",
        image: svg.javascript,
      },
      {
        id: 2,
        name: "p5.js",
        purpose: "Creative coding",
        image: svg.p5Js,
      },
      {
        id: 3,
        name: "Html",
        purpose: "Markup language",
        image: svg.html,
      },
      {
        id: 4,
        name: "Css",
        purpose: "Styling",
        image: svg.css,
      },
    ],
    Image: pathVisualization,
    DemoLink: "https://jagadeeshftw.github.io/PathVisualization/",
    ProjectLink: "https://github.com/Jagadeeshftw/PathVisualization",
  },
  {
    Id: 3,
    Title: "Blockade",
    Description:
      "Its a classic Snake game where you control the food instead of the snake. Utilizing Ts and p5.js, the game features a snake that aggressively follows a shortest path algorithm to reach the food while avoiding obstacles.",
    oneLineDescription:
      "Control the food in a snake game using TypeScript and p5.js.",
    Icon: [
      {
        id: 1,
        name: "Typescript",
        purpose: "Superset of JavaScript",
        image: svg.typeScript,
      },
      {
        id: 2,
        name: "Javascript",
        purpose: "Programming language",
        image: svg.javascript,
      },
      {
        id: 3,
        name: "p5.js",
        purpose: "Creative coding",
        image: svg.p5Js,
      },
      {
        id: 4,
        name: "Html",
        purpose: "Markup language",
        image: svg.html,
      },
      {
        id: 5,
        name: "Css",
        purpose: "Styling",
        image: svg.css,
      },
    ],
    Image: reverseSnake,
    DemoLink: "https://jagadeeshftw.github.io/Reverse_snake/",
    ProjectLink: "https://github.com/Jagadeeshftw/Reverse_snake",
  },
  {
    Id: 4,
    Title: "Ultimate Time Quest",
    Description:
      "It's an exciting and interactive web application designed to challenge your time management skills and precision. Dive into a series of captivating time-based challenges and race against the clock to achieve the highest score",
    oneLineDescription:
      "Interactive time management challenge web application.",
    Icon: [
      {
        id: 1,
        name: "React",
        purpose: "UI library",
        image: svg.react,
      },
      {
        id: 2,
        name: "Javascript",
        purpose: "Programming language",
        image: svg.javascript,
      },
      {
        id: 3,
        name: "Bootstrap",
        purpose: "CSS framework",
        image: svg.bootstrap,
      },
      {
        id: 4,
        name: "Html",
        purpose: "Markup language",
        image: svg.html,
      },
      {
        id: 5,
        name: "Sass",
        purpose: "CSS preprocessor",
        image: svg.scss,
      },
    ],
    Image: timeQuest,
    DemoLink: "https://timequest.netlify.app/#",
    ProjectLink: "https://github.com/Jagadeeshftw/Ultimate_Time_Quest",
  },
];

export default Projects;
