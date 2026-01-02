import { LuAward, LuBookOpen, LuGraduationCap } from "react-icons/lu";
import Header from "../general/Header";
import ResumeCard from "./ResumeCard";

export default function ResumeSection() {
  return (
    <section id="resume" className="my-12">
      <div
        className="w-[90%] mx-auto grid grid-cols-1 
    xl:grid-cols-2 gap-10"
      >
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
        {/* WORK EXPERIENCE */}
        <Header title="Work Experience" as="h2" />
      </div>
    </section>
  );
}
