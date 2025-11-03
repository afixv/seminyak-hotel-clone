import { ReactNode } from "react";

interface TextProps {
  children: ReactNode;
  className?: string;
  size?: "xs" | "sm" | "base" | "lg" | "xl";
  color?: "primary" | "secondary" | "body" | "white" | "gray";
  weight?: "light" | "normal" | "medium" | "semibold" | "bold";
  align?: "left" | "center" | "right";
}

const sizeClasses = {
  xs: "text-xs",
  sm: "text-sm",
  base: "text-base",
  lg: "text-lg",
  xl: "text-xl",
};

const colorClasses = {
  primary: "text-primary",
  secondary: "text-secondary",
  body: "text-body",
  white: "text-white",
  gray: "text-gray-500",
};

const weightClasses = {
  light: "font-light",
  normal: "font-normal",
  medium: "font-medium",
  semibold: "font-semibold",
  bold: "font-bold",
};

const alignClasses = {
  left: "text-left",
  center: "text-center",
  right: "text-right",
};

export default function Text({
  children,
  className = "",
  size = "base",
  color = "body",
  weight = "normal",
  align = "left",
}: TextProps) {
  const combinedClasses = `${sizeClasses[size]} ${colorClasses[color]} ${weightClasses[weight]} ${alignClasses[align]} ${className}`;

  return <p className={combinedClasses}>{children}</p>;
}
