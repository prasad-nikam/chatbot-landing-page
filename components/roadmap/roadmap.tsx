import { Check, Circle } from "lucide-react";
import { comingSoon, shipped } from "@/content/roadmap";
import { Eyebrow, Section } from "@/components/ui/section";
import { Reveal } from "@/components/ui/reveal";

function RoadmapColumn({ title, items, complete = false }: { title: string; items: string[]; complete?: boolean }) {
  return (
    <div className="border-t border-white/[0.10] pt-5">
      <h3 className="mb-5 text-sm font-bold">{title} {complete && <span className="text-mint-300" aria-hidden="true">✓</span>}</h3>
      <ul className="grid gap-3">
        {items.map((item) => (
          <li key={item} className="flex gap-2.5 text-[13px] leading-[1.45] text-[#9aa8a4]">
            {complete ? <Check className="mt-0.5 shrink-0 text-mint-300" size={14} aria-hidden="true" /> : <Circle className="mt-1 shrink-0 text-[#68736f]" size={10} aria-hidden="true" />}
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function Roadmap() {
  return (
    <Section id="roadmap">
      <div className="grid gap-10 lg:grid-cols-[.7fr_1fr_1fr] lg:gap-14">
        <Reveal>
          <Eyebrow>Roadmap</Eyebrow>
          <h2 className="mb-5 text-[clamp(38px,5vw,58px)] font-bold leading-[1.02] tracking-[-.035em] [text-wrap:balance]">We are just getting started.</h2>
          <p className="text-sm leading-6 text-[#9aa8a4]">The product is live, growing, and we have a lot more coming. Here is what is shipped and what is next.</p>
        </Reveal>
        <Reveal delay={0.05}><RoadmapColumn title="Shipped" items={shipped} complete /></Reveal>
        <Reveal delay={0.1}><RoadmapColumn title="Coming soon" items={comingSoon} /></Reveal>
      </div>
    </Section>
  );
}
