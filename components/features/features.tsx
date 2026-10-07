import { features } from "@/content/features";
import { Eyebrow, Section } from "@/components/ui/section";
import { Reveal } from "@/components/ui/reveal";

export function Features() {
  return (
    <Section id="features">
      <Reveal>
        <div className="mb-14 grid items-end gap-2.5 lg:grid-cols-[minmax(0,1fr)_minmax(280px,.55fr)] lg:gap-[70px]">
          <div>
            <Eyebrow>Features</Eyebrow>
            <h2 className="mb-5 text-[clamp(38px,5vw,58px)] font-bold leading-[1.02] tracking-[-.035em] [text-wrap:balance]">Built different.</h2>
          </div>
          <p className="mb-1 max-w-[420px] text-sm leading-6 text-[#9aa8a4]">No profiles. No pressure. Just real conversations with interesting people from around the world.</p>
        </div>
      </Reveal>

      <div className="grid grid-cols-1 border-l border-t border-white/[0.10] md:grid-cols-2 lg:grid-cols-3">
        {features.map(({ number, title, description, icon: Icon }, index) => (
          <Reveal key={title} delay={Math.min(index * 0.04, 0.2)}>
            <article className="group min-h-0 border-b border-r border-white/[0.10] p-[26px] transition-colors duration-300 hover:bg-mint-300/[0.025] sm:min-h-[230px] sm:p-[30px]">
              <span className="text-[11px] font-bold tracking-[0.12em] text-mint-300">{number}</span>
              <Icon className="my-5 text-mint-300" size={28} strokeWidth={1.8} aria-hidden="true" />
              <h3 className="mb-2 text-[17px] font-bold leading-tight">{title}</h3>
              <p className="m-0 max-w-[310px] text-sm leading-[1.65] text-[#9aa8a4]">{description}</p>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
