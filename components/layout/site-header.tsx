"use client";

import { useEffect, useState } from "react";
import { MessageSquareMore, ArrowRight, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { TELEGRAM_URL } from "@/lib/constants";
import { Button } from "@/components/ui/button";

const links = [
  { href: "#features", label: "Features" },
  { href: "#how", label: "How it works" },
  { href: "#referral", label: "Referral" },
  { href: "#roadmap", label: "Roadmap" },
];

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 8);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`sticky top-0 z-50 border-b transition duration-300 ease-smooth ${scrolled ? "border-white/[0.10] bg-ink-950/80 backdrop-blur-xl" : "border-transparent bg-transparent"}`}>
      <div className="mx-auto flex h-16 w-[min(1160px,calc(100%-28px))] items-center justify-between gap-6 sm:h-[72px] sm:w-[min(1160px,calc(100%-40px))]">
        <a href="#top" className="flex items-center gap-2.5 font-bold tracking-tight focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-mint-300">
          <MessageSquareMore className="text-mint-300" size={27} strokeWidth={1.8} aria-hidden="true" />
          <span>AnonChat</span>
        </a>

        <nav className="hidden items-center gap-7 text-[13px] text-[#aebbb7] md:flex" aria-label="Primary navigation">
          {links.map((link) => (
            <a key={link.href} href={link.href} className="transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-mint-300">
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:block">
          <Button href={TELEGRAM_URL} external className="min-h-10 px-4 text-xs">
            Start chatting <ArrowRight size={15} aria-hidden="true" />
          </Button>
        </div>

        <button
          type="button"
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((value) => !value)}
          className="inline-flex size-11 items-center justify-center rounded-[10px] border border-white/[0.14] text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-mint-300 md:hidden"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-nav"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="overflow-hidden border-t border-white/[0.10] bg-ink-950/95 backdrop-blur-xl md:hidden"
          >
            <nav className="mx-auto grid w-[min(1160px,calc(100%-28px))] gap-1 py-3" aria-label="Mobile navigation">
              {links.map((link) => (
                <a key={link.href} href={link.href} onClick={() => setOpen(false)} className="rounded-lg px-3 py-3 text-sm text-[#c0cbc7] hover:bg-white/[0.04] hover:text-white">
                  {link.label}
                </a>
              ))}
              <Button href={TELEGRAM_URL} external className="mt-2 w-full">
                Start chatting <ArrowRight size={15} aria-hidden="true" />
              </Button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
