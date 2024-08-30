import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import * as React from "react";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "font-NanumSquare rounded-full items-center flex justify-center",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        kakao: "bg-[#FEE500] text-black ",
        disabled: "bg-gray-300 text-white ",
        starbucks: "bg-[#01a862]  text-white",
        inversion: "bg-white text-[#01a862] border-[#01a862] border-2 ",
      },
      size: {
        default: "w-[88%] mb-2 py-3 font-bold",
        sm: "w-[25%] py-1 mb-2 font-normal text-sm",
        md: "w-[45%] mb-2 px-8 py-3 font-bold",
        lg: "mb-2 mx-6 py-3 font-bold",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
