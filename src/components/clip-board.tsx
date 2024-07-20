"use client";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import CheckSVG from "./check-svg";
import CopySVG from "./copy-svg";
import { clipBoard } from "@/lib/animation-configs";

function Clipboard() {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    let intervalId: NodeJS.Timeout;
    if (copied) {
      intervalId = setTimeout(() => setCopied(false), 1500);
    }

    return () => clearInterval(intervalId);
  }, [copied]);

  return (
    <button
      className="size-[50px] rounded-md flex items-center justify-center bg-blue-100 hover:bg-blue-200 transition-colors"
      onClick={() => setCopied(true)}>
      <AnimatePresence
        initial={false}
        mode="wait">
        {copied ? (
          <CheckSVG
            key="check"
            config={clipBoard}
            className="size-[30px] text-green-600"
          />
        ) : (
          <CopySVG
            key="copy"
            config={clipBoard}
            className="size-[30px] text-gray-600"
          />
        )}
      </AnimatePresence>
    </button>
  );
}
export default Clipboard;
