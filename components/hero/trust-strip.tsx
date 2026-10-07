import { CheckCircle2, LockKeyhole, ShieldCheck, Zap } from "lucide-react";

const trustItems = [
  { label: "No account needed", icon: LockKeyhole },
  { label: "Fully anonymous", icon: ShieldCheck },
  { label: "Matched in seconds", icon: Zap },
  { label: "Report & moderation system", icon: CheckCircle2 },
];

export function TrustStrip() {
  return (
    <div className="border-y border-white/[0.10] bg-[#09100f]" aria-label="Product guarantees">
      <div className="mx-auto grid w-[min(1160px,calc(100%-28px))] grid-cols-2 sm:w-[min(1160px,calc(100%-40px))] lg:grid-cols-4">
        {trustItems.map(({ label, icon: Icon }, index) => (
          <div key={label} className={`flex min-h-[76px] items-center gap-2.5 border-b border-white/[0.10] px-4 py-4 text-[13px] text-[#b7c2bf] lg:justify-center lg:border-b-0 ${index % 2 === 1 ? "border-r-0" : "lg:border-r"} ${index === 2 || index === 3 ? "sm:border-b-0" : ""} ${index === 1 || index === 3 ? "border-r-0" : "sm:border-r"}`}>
            <Icon size={17} className="shrink-0 text-mint-300" aria-hidden="true" />
            <span>{label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
