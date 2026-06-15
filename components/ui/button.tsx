import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center rounded-full text-sm font-semibold tracking-[-0.01em] transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--gold)] focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        primary: "btn-primary bg-[var(--forest)] shadow-[0_18px_50px_rgba(35,75,42,.22)] hover:-translate-y-0.5 hover:bg-[var(--forest-2)]",
        cream: "btn-cream bg-[var(--cream)] hover:-translate-y-0.5 hover:bg-white",
        outline: "btn-outline border border-[rgba(35,75,42,.18)] bg-white/70 backdrop-blur-xl hover:-translate-y-0.5 hover:border-[var(--gold)]",
        ghost: "btn-ghost hover:bg-[rgba(35,75,42,.07)]",
      },
      size: {
        md: "h-12 px-6",
        lg: "h-14 px-8",
        sm: "h-10 px-4",
      },
    },
    defaultVariants: { variant: "primary", size: "md" },
  },
);

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariants> {}

export function buttonClassName({ variant, size, className }: VariantProps<typeof buttonVariants> & { className?: string }) {
  return cn(buttonVariants({ variant, size }), className);
}

export function Button({ className, variant, size, ...props }: ButtonProps) {
  return <button className={buttonClassName({ variant, size, className })} {...props} />;
}
