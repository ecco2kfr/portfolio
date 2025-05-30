import eviltwinImg from "../components/img/everyDL.png";
import everydlImg from "../components/img/everyDL.png";
import fan2mngImg from "../components/img/everyDL.png";

const about = {
  title: "Hi 👋 , I am ",
  description:
    "I am a Cybersecurity student at @Efrei. Also, I'm interested in Sports, Music & everything Tech-related :D",
  github: "https://github.com/ecco2kfr",
  instagram: "https://instagram.com/andreaftermath",
  discord: "https://discord.com/users/1323421004357177455",
  mail: "mailto:pnna.andrea@gmail.com",
};

const projects = {
  title: "Projects",
  personalProjects: [
    {
      title: "EvilTwin",
      short: "Fake Wifi including a Captive portal.",
      description:
        "EvilTwin simulates a malicious Wi-Fi network and a fake Google login page. I configured it to mimic a real corporate Wi-Fi SSID, demonstrating a phishing attack. Built entirely with HTML and CSS, this project highlights my ability to create convincing front-end interfaces for understanding social engineering.",
      technologies: ["#Bash scripting", "#Linux"],
      github: "https://github.com/ecco2kfr/EvilTwin-arch",
      imageSrc: eviltwinImg, // Image spécifique à ce projet
    },
    {
      title: "EveryDL",
      short: "Pyhthon-based song downloader.",
      description:
        "EveryDL is a Python-based tool featuring a Flask web server that lets users effortlessly download music from YouTube and SoundCloud. It supports high-quality WAV and MP3 (UHQ) formats, providing a seamless solution for converting and saving audio.",
      technologies: ["#HTML", "#CSS", "#Python", "#JavaScript", "#Windows"],
      github: "https://github.com/ecco2kfr/EveryDL",
      imageSrc: everydlImg, // Image spécifique à ce projet
    },
    {
      title: "Fan2mng",
      short: "Music archive.",
      description:
        "The Fan2mng website is a digital platform dedicated to preserving the music of artist Ptite Soeur. It features a curated collection of their songs, available exclusively through albums and covers, with a user-friendly interface for fans to explore their musical journey.",
      technologies: ["#HTML", "#CSS", "#JavaScript", "#Windows"],
      github: "https://web.archive.org/web/20240502093650/https://fan2mng.fr/",
      imageSrc: fan2mngImg, // Image spécifique à ce projet
    },
  ],
};

const experience = {
  title: "Experience",
  experiences: [
    {
      title: "Cybersecurity Intern",
      company: "Air Liquide",
      duration: "May 2025 - June 2025",
      description:
        "For a two-month period, I was a cybersecurity intern at Air Liquide. I worked on Rogue AP detection and conducted a cybersecurity awareness presentation for the company. During the presentation, I demonstrated USB recovery, quishing, BadUSB, EvilTwin, and badge theft using Flipper Zero to highlight cybersecurity risks and best practices.",
    },
  ],
};

const skills = {
  title: "Skills",
  mySkills: [
    {
      title: "Languages & Frameworks",
      skills: [
        "#HTML",
        "#CSS",
        "#JavaScript",
        "#C",
        "#React.js",
        "#Python",
        "#Lua",
        "#SQL",
        "#Multiple APIs",
        "#PHP",
        "#Bash scripting",
      ],
    },
    {
      title: "Technologies & Softwares",
      skills: [
        "#Git",
        "#AdobePhotoshop",
        "#PostgreSQL",
        "#VMWare Workstation",
        "#VScode",
      ],
    },
    {
      title: "Others",
      skills: ["#Windows", "#Linux", "#Networking tools"],
    },
  ],
};

export { about, projects, experience, skills };
