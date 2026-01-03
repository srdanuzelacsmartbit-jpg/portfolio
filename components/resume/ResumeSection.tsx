import {
  LuAward,
  LuBookOpen,
  LuGraduationCap,
  LuPackage,
  LuServer,
} from "react-icons/lu";
import Header from "../general/Header";
import ResumeCard from "./ResumeCard";
import { RiNextjsFill } from "react-icons/ri";

export default function ResumeSection() {
  return (
    <section id="resume" className="my-20">
      <div className="w-[90%] mx-auto grid grid-cols-1 xl:grid-cols-2 gap-10">
        {/* EDUCATION SECTION */}
        <div>
          <Header title="My Education" as="h2" />
          <div className="space-y-6">
            <ResumeCard
              icon={LuGraduationCap}
              role="Computer Science Degree"
              desription="Bachelor of Science in Computer Science | University Name |
              Focused on algorithms, data structures, software engenieering
              principles and web technologies."
              date="Jan 2020 - Oct 2024"
            />
            <ResumeCard
              icon={LuBookOpen} // or LuBookMarked, LuFileText
              role="Relevant Coursework"
              desription="Web Development, Database Systems, Data Structures &
            Algorithms, Softwre Engineering, Computer Networks, Operating Systems,
            Cloud Computing."
            />
            <ResumeCard
              icon={LuAward} // or LuTrophy, LuMedal
              role="Academic Achievements"
              desription="
              Dean's List | Graduated Magna Cum Laude | Best Senior Project Award
              | President of Computers Science Club."
              date="March 2022 - Dec 2023"
            />
          </div>
        </div>
        {/* EDUCATION SECTION END */}
        {/* WORK EXPERIENCE */}
        <div>
          <Header title="My Work Experience" as="h2" />
          <div className="space-y-6">
            <ResumeCard
              icon={RiNextjsFill} // or LuBookMarked, LuFileText
              role="Frontend Developer"
              desription="Crafting responsive, accessible interfaces with
              modern frameworks like React and NextJS. Focus on
              performance, UX, and pixel-perfect implementation."
            />{" "}
            <ResumeCard
              icon={LuServer} // or LuBookMarked, LuFileText
              role="Backend Developer"
              desription="Building scalable APIs, databases and server
            infrastructure. Experienced with Node.JS, Python, cloud services 
            and microservices architecture."
            />
            <ResumeCard
              icon={LuPackage} // or LuBookMarked, LuFileText
              role="Fullstack Developer"
              desription="End-to-end application development. Bridging
              frontend interfaces with backend systems for cohesive,
              full-featured digital solutions."
            />
          </div>
        </div>{" "}
        {/* WORK EXPERIENCE END */}
      </div>
    </section>
  );
}
