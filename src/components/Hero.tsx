import InfoCard from "./InfoCard";
import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-[#020b10]">

      {/* DEGRADADO */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#020b10] via-[#041b24] to-[#020b10]" />

      {/* CONTENEDOR */}
      <div className="relative max-w-7xl mx-auto px-6 py-28
                      grid grid-cols-1 sm:grid-cols-2
                      gap-16 items-center">

        {/* COLUMNA 1 */}
        <div>
          <span className="inline-block mb-6 px-4 py-1 text-xs tracking-widest text-sky-400 border border-sky-500/30 rounded-full">
            Soluciones Digitales para PYMES | Diseño Web y Marketing Digital
          </span>

          <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight">
            Soluciones digitales para {" "}
            <span className="text-sky-400">empresas en crecimiento</span>
          </h1>

          <p className="mt-6 text-gray-400 max-w-xl">
            Empoderamos a pequeñas y medianas empresas con diseño web profesional, marketing digital estratégico y desarrollo web de alto rendimiento
          </p>

          <div className="mt-10 flex gap-4">
            <button className="px-6 py-3 rounded-xl bg-sky-500 text-white font-semibold">
              Start Your Project
            </button>

            <button className="px-6 py-3 rounded-xl border border-white/10 text-white">
              View Portfolio
            </button>
          </div>
        </div>

        {/* COLUMNA 2 */}
      {/* COLUMNA 2 */}
<div className="relative">

  <motion.div
    initial={{ opacity: 0, x: 80 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.9 }}
  >
    <Tilt
      tiltMaxAngleX={6}
      tiltMaxAngleY={6}
      scale={1.02}
      transitionSpeed={2000}
      glareEnable={true}
      glareMaxOpacity={0.15}
    >
      <div className="rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
        <img
          src="https://images.unsplash.com/photo-1460925895917-afdab827c52f"
          alt="Dashboard de crecimiento empresarial"
          className="w-full h-full object-cover"
        />
      </div>
    </Tilt>
  </motion.div>

 
</div>

      </div>
    </section>
  );
};

export default Hero;
