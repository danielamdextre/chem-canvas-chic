import { useState } from 'react';
import { useLang } from '@/contexts/LangContext';
import SectionEyebrow from './SectionEyebrow';

const FAQ = () => {
  const { t } = useLang();
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      q: t('¿Cómo funcionan las clases online?', 'How do online classes work?'),
      a: t('Por videollamada (Google Meet, Zoom o el que prefieras), pizarra digital compartida y materiales en tiempo real. Igual de efectivo que presencial.', 'Via video call (Google Meet, Zoom or your choice), shared digital whiteboard and real-time materials. Just as effective as in person.'),
    },
    {
      q: t('¿Cuánto cuestan las clases?', 'How much do classes cost?'),
      a: t('El precio depende del nivel y la modalidad. Escríbeme y te lo digo en seguida.', 'Pricing depends on level and format. Message me and I\'ll tell you straightaway.'),
    },
    {
      q: t('¿Das clases a domicilio en Barcelona?', 'Do you offer home visits in Barcelona?'),
      a: t('Sí, me desplazo dentro de Barcelona. También podemos quedar en biblioteca, espacio de estudio o en una cafetería.', 'Yes, I travel within Barcelona. We can also meet at a library or study space.'),
    },
    {
      q: t('¿Puedo empezar en cualquier momento?', 'Can I start at any point in the year?'),
      a: t('Siempre. Cuanto antes empecemos, más tiempo para consolidar. Pero incluso antes de exámenes, unas semanas bien trabajadas marcan la diferencia.', 'Always. The sooner we start the better, but even just before exams a few focused weeks make a real difference.'),
    },
  ];

  return (
    <section id="faq" className="py-20 px-6 md:px-12 lg:px-16 bg-snow">
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.6fr] gap-12 lg:gap-16 items-start">
        <div className="lg:sticky lg:top-28">
          <SectionEyebrow>FAQ</SectionEyebrow>
          <h2 className="font-display text-[clamp(2rem,3vw,2.8rem)] text-foreground leading-[1.12] mb-3">
            {t(<>Preguntas <span className="text-primary">frecuentes</span></>, <>Frequently <span className="text-primary">asked</span></>)}
          </h2>
          <p className="text-[0.86rem] text-muted-foreground leading-relaxed mb-6">
            {t('¿No encuentras lo que buscas? Escríbeme directamente.', "Can't find what you're looking for? Message me directly.")}
          </p>
          <a
            href="https://wa.me/34672586550"
            target="_blank"
            rel="noopener noreferrer"
            className="font-head text-[0.68rem] font-semibold tracking-wide bg-primary text-primary-foreground no-underline px-5 py-2.5 rounded-full transition-all hover:bg-green-700 hover:-translate-y-0.5 shadow-md inline-flex items-center gap-2"
          >
            {t('Escríbeme →', 'Message me →')}
          </a>
        </div>

        <div className="flex flex-col">
          {faqs.map((faq, i) => (
            <div key={i} className="border-b border-border first:border-t">
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex justify-between items-center py-4 cursor-pointer font-head text-[0.88rem] font-semibold text-foreground gap-4 hover:text-primary transition-colors text-left bg-transparent border-none"
              >
                {faq.q}
                <span className={`w-6 h-6 rounded-full bg-accent border border-border flex items-center justify-center text-[0.9rem] text-primary flex-shrink-0 transition-all duration-300 ${openIndex === i ? 'bg-primary text-primary-foreground border-primary rotate-45' : ''}`}>
                  +
                </span>
              </button>
              <div className={`overflow-hidden transition-all duration-400 ${openIndex === i ? 'max-h-[220px]' : 'max-h-0'}`}>
                <p className="pb-4 text-[0.85rem] text-muted-foreground leading-relaxed">{faq.a}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
