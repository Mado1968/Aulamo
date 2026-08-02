import { useState, useEffect, useRef } from 'react';
import {
  Phone,
  Mail,
  MapPin,
  ChevronDown,
  Shield,
  Award,
  Clock,
  ArrowRight,
  Building2,
  Layers,
  Wind,
  Anchor,
  LayoutGrid,
  Menu,
  X,
} from 'lucide-react';

const SERVICES = [
  {
    icon: Building2,
    title: 'Fachadas de Edificios',
    description:
      'Servicios completos de renovación y restauración de fachadas, dando nueva vida a las superficies exteriores con artesanía de precisión y materiales duraderos.',
  },
  {
    icon: Wind,
    title: 'Cerramientos Tipo Rain-Screen',
    description:
      'Sistemas avanzados de revestimiento tipo rain-screen que protegen las estructuras de la humedad ofreciendo un excelente desempeño térmico y acústico.',
  },
  {
    icon: Anchor,
    title: 'Trabajo con Acceso por Cuerda',
    description:
      'Técnicos certificados IRATA en acceso por cuerda para inspecciones, mantenimiento e instalación en altura — alcanzando donde el acceso convencional no puede llegar.',
  },
  {
    icon: Layers,
    title: 'Reformas',
    description:
      'Reformas integrales de edificios, desde refuerzos estructurales hasta acabados estéticos, gestionados de principio a fin con estándares de calidad sin concesiones.',
  },
  {
    icon: LayoutGrid,
    title: 'Patios Interiores',
    description:
      'Transformación de espacios de patio interior en entornos funcionales y visualmente impactantes que mejoran toda la experiencia del edificio.',
  },
];

const STATS = [
  { value: '15+', label: 'Años de Experiencia' },
  { value: '300+', label: 'Proyectos Completados' },
  { value: '50+', label: 'Técnicos Expertos' },
  { value: '100%', label: 'Satisfacción del Cliente' },
];

const WHY_US = [
  { icon: Shield, title: 'Certificados y Asegurados', text: 'Todos nuestros equipos están totalmente certificados con acreditación IRATA y un seguro de proyecto integral.' },
  { icon: Award, title: 'Calidad Premiada', text: 'Reconocidos por la excelencia en ingeniería de fachadas y soluciones innovadoras tipo rain-screen.' },
  { icon: Clock, title: 'Puntuales, Siempre', text: 'Respetamos su agenda y entregamos cada proyecto dentro de los plazos acordados sin recortes.' },
];

function useIntersection(threshold = 0.15) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVisible(true); }, { threshold });
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return { ref, visible };
}

