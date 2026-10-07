import { ArrowRight } from "lucide-react";
import { steps } from "@/content/steps";
import { Eyebrow, Section } from "@/components/ui/section";
import { Reveal } from "@/components/ui/reveal";

export function HowItWorks() {
  return (
    <Section id="how">
      <div className="grid items-start gap-9 lg:grid-cols-[.9fr_1.1fr] lg:gap-20">
        <Reveal className="lg:sticky lg:top-[100px]">
          <Eyebrow>How it works</Eyebrow>
          <h2 className="mb-5 text-[clamp(38px,5vw,58px)] font-bold leading-[1.02] tracking-[-.035em] [text-wrap:balance]">Three taps.<br />Real conversation.</h2>
          <p className="max-w-[610px] text-[17px] leading-[1.55] text-[#c0cbc7] sm:text-xl">The product stays out of the way. You open Telegram, get matched, and start talking.</p>
        </Reveal>

        <div className="border-t border-white/[0.10]">
          {steps.map(({ number, title, description, icon: Icon }, index) => (
            <Reveal key={number} delay={index * 0.06}>
              <article className="grid grid-cols-[48px_minmax(0,1fr)] gap-5 border-b border-white/[0.10] py-7 sm:grid-cols-[58px_minmax(0,1fr)_24px] sm:items-center">
                <div className={`grid size-11 place-items-center rounded-full border font-bold ${index === 0 ? "border-mint-300 bg-mint-300 text-[#07110d]" : "border-mint-300/35 text-mint-300"}`}>
                  {number}
                </div>
                <div>
                  <div className="mb-1.5 flex items-center gap-2">
                    <Icon size={16} className="text-mint-300 sm:hidden" aria-hidden="true" />
                    <h3 className="text-[17px] font-bold leading-tight">{title}</h3>
                  </div>
                  <p className="m-0 text-sm leading-6 text-[#9aa8a4]">{description}</p>
                </div>
                <ArrowRight className="hidden text-[#74817d] sm:block" size={18} aria-hidden="true" />
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  );
}
