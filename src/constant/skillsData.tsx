import React from "react";

import {
  FaGitAlt,
  FaGithub,
  FaPython,
  FaJava,
  FaLaptopCode,
  FaRobot,
  FaGaugeHigh,
  FaTruckMoving,
  FaCodeBranch,
  FaBookOpen,
} from "react-icons/fa6";

import {
  SiMysql,
  SiPostman,
  SiVercel,
  SiDocker,
  SiJupyter,
} from "react-icons/si";

import { GiBrain } from "react-icons/gi";
import { MdApi } from "react-icons/md";
import { TbBrandCpp } from "react-icons/tb";

interface LogoProps {
  title: string;
  logoComponent: React.FC;
  color?: string;
}

interface SkillsDataProps {
  title: string;
  data: LogoProps[];
}

export const skillsData: SkillsDataProps[] = [
  {
    title: "Programming & Data",
    data: [
      { title: "Python", logoComponent: FaPython, color: "#3776AB" },
      { title: "C++", logoComponent: TbBrandCpp, color: "#00599C" },
      { title: "Java", logoComponent: FaJava, color: "#007396" },
      { title: "SQL", logoComponent: SiMysql, color: "#4479A1" },
    ],
  },
  {
    title: "Machine Learning & AI",
    data: [
      { title: "Machine Learning", logoComponent: GiBrain, color: "#3F51B5" },
      { title: "Deep Learning", logoComponent: GiBrain, color: "#673AB7" },
      { title: "Neural Networks", logoComponent: GiBrain, color: "#512DA8" },
      { title: "Computer Vision", logoComponent: FaRobot, color: "#009688" },
      {
        title: "Natural Language Processing",
        logoComponent: FaBookOpen,
        color: "#2196F3",
      },
    ],
  },
  {
    title: "Modeling & Systems",
    data: [
      { title: "BERT / GPT", logoComponent: FaBookOpen, color: "#1E88E5" },
      { title: "EfficientNet / BiFPN", logoComponent: GiBrain, color: "#FF9800" },
      { title: "Audio & TTS Pipelines", logoComponent: FaRobot, color: "#9C27B0" },
      {
        title: "Performance Optimization",
        logoComponent: FaGaugeHigh,
        color: "#388E3C",
      },
    ],
  },
  {
    title: "APIs, Tools & Deployment",
    data: [
      { title: "REST APIs", logoComponent: MdApi, color: "#5C2D91" },
      { title: "Postman", logoComponent: SiPostman, color: "#FF6C37" },
      { title: "Docker", logoComponent: SiDocker, color: "#2496ED" },
      { title: "Jupyter / Colab", logoComponent: SiJupyter, color: "#F37626" },
      { title: "Vercel", logoComponent: SiVercel, color: "#d4d4d8" },
    ],
  },
  {
    title: "Engineering Practices",
    data: [
      { title: "Git", logoComponent: FaGitAlt, color: "#F05032" },
      { title: "GitHub", logoComponent: FaGithub, color: "#d4d4d8" },
      {
        title: "Version Control",
        logoComponent: FaCodeBranch,
        color: "#4CAF50",
      },
      {
        title: "CI/CD Pipelines",
        logoComponent: FaTruckMoving,
        color: "#0A66C2",
      },
      {
        title: "Production ML Systems",
        logoComponent: FaLaptopCode,
        color: "#607D8B",
      },
    ],
  },
];