function FadeIn({ children, delay = 0, className = '' }: { children: React.ReactNode; delay?: number; className?: string }) {
  const { ref, visible } = useIntersection();
  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : 'translateY(28px)',
        transition: `opacity 0.65s ease ${delay}ms, transform 0.65s ease ${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handler);
    return () => window.removeEventListener('scroll', handler);
  }, []);

  const navLinks = ['Servicios', 'Nosotros', 'Por Qué Nosotros', 'Contacto'];

  return (
    <div className="bg-black text-white font-sans antialiased">

      {/* ── NAV ── */}
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
          scrolled ? 'bg-black/95 backdrop-blur border-b border-white/10 py-3' : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          <a href="#hero" className="flex items-center gap-3">
            <img src="/images/a1.jpeg" alt="Aulamo S.L." className="h-10 w-auto" />
          </a>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((l) => (
              <a
                key={l}
                href={`#${l.toLowerCase().replace(' ', '-')}`}
                className="text-sm font-medium text-white/70 hover:text-red-500 transition-colors tracking-wide uppercase"
              >
                {l}
              </a>
            ))}
            <a
              href="#contacto"
              className="ml-2 px-5 py-2 bg-red-600 hover:bg-red-500 text-white text-sm font-semibold rounded transition-colors"
            >
              Solicitar Presupuesto
            </a>
          </nav>

          {/* Mobile menu toggle */}
          <button
            className="md:hidden text-white/80 hover:text-red-500 transition-colors"
            onClick={() => setMenuOpen((v) => !v)}
            aria-label="Abrir menú"
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile dropdown */}
        {menuOpen && (
          <div className="md:hidden bg-black border-t border-white/10 px-6 py-4 flex flex-col gap-4">
            {navLinks.map((l) => (
              <a
                key={l}
                href={`#${l.toLowerCase().replace(' ', '-')}`}
                className="text-sm font-medium text-white/70 hover:text-red-500 transition-colors tracking-wide uppercase"
                onClick={() => setMenuOpen(false)}
              >
                {l}
              </a>
            ))}
            <a
              href="#contacto"
              className="mt-1 px-5 py-2 bg-red-600 hover:bg-red-500 text-white text-sm font-semibold rounded text-center transition-colors"
              onClick={() => setMenuOpen(false)}
            >
              Solicitar Presupuesto
            </a>
          </div>
        )}
      </header>

      {/* ── HERO ── */}
      <section
        id="hero"
        className="relative min-h-screen flex flex-col items-center justify-center text-center px-6 overflow-hidden"
      >
        {/* Background graphic */}
        <div className="absolute inset-0 flex items-center justify-center opacity-10 pointer-events-none select-none">
          <img src="/images/a2.jpeg" alt="" className="w-[70vmin] max-w-2xl" />
        </div>
        {/* Red top accent line */}
        <div className="absolute top-0 inset-x-0 h-1 bg-red-600" />

        <div className="relative z-10 max-w-4xl">
          <div className="mb-6 inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-red-600/50 bg-red-600/10 text-red-400 text-xs font-semibold tracking-widest uppercase">
            Reformas en general
          </div>

          <h1 className="text-5xl sm:text-7xl font-extrabold tracking-tight leading-none mb-6">
            <span className="text-red-500">Reformas en general</span>
            <br />
            fachadas, patios y trabajos verticales
          </h1>

          <p className="text-white/60 text-lg sm:text-xl max-w-2xl mx-auto leading-relaxed mb-10">
            Aulamo S.L. ofrece reformas expertas, cerramientos tipo rain-screen, trabajos con acceso por cuerda,
            fachadas de edificios y transformaciones de patios interiores — desde el nivel del suelo hasta el punto más alto.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#servicios"
              className="group inline-flex items-center gap-2 px-8 py-4 bg-red-600 hover:bg-red-500 text-white font-semibold rounded transition-colors"
            >
              Nuestros Servicios
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#contacto"
              className="inline-flex items-center gap-2 px-8 py-4 border border-white/20 hover:border-red-500 hover:text-red-400 text-white/80 font-semibold rounded transition-colors"
            >
              Contáctenos
            </a>
          </div>
        </div>

        <a
          href="#servicios"
          className="absolute bottom-10 text-white/30 hover:text-red-500 transition-colors animate-bounce"
          aria-label="Desplazarse hacia abajo"
        >
          <ChevronDown size={32} />
        </a>
      </section>

      {/* ── STATS BAND ── */}
      <section className="border-y border-white/10 bg-white/5 py-12">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8">
          {STATS.map((s, i) => (
            <FadeIn key={s.label} delay={i * 80} className="text-center">
              <p className="text-4xl font-extrabold text-red-500 mb-1">{s.value}</p>
              <p className="text-sm text-white/50 uppercase tracking-widest">{s.label}</p>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* ── SERVICES ── */}
      <section id="servicios" className="py-28 px-6">
        <div className="max-w-7xl mx-auto">
          <FadeIn className="text-center mb-16">
            <p className="text-red-500 text-xs font-bold uppercase tracking-widest mb-3">Lo Que Hacemos</p>
            <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight">Nuestros Servicios</h2>
            <div className="mt-4 mx-auto w-16 h-1 bg-red-600 rounded" />
          </FadeIn>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICES.map((svc, i) => (
              <FadeIn key={svc.title} delay={i * 80}>
                <div className="group h-full p-8 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 hover:border-red-600/60 transition-all duration-300">
                  <div className="mb-5 w-12 h-12 flex items-center justify-center rounded-lg bg-red-600/15 group-hover:bg-red-600/25 transition-colors">
                    <svc.icon size={24} className="text-red-500" />
                  </div>
                  <h3 className="text-lg font-bold mb-3">{svc.title}</h3>
                  <p className="text-white/55 text-sm leading-relaxed">{svc.description}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── ABOUT ── */}
      <section id="nosotros" className="py-28 px-6 border-t border-white/10">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">

          {/* Images collage */}
          <FadeIn className="relative">
            <div className="grid grid-cols-2 gap-4">
              <img
                src="/images/a2.jpeg"
                alt="Icono de construcción"
                className="rounded-xl col-span-1 row-span-2 w-full h-full object-cover border border-white/10"
              />
              <img
                src="/images/a3.jpeg"
                alt="Silueta de edificio"
                className="rounded-xl w-full object-cover border border-white/10 bg-white/5 p-4"
              />
              <div className="rounded-xl border border-red-600/40 bg-red-600/10 flex items-center justify-center p-6">
                <p className="text-red-400 font-extrabold text-xl text-center leading-snug">
                  Excelencia<br />en cada proyecto.
                </p>
              </div>
            </div>
            {/* Decorative dot grid */}
            <div className="absolute -bottom-6 -left-6 w-28 h-28 opacity-20 pointer-events-none"
              style={{ backgroundImage: 'radial-gradient(circle, #ef4444 1px, transparent 1px)', backgroundSize: '10px 10px' }}
            />
          </FadeIn>

          {/* Text */}
          <FadeIn delay={120}>
            <p className="text-red-500 text-xs font-bold uppercase tracking-widest mb-4">Sobre Aulamo S.L.</p>
            <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight leading-tight mb-6">
               Experiencia<br />y Precisión
            </h2>
            <p className="text-white/60 leading-relaxed mb-5">
              Aulamo S.L. es una empresa especialista con sede en Sabadell y más de 5 años de experiencia en trabajos
              verticales de edificación. Desde renovaciones complejas de fachadas hasta intervenciones técnicamente exigentes
              con acceso por cuerda, nuestros equipos combinan habilidad certificada con un compromiso inquebrantable con la calidad.
            </p>
            <p className="text-white/60 leading-relaxed mb-8">
              Operamos en edificios residenciales, comerciales y patrimoniales — adaptando nuestro enfoque a cada
              estructura única mientras cumplimos los estándares de seguridad y normativas más estrictos de España y la UE.
            </p>
            <a
              href="#contacto"
              className="group inline-flex items-center gap-2 text-red-400 font-semibold hover:text-red-300 transition-colors"
            >
              Comience su proyecto con nosotros
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </a>
          </FadeIn>
        </div>
      </section>

      {/* ── WHY US ── */}
      <section id="por-qué-nosotros" className="py-28 px-6 bg-white/[0.03] border-t border-white/10">
        <div className="max-w-7xl mx-auto">
          <FadeIn className="text-center mb-16">
            <p className="text-red-500 text-xs font-bold uppercase tracking-widest mb-3">Por Qué Elegirnos</p>
            <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight">La Diferencia Aulamo</h2>
            <div className="mt-4 mx-auto w-16 h-1 bg-red-600 rounded" />
          </FadeIn>

          <div className="grid md:grid-cols-3 gap-8">
            {WHY_US.map((w, i) => (
              <FadeIn key={w.title} delay={i * 100}>
                <div className="p-8 rounded-xl border border-white/10 bg-black hover:border-red-600/50 transition-colors">
                  <div className="mb-5 w-12 h-12 flex items-center justify-center rounded-full border-2 border-red-600/60 bg-red-600/10">
                    <w.icon size={22} className="text-red-500" />
                  </div>
                  <h3 className="text-lg font-bold mb-3">{w.title}</h3>
                  <p className="text-white/55 text-sm leading-relaxed">{w.text}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA BAND ── */}
      <section className="py-24 px-6 border-t border-white/10">
        <FadeIn className="max-w-3xl mx-auto text-center">
          <img src="/images/a3.jpeg" alt="" className="mx-auto h-20 w-auto mb-8 opacity-70" />
          <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight mb-5">
            ¿Listo para Transformar<br />Su Edificio?
          </h2>
          <p className="text-white/55 text-lg mb-10">
            Desde una pequeña renovación de patio hasta una renovación completa de fachada de gran altura — tenemos la experiencia para hacerlo realidad.
          </p>
          <a
            href="#contacto"
            className="group inline-flex items-center gap-2 px-10 py-4 bg-red-600 hover:bg-red-500 text-white font-bold text-lg rounded transition-colors"
          >
            Solicitar Presupuesto Gratuito
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </a>
        </FadeIn>
      </section>

      {/* ── CONTACT ── */}
      <section id="contacto" className="py-28 px-6 border-t border-white/10 bg-white/[0.03]">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16">

          {/* Info */}
          <FadeIn>
            <p className="text-red-500 text-xs font-bold uppercase tracking-widest mb-4">Póngase en Contacto</p>
            <h2 className="text-4xl font-extrabold tracking-tight mb-6">Hablemos de<br />Su Proyecto</h2>
            <p className="text-white/55 leading-relaxed mb-10">
              Cuéntenos sobre su edificio y le proporcionaremos una propuesta a medida. Nuestro equipo está disponible para
              visitas a pie de obra y consultas en toda España.
            </p>

            <div className="space-y-5">
              {[
                { icon: Phone, label: 'Teléfono', value: '+34 640330998' },
                { icon: Mail, label: 'Correo', value: 'aulamoobras@hotmail.com' },
                { icon: MapPin, label: 'Ubicación', value: 'Sabadell, Barcelona' },
              ].map(({ icon: Icon, label, value }) => (
                <div key={label} className="flex items-center gap-4">
                  <div className="w-10 h-10 flex-shrink-0 flex items-center justify-center rounded-lg bg-red-600/15">
                    <Icon size={18} className="text-red-500" />
                  </div>
                  <div>
                    <p className="text-xs text-white/40 uppercase tracking-wider">{label}</p>
                    <p className="text-white font-medium">{value}</p>
                  </div>
                </div>
              ))}
            </div>
          </FadeIn>

          {/* Form */}
          <FadeIn delay={120}>
            <form
              className="space-y-5"
              onSubmit={(e) => {
                e.preventDefault();
                alert('¡Gracias! Nos pondremos en contacto con usted en breve.');
                (e.target as HTMLFormElement).reset();
              }}
            >
              <div className="grid sm:grid-cols-2 gap-5">
                {['Nombre Completo', 'Empresa (opcional)'].map((pl) => (
                  <div key={pl}>
                    <input
                      type="text"
                      placeholder={pl}
                      className="w-full bg-white/5 border border-white/15 rounded-lg px-4 py-3 text-white placeholder-white/30 text-sm focus:outline-none focus:border-red-500 transition-colors"
                    />
                  </div>
                ))}
              </div>
              <input
                type="email"
                placeholder="Correo Electrónico"
                required
                className="w-full bg-white/5 border border-white/15 rounded-lg px-4 py-3 text-white placeholder-white/30 text-sm focus:outline-none focus:border-red-500 transition-colors"
              />
              <input
                type="tel"
                placeholder="Número de Teléfono"
                className="w-full bg-white/5 border border-white/15 rounded-lg px-4 py-3 text-white placeholder-white/30 text-sm focus:outline-none focus:border-red-500 transition-colors"
              />
              <select
                className="w-full bg-white/5 border border-white/15 rounded-lg px-4 py-3 text-white/60 text-sm focus:outline-none focus:border-red-500 transition-colors appearance-none"
                defaultValue=""
              >
                <option value="" disabled>Seleccione un Servicio</option>
                {SERVICES.map((s) => (
                  <option key={s.title} value={s.title} className="bg-black">{s.title}</option>
                ))}
              </select>
              <textarea
                rows={4}
                placeholder="Describa su proyecto..."
                className="w-full bg-white/5 border border-white/15 rounded-lg px-4 py-3 text-white placeholder-white/30 text-sm focus:outline-none focus:border-red-500 transition-colors resize-none"
              />
              <button
                type="submit"
                className="w-full py-4 bg-red-600 hover:bg-red-500 text-white font-bold rounded-lg transition-colors"
              >
                Enviar Mensaje
              </button>
            </form>
          </FadeIn>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="border-t border-white/10 py-10 px-6">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
          <img src="/images/a1.jpeg" alt="Aulamo S.L." className="h-8 w-auto" />
          <p className="text-white/30 text-sm text-center">
            &copy; {new Date().getFullYear()} Aulamo S.L. — Todos los derechos reservados.
          </p>
          <div className="flex gap-6">
            {navLinks.map((l) => (
              <a
                key={l}
                href={`#${l.toLowerCase().replace(' ', '-')}`}
                className="text-xs text-white/40 hover:text-red-400 transition-colors uppercase tracking-wider"
              >
                {l}
              </a>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}
