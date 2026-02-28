import { useLang } from '@/contexts/LangContext';

const Footer = () => {
  const { t } = useLang();

  return (
    <footer className="bg-foreground px-6 md:px-12 lg:px-16 py-6 flex justify-between items-center flex-wrap gap-4">
      <div className="font-head text-sm font-bold text-primary-foreground/50">
        Daniela <em className="font-display not-italic font-normal text-primary-foreground/25">Meléndez</em>
      </div>
      <p className="font-head text-[0.52rem] tracking-widest uppercase text-primary-foreground/20">
        © 2025 — {t('Todos los derechos reservados', 'All rights reserved')}
      </p>
      <div className="flex gap-6">
        <a href="#servicios" className="font-head text-[0.58rem] tracking-wider uppercase text-primary-foreground/25 no-underline hover:text-primary-foreground/60 transition-colors">
          {t('Servicios', 'Services')}
        </a>
        <a href="#sobre-mi" className="font-head text-[0.58rem] tracking-wider uppercase text-primary-foreground/25 no-underline hover:text-primary-foreground/60 transition-colors">
          {t('Sobre mí', 'About')}
        </a>
        <a href="#faq" className="font-head text-[0.58rem] tracking-wider uppercase text-primary-foreground/25 no-underline hover:text-primary-foreground/60 transition-colors">
          FAQ
        </a>
      </div>
    </footer>
  );
};

export default Footer;
