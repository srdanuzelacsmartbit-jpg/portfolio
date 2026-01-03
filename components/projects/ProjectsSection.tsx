import Header from "../general/Header";
import ProjectsCard from "./ProjectsCard";

export default function ProjectsSection() {
  return (
    <section id="projects">
      <Header title="Recent Projects" />
      <div
        className="w-[80%] mx-auto grid grid-cols-1
      md:grid-cols-2 gap-10 overflow-hidden"
      >
        <ProjectsCard
          title="Modern Dashboard UI"
          imagePath="/p1.webp"
          description="A responsive admin dashboard with data visualization
        chart, user management, and real-time analytics. Built with
        React, Tailwind CSS, and Recharts."
        />
        <ProjectsCard
          title="Modern Education Website"
          imagePath="/p2.webp"
          description="An interactive learning platform with course catalogs,
          student dashboards and progress tracking. Features video integration
          and quiz functionality."
        />
        <ProjectsCard
          title="Modern Landing Page"
          imagePath="/p3.webp"
          description="High-conversion marketing page with animated components,
          optimized performance, and SEO best practices. Build with Next.js
          and Framer Motion."
        />
        <ProjectsCard
          title="Modern SAAS Website"
          imagePath="/p4.webp"
          description="Full-featured software-as-a-service platform with
          subscription management, user onboarding and payment integration
          using Stripe."
        />
      </div>
    </section>
  );
}
