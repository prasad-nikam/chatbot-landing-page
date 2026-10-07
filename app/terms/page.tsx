import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { Eyebrow } from "@/components/ui/section";

export const metadata = {
  title: "Terms — AnonChat",
  description: "Terms of service for AnonChat.",
};

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-ink-950 px-5 py-16 text-white sm:px-8">
      <article className="mx-auto max-w-3xl">
        <Link href="/" className="mb-14 inline-flex items-center gap-2 text-sm text-[#9aa8a4] hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-mint-300">
          <ArrowLeft size={16} /> Back to AnonChat
        </Link>
        <Eyebrow>Terms</Eyebrow>
        <h1 className="mb-6 text-4xl font-bold tracking-[-.03em] sm:text-5xl">Terms of service</h1>
        <div className="space-y-8 text-base leading-7 text-[#b7c2bf]">
          <p>This page is a placeholder for the final AnonChat terms of service. Replace it with the product’s legally reviewed terms before launch.</p>
          <section><h2 className="mb-2 text-xl font-bold text-white">Acceptable use</h2><p>Document prohibited behavior, reporting expectations, moderation actions, and the circumstances under which access can be restricted.</p></section>
          <section><h2 className="mb-2 text-xl font-bold text-white">Service changes</h2><p>Document availability, feature changes, premium/referral mechanics, and applicable limitations.</p></section>
        </div>
      </article>
    </main>
  );
}
