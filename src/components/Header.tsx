import { useEffect, useState } from "react";

const Header = () => {
  const [open, setOpen] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);

  const menuItems = ["Home", "Services", "Portfolio", "About", "Contact"];

  useEffect(() => {
    const checkScreen = () => {
      setIsDesktop(window.innerWidth >= 640);
      if (window.innerWidth >= 640) {
        setOpen(false); // cerramos menú mobile si pasa a desktop
      }
    };

    checkScreen();
    window.addEventListener("resize", checkScreen);
    return () => window.removeEventListener("resize", checkScreen);
  }, []);

  return (
    <header className="fixed w-full top-0 z-50 bg-[#020b10]/90 backdrop-blur border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between ml-[1%]">

        {/* LOGO */}
        {/* LOGO */}
        <div className="flex items-center gap-2 cursor-pointer">
          <div className="flex flex-col gap-1">
            <div className="h-[2px] w-6 bg-sky-400 rounded-full"></div>
            <div className="h-[2px] w-6 bg-sky-400 rounded-full translate-x-1"></div>
            <div className="h-[2px] w-6 bg-sky-400 rounded-full"></div>
          </div>
          <h1 className="text-xl font-bold tracking-tight text-white ml-1">
            Atlantis <span className="text-sky-400">Digital</span>
          </h1>
        </div>

        {/* MENÚ DESKTOP (solo si es desktop) */}
        {isDesktop && (
          <nav className="flex items-center gap-8">
            {menuItems.map(item => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-white hover:text-sky-400"
              >
                {item}
              </a>
            ))}
          </nav>
        )}

        {/* BOTÓN DESKTOP */}
        {/* {isDesktop && (
          <button className="px-5 py-2 rounded-xl bg-sky-500/10 text-sky-400 hover:bg-sky-500 hover:text-white transition">
            Let’s Talk
          </button>
        )} */}

        {/* HAMBURGUESA MOBILE */}
        {!isDesktop && (
          <button
            className="text-white text-3xl"
            onClick={() => setOpen(!open)}
          >
            ☰
          </button>
        )}
      </div>

      {/* MENÚ MOBILE */}
      {!isDesktop && open && (
        <div className="bg-[#020b10]/95 border-t border-white/10">
          <nav className="flex flex-col px-6 py-4 gap-4">
            {menuItems.map(item => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-gray-300 hover:text-white"
                onClick={() => setOpen(false)}
              >
                {item}
              </a>
            ))}
            {/* <button className="mt-4 px-5 py-3 rounded-xl bg-sky-500/10 text-sky-400">
              Let’s Talk
            </button> */}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
