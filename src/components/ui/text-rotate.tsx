"use client";

import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

interface TextRotateProps {
  texts: string[];
  duration?: number;
  className?: string;
  mainClassName?: string;
}

export default function TextRotate({
  texts,
  duration = 2500,
  className,
  mainClassName,
}: TextRotateProps) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % texts.length);
    }, duration);

    return () => clearInterval(interval);
  }, [texts.length, duration]);

  return (
    <div className={cn("overflow-hidden py-2", mainClassName)}>
      <AnimatePresence mode="wait">
        <motion.h1
          key={texts[index]}
          className={className}
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 50 }}
          transition={{
            duration: 0.25,
            ease: "easeInOut",
          }}
        >
          {texts[index]}
        </motion.h1>
      </AnimatePresence>
    </div>
  );
}