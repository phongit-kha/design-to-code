"use client";
import * as React from "react";
import { motion } from "framer-motion";

export const fadeInAnimationVariants = {
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
}: {
  index?: number;
  children: React.ReactNode;
}): React.JSX.Element {
  return (
    <motion.div
      variants={fadeInAnimationVariants}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true }}
      custom={index}
    >
      {children}
    </motion.div>
  );
}
