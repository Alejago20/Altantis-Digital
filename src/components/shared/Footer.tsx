import Logo from "../header/Logo"

const Footer = () => {
  return (
    <footer className="relative overflow-hidden bg-[#101E2A]">

      {/* Gradiente oscuro del fondo */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#020b10] via-[#041b24] to-[#020b10]" />

      {/* Contenido */}
      <div className="relative max-w-6xl mx-auto px-6 py-28 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

        {/* Columna 1 */}
        <div className="space-y-6">
          <Logo showDigital={false} />

          <p className="text-slate-400 leading-relaxed text-sm">
            Empoderando a la próxima generación de PYMES con soluciones
            digitales innovadoras y diseño estratégico de excelencia.
          </p>
        </div>

        {/* Columna 2 */}
        <div className="space-y-6">
          <h2 className="text-lg font-semibold text-white">
            Servicios
          </h2>

          <div className="space-y-3 text-slate-400 text-sm">
            <p>Desarrollo Web</p>
            <p>Marketing Digital</p>
            <p>Diseño UI/UX</p>
            <p>Branding</p>
          </div>
        </div>

        {/* Columna 3 */}
        <div className="space-y-6">
          <h2 className="text-lg font-semibold text-white">
            Compañía
          </h2>

          <div className="space-y-3 text-slate-400 text-sm">
            <p>Sobre Nosotros</p>
            <p>Nuestro Equipo</p>
            <p>Portafolio</p>
            <p>Contacto</p>
          </div>
        </div>

        {/* Columna 4 */}
        <div className="space-y-6">
          <h2 className="text-lg font-semibold text-white">
            Boletín
          </h2>

          <p className="text-slate-400 text-sm leading-relaxed">
            Suscríbete para recibir noticias, actualizaciones y consejos de marketing digital.
          </p>

          <div className="flex flex-col gap-3">
            <input
              type="email"
              placeholder="Tu correo electrónico"
              className="px-4 py-2 rounded-md bg-[#0c1823] text-white text-sm outline-none"
            />

            <button className="bg-sky-500 hover:bg-sky-600 text-white text-sm py-2 rounded-md transition">
              Suscribirse
            </button>
          </div>
        </div>

      </div>

    </footer>
  )
}

export default Footer