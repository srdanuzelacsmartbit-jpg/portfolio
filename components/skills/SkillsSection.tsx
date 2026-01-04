import { DiJavascript, DiReact } from "react-icons/di";
import Header from "../general/Header";
import { RiNextjsFill, RiTailwindCssFill } from "react-icons/ri";
import { FaNodeJs } from "react-icons/fa";
import { SiTypescript } from "react-icons/si";
import { BiLogoTypescript } from "react-icons/bi";

const skills = [
  {
    name: "JavaScript",
    icon: <DiJavascript />,
    skillLevel: 85,
  },
  {
    name: "React JS",
    icon: <DiReact />,
    skillLevel: 95,
  },
  {
    name: "Next JS",
    icon: <RiNextjsFill />,
    skillLevel: 90,
  },
  {
    name: "Node JS",
    icon: <FaNodeJs />,
    skillLevel: 80,
  },
    {
    name: "TypeScript",
    icon: <BiLogoTypescript />,
    skillLevel: 75,
  },
  {
    name: "Tailwind CSS",
    icon: <RiTailwindCssFill />,
    skillLevel: 90,
  },
];

export default function SkillsSection() {
  return (
    <section id="skills" className="py-16">
      <Header title="My Skills" />
      <div className="flex flex-wrap justify-center gap-6">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="bg-slate-900 text-center w-50 h-50 rounded-3xl flex 
            flex-col items-center justify-center shadow-lgtransition hover:scale-110 duration-500"
          >
            <div className="text-5xl text-gray-300">{skill.icon}</div>
            <p className="text-2xl font-semibold my-3 text-gray-200">
              {skill.skillLevel}%
            </p>
            <p className="font-semibold text-indigo-500">{skill.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
