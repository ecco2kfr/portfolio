const about = {
  title: "Hi 👋 , I am ",
  description:
    "Cybersecurity student at @Efrei with a strong interest in sports, music, and all things tech. I'm currently seeking job opportunities in Paris.",
  github: "https://github.com/ecco2kfr",
  discord: "https://discord.com/users/1323421004357177455",
  mail: "mailto:ecco2kfr@gmail.com",
};

const projects = {
  title: "Projects",
  personalProjects: [
    {
      title: "EvilTwin",
      short: "Fake Wifi including a Captive portal.",
      description:
        "EvilTwin simulates a malicious Wi-Fi network and fake Google login page, mimicking a corporate SSID to demonstrate phishing. Built with HTML/CSS, it showcases my front-end skills for social engineering understanding.",
      technologies: ["#Bash scripting", "#Linux"],
      github: "https://github.com/ecco2kfr/EvilTwin-arch",
      link: null,
    },
    {
      title: "EveryDL",
      short: "Pyhthon-based song downloader.",
      description:
        "EveryDL is a Python-Flask tool to effortlessly download high-quality WAV and MP3 music from YouTube and SoundCloud, offering a seamless audio conversion and saving solution.",
      technologies: ["#HTML", "#CSS", "#Python", "#JavaScript", "#Windows"],
      github: "https://github.com/ecco2kfr/EveryDL",
      link: null,
    },
    {
      title: "Fan2mng",
      short: "Music archive.",
      description:
        "Fan2mng is a digital platform dedicated to preserving Ptite Soeur's music. It offers a curated collection of their songs, exclusively via albums and covers, within a user-friendly interface for fans.",
      technologies: ["#HTML", "#CSS", "#JavaScript", "#Windows"],
      github: null,
      link: "https://web.archive.org/web/20240502093650/https://fan2mng.fr/",
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
        "For a two-month period, I was a cybersecurity intern at Air Liquide. I worked on Rogue AP detection and conducted a cybersecurity awareness presentation for the company. I demonstrated USB recovery, quishing, BadUSB, EvilTwin, and badge theft using Flipper Zero to highlight cybersecurity risks and best practices. I also learnt about VoIP/ToIP, HSTS, Arduino, MFA methods (WebAuthn)",
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
        "#Arduino",
      ],
      python: true,
    },
    {
      title: "Technologies & Softwares",
      skills: [
        "#Git",
        "#AdobePhotoshop",
        "#PostgreSQL",
        "#VMWare Workstation",
        "#VScode",
        "#FileZilla",
        "#Vim",
      ],
      git: true,
    },
    {
      title: "Others",
      skills: ["#Windows", "#Linux", "#Networking tools"],
      archlinux: true,
    },
  ],
};

export { about, projects, experience, skills };
