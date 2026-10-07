import { ArrowDown, ArrowRight, Send } from "lucide-react";
import { TELEGRAM_URL } from "@/lib/constants";
import { Button } from "@/components/ui/button";
import { ConversationDemo } from "@/components/hero/conversation-demo";
import { Eyebrow } from "@/components/ui/section";

export function Hero() {
  return (
    <section className="relative py-[72px] sm:py-[88px] lg:min-h-[690px] lg:py-[68px]">
      <div className="pointer-events-none absolute -right-44 -top-44 size-[620px] rounded-full bg-[radial-gradient(circle,rgba(99,221,164,.12),rgba(99,221,164,0)_68%)]" aria-hidden="true" />
      <div className="relative mx-auto grid w-[min(1160px,calc(100%-28px))] items-center gap-9 sm:w-[min(1160px,calc(100%-40px))] lg:grid-cols-[minmax(0,1.02fr)_minmax(420px,.98fr)] lg:gap-[70px]">
        <div className="relative z-10 max-w-[720px]">
          <Eyebrow>Anonymous chat on Telegram</Eyebrow>
          <h1 className="mb-6 max-w-[700px] text-[clamp(46px,14vw,66px)] font-bold leading-[.98] tracking-[-.035em] [text-wrap:balance] sm:text-[clamp(52px,7vw,86px)]">
            Real conversations.<br />
            <span className="text-mint-300">Zero profiles.</span>
          </h1>
          <p className="max-w-[610px] text-[17px] leading-[1.55] text-[#c0cbc7] sm:text-xl">
            Meet someone new, say what you actually think, and move on. No followers. No likes. No algorithm. Just people.
          </p>
          <div className="mt-7 grid gap-3 sm:flex sm:flex-wrap">
            <Button href={TELEGRAM_URL} external className="w-full sm:w-auto">
              <Send size={16} aria-hidden="true" /> Open in Telegram <ArrowRight size={16} aria-hidden="true" />
            </Button>
            <Button href="#how" variant="secondary" className="w-full sm:w-auto">
              See how it works <ArrowDown size={15} aria-hidden="true" />
            </Button>
          </div>
          <p className="mt-4 text-xs text-[#74817d]">Free. No signup. Just open Telegram.</p>
        </div>

        <ConversationDemo />
      </div>
    </section>
  );
}
