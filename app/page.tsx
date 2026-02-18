import { Metadata } from "next";
import Image from 'next/image'
import jsLogo from './images/javascript.png'
import cssLogo from './images/css.png'
import htmlLogo from './images/html.png'
import phpLogo from './images/php.png'
import pythonLogo from './images/python.png'
import javaLogo from './images/java.png'
import gtr from './images/gtr.png'
import smartPack from './images/smartPack.png'
import Mobile1 from './images/appmobile.png'
import Mobile2 from './images/app2.png'
import Header from "./components/Header";
import meImage from "./images/me3.png";


export const metadata: Metadata = {
  title: "HomePage",
  description: "Welcome to the portfolio of Ricardo Silva",
};

export default function Home() {
  return (
    <div className="min-h-screen w-full bg-gradient-to-b from-[#0f172a] to-[#1e293b] text-white">

      <Header />

      {/* HERO */}
      <section className="flex flex-col items-center text-center pt-40 px-6">
      <Image
        src={meImage}
        alt="Profile Image"
        width={150}
        height={150}
        className="rounded-full object-cover mb-5"
      />

        <h3 className="text-xl opacity-90">Ricardo Carreira Silva</h3>
        <p className="opacity-70 text-sm mb-4">Based in Portugal</p>

        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight leading-tight">
          FULLSTACK <br /> DEVELOPER
        </h1>
      </section>

      {/* HARD SKILLS */}
      <section id="hardskills" className="py-24 px-6 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold">Hard Skills</h2>
          <div className="h-1 w-24 bg-blue-500 mx-auto mt-4 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

          {/* FRONTEND */}
          <div>
            <h3 className="text-3xl font-semibold mb-10 flex items-center gap-3">
              💻 Frontend
            </h3>

            <div className="space-y-6">
              <SkillCard title="HTML5" img={htmlLogo} />
              <SkillCard title="CSS3" img={cssLogo} />
              <SkillCard title="JavaScript" img={jsLogo} />
            </div>
          </div>

          {/* BACKEND */}
          <div>
            <h3 className="text-3xl font-semibold mb-10 flex items-center gap-3">
              🖥 Backend
            </h3>

            <div className="space-y-6">
              <SkillCard title="PHP 8.0" img={phpLogo} highlight />
              <SkillCard title="Python" img={pythonLogo} />
              <SkillCard title="Java / Jakarta EE" img={javaLogo} />
            </div>
          </div>

        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="py-24 px-6 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold">Recent Projects</h2>
          <div className="h-1 w-24 bg-green-500 mx-auto mt-4 rounded-full"></div>
        </div>

        <div className="space-y-24">

          {/* PROJECT 1 */}
          <ProjectCard
            title="Projeto GTR - Gestão de Terrenos Rústicos"
            description="Web application for managing rural land using GIS layers, georeferencing data, land register data, photos, videos and text."
            image={gtr}
            link="https://gtr2024.netlify.app/"
          />

          {/* PROJECT 2 */}
          <ProjectCard
            title="LEI - Smart Package Monitoring System"
            description="REST API built with Jakarta EE and frontend developed with Vue.js. Docker used for consistent deployment."
            image={smartPack}
          />

          {/* PROJECT 3 */}
          <ProjectCard
            title="LEI - Mobile Application & Agile Implementation"
            description="Agile workflow implementation using Jira and Bitbucket. Automated Android test suites developed in Katalon Studio."
            image={Mobile1}
          />

        </div>
      </section>
    </div>
  );
}

function SkillCard({ title, img, highlight = false }: any) {
  return (
    <div
      className={`
        flex items-center gap-6
        h-24 w-full
        px-6
        rounded-2xl
        border
        ${highlight 
          ? "border-green-500 bg-gradient-to-r from-[#1e293b] to-[#111827]" 
          : "border-slate-700 bg-[#1e293b]"
        }
        hover:scale-[1.02]
        transition-all duration-300
      `}
    >
      {/* Logo Container (tamanho fixo) */}
      <div className="w-14 h-14 flex items-center justify-center">
        <Image
          src={img}
          alt={title}
          width={40}
          height={40}
          className="object-contain max-h-10"
        />
      </div>

      {/* Title */}
      <h4 className="text-xl font-semibold truncate">
        {title}
      </h4>
    </div>
  );
}

function ProjectCard({
  title,
  description,
  image,
  link,
  secondaryImage,
}: any) {
  return (
    <div className="bg-gradient-to-r from-[#1e293b] to-[#0f172a] 
                    rounded-3xl 
                    p-10 
                    shadow-2xl
                    flex flex-col lg:flex-row 
                    gap-12 
                    min-h-[420px]">

      {/* LEFT SIDE */}
      <div className="flex-1 flex flex-col justify-between">

        <div>
          <h3 className="text-3xl font-bold mb-6">
            {title}
          </h3>

          <p className="text-gray-300 text-lg leading-relaxed line-clamp-4">
            {description}
          </p>
        </div>

        {/* BUTTON AREA (altura fixa) */}
        <div className="mt-8">
          {link ? (
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-6 py-3 rounded-xl 
                         bg-gradient-to-r from-blue-500 to-purple-600 
                         hover:scale-105 
                         transition-all duration-300"
            >
              Test Project →
            </a>
          ) : (
            <span className="text-gray-400">
              Not available for test - Uni Project
            </span>
          )}
        </div>
      </div>

      {/* RIGHT SIDE */}
      <div className="flex-1 flex flex-col justify-center gap-6">

        {/* Main Image */}
        <div className="h-75 w-full relative rounded-2xl overflow-hidden">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover"
          />
        </div>

        {/* Secondary Image (se existir) */}
        {secondaryImage && (
          <div className="h-75 w-full relative rounded-2xl overflow-hidden">
            <Image
              src={secondaryImage}
              alt={title}
              fill
              className="object-cover"
            />
          </div>
        )}

      </div>
    </div>
  );
}

