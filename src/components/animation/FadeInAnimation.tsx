"use client";
import * as React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      delay: 0.1 * index,
    },
  }),
};

export function FadeInAnimation({
  index = 1,
  children,
  className,
}: {
  index?: number;
  children: React.ReactNode;
  className?: string;
}): React.JSX.Element {
  return (
    <motion.div
      variants={fadeInAnimationVariants}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true }}
      custom={index}
      className={cn("", className)}
    >
      {children}
    </motion.div>
  );
}
