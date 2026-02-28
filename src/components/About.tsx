import { useLang } from '@/contexts/LangContext';
import SectionEyebrow from './SectionEyebrow';

const About = () => {
  const { t } = useLang();

  return (
    <section id="sobre-mi" className="py-20 px-6 md:px-12 lg:px-16 bg-snow">
      <div className="grid grid-cols-1 lg:grid-cols-[260px_1fr] gap-12 lg:gap-16 items-start">
        {/* Photo */}
        <div className="relative flex-shrink-0">
          <div className="w-60 aspect-[3/4] bg-gradient-to-br from-green-100 to-accent rounded-xl rounded-bl-[50px] overflow-hidden border-2 border-background/80 shadow-lg flex items-center justify-center">
            <div className="text-center text-primary opacity-40">
              <span className="text-4xl block mb-2">👩‍🔬</span>
              <small className="font-head text-[0.52rem] tracking-widest uppercase">{t('Tu foto aquí', 'Your photo here')}</small>
            </div>
          </div>
          <div className="absolute -bottom-3 -right-3 bg-background border border-border px-4 py-3 rounded-lg shadow-md">
            <strong className="block font-head text-[0.75rem] font-bold text-foreground mb-0.5">Daniela Meléndez</strong>
            <span className="font-head text-[0.56rem] text-muted-foreground">Ing. UNALM · Lima, Perú</span>
          </div>
        </div>

        {/* Text */}
        <div>
          <SectionEyebrow>{t('Sobre mí', 'About me')}</SectionEyebrow>
          <h2 className="font-display text-[clamp(2rem,3vw,2.8rem)] font-normal text-foreground leading-[1.12] mb-1">
            {t(<>Hola, soy<br /><em className="italic text-primary">Daniela</em></>, <>Hi, I'm<br /><em className="italic text-primary">Daniela</em></>)}
          </h2>
          <p className="font-display italic text-lg text-muted-foreground mb-5">
            {t('Ingeniera que enseña química con el contexto que cambia cómo la entiendes.', 'An engineer who teaches chemistry with the context that changes how you understand it.')}
          </p>
          <p className="text-[0.88rem] text-muted-foreground leading-relaxed mb-3">
            {t(
              <>Estudié Ingeniería en la <a href="https://www.lamolina.edu.pe" target="_blank" rel="noopener noreferrer" className="text-primary underline underline-offset-2 hover:text-green-700">UNALM</a> en Lima, Perú — una de las formaciones científicas más rigurosas del país.</>,
              <>I studied Engineering at <a href="https://www.lamolina.edu.pe" target="_blank" rel="noopener noreferrer" className="text-primary underline underline-offset-2 hover:text-green-700">UNALM</a> in Lima, Peru — one of the most rigorous scientific programmes in the country.</>
            )}
          </p>
          <p className="text-[0.88rem] text-muted-foreground leading-relaxed mb-5">
            {t('Llevo más de 5 años dando clases particulares de química: primero en Lima y ahora en Barcelona. He acompañado a más de 80 estudiantes a pasar de "no entiendo nada" a aprobar con confianza.', 'I\'ve been giving private chemistry lessons for over 5 years: first in Lima and now in Barcelona. I\'ve helped 80+ students go from "I don\'t get it" to passing with confidence.')}
          </p>
          <div className="flex flex-col gap-2 mt-5">
            {[
              t('Ingeniería — UNALM, Lima, Perú', 'Engineering — UNALM, Lima, Peru'),
              t('+5 años enseñando en Lima y Barcelona', '5+ years teaching in Lima and Barcelona'),
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
