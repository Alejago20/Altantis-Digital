import { useNavigate, useLocation } from "react-router-dom";

interface Props {
  items: string[];
}

const DesktopMenu = ({ items }: Props) => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleNavigation = (item: string) => {
    const section = item.toLowerCase();

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

    // Si estamos en landing
    if (location.pathname === "/") {
      const element = document.getElementById(section);
      element?.scrollIntoView({ behavior: "smooth" });
    } else {
      navigate("/", { state: { scrollTo: section } });
    }
  };

  return (
    <nav className="flex items-end gap-8">
      {items.map((item) => (
        <button
          key={item}
          onClick={() => handleNavigation(item)}
          className="text-white hover:text-sky-400 transition"
        >
          {item}
        </button>
      ))}
    </nav>
  );
};

export default DesktopMenu;