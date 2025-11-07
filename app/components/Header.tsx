export default function Header() {
  return (
    <div className="fixed top-0 left-0 w-full z-50 bg-black px-12 py-6 flex flex-col md:flex-row items-center justify-between">
      <div className="text-white md:mb-0">
        <h2 className="text-2xl font-bold mb-2">Ricardo Silva</h2>
        <p className="text-white/90"> Junior Software Developer </p>
      </div>
      <div className="flex gap-4">
        <a
          href="/perfil"
          className="px-6 py-2 bg-transparent border-2 border-white text-white rounded-full font-medium hover:bg-white/10 transition-colors"
        >
          Personnal Info
        </a>
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
  );
}