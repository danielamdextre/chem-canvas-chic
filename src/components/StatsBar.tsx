import { useLang } from '@/contexts/LangContext';

const StatsBar = () => {
  const { t } = useLang();
  const stats = [
    { value: '+80', label: t('Alumnos', 'Students') },
    { value: '+5', label: t('Años exp.', 'Years exp.') },
    { value: 'BCN', label: t('Barcelona', 'Barcelona') },
    { value: '5.0 ⭐', label: t('Valoración', 'Rating') },
  ];

  return (
    <div className="flex flex-wrap bg-green-900">
      {stats.map((s, i) => (
        <div key={i} className="flex-1 min-w-[50%] md:min-w-0 px-6 py-6 text-center border-r border-primary-foreground/5 last:border-r-0 hover:bg-primary-foreground/[0.04] transition-colors">
          <span className="font-display text-2xl font-normal text-primary-foreground block leading-none mb-1">{s.value}</span>
          <span className="font-head text-[0.55rem] font-medium tracking-widest uppercase text-primary-foreground/40">{s.label}</span>
        </div>
      ))}
    </div>
  );
};

export default StatsBar;
