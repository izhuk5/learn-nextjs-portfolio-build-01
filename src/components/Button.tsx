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
        "inline-flex h-11 items-center gap-2 rounded-xl border border-orange-500 px-6 uppercase transition duration-500 relative group/button",
        variant === "primary" && "bg-orange-500 text-white",
        variant === "secondary" && "hover:bg-orange-500 hover:text-white",
        variant === "text" &&
          "h-auto  px-0 border-transparent after:transition-all after:duration-500 after:content-[''] after:h-px after:w-0 after:absolute after:top-full after:bg-orange-500 hover:after:w-full",
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
