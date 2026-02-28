import { useLang } from '@/contexts/LangContext';
import SectionEyebrow from './SectionEyebrow';

const About = () => {
  const { t } = useLang();

  return (
    <section id="sobre-mi" className="py-20 px-6 md:px-12 lg:px-16 bg-snow">
      <div className="grid grid-cols-1 lg:grid-cols-[260px_1fr] gap-12 lg:gap-16 items-start">
        
        {/* Photo - left */}
        <div className="relative flex-shrink-0">
          
          <div className="w-60 aspect-[3/4] rounded-xl rounded-bl-[50px] overflow-hidden border-2 border-background/80 shadow-lg">
            <img
              src="/daniela.png"
              alt="Daniela Meléndez"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="absolute -bottom-3 -right-3 bg-background border border-border px-4 py-3 rounded-lg shadow-md">
            <strong className="block font-head text-[0.75rem] font-bold text-foreground mb-0.5">
              Daniela Meléndez
            </strong>
            <span className="font-head text-[0.56rem] text-muted-foreground">
              Ing. UNALM · Barcelona
            </span>
          </div>

        </div>

        {/* Text - right */}
<div>
  <SectionEyebrow>{t('Sobre mí', 'About me')}</SectionEyebrow>

  <h2 className="font-display text-[clamp(2rem,3vw,2.8rem)] text-foreground leading-[1.12] mb-1">
    {t(
      <>Hola, soy <span className="text-primary">Daniela</span></>,
      <>Hi, I'm <span className="text-primary">Daniela</span></>
    )}
  </h2>

  <p className="text-lg text-muted-foreground mb-5">
    {t(
      'Ingeniera que enseña química desde la estructura, no desde la memoria.',
      'An engineer who teaches chemistry from structure, not memorisation.'
    )}
  </p>

  <p className="text-[0.88rem] text-muted-foreground leading-relaxed mb-5">
    {t(
      'Desde el colegio siempre quise entender cómo funcionan las cosas por dentro. No me bastaba con aplicar una fórmula; necesitaba comprender el porqué. Esa misma forma de aprender es la que hoy intento transmitir.\n\nEstudié Ingeniería en la UNALM (Perú) y descubrí que muchos alumnos no fallan en química por falta de capacidad, sino por falta de contexto.\n\nLlevo más de 5 años dando clases particulares y he acompañado a más de 80 estudiantes a pasar de "no entiendo nada" a aprobar con confianza.',
      'Since school, I always wanted to understand how things work from the inside. Applying a formula was never enough — I needed to understand why. That same way of learning is what I try to pass on today.\n\nI studied Engineering at UNALM (Peru) and realised that many students do not struggle with chemistry because of lack of ability, but because of lack of context.\n\nI have been giving private lessons for over 5 years and have helped more than 80 students go from "I don’t get it" to passing with confidence.'
    )}
  </p>

  <div className="flex flex-col gap-2 mt-5">
    {[
      t('Ingeniería — UNALM, Perú', 'Engineering — UNALM, Peru'),
      t('+5 años enseñando química', '5+ years teaching chemistry'),
      t('+80 alumnos de ESO y Bachillerato', '80+ students, secondary and A-levels'),
      t('Online y presencial en Barcelona', 'Online and in-person in Barcelona'),
    ].map((cred, i) => (
      <div key={i} className="flex items-center gap-3 text-[0.83rem] text-muted-foreground">
        <span className="w-1 h-1 rounded-full bg-green-300 flex-shrink-0" />
        {cred}
      </div>
    ))}
  </div>
</div>

      </div>
    </section>
  );
};

export default About;
