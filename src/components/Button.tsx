"use client";

import { motion } from "framer-motion";
import Link from "next/link";

interface ButtonProps {
  children: React.ReactNode;
  variant?: "primary" | "secondary";
  href?: string;
  onClick?: () => void;
  className?: string;
  type?: "button" | "submit" | "reset";
}

export default function Button({
  children,
  variant = "primary",
  href,
  onClick,
  className = "",
  type = "button",
}: ButtonProps) {
  const baseStyles = "inline-flex items-center justify-center px-6 py-3 rounded-lg font-medium text-sm transition-all duration-200";

  const variants = {
    primary: "bg-gradient-to-r from-cyan to-green text-background hover:opacity-90 hover:shadow-lg hover:shadow-cyan/25",
    secondary: "bg-transparent border border-white/20 text-white hover:border-cyan hover:text-cyan",
  };

  const buttonClasses = `${baseStyles} ${variants[variant]} ${className}`;

  const MotionComponent = motion.button;

  if (href) {
    return (
      <Link href={href}>
        <motion.span
          className={buttonClasses}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          {children}
        </motion.span>
      </Link>
    );
  }

  return (
    <MotionComponent
      type={type}
      onClick={onClick}
      className={buttonClasses}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      {children}
    </MotionComponent>
  );
}
