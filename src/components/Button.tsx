import { ButtonHTMLAttributes, ReactNode } from "react";
import { twMerge } from "tailwind-merge";

const Button = (
  props: {
    variant: "primary" | "secondary" | "text";
    iconAfter?: ReactNode;
  } & ButtonHTMLAttributes<HTMLButtonElement>,
) => {
  const { className, children, variant, iconAfter, ...rest } = props;
  return (
    <button
      className={twMerge(
        "inline-flex h-11 items-center gap-2 rounded-xl border border-orange-500 px-6 uppercase",
        variant === "primary" && "bg-orange-500 text-white",
        variant === "secondary" && "",
        variant === "text" && "h-auto border-transparent px-0",
        className,
      )}
      {...rest}
    >
      <span>{children}</span>
      {iconAfter && <span>{iconAfter}</span>}
    </button>
  );
};

export default Button;
