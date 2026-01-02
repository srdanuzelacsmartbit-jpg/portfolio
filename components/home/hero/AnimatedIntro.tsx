import Typewriter from "typewriter-effect";

export default function AnimatedIntro() {
  return (
    <div
      className="text-lg h-30 px-8 text-center sm:text-2xl font-medium
    text-gray-400"
    >
      Hi I am John - A passionate
      <span className="text-indigo-300 font-bold">
        <Typewriter
          options={{
            strings: [
              "Fullstack Developer",
              "NextJS Developer",
              "Tech Enthusiast",
              "UI/UX Designer",
            ],
            autoStart: true,
            loop: true,
            delay: 75,
            deleteSpeed: 50,
            wrapperClassName: "inline-block py-6",
          }}
        />
      </span>
    </div>
  );
}
