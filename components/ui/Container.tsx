import { ReactNode } from "react";

interface ContainerProps {
  children: ReactNode;
  className?: string;
  size?: "default" | "sm" | "lg" | "full";
}

const sizeClasses = {
  default: "container mx-auto",
  sm: "container mx-auto max-w-2xl",
  lg: "container mx-auto max-w-6xl",
  full: "w-full",
};

export default function Container({
  children,
  className = "",
  size = "default",
}: ContainerProps) {
  const combinedClasses = `${sizeClasses[size]} px-4 ${className}`;

  return <div className={combinedClasses}>{children}</div>;
}
