import { useLang } from '@/contexts/LangContext';
import { WhatsAppIcon } from './Navbar';

const WA_BOOK = "https://wa.me/34672586550?text=Hola%20Daniela!%20Me%20gustar%C3%ADa%20reservar%20mi%20primera%20clase%20de%20valoraci%C3%B3n";

const Hero = () => {
  const { t } = useLang();

  return (
    <section id="top" className="grid grid-cols-1 lg:grid-cols-2 min-h-screen">
      {/* Left */}
      <div className="flex flex-col justify-center px-6 md:px-12 lg:px-16 pt-28 pb-12 lg:pt-32 lg:pb-16 bg-background relative z-10">
        <div className="inline-flex items-center gap-2 font-head text-[0.68rem] font-semibold tracking-wide text-primary bg-accent border border-green-100 px-4 py-1.5 rounded-full mb-7 self-start">
          🌿 {t('Profesora de Química · Barcelona', 'Chemistry Tutor · Barcelona')}
        </div>

        <h1 className="font-display text-[clamp(2.6rem,4.5vw,4.2rem)] leading-[1.08] text-foreground mb-5 tracking-tight">
          {t(
            <>Química que<br /><span className="text-primary">entenderás</span><br />de verdad</>,
            <>Chemistry you'll<br /><span className="text-primary">truly</span><br />understand</>
          )}
        </h1>

        <p className="text-[0.98rem] text-muted-foreground leading-relaxed max-w-[400px] mb-6">
          {t(
            'Clases personalizadas para ESO y Bachillerato — online o presencial en Barcelona.',
            'Personalised lessons for secondary and A-levels — online or in-person in Barcelona.'
          )}
        </p>

        <div className="flex flex-wrap gap-2 mb-7">
          {['📚 ESO', `🎓 Bachillerato`, `🎯 ${t('A medida', 'Tailored')}`, '💻 Online', '📍 Barcelona'].map((pill) => (
            <span key={pill} className="font-head text-[0.75rem] font-medium text-muted-foreground border border-border bg-background px-3.5 py-1 rounded-full transition-all hover:border-green-300 hover:text-green-700 hover:bg-accent cursor-default">
              {pill}
            </span>
          ))}
        </div>

        <div className="flex items-center gap-3 flex-wrap">
          <a
            href={WA_BOOK}
            target="_blank"
            rel="noopener noreferrer"
            className="font-head text-[0.75rem] font-bold tracking-wide bg-primary text-primary-foreground no-underline px-7 py-3.5 rounded-full transition-all hover:bg-green-700 hover:-translate-y-0.5 shadow-lg inline-flex items-center gap-2"
          >
            💬 {t('Escríbeme', 'Message me')}
          </a>
          <a
            href="#servicios"
            className="font-head text-[0.75rem] font-semibold tracking-wide bg-transparent text-primary no-underline px-6 py-3.5 rounded-full border border-green-100 transition-all hover:bg-accent hover:border-green-300 inline-flex items-center gap-2"
          >
            {t('Ver servicios →', 'See services →')}
          </a>
        </div>
      </div>

      {/* Right */}
      <div className="relative overflow-hidden bg-gradient-to-br from-accent via-snow to-green-50 min-h-[360px] lg:min-h-0">
        <div className="absolute inset-0 flex items-center justify-center z-10">
          <div className="w-[260px] h-[330px] rounded-[20px_20px_55px_20px] overflow-hidden shadow-2xl border-[3px] border-background/80 bg-green-100 flex items-center justify-center">
            <div className="text-center text-green-700 opacity-40">
              <span className="text-5xl block mb-2">👩‍🔬</span>
              <small className="font-head text-[0.55rem] tracking-widest uppercase">
                {t('Tu foto aquí', 'Your photo here')}
              </small>
            </div>
          </div>
        </div>

        {/* Floating cards */}
        <div className="absolute top-[17%] left-[5%] bg-background/88 backdrop-blur-lg border border-background/70 rounded-lg px-4 py-3 shadow-xl z-20 animate-float">
          <div className="font-head text-[0.52rem] font-semibold tracking-widest uppercase text-primary mb-0.5">
            🎓 {t('Formación', 'Background')}
          </div>
          <div className="font-head text-[0.82rem] font-bold text-foreground">Ing. UNALM</div>
        </div>
        <div className="absolute bottom-[19%] right-[4%] bg-background/88 backdrop-blur-lg border border-background/70 rounded-lg px-4 py-3 shadow-xl z-20 animate-float-delayed">
          <div className="font-head text-[0.52rem] font-semibold tracking-widest uppercase text-primary mb-0.5">
            ⭐ {t('Valoración', 'Rating')}
          </div>
          <div className="font-head text-[0.82rem] font-bold text-foreground">5.0 / 5</div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
