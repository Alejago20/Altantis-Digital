import { useNavigate } from "react-router-dom";

interface Props {
  showDigital?: boolean;
}

const Logo = ({ showDigital = true }: Props) => {

  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div
      className="flex items-center gap-2 cursor-pointer"
      onClick={handleClick}
    >
      <div className="flex flex-col gap-1">
        <div className="h-[2px] w-6 bg-sky-400 rounded-full"></div>
        <div className="h-[2px] w-6 bg-sky-400 rounded-full translate-x-1"></div>
        <div className="h-[2px] w-6 bg-sky-400 rounded-full"></div>
      </div>

      <h1 className="text-xl font-bold tracking-tight text-white ml-1">
        Atlantis
        {showDigital && (
          <span className="text-sky-400"> Digital</span>
        )}
      </h1>
    </div>
  );
};

export default Logo;