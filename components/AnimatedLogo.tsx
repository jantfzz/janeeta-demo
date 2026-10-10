"use client";

import { useEffect, useState } from "react";
import { site } from "@/data/site";

// Types each word in site.logoWords, pauses, deletes it, then moves to the next.
// With reduced motion it simply shows the first word.
export default function AnimatedLogo() {
  const words = site.logoWords;
  const [text, setText] = useState(words[0]);
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduced(mq.matches);
    if (mq.matches) return;

    let word = 0;
    let len = words[0].length;
    let deleting = true;
    let timer: ReturnType<typeof setTimeout>;

    const tick = () => {
      if (deleting) {
        len -= 1;
        if (len <= 0) {
          deleting = false;
          word = (word + 1) % words.length;
        }
      } else {
        len += 1;
      }
      setText(words[word].slice(0, Math.max(len, 0)));

      let delay = deleting ? 45 : 90;
      if (!deleting && len === words[word].length) {
        deleting = true;
        delay = 2200;
      } else if (len <= 0) {
        delay = 300;
      }
      timer = setTimeout(tick, delay);
    };
    timer = setTimeout(tick, 2600);
    return () => clearTimeout(timer);
  }, [words]);

  return (
    <span className="inline-flex items-center font-mono text-[13px] tracking-tight">
      <span aria-hidden="true" className="mr-1 text-accent">~/</span>
      <span aria-hidden="true" className="min-w-[13ch]">
        {text}
        <span className={`ml-px inline-block h-[1.05em] w-[7px] translate-y-[2px] bg-accent ${reduced ? "" : "animate-[blink_1s_steps(1)_infinite]"}`} />
      </span>
    </span>
  );
}
