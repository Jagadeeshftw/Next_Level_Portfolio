import svg from "./svg";
import reverseSnake from "../Assets/Projects/reverse_snake.png";
import pathVisualization from "../Assets/Projects/path-visual.png";
import timeQuest from "../Assets/Projects/time_quest.png";
import lottery from "../Assets/Projects/lotteryDapp.png";
import nft_ocean from "../Assets/Projects/nft-ocean.png";
import portfolio from "../Assets/Projects/Portfolio.png";

const Projects = [
  {
    Id: 1,
    Title: "NFT Ocean",
    Description:
      "NFT Ocean is your premier destination for discovering, buying, and selling unique digital art on the blockchain, and it is designed to provide artists and collectors with a user-friendly, secure, and immersive platform",
    oneLineDescription:
      "A decentralized marketplace for creating, buying, and selling NFTs",
    Icon: [
      {
        id: 1,
        name: "Polygon",
        purpose: "Blockchain network",
        image: svg.polygon,
      },
      {
        id: 2,
        name: "Solidity",
        purpose: "Smart contract language",
        image: svg.solidity,
      },
      {
        id: 3,
        name: "IPFS",
        purpose: "Decentralized storage",
        image: svg.ipfs,
      },
      {
        id: 4,
        name: "Nextjs",
        purpose: "Superset of React",
        image: svg.nextJs,
      },
      {
        id: 5,
        name: "Typescript",
        purpose: "Superset of JavaScript",
        image: svg.typeScript,
      },
      {
        id: 6,
        name: "Prisma",
        purpose: "Database toolkit",
        image: svg.prisma,
      },
      {
        id: 7,
        name: "Tailwind CSS",
        purpose: "Utility-first CSS framework",
        image: svg.tailwind,
      },
    ],
    Image: nft_ocean,
    DemoLink: "https://nft-ocean.vercel.app/",
    ProjectLink: "https://github.com/Jagadeeshftw/NFT-Ocean",
  },

  {
    Id: 2,
    Title: "Lottery Dapp",
    Description:
      " Decentralized Lottery App aims to create a transparent, secure, fair lottery system using blockchain technology. By leveraging smart contracts, we ensure the lottery is tamper-proof and the results are verifiable.",
    oneLineDescription:
      " A blockchain-based lottery platform ensuring transparency and fairness",
    Icon: [
      {
        id: 1,
        name: "Ethereum",
        purpose: "Blockchain network",
        image: svg.ethereum,
      },
      {
        id: 2,
        name: "Solidity",
        purpose: "Smart contract language",
        image: svg.solidity,
      },
      {
        id: 3,
        name: "Nextjs",
        purpose: "Superset of React",
        image: svg.nextJs,
      },
      {
        id: 4,
        name: "Typescript",
        purpose: "Superset of JavaScript",
        image: svg.typeScript,
      },
      {
        id: 5,
        name: "Tailwind CSS",
        purpose: "Utility-first CSS framework",
        image: svg.tailwind,
      },
    ],
    Image: lottery,
    DemoLink: "decentralizedlottery.netlify.app/",
    ProjectLink: "https://github.com/Jagadeeshftw/Decentralized_Lottery_App",
  },
  {
    Id: 3,
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
        purpose: "Superset of JavaScript",
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
        purpose: "Styling language",
        image: svg.css,
      },
    ],
    Image: portfolio,
    DemoLink: "https://jagadeeshftw.netlify.app/",
    ProjectLink: "https://github.com/Jagadeeshftw/Next_Level_Portfolio",
  },
  {
    Id: 4,
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
        purpose: "Creative coding library",
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
        purpose: "Styling language",
        image: svg.css,
      },
    ],
    Image: pathVisualization,
    DemoLink: "https://jagadeeshftw.github.io/PathVisualization/",
    ProjectLink: "https://github.com/Jagadeeshftw/PathVisualization",
  },
  {
    Id: 5,
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
        purpose: "Creative coding library",
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
        purpose: "Styling language",
        image: svg.css,
      },
    ],
    Image: reverseSnake,
    DemoLink: "https://jagadeeshftw.github.io/Reverse_snake/",
    ProjectLink: "https://github.com/Jagadeeshftw/Reverse_snake",
  },
  {
    Id: 6,
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
