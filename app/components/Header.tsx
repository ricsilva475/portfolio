export default function Header() {
  return (
    <div className="fixed top-0 left-0 w-full z-50 px-12 py-6 flex flex-col items-center">
      <div className="flex gap-3">
        <a
          href="/"
          className="px-4 py-2 border-2 border-white text-white  rounded-full font-medium hover:bg-white/10 transition-colors"
        >
          Home
        </a>
        <a
          href="/perfil"
          className="px-4 py-2 border-2 border-white text-white  rounded-full font-medium hover:bg-white/10 transition-colors"
        >
          About
        </a>
        <a
          href="https://www.linkedin.com/in/ricardo-o-silva/"
          className="px-4 py-2 bg-transparent border-2 border-white text-white  rounded-full font-medium hover:bg-white/10 transition-colors"
        >
          Linkedin
        </a>
        <a
          href="https://github.com/ricsilva475"
          className="px-4 py-2 bg-transparent border-2 border-white  text-white  rounded-full font-medium hover:bg-white/10 transition-colors"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>
      </div>
    </div>
  );
}