import { ReactNode } from "react";

interface HeadingProps {
  level: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  children: ReactNode;
  className?: string;
  size?: "xs" | "sm" | "md" | "lg" | "xl";
}

const sizeClasses = {
  xs: "text-[0.875rem] sm:text-sm",
  sm: "text-sm sm:text-base",
  md: "text-base sm:text-lg",
  lg: "text-lg sm:text-xl lg:text-2xl",
  xl: "text-xl sm:text-2xl lg:text-3xl xl:text-4xl",
};

export default function Heading({
  level,
  children,
  className = "",
  size = "lg",
}: HeadingProps) {
  const baseClasses =
    "font-primary font-light text-primary uppercase leading-[1.3] text-center lg:text-left";
  const combinedClasses = `${baseClasses} ${sizeClasses[size]} ${className}`;

  const Tag = level;

  return <Tag className={combinedClasses}>{children}</Tag>;
}
