import { ArrowRight, Crown } from "lucide-react";
import { TELEGRAM_URL } from "@/lib/constants";
import { Button } from "@/components/ui/button";
import { Eyebrow } from "@/components/ui/section";
import { Reveal } from "@/components/ui/reveal";

const rewards = [
	{ value: "1", label: "referral", detail: "+2 filtered searches" },
	{ value: "∞", label: "every referral", detail: "keeps stacking" },
	{
		value: "20",
		label: "referrals",
		detail: "Premium unlocked",
		premium: true,
	},
];

export function Referral() {
	return (
		<section
			id="referral"
			className="border-t border-white/[0.10] py-[82px] sm:py-[88px]"
		>
			<div className="mx-auto w-[min(1160px,calc(100%-28px))] sm:w-[min(1160px,calc(100%-40px))]">
				<Reveal>
					<div className="relative grid overflow-hidden rounded-2xl border border-mint-300/[0.13] bg-gradient-to-br from-[#0e1f19]/70 to-[#0a1010]/90 p-[38px] lg:grid-cols-[.8fr_1.2fr] lg:items-center lg:gap-[60px] lg:p-[50px]">
						<div
							className="pointer-events-none absolute -right-40 -top-44 size-[360px] rounded-full bg-[radial-gradient(circle,rgba(154,240,197,.11),transparent_65%)]"
							aria-hidden="true"
						/>
						<div className="relative z-10">
							<Eyebrow>Referral</Eyebrow>
							<h2 className="mb-5 text-[clamp(38px,5vw,58px)] font-bold leading-[1.02] tracking-[-.035em] [text-wrap:balance]">
								Bring a friend.
								<br />
								Get more.
							</h2>
							<p className="mb-7 max-w-[610px] text-[17px] leading-[1.55] text-[#c0cbc7] sm:text-xl">
								Every person you refer earns you extra
								gender-filtered searches. Refer enough friends
								and you unlock Premium — unlimited filters, for
								1 month.
							</p>
							<Button href={TELEGRAM_URL} external>
								Get your referral link{" "}
								<ArrowRight size={15} aria-hidden="true" />
							</Button>
						</div>

						<div className="relative z-10 grid grid-cols-1 gap-3 sm:grid-cols-3">
							{rewards.map((reward) => (
								<div
									key={reward.value + reward.label}
									className={`flex min-h-[145px] flex-col items-center justify-center rounded-xl border bg-ink-950/40 p-5 text-center ${reward.premium ? "border-gold/55 bg-gold/[0.055]" : "border-white/[0.10]"}`}
								>
									{reward.premium && (
										<Crown
											className="mb-1 text-gold"
											size={22}
											aria-hidden="true"
										/>
									)}
									<strong
										className={`mb-1.5 text-2xl ${reward.premium ? "text-gold" : "text-white"}`}
									>
										{reward.value}
									</strong>
									<span
										className={`text-xs font-bold ${reward.premium ? "text-gold" : "text-white"}`}
									>
										{reward.label}
									</span>
									<span className="text-xs text-[#9aa8a4]">
										{reward.detail}
									</span>
								</div>
							))}
						</div>
					</div>
				</Reveal>
			</div>
		</section>
	);
}
