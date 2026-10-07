import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

export function Section({ id, children, className }: { id?: string; children: ReactNode; className?: string }) {
  return (
    <section id={id} className={cn("border-t border-white/[0.10] py-[82px] sm:py-[104px]", className)}>
      <div className="mx-auto w-[min(1160px,calc(100%-28px))] sm:w-[min(1160px,calc(100%-40px))]">
        {children}
      </div>
    </section>
  );
}

export function Eyebrow({ children }: { children: ReactNode }) {
  return <p className="mb-3.5 text-[11px] font-bold uppercase tracking-[0.16em] text-mint-300">{children}</p>;
}
