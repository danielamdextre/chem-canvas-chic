import React, { createContext, useContext, useState, useCallback } from 'react';

type Lang = 'es' | 'en';

interface LangContextType {
  lang: Lang;
  setLang: (l: Lang) => void;
  t: <T extends React.ReactNode>(es: T, en: T) => T;
}

const LangContext = createContext<LangContextType>({
  lang: 'es',
  setLang: () => {},
  t: (es) => es,
});

export const useLang = () => useContext(LangContext);

export const LangProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [lang, setLang] = useState<Lang>('es');
  const t = useCallback(<T extends React.ReactNode>(es: T, en: T): T => lang === 'es' ? es : en, [lang]);

  return (
    <LangContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LangContext.Provider>
  );
};
