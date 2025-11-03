import Link from "next/link";
import { ReactNode } from "react";

interface ButtonProps {
  href?: string;
  children: ReactNode;
  variant?: "primary" | "secondary" | "outline";
  size?: "sm" | "md" | "lg";
  className?: string;
  target?: string;
  rel?: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
}

const sizeClasses = {
  sm: "text-[.6rem] px-[25px] py-[10px]",
  md: "text-[.7rem] px-[25px] py-[10px]",
  lg: "text-base px-9 py-4",
};

const variantClasses = {
  primary:
    "bg-primary text-white hover:bg-secondary hover:shadow-[0px_0px_52px_18px_rgba(0,0,0,0.1)]",
  secondary:
    "bg-secondary text-white hover:bg-primary hover:shadow-[0px_0px_52px_18px_rgba(0,0,0,0.1)]",
  outline:
    "border-2 border-primary text-primary hover:bg-primary hover:text-white",
};

export default function Button({
  href,
  children,
  variant = "primary",
  size = "md",
  className = "",
  target,
  rel,
  onClick,
  type = "button",
}: ButtonProps) {
  const baseClasses =
    "rounded-full uppercase transition duration-300 ease-in-out inline-block mt-5 transform hover:-translate-y-1";
  const combinedClasses = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`;

  if (href) {
    return (
      <Link href={href} target={target} rel={rel} className={combinedClasses}>
        {children}
      </Link>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      className={combinedClasses}>
      {children}
    </button>
  );
}
