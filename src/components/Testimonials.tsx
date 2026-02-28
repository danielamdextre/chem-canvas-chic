import { useLang } from '@/contexts/LangContext';
import SectionEyebrow from './SectionEyebrow';

const Testimonials = () => {
  const { t } = useLang();

  const testimonials = [
    {
      quote: t('"Llevaba dos años suspendiendo química. Con Daniela empecé a entender de verdad y saqué un 7,5 en la Selectividad."', '"I\'d been failing chemistry for two years. With Daniela I started to really understand and scored 7.5 in my entrance exam."'),
      name: 'Marc T.',
      info: t('2º Bach · Barcelona', 'A-levels · Barcelona'),
    },
    {
      quote: t('"Siempre explica el porqué, nunca solo la fórmula. Las clases online son igual de buenas que en persona."', '"She always explains the why, never just the formula. Online classes are just as good as in person."'),
      name: 'Sofía R.',
      info: t('3º ESO · Online', 'Year 9 · Online'),
    },
    {
      quote: t('"Mi hija pasó de un 3 a un 8 en tres meses. Muy profesional y cercana. Lo recomiendo sin dudar."', '"My daughter went from a 3 to an 8 in three months. Very professional and warm. Highly recommended."'),
      name: 'Josep M.',
      info: t('Padre · 4º ESO', 'Parent · Year 10'),
    },
  ];

  return (
    <section className="py-16 px-6 md:px-12 lg:px-16 bg-background">
      <div className="text-center mb-10">
        <SectionEyebrow>
          <span className="mx-auto">{t('Testimonios', 'Testimonials')}</span>
        </SectionEyebrow>
        <h2 className="font-display text-[clamp(2rem,3vw,2.8rem)] font-normal text-foreground leading-[1.12]">
          {t(<>Lo que dicen mis <em className="italic text-primary">alumnos</em></>, <>What my <em className="italic text-primary">students</em> say</>)}
        </h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {testimonials.map((test, i) => (
          <div key={i} className="bg-snow border border-border rounded-xl p-7 transition-all hover:shadow-lg hover:border-green-100 hover:-translate-y-1">
            <div className="text-[0.75rem] text-primary mb-4 tracking-wider">★★★★★</div>
            <p className="font-display italic text-base text-foreground leading-relaxed mb-5">{test.quote}</p>
            <div className="text-[0.76rem] text-muted-foreground">
              <strong className="block text-foreground font-head font-semibold text-[0.8rem] mb-0.5">{test.name}</strong>
              {test.info}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
