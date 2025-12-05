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
import Mobile1 from './images/app1.png'
import Mobile2 from './images/app2.png'
import Header from "./components/Header";
import meImage from "./images/me.png";


export const metadata: Metadata = {
  title: "HomePage",
  description: "Welcome to the portfolio of Ricardo Silva",
};

export default function Home() {
  return (
    <div className="pt-28 flex min-h-screen w-full site-header flex-col items-center py-32 px-5 bg-white bg-primary sm:items-start">
    <Header />
      {/* HERO SECTION */}
      <section className="flex flex-col items-center text-center pt-32 px-5">
        <Image
          src={meImage}
          alt="Profile Image"
          width={120}
          className="rounded-full border-4 border-white shadow-xl mb-6"
        />

        <h3 className="text-xl opacity-90">Ricardo Carreira Silva</h3>
        <p className="opacity-70 text-sm mb-3">Based in Portugal 🇵🇹 </p>

        <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight mt-4 leading-tight">
          FULLSTACK <br /> DEVELOPER
        </h1>

      </section>
      <div className="text-center md:text-left max-w-3xl">
        <section id="hardskills" className="mt-10 w-full">
          <h1 className="flex text-3xl font-semibold leading-10 tracking-tight text-white justify-center mb-10">
            Hard Skills
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8 max-w-3xl">
          <div className="text-center md:text-left justify-center">
              <h1 className="flex text-3xl font-semibold leading-10 tracking-tight text-white mb-2 justify-center">
                Frontend
              </h1>
              <div className="h-1 w-20 bg-blue-500 mx-auto"></div>
                <div className="card-content mt-8">
                <h2 className="card-text">HTML</h2>
                <Image 
                  src={htmlLogo}
                  alt="HTML Logo"
                  width={120}
                  height={120}
                  className="mb-5 "
                />
                </div>
                <div className="card-content mt-8">
                <h2 className="card-text">CSS3</h2>
                <Image 
                  src={cssLogo}
                  alt="CSS3 Logo"
                  width={80}
                  height={80}
                  className="mb-5 "
                />
                </div>
                <div className="card-content mt-8">
                <h2 className="card-text">Javascript</h2>
                <Image 
                  src={jsLogo}
                  alt="JavaScript Logo"
                  width={80}
                  height={80}
                  className="mb-12 "
                />
                </div>
            </div>   
            <div className="text-center md:text-left max-w-3xl">
              <h1 className="flex text-3xl font-semibold leading-10 tracking-tight text-white mb-2 justify-center">
                Backend
              </h1>
              <div className="h-1 w-20 bg-green-500 mx-auto"></div>
                <div className="card-content mt-8">
                <h2 className="card-text">PHP 8.0</h2>
                <Image 
                  src={phpLogo}
                  alt="PHPLogo"
                  width={120}
                  height={120}
                  className="mb-19"
                />
                </div>
                <div className="card-content mt-8">
                <h2 className="card-text">Python</h2>
                <Image 
                  src={pythonLogo}
                  alt="CSS3 Logo"
                  width={220}
                  height={200}
                  className="mb-16"
                />
                </div>
                <div className="card-content mt-8">
                <h2 className="card-text">Java / Jakarta EE</h2>
                <Image 
                  src={javaLogo}
                  alt="Java Logo"
                  width={60}
                  height={80}
                  className="mb-5 "
                />
                </div>
            </div>
          </div>
        </section>
        <div className="text-center md:text-left max-w-3xl">
        <section id="projects" className="mt-10 w-full">
          <h1 className="flex text-3xl font-semibold leading-10 tracking-tight text-black justify-center mb-2 text-white"> Projects</h1>
        <div className="h-1 w-20 bg-green-500 mx-auto"></div>
        <h1 className="text-3xl font-semibold leading-10 tracking-tight text-black justify-center mt-10 mb-15 text-white">
            Projeto GTR - Gestão de Terrenos Rústicos
        </h1>
         <p className="text-xl leading-7 text-white">
            The project was carried out within the scope of the Projeto Informático course of 
            the Bachelor's Degree in Computer Science at the School of Technology and Management 
            Polytechnic University of Leiria. The project's main objective was to 
            develop a tool for managing rural land through a web application using 
            multiple layers of information, such as georeferencing data, land register 
            data, photos, videos and text.
          </p>
          <Image 
                  src={gtr}
                  alt="GTR Project Logo"
                  width={1000}
                  className="mb-5 mt-10 border-card"
          />
          <h3 className="text-2xl font-semibold leading-10 tracking-tight text-black justify-center mt-10 mb-15">
            <a
              href="https://gtr2024.netlify.app/"
              className="text-blue-600 hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              Test the Project Here!
            </a>
          </h3>
          <h1 className="text-3xl font-semibold leading-10 tracking-tight text-black justify-center mt-10 mb-15 text-white">
            LEI - Smart Package Monitoring System
          </h1>
         <p className="text-xl leading-7 text-white">
           In this project i worked with Jakarta EE to build a clean and well-structured REST API, 
           using DTOs to manage data flow between different layers of the application and
           frontend was developed with Vue.js, ensuring smooth communication with the backend through 
           REST calls and used Docker to simplify deployment and testing, 
           keeping the environment consistent across all stages of development.
          </p>
          <Image 
                  src={smartPack}
                  alt="smartPackage Project Logo"
                  width={1000}
                  className="mb-5 mt-10 border-card"
          />
          <h3 className="text-2xl font-semibold leading-10 tracking-tight text-black justify-center mt-10 mb-15">
            
            <a
              className="text-blue-600 hover:underline opacity-50 pointer-events-none not-available-link"
              aria-disabled="true"
            >
              
            </a>
            <span className="not-available text-white"> Not available for test - Uni Project</span>
          </h3>

          <h1 className="text-3xl font-semibold leading-10 tracking-tight text-black justify-center mt-10 mb-15 text-white">
            LEI - Mobile Application and Agile Methodologies Implementation
          </h1>
        <p className="text-xl leading-7 text-white">
        Implemented workflow improvements using Jira and Bitbucket by creating detailed User Stories 
        with clear acceptance criteria, business value, and easy traceability throughout the development process.
        Developed and ran automated test suites in Katalon Studio for Android applications, 
        using data-driven tests, modular test components, and CI triggers to detect issues 
        early and maintain strong test coverage.
        </p>

        <div className="flex flex-col md:flex-row gap-6 mt-10">
          <Image 
            src={Mobile2}
            alt="smartPackage Project Logo"
            width={350}
            className="border-card"
          />
          <Image 
            src={Mobile1}
            alt="smartPackage Project Logo"
            width={350}
            className="border-card"
          />

        </div>
       {/*  <div className="flex flex-col md:flex-row gap-6 mt-10">
          <Image 
            src={Mobile3}
            alt="smartPackage Project Logo"
            width={350}
            className="border-card"
          />
        </div> */}

          <h3 className="text-2xl font-semibold leading-10 tracking-tight text-black justify-center mt-10 mb-15">
            <a
              className="text-blue-600 hover:underline opacity-50 pointer-events-none not-available-link"
              aria-disabled="true"
            >
            </a>
            <span className="not-available text-white"> Not available for test - Uni Project</span>
          </h3>

        </section>
    </div>
    </div>
    </div>
  );

}