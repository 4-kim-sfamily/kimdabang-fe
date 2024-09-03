import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import * as React from "react";

import { cn } from "@/lib/utils";
const selectButtonVariants = cva(
  "items-center flex justify-center border-slate-300 border-2",
  {
    variants: {
      variant: {
        default: "my-2 px-2 min-w-min whitespace-nowrap",
      },
      size: {
        default: "hover:bg-black hover:text-white py-2 font-bold", // px-4로 수정하여 가변 크기 적용
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);
export interface SelectButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof selectButtonVariants> {
  isSelected: boolean;
  onClick: () => void;
  asChild?: boolean;
}

const SelectButton = React.forwardRef<HTMLButtonElement, SelectButtonProps>(
  (
    {
      className,
      variant,
      size,
      isSelected,
      onClick,
      asChild = false,
      ...props
    },
    ref,
  ) => {
    const Comp = asChild ? Slot : "button";

    return (
      <Comp
        className={cn(
          selectButtonVariants({ variant, size, className }),
          isSelected ? "bg-black text-white" : "bg-white",
        )}
        onClick={onClick}
        ref={ref}
        {...props}
      />
    );
  },
);
SelectButton.displayName = "SelectButton";

export { SelectButton, selectButtonVariants };
