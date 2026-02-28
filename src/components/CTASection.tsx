import { useLang } from '@/contexts/LangContext';
import { WhatsAppIcon } from './Navbar';

const WA_BOOK = "https://wa.me/34672586550?text=Hola%20Daniela!%20Me%20gustar%C3%ADa%20reservar%20mi%20primera%20clase";

const CTASection = () => {
  const { t } = useLang();

  return (
    <section className="relative bg-green-900 py-20 px-6 md:px-12 lg:px-16 text-center overflow-hidden">
      {/* Background text */}
      <div className="absolute font-display text-[18vw] text-primary-foreground/[0.025] italic left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 whitespace-nowrap pointer-events-none select-none">
        {t('química', 'chemistry')}
      </div>

      <div className="font-head text-[0.6rem] font-semibold tracking-[0.2em] uppercase text-primary-foreground/40 mb-3 flex items-center gap-2.5 justify-center">
        {t('Empecemos', "Let's start")}
      </div>

      <h2 className="font-display text-[clamp(2.2rem,4vw,3.6rem)] font-normal text-primary-foreground max-w-[580px] mx-auto mb-3 leading-[1.12]">
        {t(<>Tu primera clase<br />es <em className="italic text-primary-foreground/50">gratis</em></>, <>Your first class<br />is <em className="italic text-primary-foreground/50">free</em></>)}
      </h2>

      <p className="text-[0.9rem] text-primary-foreground/40 mb-8">
        {t('Sin formularios. Sin compromisos. Solo escríbeme.', 'No forms. No commitment. Just message me.')}
      </p>

      <div className="flex gap-3 justify-center flex-wrap mb-5">
        <a
          href={WA_BOOK}
          target="_blank"
          rel="noopener noreferrer"
          className="font-head text-[0.72rem] font-bold tracking-wide bg-primary-foreground text-green-900 no-underline px-7 py-3.5 rounded-full transition-all hover:bg-accent hover:-translate-y-0.5 shadow-lg inline-flex items-center gap-2"
        >
          <WhatsAppIcon size={14} />
          {t('Reservar clase gratis', 'Book free class')}
        </a>
        <a
          href="mailto:daniela@quimica.com"
          className="font-head text-[0.72rem] font-semibold tracking-wide bg-primary-foreground/10 text-primary-foreground/80 no-underline px-6 py-3.5 rounded-full border border-primary-foreground/20 transition-all hover:border-primary-foreground/50 hover:text-primary-foreground inline-flex items-center gap-2"
        >
          ✉ Email
        </a>
      </div>

      <p className="font-head text-[0.56rem] font-medium tracking-widest uppercase text-primary-foreground/20">
        {t('Primera sesión de valoración · 100% gratis · Sin compromiso', 'First assessment session · 100% free · No commitment')}
      </p>
    </section>
  );
};

export default CTASection;
