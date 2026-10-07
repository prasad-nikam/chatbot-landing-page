import type { LucideIcon } from "lucide-react";
import { UserRoundX, Zap, ShieldCheck, SlidersHorizontal, Smile, FastForward } from "lucide-react";

export type Feature = {
  number: string;
  title: string;
  description: string;
  icon: LucideIcon;
};

export const features: Feature[] = [
  {
    number: "01",
    title: "No Profile Tax",
    description: "No bio. No photo. No username. You show up as yourself — or whoever you want to be.",
    icon: UserRoundX,
  },
  {
    number: "02",
    title: "Instant Match",
    description: "One tap and you are talking to someone real. No waiting room, no algorithm, no nonsense.",
    icon: Zap,
  },
  {
    number: "03",
    title: "Actually Anonymous",
    description: "We do not store your name, your handle, or your history. Your conversation stays between you and the stranger you meet.",
    icon: ShieldCheck,
  },
  {
    number: "04",
    title: "Gender Filter",
    description: "Want to talk to someone specific? Filter by gender preference. You have a limited number of filtered searches per day — earn more by referring friends.",
    icon: SlidersHorizontal,
  },
  {
    number: "05",
    title: "React & Reply",
    description: "Full message reactions and threaded replies — because anonymous does not mean primitive.",
    icon: Smile,
  },
  {
    number: "06",
    title: "Skip Freely",
    description: "Not feeling it? Move on instantly. No awkward goodbye. No guilt. Just tap next.",
    icon: FastForward,
  },
];
