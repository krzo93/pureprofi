import FloatingDots from './components/FloatingDots'

function OrbBackground() {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none" style={{ zIndex: 0 }}>
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100" />
      <div
        className="absolute w-[500px] h-[500px] sm:w-[600px] sm:h-[600px] rounded-full opacity-20 animate-orb"
        style={{ background: 'radial-gradient(circle, #4285F4 0%, transparent 70%)', top: '-10%', left: '-5%' }}
      />
      <div
        className="absolute w-[400px] h-[400px] sm:w-[500px] sm:h-[500px] rounded-full opacity-15 animate-orb-delay"
        style={{ background: 'radial-gradient(circle, #34A853 0%, transparent 70%)', bottom: '5%', right: '-5%' }}
      />
      <div
        className="absolute w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] rounded-full opacity-10 animate-orb-slow"
        style={{ background: 'radial-gradient(circle, #FBBC04 0%, transparent 70%)', top: '40%', right: '20%' }}
      />
      <div
        className="absolute w-[250px] h-[250px] sm:w-[350px] sm:h-[350px] rounded-full opacity-10 animate-orb"
        style={{ background: 'radial-gradient(circle, #EA4335 0%, transparent 70%)', bottom: '20%', left: '15%', animationDuration: '12s' }}
      />
    </div>
  )
}

function LogoMark() {
  return (
    <div className="flex items-center gap-3 animate-fadeInUp" style={{ animationDelay: '0.1s', opacity: 0 }}>
      <div className="relative w-11 h-11 sm:w-12 sm:h-12">
        <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-blue-500 to-blue-700 shadow-lg shadow-blue-200 animate-float" />
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-white font-bold text-lg sm:text-xl select-none">P</span>
        </div>
      </div>
      <span className="text-xl sm:text-2xl font-bold text-gray-800 tracking-tight">Pureprofi</span>
    </div>
  )
}

function FeatureChip({ icon, label, delay }) {
  return (
    <div
      className="glass-light rounded-full px-3 py-1.5 sm:px-4 sm:py-2 flex items-center gap-2 shadow-sm animate-fadeInUp"
      style={{ animationDelay: delay, opacity: 0 }}
    >
      <span className="text-sm sm:text-base">{icon}</span>
      <span className="text-xs sm:text-sm font-medium text-gray-600">{label}</span>
    </div>
  )
}


export default function App() {
  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
      <OrbBackground />
      <FloatingDots />

      <main className="relative z-10 flex flex-col items-center text-center px-5 sm:px-8 py-12 sm:py-16 w-full max-w-2xl mx-auto gap-8 sm:gap-10">

        <LogoMark />

        <div className="flex flex-col gap-3 sm:gap-4">
          <h1
            className="text-4xl sm:text-5xl md:text-7xl font-bold leading-tight animate-fadeInUp"
            style={{ animationDelay: '0.25s', opacity: 0 }}
          >
            <span className="text-gray-800">Prihaja</span>{' '}
            <span className="text-gradient-animated">kmalu</span>
          </h1>
          <p
            className="text-base sm:text-lg md:text-xl text-gray-500 font-light max-w-lg mx-auto leading-relaxed animate-fadeInUp"
            style={{ animationDelay: '0.4s', opacity: 0 }}
          >
            Pripravljamo celovito ponudbo profesionalnih čistil za zahtevne
            uporabnike in podjetja. Čistota na višji ravni.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-2 sm:gap-3">
          <FeatureChip icon="🧴" label="Profesionalna čistila" delay="0.55s" />
          <FeatureChip icon="✅" label="Preverjeni rezultati" delay="0.65s" />
          <FeatureChip icon="🌿" label="Okolju prijazno" delay="0.75s" />
        </div>

        <div
          className="w-16 h-px bg-gradient-to-r from-transparent via-blue-300 to-transparent animate-fadeIn"
          style={{ animationDelay: '0.7s', opacity: 0 }}
        />

        {/* Contact email */}
        <div
          className="flex flex-col items-center gap-2 animate-fadeInUp"
          style={{ animationDelay: '0.85s', opacity: 0 }}
        >
          <p className="text-xs sm:text-sm font-medium text-gray-400 uppercase tracking-widest">
            Stopite v stik z nami
          </p>
          <a
            href="mailto:info@pureprofi.si"
            className="group flex items-center gap-2.5 glass-light rounded-full px-5 py-3 shadow-sm hover:shadow-md transition-all duration-200 hover:-translate-y-0.5"
          >
            <svg className="w-4 h-4 text-blue-500 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            <span className="text-sm sm:text-base font-medium text-gray-700 group-hover:text-blue-600 transition-colors duration-200">
              info@pureprofi.si
            </span>
          </a>
        </div>

      </main>

      <footer className="relative z-10 w-full text-center pb-6 sm:pb-8 px-6">
        <p className="text-xs text-gray-400">
          © {new Date().getFullYear()} Pureprofi.si — Vse pravice pridržane
        </p>
      </footer>
    </div>
  )
}
