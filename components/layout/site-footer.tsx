import { MessageSquareMore } from "lucide-react";

const links = [
  { href: "#how", label: "How it works" },
  { href: "#referral", label: "Referral" },
  { href: "#roadmap", label: "Roadmap" },
  { href: "/privacy", label: "Privacy" },
  { href: "/terms", label: "Terms" },
];

export function SiteFooter() {
  return (
    <footer className="px-0 pb-12 pt-8">
      <div className="mx-auto flex w-[min(1160px,calc(100%-28px))] flex-col items-start gap-6 text-xs text-[#74817d] sm:w-[min(1160px,calc(100%-40px))] lg:flex-row lg:items-center lg:justify-between lg:gap-8">
        <a href="#top" className="flex items-center gap-2.5 text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-mint-300">
          <MessageSquareMore className="text-mint-300" size={24} aria-hidden="true" />
          <span>
            <strong className="font-bold">AnonChat</strong>
            <br />
            <span>Anonymous conversations without the profile tax.</span>
          </span>
        </a>
        <nav className="flex flex-wrap gap-x-5 gap-y-2" aria-label="Footer navigation">
          {links.map((link) => (
            <a key={link.href} href={link.href} className="transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-mint-300">
              {link.label}
            </a>
          ))}
        </nav>
        <span>Built with ❤️ and a bit of chaos</span>
      </div>
    </footer>
  );
}
