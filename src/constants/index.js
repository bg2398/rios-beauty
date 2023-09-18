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
    meta,
    starbucks,
    tesla,
    shopify,
    gym,
    weather,
    databse,
    threejs,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "services",
      title: "Services",
    },
    {
      id: "contact",
      title: "Contact",

    },
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "React Native Developer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "Front End Developer",
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
  
  // const experiences = [
  //   {
  //     title: "Lead Technician",
  //     company_name: "Tesla",
  //     icon: tesla,
  //     iconBg: "#E6DEDD",
  //     date: "Sep 2021 - Present",
  //     points: [
  //       "Use Git commands to pull logs from the vehicles",
  //       "review vehicle errors in syslogs, add and delete files from the car computer using the command line, Mentor the shop.",
  //       "In charge of assigning the workload to the techs throughout the week.",
  //     ],
  //   },
  // ];
  
  // const testimonials = [
  //   {
  //     testimonial:
  //       "Brandon's gym app has helped me learn more exercises and make my gym experience better!",
  //     name: "Carmen Garcia",
  //     designation: "User",
  //     company: "Brandon's Gym app",
  //     image: "https://randomuser.me/api/portraits/women/4.jpg",
  //   }
  // ];
  
  const projects = [
    {
      name: "Brandon's Gym",
      description:
        "An exercise tutorial app that shows you examples on how to execute the exercises based on the selected muscle category as well as the ability to click on a link that will direct you to youtube on how to execute the selected exercise ",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "Node.js",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        
          
        },
      ],
      image: gym,
      source_code_link: "https://brandonsgym.netlify.app/",
    },
    {
      name: "Weather app",
      description:
        "A weather dashboard with an implemented search bar that let's you check out any city's weather for the week using the OpenWeather API key.",
      tags: [
        {
          name: "JavaScript",
          color: "blue-text-gradient",
        },
        {
          name: "restapi",
          color: "green-text-gradient",
        },
        {
          name: "CSS",
          color: "pink-text-gradient",
        },
      ],
      image: weather,
      source_code_link: "https://bg2398.github.io/Whats-the-weather-today/",
    },
    {
      name: "Employee tracker database",
      description:
        "This is an application ran in the command line to manage a company's employee database. View and manage the departments, roles, and employees in the company so that the user can organize and plan their business",
      tags: [
        {
          name: "mySql",
          color: "blue-text-gradient",
        },
        {
          name: "Node.js",
          color: "green-text-gradient",
        },
        {
          name: "Inquierer",
          color: "pink-text-gradient",
        },
      ],
      image: databse,
      source_code_link: "https://github.com/bg2398/track-employees",
    },
  ];
  
  export { services, technologies, projects };