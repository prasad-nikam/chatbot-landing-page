import type { AnchorHTMLAttributes } from "react";
import Link from "next/link";
import { cn } from "@/lib/cn";

type ButtonProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  href: string;
  variant?: "primary" | "secondary";
  external?: boolean;
};

export function Button({ className, variant = "primary", external = false, children, ...props }: ButtonProps) {
  const classes = cn(
    "inline-flex min-h-11 items-center justify-center gap-2 rounded-[10px] border px-[18px] text-sm font-bold transition duration-200 ease-smooth focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-mint-300 focus-visible:ring-offset-4 focus-visible:ring-offset-ink-950 hover:-translate-y-px",
    variant === "primary" && "border-transparent bg-mint-300 text-[#07110d] hover:bg-mint-200",
    variant === "secondary" && "border-white/[0.22] bg-white/[0.02] text-white hover:border-white/[0.35] hover:bg-white/[0.05]",
    className,
  );

  if (external) {
    return (
      <a className={classes} target="_blank" rel="noreferrer" {...props}>
        {children}
      </a>
    );
  }

  return (
    <Link className={classes} href={props.href} {...props}>
      {children}
    </Link>
  );
}
