const SectionEyebrow = ({ children }: { children: React.ReactNode }) => (
  <div className="font-head text-[0.6rem] font-semibold tracking-[0.2em] uppercase text-primary mb-3 flex items-center gap-2.5">
    <span className="w-5 h-[1.5px] bg-green-300 block flex-shrink-0" />
    {children}
  </div>
);

export default SectionEyebrow;
