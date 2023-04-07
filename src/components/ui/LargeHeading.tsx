import { FC, HtmlHTMLAttributes, forwardRef } from "react";
import { VariantProps, cva } from "class-variance-authority";
import { cn } from "@/lib/utils";

const headingsVariants = cva(
  "text-black dark:text-white text-center lg:text-left font-extrabold leading-tight tracking-tighter",
  {
    variants: {
      size: {
        default: "text-4xl md:text-5xl lg:text-6xl",
        lg: "text-5xl md:text-6xl lg:text-7xl",
        sm: "text-2xl md:text-3xl lg:text-4xl",
      },
    },
    defaultVariants: {
      size: "default",
    },
  }
);

interface LargeHeadingProps
  extends HtmlHTMLAttributes<HTMLHeadingElement>,
    VariantProps<typeof headingsVariants> {}

const LargeHeadings = forwardRef<HTMLParagraphElement, LargeHeadingProps>(
  ({ className, size, children, ...props }, ref) => {
    return (
      <h1
        ref={ref}
        {...props}
        className={cn(headingsVariants({ size, className }))}
      >
        {children}
      </h1>
    );
  }
);

LargeHeadings.displayName = "LargeHeadings";

export default LargeHeadings;
