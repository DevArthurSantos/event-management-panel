// components/ui/Button.tsx
import { cn } from "@/src/infra/helpers/cn";
import * as React from "react";

const Button = React.forwardRef<HTMLButtonElement, React.ButtonHTMLAttributes<HTMLButtonElement>>(
  ({ className, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          "btn-primary inline-flex items-center justify-center rounded-md px-6 py-3 text-sm font-semibold transition-all active:scale-95",
          className
        )}
        {...props}
      />
    );
  }
);

Button.displayName = "Button";
export { Button };