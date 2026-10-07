import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { Eyebrow } from "@/components/ui/section";

export const metadata = {
  title: "Privacy — AnonChat",
  description: "Privacy information for AnonChat.",
};

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-ink-950 px-5 py-16 text-white sm:px-8">
      <article className="mx-auto max-w-3xl">
        <Link href="/" className="mb-14 inline-flex items-center gap-2 text-sm text-[#9aa8a4] hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-mint-300">
          <ArrowLeft size={16} /> Back to AnonChat
        </Link>
        <Eyebrow>Privacy</Eyebrow>
        <h1 className="mb-6 text-4xl font-bold tracking-[-.03em] sm:text-5xl">Privacy policy</h1>
        <div className="space-y-8 text-base leading-7 text-[#b7c2bf]">
          <p>This page is a placeholder for the final AnonChat privacy policy. Replace it with the product’s legally reviewed policy before launch.</p>
          <section><h2 className="mb-2 text-xl font-bold text-white">Data handling</h2><p>Document exactly what information the service collects, relays, stores, and deletes, including Telegram-related data and moderation records.</p></section>
          <section><h2 className="mb-2 text-xl font-bold text-white">Contact</h2><p>Provide the final privacy contact address and the jurisdiction governing the service.</p></section>
        </div>
      </article>
    </main>
  );
}
