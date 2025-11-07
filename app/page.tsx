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

export const metadata: Metadata = {
  title: "HomePage",
  description: "Welcome to the portfolio of Ricardo Silva",
};

export default function Home() {
  return (
     <div className="relative w-full mb-12">
    <div className="fixed top-0 left-0 w-full z-50 bg-black px-12 py-6 flex flex-col md:flex-row items-center justify-between">
      <div className="text-white md:mb-0">
        <h2 className="text-2xl font-bold mb-2">Ricardo Silva</h2>
        <p className="text-white/90"> Junior Software Developer </p>
      </div>
      <div className="flex gap-4">
        <a 
          href="https://www.linkedin.com/in/ricardo-o-silva/" 
          className="px-6 py-2 bg-transparent border-2 border-white text-white rounded-full font-medium hover:bg-white/10 transition-colors"
        >
          Linkedin Profile
        </a>
        <a 
          href="https://github.com/ricsilva475" 
          className="px-6 py-2 bg-transparent border-2 border-white text-white rounded-full font-medium hover:bg-white/10 transition-colors"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub Profile
        </a>
      </div>
    </div>
    <div className="flex min-h-screen items-center justify-center bg-white font-sans bg-primary">
      <main className="pt-28 flex min-h-screen w-full max-w-3xl flex-col items-center py-32 px-5 bg-white bg-primary sm:items-start">
      <div className="flex gap-4">
        <a 
          href="https://github.com/ricsilva475" 
          className="px-6 py-2 bg-transparent border-2 border-white text-white rounded-full font-medium hover:bg-white/10 transition-colors"
          target="_blank"
          rel="noopener noreferrer"
        >
        </a>
      </div>
      <section id="introduction" className="w-full mt-10">
        <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left justify-center">
          <h1 className="max-w-xs text-3xl font-semibold leading-10 tracking-tight text-black justify-center">
            Only the beginning . . .
          </h1>
          <p className="text-xl leading-7 text-zinc-600">
            Welcome to my portfolio! I'm Ricardo Silva, a Junior Software Developer
            dedicated to crafting innovative solutions and bringing ideas to
            life through code. 
            Explore my projects and get to know more about my
            journey in the tech world &#128516;
          </p>
        </div>
        </section>
        <section id="hardskills" className="mt-10 w-full">
          <h1 className="flex text-3xl font-semibold leading-10 tracking-tight text-black justify-center mb-10">
            Hard Skills
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <div className="text-center md:text-left justify-center">
              <h1 className="flex text-3xl font-semibold leading-10 tracking-tight text-black mb-2 justify-center">
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
                  className="mb-5"
                />
                </div>
                <div className="card-content mt-8">
                <h2 className="card-text">CSS3</h2>
                <Image 
                  src={cssLogo}
                  alt="CSS3 Logo"
                  width={80}
                  height={80}
                  className="mb-5"
                />
                </div>
                <div className="card-content mt-8">
                <h2 className="card-text">Javascript</h2>
                <Image 
                  src={jsLogo}
                  alt="JavaScript Logo"
                  width={80}
                  height={80}
                  className="mb-12"
                />
                </div>
            </div>   
            <div className="text-center md:text-left">
              <h1 className="flex text-3xl font-semibold leading-10 tracking-tight text-black mb-2 justify-center">
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
                  className="mb-5"
                />
                </div>
            </div>
          </div>
        </section>
        <section id="projects" className="mt-10 w-full">
          <h1 className="flex text-3xl font-semibold leading-10 tracking-tight text-black justify-center mb-2"> Projects</h1>
        <div className="h-1 w-20 bg-green-500 mx-auto"></div>
        <h1 className="text-3xl font-semibold leading-10 tracking-tight text-black justify-center mt-10 mb-15">
            Projeto GTR - Gestão de Terrenos Rústicos
        </h1>
         <p className="text-xl leading-7 text-zinc-600">
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
           <h1 className="text-3xl font-semibold leading-10 tracking-tight text-black justify-center mt-10 mb-15">
            LEI - Smart Package Monitoring System
        </h1>
         <p className="text-xl leading-7 text-zinc-600">
           Worked with Jakarta EE to build a clean and well-structured REST API, 
           using DTOs to manage data flow between different layers of the application. 
           Frontend was developed with Vue.js, ensuring smooth communication with the backend through 
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
              Test the Project Here!
            </a>
            <span className="not-available"> Not available - Uni Project</span>
          </h3>

        </section>
    </main>
    </div>
</div>
  );

}