import { Metadata } from "next";
import Image from 'next/image'
import Header from "../components/Header";
import meImage from '../images/me.png'
import gym from '../images/gym.png'
import got from '../images/got.png'
import games from '../images/games.png'

export default function Home() {
  return (
     <div className="relative w-full mb-12">
    <Header />
    <div className="flex min-h-screen items-center justify-center bg-white font-sans bg-primary">
    <main className="pt-28 flex min-h-screen w-full max-w-3xl flex-col items-center py-32 px-5 bg-white bg-primary sm:items-start">
        <section id="introduction" className="w-full mt-10">
            <div className="h-1 w-50 mx-auto mb-15 ">
            <Image 
              src={meImage}
              alt="Perfil Image"
                width={180}
                className="flex mb-5 mt-5 rounded-full border-4 border-black justify-center"
            />
            </div>
            <p className="text-xl leading-7 text-zinc-600 mt-50">
           My name is Ricardo Carreira Silva, a Junior Software Developer with a passion for technology and coding.
           I hold a degree in Computer Science from the Polytechnic University of Leiria.
          </p>
        </section>
        <section id="hobbies" className="mt-10 w-full">

        <h1 className="text-3xl font-semibold leading-10 tracking-tight text-black mb-2">
            Hobbies
        </h1>
        <p className="text-xl leading-7 text-zinc-600 mt-5">1. Going to gym 💪 </p> 
        <Image 
              src={gym}
              alt="Gym"
                width={300}
                className="flex mb-5 mt-5"
        />
        <p className="text-xl leading-7 text-zinc-600 mt-5">2. Play Video Games 🎮</p> 
        <Image 
              src={games}
              alt="Games Image"
                width={300}
                className="flex mb-5 mt-5"
        />
         <p className="text-xl leading-7 text-zinc-600 mt-5">3. Watch Movies / Series 🍿</p> 
        <Image 
              src={got}
              alt="Got Image"
                width={250}
                className="flex mb-5 mt-5"
        />
        <p className="text-xl leading-7 text-zinc-600 mt-5">My top favorite: Game of Thrones</p> 
        </section>
        <section id="otherActivities" className="mt-10 w-full">

        <h1 className="text-3xl font-semibold leading-10 tracking-tight text-black mb-2">
            Other Activities
        </h1>
        </section>
    </main>
    </div>
</div>
  );

}