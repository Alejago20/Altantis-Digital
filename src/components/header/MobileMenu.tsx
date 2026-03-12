import { useNavigate, useLocation } from "react-router-dom";

interface Props {
  items: string[];
  close: () => void;
}

const MobileMenu = ({ items, close }: Props) => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleNavigation = (item: string) => {
    const section = item.toLowerCase();

    close();

    // INICIO
    if (section === "inicio") {
      navigate("/");
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    // CONTACTO
    if (section === "contacto") {
      navigate("/contacto");
      return;
    }

    // PORTAFOLIO
    if (section === "portfolio") {
      navigate("/portafolio");
      return;
    }

    // Si estamos en la landing
    if (location.pathname === "/") {
      const element = document.getElementById(section);
      element?.scrollIntoView({ behavior: "smooth" });
    } 
    // Si estamos en otra página
    else {
      navigate("/", { state: { scrollTo: section } });
    }
  };

  return (
    <div className="bg-[#020b10]/95 border-t border-white/10">
      <nav className="flex flex-col px-6 py-4 gap-4">
        {items.map((item) => (
          <button
            key={item}
            onClick={() => handleNavigation(item)}
            className="text-gray-300 hover:text-white text-left transition"
          >
            {item}
          </button>
        ))}
      </nav>
    </div>
  );
};

export default MobileMenu;