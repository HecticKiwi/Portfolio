import ContactForm from "@/components/contactForm";
import FeaturedProject from "@/components/featuredProject";
import Header from "@/components/header";
import LinkButton from "@/components/linkButton";
import NavBar from "@/components/navBar";
import ScrollArrows from "@/components/scrollArrows";
import Skill from "@/components/skill";
import Image from "next/image";
import { FaExternalLinkAlt } from "react-icons/fa";
import {
  SiAmazonaws,
  SiCss3,
  SiFirebase,
  SiGithub,
  SiLinkedin,
  SiNextdotjs,
  SiPostgresql,
  SiReact,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";
import PixiJs from "./pixi.svg";

export const dynamic = "force-static";

export default function Home() {
  return (
    <main className="text-lg text-neutral-300">
      {/* Navbar */}
      <NavBar />

      {/* Hero */}
      <section className="relative grid min-h-[100dvh] place-content-center text-center bg-dot-white/[0.2]">
        {/* Radial fade bg */}
        <div className="pointer-events-none absolute inset-0 bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_10%,black)]"></div>

        <h1 className="bg-gradient-to-b from-neutral-200 to-neutral-500 bg-clip-text pb-5 text-5xl font-bold text-transparent sm:pb-8 sm:text-7xl">
          Danny Duong
        </h1>
        <h2 className="text-xl text-neutral-500 sm:text-2xl">
          Professional Web Developer
        </h2>

        <ScrollArrows />
      </section>

      {/* About */}
      <section className="mx-auto max-w-screen-lg p-8">
        <Header id="about" text={"About Me"} />

        <div className="relative mx-auto mb-8 aspect-square w-40 sm:float-start sm:mb-4 sm:mr-8 sm:w-40 md:w-52">
          <Image
            src={"/danny.jpg"}
            alt={"Danny"}
            fill
            className="rounded-full"
          />
        </div>

        <div className="space-y-4 leading-relaxed">
          <p>
            Nice to meet you! I&apos;m Danny, a full-time software developer at{" "}
            <a
              href="https://www.energytoolbase.com/"
              target="_blank"
              className="inline-flex items-center gap-1 text-sky-500 hover:underline"
            >
              Energy Toolbase
            </a>{" "}
            with a passion for building performant and accessible web
            applications.
          </p>
          <p>
            My programming journey started in junior high with Scratch, a
            high-level visual programming language. I learned core programming
            concepts while also producing several popular games, including
            remakes of 2 gamemodes from the rhythm game &quot;osu!&quot;
            (grade-schoolers play these since their schools don&apos;t allow
            them to play the actual game 😉).
          </p>
          <p>
            These early experiences evolved into a deep interest in web
            development, which I pursue even outside of work. In my spare time I
            maintain{" "}
            <a
              href="https://web-osu-mania.pages.dev/"
              target="_blank"
              className="inline-flex items-center gap-1 text-sky-500 hover:underline"
            >
              Web osu!mania
            </a>
            , a rhythm game that runs entirely in the browser. Working on it has
            strengthened my skills in performance optimization, graphics
            rendering, and managing real-time user interactions.
          </p>
          <p>
            When I&apos;m not coding, you'll likely find me listening to music
            or playing rhythm games.
          </p>
        </div>
      </section>

      {/* Skills */}
      <section className="mx-auto mt-8 max-w-screen-lg p-8">
        <Header id="skills" text={"My Skills"} />

        <div className="flex flex-wrap justify-around text-center text-xl">
          <div className="p-6">
            <h3 className="text-xl font-semibold uppercase text-neutral-500">
              Languages
            </h3>
            <div className="mt-4 space-y-6">
              <Skill skill="HTML" src={"/skills/languages/HTML5.svg"} />
              <Skill skill="CSS" src="/skills/languages/CSS3.svg" />
              <Skill
                skill="JavaScript"
                src="/skills/languages/JavaScript.svg"
              />
              <Skill
                skill="TypeScript"
                src="/skills/languages/TypeScript.svg"
              />
            </div>
          </div>

          <div className="p-6">
            <h3 className="text-xl font-semibold uppercase text-neutral-500">
              Frameworks
            </h3>
            <div className="mt-4 space-y-6">
              <Skill skill="React" src="/skills/frameworks/React.svg" />
              <Skill skill="Next JS" src="/skills/frameworks/NextJs.svg" />
              <Skill
                skill="Tailwind"
                src="/skills/frameworks/TailwindCss.svg"
              />
            </div>
          </div>

          <div className="p-6">
            <h3 className="text-xl font-semibold uppercase text-neutral-500">
              Miscellaneous
            </h3>
            <div className="mt-4 space-y-6">
              <Skill skill="Git" src="/skills/miscellaneous/Git.svg" />
              <Skill skill="GitHub" src="/skills/miscellaneous/GitHub.svg" />
              <Skill
                skill="PostgreSQL"
                src="/skills/miscellaneous/PostgresSQL.svg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="mx-auto mt-8 max-w-screen-lg p-8">
        <Header id="projects" text="Featured Projects" />

        <ol className="space-y-20">
          <li>
            <FeaturedProject
              title="Web osu!mania"
              subtitle="Rhythm Game Web Port"
              imageSrc="/projects/web-osu-mania.jpg"
              summary={`A web port of the gamemode osu!mania from the popular rhythm game osu!. Combines web design, game design, and audio processing to deliver a seamless experience.`}
              builtWith={
                <>
                  <SiNextdotjs title="Next JS" />
                  <SiTypescript title="TypeScript" />
                  <SiTailwindcss title="Tailwind CSS" />
                  <Image priority src={PixiJs} alt="Pixi JS" title="Pixi JS" />
                </>
              }
              builtIn="August 2024"
              demoHref="https://web-osu-mania.pages.dev/"
              codeHref="https://github.com/HecticKiwi/Web-Osu-Mania"
              reverse
            />
          </li>
          <li>
            <FeaturedProject
              title="Reddot"
              subtitle="Reddit Clone"
              imageSrc="/projects/reddot.jpg"
              summary="A full-stack clone of Reddit's essential features in an elegant UI. Features OAuth authentication, infinite scrolling, and optimistic updates for a smooth user experience."
              builtWith={
                <>
                  <SiNextdotjs title="Next JS" />
                  <SiTypescript title="TypeScript" />
                  <SiTailwindcss title="Tailwind CSS" />
                  <SiPostgresql title="PostreSQL" />
                  <SiAmazonaws title="Amazon AWS" />
                </>
              }
              builtIn="January 2024"
              demoHref="https://hk-reddot.vercel.app"
              codeHref="https://github.com/HecticKiwi/Reddot"
            />
          </li>
          <li>
            <FeaturedProject
              title="I'm Slime"
              subtitle="Online Multiplayer Game"
              imageSrc="/projects/imSlime.jpg"
              summary="A realtime online game where players can battle, chat, and customize their slimes. A collaborative effort with my SENG-401 course group, I focused on the realtime chat and other social features."
              builtWith={
                <>
                  <SiReact title="React" />
                  <SiCss3 title="CSS" />
                  <SiFirebase title="Firebase" />
                </>
              }
              builtIn="March 2023"
              demoHref="https://imslime.onrender.com/"
              codeHref="https://github.com/KaitoSugimura/SENG401-Group8"
              reverse
            />
          </li>
        </ol>

        <p className="mb-6 mt-20 text-center text-2xl font-semibold">
          More on my{" "}
          <a
            href="https://github.com/HecticKiwi?tab=repositories"
            target="_blank"
            className="inline-flex items-center gap-1 text-sky-500 hover:underline"
          >
            GitHub
            <FaExternalLinkAlt />
          </a>
          .
        </p>
      </section>

      {/* Contact */}
      <section className="mx-auto mt-8 max-w-screen-lg p-8">
        <Header id="contact" text="Contact Me" />

        <div className="flex flex-wrap gap-8">
          <div className="grow basis-[350px] space-y-4">
            <p className="text-lg">
              I&apos;m not looking for work at the moment, but my inbox is open
              if you just want to chat!
            </p>

            <ContactForm />
          </div>

          <div className="grow basis-[350px] space-y-4">
            <p className="text-lg">You can also find me on other platforms:</p>
            <div className="space-8 flex items-center gap-4">
              <LinkButton href={"https://github.com/HecticKiwi"}>
                <SiGithub className="h-6 w-6" />
                GitHub
              </LinkButton>

              <LinkButton href={"https://linkedin.com/in/danny-duong-"}>
                <SiLinkedin className="h-6 w-6" />
                LinkedIn
              </LinkButton>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
