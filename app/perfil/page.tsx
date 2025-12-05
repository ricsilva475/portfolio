import Image from "next/image";
import Header from "../components/Header";
import gym from "../images/gym.png";
import got from "../images/got.png";
import games from "../images/games.png";

export default function Home() {
  return (
    <div className="relative w-full site-header min-h-screen text-white">
      <Header />
  
      {/* ABOUT SECTION */}
      <main className="max-w-3xl mx-auto px-5 mt-24 pb-20">
        <section id="introduction" className="w-full">
          
          <h1 className="text-5xl font-extrabold tracking-tight leading-tight mb-5 ">
            Hi, I'm Ricardo Silva.
          </h1>
          <p className="text-lg leading-7 opacity-80 ">
            A full-stack developer with experience in web and mobile development. 
            I enjoy working across all stages of a project, from concept to delivery, 
            and I'm always looking for ways to improve both my technical skills and the user experience.
          </p>
        </section>

        {/* HOBBIES */}
        <section id="hobbies" className="mt-16 w-full">
          <h1 className="text-3xl font-semibold tracking-tight mb-5">Other Hobbies</h1>

          <div className="space-y-10">
            <div>
              <p className="text-xl opacity-90 mb-3">Going to the gym 💪</p>
              <Image src={gym} alt="Gym" width={350} className="rounded-lg shadow-lg" />
            </div>

            <div>
              <p className="text-xl opacity-90 mb-3">Playing Video Games 🎮</p>
              <Image src={games} alt="Games" width={350} className="rounded-lg shadow-lg" />
            </div>

            <div>
              <p className="text-xl opacity-90 mb-3">Watching Movies / Series 🍿</p>
              <Image src={got} alt="GoT" width={260} className="rounded-lg shadow-lg" />
            </div>
          </div>
        </section>

      </main>
    </div>
  );
}
