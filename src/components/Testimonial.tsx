import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";
import { HTMLAttributes, useEffect } from "react";
import { twMerge } from "tailwind-merge";
import { usePresence } from "motion/react";
import useTextRevealAnimation from "@/hooks/useTextRevealAnimation";

const Testimonial = (
  props: {
    quote: string;
    name: string;
    role: string;
    company: string;
    imagePositionY: number;
    image: string | StaticImport;
    className?: string;
  } & HTMLAttributes<HTMLDivElement>,
) => {
  const {
    quote,
    name,
    role,
    company,
    imagePositionY,
    image,
    className,
    ...rest
  } = props;

  const {
    scope: quoteScope,
    enterenceAnimation: quoteEnterenceAnimation,
    exitAnimation: quoteExitAnimation,
  } = useTextRevealAnimation();
  const {
    scope: citeScope,
    enterenceAnimation: citeEnterenceAnimation,
    exitAnimation: citeExitAnimation,
  } = useTextRevealAnimation();
  const [isPresent, safeToRemove] = usePresence();

  useEffect(() => {
    if (isPresent) {
      quoteEnterenceAnimation().then(() => {
        citeEnterenceAnimation();
      });
    } else {
      Promise.all([quoteExitAnimation(), citeExitAnimation()]).then(() => {
        safeToRemove();
      });
    }
  }, [isPresent]);

  return (
    <div
      className={twMerge(
        "grid gap-8 md:grid-cols-5 md:items-center lg:gap-16",
        className,
      )}
      {...rest}
    >
      <div className="aspect-square md:col-span-2 md:aspect-[9/16]">
        <Image
          className="size-full object-cover"
          src={image}
          alt={name}
          style={{
            objectPosition: `50% ${imagePositionY * 100}%`,
          }}
        />
      </div>
      <blockquote className="md:col-span-3">
        <div
          className="mt-8 text-3xl md:mt-0 md:text-5xl lg:text-6xl"
          ref={quoteScope}
        >
          <span>&ldquo;</span>
          {quote}
          <span>&rdquo;</span>
        </div>
        <cite
          className="mt-4 block not-italic md:mt-8 md:text-lg lg:text-xl"
          ref={citeScope}
        >
          {name}, {role} at {company}
        </cite>
      </blockquote>
    </div>
  );
};

export default Testimonial;
