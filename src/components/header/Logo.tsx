const Logo = ({ showDigital = true }) => {
  return (
    <div className="flex items-center gap-2 cursor-pointer">
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
  )
}

export default Logo