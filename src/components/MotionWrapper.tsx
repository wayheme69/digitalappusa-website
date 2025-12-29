"use client";

import { motion, HTMLMotionProps } from "framer-motion";
import { useEffect, useState } from "react";

interface MotionWrapperProps extends HTMLMotionProps<"div"> {
  children: React.ReactNode;
}

export function MotionDiv({ children, initial, animate, ...props }: MotionWrapperProps) {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  // On server or before hydration, render without animation styles
  if (!isMounted) {
    return <div {...(props as React.HTMLAttributes<HTMLDivElement>)}>{children}</div>;
  }

  return (
    <motion.div initial={initial} animate={animate} {...props}>
      {children}
    </motion.div>
  );
}
