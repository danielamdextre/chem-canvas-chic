import { useLang } from '@/contexts/LangContext';
import { WhatsAppIcon } from './Navbar';

const WhatsAppFab = () => {
  const { t } = useLang();

  return (
    <a
      href="https://wa.me/34672586550?text=Hola%20Daniela!"
      target="_blank"
      rel="noopener noreferrer"
      className="group fixed bottom-6 right-6 z-[700] w-[50px] h-[50px] rounded-full bg-primary flex items-center justify-center no-underline shadow-lg hover:bg-green-700 hover:-translate-y-0.5 hover:shadow-xl transition-all"
    >
      <WhatsAppIcon size={23} />
      <span className="absolute right-[60px] bg-foreground text-primary-foreground font-head text-[0.56rem] font-semibold tracking-wider uppercase px-3 py-1.5 rounded-full whitespace-nowrap opacity-0 pointer-events-none group-hover:opacity-100 transition-opacity">
        {t('Escríbeme', 'Message me')}
      </span>
    </a>
  );
};

export default WhatsAppFab;
