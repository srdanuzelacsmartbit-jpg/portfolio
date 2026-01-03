import Image from "next/image";

interface ProjectsCarProps {
  imagePath: string;
  title: string;
  description: string;
}

export default function ProjectsCard({
  imagePath,
  title,
  description,
}: ProjectsCarProps) {
  return (
    <div>
      <Image
        src={imagePath}
        alt="project-image"
        width={800}
        height={600}
        className="rounded-lg"
      />
      <p
        className="my-4 text-xl sm:text-2xl font-semibold
    text-gray-200"
      >
        {title}
      </p>
      <p className="font-medium text-gray-400">{description}</p>
    </div>
  );
}
