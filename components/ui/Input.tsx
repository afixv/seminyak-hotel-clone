import React, { InputHTMLAttributes } from "react";

interface InputProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, "size"> {
  label?: string;
  error?: string;
  variant?: "default" | "white-border";
  inputSize?: "sm" | "md" | "lg";
}

const variantClasses = {
  default: `
    font-primary text-white w-full bg-transparent
    border-b border-white border-l-0 border-t-0 border-r-0
    placeholder:text-white px-0 py-4
    focus:outline-none focus:ring-0 focus:border-blue-500
    transition-colors duration-200
  `,
  "white-border": `
    font-primary text-white w-full bg-transparent
    border-b border-white border-l-0 border-t-0 border-r-0
    placeholder:text-white px-0 py-4
    focus:outline-none focus:ring-0 focus:border-blue-500
    transition-colors duration-200
  `,
};

const sizeClasses = {
  sm: "text-[.7rem] lg:text-[.7rem] xl:text-[.8rem]",
  md: "text-[.9rem] lg:text-[.9rem] xl:text-[.9rem] 2xl:text-[1rem]",
  lg: "text-[1rem] lg:text-[1rem] xl:text-[1.1rem]",
};

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (
    {
      label,
      error,
      variant = "default",
      inputSize = "md",
      className = "",
      ...props
    },
    ref
  ) => {
    const baseClasses = variantClasses[variant];
    const sizeClass = sizeClasses[inputSize];
    const combinedClasses = `${baseClasses} ${sizeClass} ${className}`;

    return (
      <div className="flex flex-col">
        {label && (
          <label
            htmlFor={props.id}
            className="font-primary text-white text-sm mb-2">
            {label}
          </label>
        )}
        <input ref={ref} className={combinedClasses} {...props} />
        {error && <span className="text-red-500 text-sm mt-1">{error}</span>}
      </div>
    );
  }
);

Input.displayName = "Input";

export default Input;
