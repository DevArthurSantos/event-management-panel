// components/ui/inputs/Input.tsx
import { cn } from "@/src/infra/helpers/cn";
import * as React from "react";

const Input = React.forwardRef<HTMLInputElement, React.InputHTMLAttributes<HTMLInputElement>>(
  ({ className, ...props }, ref) => {
    return (
      <input
        ref={ref}
        className={cn(
          "flex h-12 w-full rounded-md border border-aura-border bg-aura-card px-5 py-3 text-aura-text",
          "placeholder:text-aura-text-secondary focus:border-primary-500 focus:outline-none transition-all",
          className
        )}
        {...props}
      />
    );
  }
);

Input.displayName = "Input";
export { Input };