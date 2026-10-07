import { Bot, UsersRound, MessageCircle } from "lucide-react";

export const steps = [
  {
    number: "1",
    title: "Open the bot",
    description: "Hit Start in Telegram. Tell us your gender — that is the only thing we ask.",
    icon: Bot,
  },
  {
    number: "2",
    title: "Get matched",
    description: "We pair you with someone in seconds. Anonymous, random, real.",
    icon: UsersRound,
  },
  {
    number: "3",
    title: "Talk freely",
    description: "Say what you actually think. React, reply, go deep. Or keep it light.",
    icon: MessageCircle,
  },
] as const;
