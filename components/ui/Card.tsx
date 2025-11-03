import { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  className?: string;
  variant?: "default" | "elevated" | "outlined";
}

const variantClasses = {
  default: "bg-white rounded-lg",
  elevated: "bg-white rounded-lg shadow-lg",
  outlined: "bg-white rounded-lg border border-gray-200",
};

export default function Card({
  children,
  className = "",
  variant = "default",
}: CardProps) {
  const combinedClasses = `${variantClasses[variant]} ${className}`;

  return <div className={combinedClasses}>{children}</div>;
}
