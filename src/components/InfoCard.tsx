const InfoCard = () => {
  return (
    <div className="absolute bottom-[-40px] left-[-40px] bg-[#061a22]/90 backdrop-blur-xl border border-white/10 rounded-2xl p-5 w-64 shadow-xl">
      
      <div className="flex items-center gap-3 mb-3">
        <div className="h-10 w-10 rounded-lg bg-sky-500/20 flex items-center justify-center text-sky-400">
          📈
        </div>
        <h4 className="text-white font-semibold text-sm">
          Real-time Growth
        </h4>
      </div>

      <p className="text-gray-400 text-sm">
        Scaling digital infrastructures for modern global markets.
      </p>
    </div>
  );
};

export default InfoCard;
