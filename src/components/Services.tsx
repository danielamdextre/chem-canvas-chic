import { useLang } from '@/contexts/LangContext';
import SectionEyebrow from './SectionEyebrow';

interface ServiceCard {
  tag: string;
  title: string;
  desc: string;
  topics: string[];
  footer: string;
  featured?: boolean;
}

const Services = () => {
  const { t } = useLang();

  const cards: ServiceCard[] = [
    {
      tag: t('ESO · 1º–4º', 'Secondary · Years 7–10'),
      title: t('Química ESO', 'Secondary Chemistry'),
      desc: t('Construimos una base sólida desde el principio. Aprenderás a entender los conceptos, no a memorizarlos.', 'We build a solid foundation from the start. You\'ll learn to understand concepts, not just memorise them.'),
      topics: [t('Átomos y moléculas', 'Atoms & molecules'), t('Enlace químico', 'Chemical bonding'), t('Reacciones', 'Reactions'), t('Formulación', 'Nomenclature'), t('Estequiometría', 'Stoichiometry')],
      footer: t('Consultar tarifa · Online & BCN', 'Ask for pricing · Online & BCN'),
    },
    {
      tag: t('Más solicitado · Bach. 1º–2º', 'Most popular · A-levels'),
      title: t('Química Bachillerato', 'A-level Chemistry'),
      desc: t('El nivel donde más estudiantes se quedan atrás. Conectamos cada concepto con la vida real para que no se olvide.', 'The level where most students fall behind. We connect every concept to real life so it sticks.'),
      topics: [t('Termodinámica', 'Thermodynamics'), t('Cinética', 'Kinetics'), t('Equilibrio', 'Equilibrium'), t('Orgánica', 'Organic'), t('Electroquímica', 'Electrochemistry'), t('Ácido-base', 'Acid-base')],
      footer: t('Consultar tarifa · Online & BCN', 'Ask for pricing · Online & BCN'),
      featured: true,
    },
    {
      tag: t('Tú eliges el tema', 'You choose the topic'),
      title: t('Clase a medida', 'Tailored Class'),
      desc: t('¿Tienes un tema concreto que se te resiste? Diseñamos juntas una sesión enfocada exactamente en lo que necesitas.', 'Got a specific topic you\'re struggling with? We design a session focused exactly on what you need.'),
      topics: [t('Tema específico', 'Specific topic'), t('Repaso rápido', 'Quick review'), t('Antes de un examen', 'Before an exam'), t('Dudas concretas', 'Specific questions')],
      footer: t('Consultar tarifa · Online & BCN', 'Ask for pricing · Online & BCN'),
    },
  ];

  return (
    <section id="servicios" className="py-20 px-6 md:px-12 lg:px-16 bg-background">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-end mb-10">
        <div>
          <SectionEyebrow>{t('Servicios', 'Services')}</SectionEyebrow>
          <h2 className="font-display text-[clamp(2rem,3vw,2.8rem)] font-normal text-foreground leading-[1.12]">
            {t(<>¿Qué nivel<br />es el tuyo?</>, <>What's your<br />level?</>)}
          </h2>
        </div>
        <p className="text-[0.88rem] text-muted-foreground leading-relaxed">
          {t('Clases particulares 100% personalizadas, online o presencial en Barcelona. El contenido se adapta exactamente a tu programa.', '100% personalised private lessons, online or in-person in Barcelona. Content adapts exactly to your syllabus.')}
        </p>
      </div>

      <div className="flex flex-col lg:flex-row gap-5">
        {cards.map((card, i) => (
          <div
            key={i}
            className={`flex-1 rounded-xl p-8 flex flex-col transition-all duration-500 ease-[cubic-bezier(0.23,1,0.32,1)] border hover:-translate-y-1 ${
              card.featured
                ? 'bg-green-700 border-green-700 shadow-xl hover:shadow-2xl'
                : 'bg-snow border-border hover:shadow-lg hover:border-green-300'
            }`}
          >
            <span className={`font-head text-[0.55rem] font-semibold tracking-widest uppercase px-2.5 py-1 rounded-full inline-block mb-5 self-start ${
              card.featured ? 'bg-primary-foreground/10 text-primary-foreground/60' : 'bg-accent text-primary'
            }`}>
              {card.tag}
            </span>
            <h3 className={`font-head text-lg font-bold mb-2 leading-tight ${card.featured ? 'text-primary-foreground' : 'text-foreground'}`}>
              {card.title}
            </h3>
            <p className={`text-[0.85rem] leading-relaxed mb-5 flex-1 ${card.featured ? 'text-primary-foreground/50' : 'text-muted-foreground'}`}>
              {card.desc}
            </p>
            <div className="flex flex-wrap gap-1.5 mb-5">
              {card.topics.map((topic, j) => (
                <span key={j} className={`text-[0.7rem] px-2 py-0.5 rounded-full border ${
                  card.featured ? 'bg-primary-foreground/[0.06] text-primary-foreground/50 border-primary-foreground/10' : 'bg-background text-muted-foreground border-border'
                }`}>
                  {topic}
                </span>
              ))}
            </div>
            <div className={`font-head text-[0.56rem] font-medium tracking-wider uppercase pt-4 border-t mt-auto ${
              card.featured ? 'text-primary-foreground/25 border-primary-foreground/10' : 'text-ink-25 border-border'
            }`}>
              {card.footer}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
