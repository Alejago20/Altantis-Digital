import { Monitor, Cog, Palette } from "lucide-react";

const ServicieCard = () => {
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-3 items-center gap-5 my-4">
        
        {/* Desarrollo Web */}
        <div className="p-9 rounded-3xl h-56 md:h-auto bg-[rgba(30,41,59,0.4)]">
          <div className="w-14 h-14 bg-sky-900/40 hover:bg-sky-400 rounded-xl flex items-center justify-center transition">
            <Monitor className="w-7 h-7 text-sky-400 hover:text-white" />
          </div>

          <h1 className="text-white text-xl font-semibold mt-4">
            Desarrollo Web
          </h1>
          <p className="text-gray-400 mt-3 text-left">
            Sitios modernos, rápidos y responsivos diseñados para convertir visitantes en clientes y reflejar la esencia de tu marca.
          </p>
        </div>

        {/* Automatización */}
        <div className="p-9 h-56 md:h-auto bg-[rgba(30,41,59,0.4)] rounded-2xl">
          <div className="w-14 h-14 bg-sky-900/40 hover:bg-sky-400 rounded-xl flex items-center justify-center transition">
            <Cog className="w-7 h-7 text-sky-400 hover:text-white" />
          </div>

          <h1 className="text-white text-xl font-semibold mt-4">
            Automatización de Procesos
          </h1>
          <p className="text-gray-400 mt-3 text-left">
            Automatizo tareas repetitivas y flujos de trabajo para ahorrar tiempo, reducir errores y mejorar la eficiencia de tu negocio.
          </p>
        </div>

        {/* Diseño UI */}
        <div className="p-9 h-56 md:h-auto bg-[rgba(30,41,59,0.4)] rounded-2xl">
          <div className="w-14 h-14 bg-sky-900/40 hover:bg-sky-400 rounded-xl flex items-center justify-center transition">
            <Palette className="w-7 h-7 text-sky-400 hover:text-white" />
          </div>

          <h1 className="text-white text-xl font-semibold mt-4">
            Diseño Web UI
          </h1>
          <p className="text-gray-400 mt-3 text-left">
            Diseño interfaces modernas, limpias y funcionales enfocadas en la experiencia del usuario y la claridad visual.
          </p>
        </div>

      </div>
    </div>
  );
};

export default ServicieCard;