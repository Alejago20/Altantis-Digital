import { Monitor } from "lucide-react";
import { FiCode } from "react-icons/fi";

const ServiceSection = () => {
  return (
    <section className="relative overflow-hidden bg-[#101E2A]">
      <div className="absolute inset-0 bg-gradient-to-r from-[#020b10] via-[#041b24] to-[#020b10] " />

    <div className="relative max-w-7xl mx-auto px-6 py-28 space-y-20">
        <div>
        <span className="inline-block  px-4 py-1 text-sm font-semibold tracking-widest text-sky-400 ">
          Nuestra Experiencia
        </span>
        <div className="flex justify-between items-center">
          <h2 className="text-4xl md:text-5xl font-semibold text-white leading-tight w-2/3 ml-4">
            Servicios Digitales Premium
          </h2>
          <h5 className="text-gray-400 w-1/3">
            Estrategias personalizadas y excelencia técnica para ayudar a su
            empresa a superar a la competencia.
          </h5>
        </div>

                
        </div>
     <div className="grid grid-cols-1 md:grid-cols-3 items-center gap-5">
      
      <div className="p-9 rounded-3xl h-52  bg-[rgba(30,41,59,0.4)] ">
        <div className="w-14 h-14 bg-sky-900/40 rounded-xl flex items-center justify-center">
  <Monitor className="w-7 h-7 text-sky-400" />
</div>
      
      
      
       </div>
      <div className=" p-12 h-52  bg-[rgba(30,41,59,0.4)] rounded-2xl"> <FiCode className="text-4xl text-sky-400" /> </div>
      <div className=" p-12 h-52 bg-[rgba(30,41,59,0.4)] rounded-2xl"> <FiCode className="text-4xl text-sky-400" /> </div>
    
     </div>

      </div>
    </section>
  );
};

export default ServiceSection;
