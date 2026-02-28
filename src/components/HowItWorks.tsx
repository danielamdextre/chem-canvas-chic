import { useLang } from '@/contexts/LangContext';
import SectionEyebrow from './SectionEyebrow';

const HowItWorks = () => {
  const { t } = useLang();

  const steps = [
    {
      num: '01',
      title: t('Escríbeme por WhatsApp', 'Message me on WhatsApp'),
      desc: t('Cuéntame tu nivel, la asignatura y qué quieres mejorar. Un mensaje es suficiente.', 'Tell me your level, subject and what you want to improve. One message is enough.'),
    },
    {
      num: '02',
      title: t('Clase de valoración gratis', 'Free assessment session'),
      desc: t('Primera sesión sin coste donde veo tu nivel real y diseñamos juntas el plan más adecuado para ti.', 'First session at no cost where I assess your real level and we design the right plan together.'),
    },
    {
      num: '03',
      title: t('Clases a tu medida', 'Classes tailored to you'),
      desc: t('Cada clase se adapta a tu programa, tu ritmo y tus dudas concretas. Cero improvisación.', 'Every class adapts to your syllabus, pace and questions. Zero improvisation.'),
    },
  ];

  return (
    <section className="py-20 px-6 md:px-12 lg:px-16 bg-snow">
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-12 lg:gap-16 items-start">
        <div className="lg:sticky lg:top-28">
          <SectionEyebrow>{t('¿Cómo funciona?', 'How it works')}</SectionEyebrow>
          <h2 className="font-display text-[clamp(2rem,3vw,2.8rem)] text-foreground leading-[1.12] mb-4">
            {t(<>Empezar es <span className="text-primary">muy fácil</span></>, <>Starting is <span className="text-primary">very easy</span></>)}
          </h2>
          <p className="text-[0.88rem] text-muted-foreground leading-relaxed">
            {t('Sin formularios complicados. Solo mándame un mensaje y en menos de 24h hablamos.', 'No complicated forms. Just send me a message and we\'ll talk within 24h.')}
          </p>
        </div>
        <div className="flex flex-col">
          {steps.map((step, i) => (
            <div key={i} className="grid grid-cols-[2.5rem_1fr] gap-5 py-6 border-b border-border first:border-t transition-all hover:pl-2">
              <span className="font-head text-[0.6rem] font-semibold tracking-wider text-green-300 pt-1">{step.num}</span>
              <div>
                <h3 className="font-head text-base font-bold text-foreground mb-1">{step.title}</h3>
                <p className="text-[0.86rem] text-muted-foreground leading-relaxed">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
