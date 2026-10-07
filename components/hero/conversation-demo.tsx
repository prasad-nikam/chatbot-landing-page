"use client";

import { motion, useReducedMotion } from "motion/react";
import { CircleDot, MoreHorizontal } from "lucide-react";

export function ConversationDemo() {
  const reduceMotion = useReducedMotion();

  const bubbleTransition = { duration: 0.5, ease: [0.16, 1, 0.3, 1] } as const;

  return (
    <div className="relative grid min-h-[410px] place-items-center sm:min-h-[460px] lg:min-h-[510px]" aria-label="Example anonymous conversation">
      <motion.div
        aria-hidden="true"
        className="absolute size-[340px] rounded-full border border-mint-300/[0.16] sm:size-[420px] lg:size-[500px]"
        animate={reduceMotion ? undefined : { rotate: [-18, -15, -18] }}
        transition={reduceMotion ? undefined : { duration: 14, repeat: Infinity, ease: "easeInOut" }}
      >
        <div className="absolute inset-[34px] rounded-full border border-mint-300/[0.08]" />
      </motion.div>

      <div className="relative z-10 w-full max-w-[420px] overflow-hidden rounded-[22px] border border-white/[0.22] bg-gradient-to-br from-[#131d1d]/95 to-[#080e0e]/98 shadow-chat">
        <div className="flex items-center justify-between border-b border-white/[0.10] px-5 py-4 text-xs text-[#9aa8a4]">
          <span className="inline-flex items-center gap-2">
            <span className="size-[7px] rounded-full bg-mint-500 shadow-[0_0_16px_rgba(99,221,164,.6)]" />
            Finding someone...
          </span>
          <span>anonymous</span>
        </div>

        <div className="flex min-h-[360px] flex-col gap-[18px] p-5 sm:min-h-[420px] sm:p-6">
          <div className="flex justify-center text-[11px] text-[#74817d]">You're now chatting with a stranger</div>

          <motion.div
            className="ml-auto flex max-w-[78%] flex-col items-end gap-1"
            initial={reduceMotion ? false : { opacity: 0, x: 12 }}
            animate={reduceMotion ? undefined : { opacity: 1, x: 0 }}
            transition={{ ...bubbleTransition, delay: 0.25 }}
          >
            <span className="text-[10px] text-[#74817d]">You</span>
            <div className="rounded-xl border border-mint-300/[0.18] bg-mint-900 px-3 py-2.5 text-[13px] leading-[1.4]">
              what are you working on these days?
            </div>
            <span className="text-[9px] text-[#74817d]">11:24 ✓✓</span>
          </motion.div>

          <motion.div
            className="flex max-w-[78%] flex-col items-start gap-1"
            initial={reduceMotion ? false : { opacity: 0, x: -12 }}
            animate={reduceMotion ? undefined : { opacity: 1, x: 0 }}
            transition={{ ...bubbleTransition, delay: 0.85 }}
          >
            <span className="text-[10px] text-[#74817d]">Stranger</span>
            <div className="rounded-xl border border-white/[0.10] bg-[#182121] px-3 py-2.5 text-[13px] leading-[1.4]">
              honestly? trying to build a life that's not just work 😅
            </div>
            <span className="text-[9px] text-[#74817d]">11:25</span>
          </motion.div>

          <motion.div
            className="ml-auto flex max-w-[78%] flex-col items-end gap-1"
            initial={reduceMotion ? false : { opacity: 0, x: 12 }}
            animate={reduceMotion ? undefined : { opacity: 1, x: 0 }}
            transition={{ ...bubbleTransition, delay: 1.45 }}
          >
            <span className="text-[10px] text-[#74817d]">You</span>
            <div className="rounded-xl border border-mint-300/[0.18] bg-mint-900 px-3 py-2.5 text-[13px] leading-[1.4]">real. same here.</div>
            <span className="text-[9px] text-[#74817d]">11:26 ✓✓</span>
          </motion.div>

          <motion.div
            className="flex max-w-[78%] flex-col items-start gap-1"
            initial={reduceMotion ? false : { opacity: 0 }}
            animate={reduceMotion ? undefined : { opacity: 1 }}
            transition={{ duration: 0.5, delay: 2.1 }}
          >
            <span className="text-[10px] text-[#74817d]">Stranger</span>
            <div className="inline-flex items-center gap-1 rounded-[11px] border border-white/[0.10] bg-[#182121] px-3 py-2.5" aria-label="Stranger is typing">
              <CircleDot size={4} fill="currentColor" className="animate-pulse text-[#95a39f]" aria-hidden="true" />
              <CircleDot size={4} fill="currentColor" className="animate-pulse text-[#95a39f] [animation-delay:120ms]" aria-hidden="true" />
              <CircleDot size={4} fill="currentColor" className="animate-pulse text-[#95a39f] [animation-delay:240ms]" aria-hidden="true" />
            </div>
          </motion.div>

          <div className="mt-auto flex items-center justify-center gap-2 text-[10px] text-[#74817d]">
            <span className="size-[7px] rounded-full bg-mint-500" />
            conversation in progress
            <MoreHorizontal size={13} aria-hidden="true" />
          </div>
        </div>
      </div>
    </div>
  );
}
