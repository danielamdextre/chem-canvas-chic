import { useState, useEffect } from 'react';
import { useLang } from '@/contexts/LangContext';

const WA_LINK = "https://wa.me/34672586550?text=Hola%20Daniela!";

const Navbar = () => {
  const { lang, setLang, t } = useLang();
  const [solid, setSolid] = useState(false);

  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 60);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-[500] px-6 md:px-12 py-4 flex justify-between items-center transition-all duration-400 ${solid ? 'bg-background/95 backdrop-blur-xl border-b border-border shadow-sm' : ''}`}>
      <a href="#top" className="font-head text-base font-bold text-green-700 no-underline">
        Daniela <span className="font-normal text-primary">Meléndez</span>
      </a>
      <div className="flex items-center gap-6">
        <ul className="hidden md:flex gap-5 list-none items-center">
          <li>
            <a href="#servicios" className="font-head text-[0.78rem] font-medium text-ink-50 no-underline hover:text-primary hover:bg-accent px-2.5 py-1.5 rounded-full transition-colors">
              {t('Servicios', 'Services')}
            </a>
          </li>
          <li>
            <a href="#sobre-mi" className="font-head text-[0.78rem] font-medium text-ink-50 no-underline hover:text-primary hover:bg-accent px-2.5 py-1.5 rounded-full transition-colors">
              {t('Sobre mí', 'About')}
            </a>
          </li>
          <li>
            <a href="#faq" className="font-head text-[0.78rem] font-medium text-ink-50 no-underline hover:text-primary hover:bg-accent px-2.5 py-1.5 rounded-full transition-colors">
              FAQ
            </a>
          </li>
        </ul>
        <a
          href={WA_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="font-head text-[0.7rem] font-semibold tracking-wide bg-primary text-primary-foreground no-underline px-5 py-2.5 rounded-full transition-all hover:bg-green-700 hover:-translate-y-0.5 shadow-md inline-flex items-center gap-2"
        >
          <WhatsAppIcon size={13} />
          {t('Contactar', 'Contact')}
        </a>
        {/* Language switcher - far right */}
        <div className="flex items-center gap-1 bg-background/90 backdrop-blur-xl border border-border rounded-full px-2 py-1">
          <button
            onClick={() => setLang('es')}
            className={`font-head text-[0.6rem] font-semibold tracking-widest uppercase px-2.5 py-1 rounded-full transition-all border-none cursor-pointer ${lang === 'es' ? 'bg-primary text-primary-foreground' : 'bg-transparent text-ink-25'}`}
          >
            ES
          </button>
          <span className="text-[0.55rem] text-ink-10">·</span>
          <button
            onClick={() => setLang('en')}
            className={`font-head text-[0.6rem] font-semibold tracking-widest uppercase px-2.5 py-1 rounded-full transition-all border-none cursor-pointer ${lang === 'en' ? 'bg-primary text-primary-foreground' : 'bg-transparent text-ink-25'}`}
          >
            EN
          </button>
        </div>
      </div>
    </nav>
  );
};

const WhatsAppIcon = ({ size = 24 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
  </svg>
);

export { WhatsAppIcon };
export default Navbar;
