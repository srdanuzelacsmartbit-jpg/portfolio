import Header from "@/components/general/Header";
import ServiceCard from "./ServiceCard";

export default function ServiceSection() {
  return (
    <section id="services">
      {/* HEADER */}
      <Header title="What I Offer" />
      <div
        className="w-[90%] sm:w-[80%] mx-auto grid grid-cols-1
      md:grid-cols-2 xl:grid-cols-4 gap-20 relative text-center"
      >
        <ServiceCard
          name="UI and UX"
          description="Designing interfaces and seamless user experiences."
          icon="/s1.png"
        />
        <ServiceCard
          name="Web and Mobile App"
          description="Building responsive web apps and cross-platform mobile."
          icon="/s2.png"
        />
        <ServiceCard
          name="Design and Creative"
          description="Creating unique brand identities and compelling visual designs."
          icon="/s3.png"
        />
        <ServiceCard
          name="Development"
          description="Full-stack development with modern frameworks and best practises."
          icon="/s4.png"
        />
      </div>
    </section>
  );
}
