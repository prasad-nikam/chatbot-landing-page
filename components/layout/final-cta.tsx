import { ArrowRight, Send } from "lucide-react";
import { TELEGRAM_URL } from "@/lib/constants";
import { Button } from "@/components/ui/button";
import { Eyebrow } from "@/components/ui/section";
import { Reveal } from "@/components/ui/reveal";

export function FinalCta() {
  return (
    <section className="py-[60px] sm:py-[90px]">
      <div className="mx-auto w-[min(1160px,calc(100%-28px))] sm:w-[min(1160px,calc(100%-40px))]">
        <Reveal>
          <div className="relative grid overflow-hidden rounded-2xl border border-mint-300/[0.16] bg-[#0a1512] p-[34px_26px] sm:p-[44px_50px] lg:grid-cols-[1fr_auto] lg:items-center lg:gap-[30px]">
            <div className="pointer-events-none absolute inset-x-[-5%] bottom-[-70%] h-[220px] rounded-[50%] bg-[radial-gradient(ellipse,rgba(99,221,164,.18),transparent_66%)]" aria-hidden="true" />
            <div className="relative z-10">
              <Eyebrow>The next conversation is a tap away</Eyebrow>
              <h2 className="mb-2 text-[clamp(34px,4vw,48px)] font-bold leading-[1.02] tracking-[-.035em]">Curious who you’ll meet?</h2>
              <p className="m-0 text-[#9aa8a4]">It takes ten seconds to find out.</p>
            </div>
            <div className="relative z-10">
              <Button href={TELEGRAM_URL} external>
                <Send size={15} aria-hidden="true" /> Start chatting on Telegram <ArrowRight size={15} aria-hidden="true" />
              </Button>
              <p className="mt-3 text-center text-[11px] text-[#74817d]">Free. No signup. Just open Telegram.</p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
