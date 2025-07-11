import { stagger, useAnimate } from "motion/react";
import { useEffect } from "react";
import SplitType from "split-type";

const useTextRevealAnimation = () => {
  const [scope, animate] = useAnimate();
  useEffect(() => {
    new SplitType(scope.current, {
      types: "lines,words",
      tagName: "span",
    });
  }, [scope]);

  const enterenceAnimation = () => {
    return animate(
      scope.current.querySelectorAll(".word"),
      {
        transform: "translateY(0)",
      },
      {
        duration: 0.5,
        delay: stagger(0.15),
      },
    );
  };

  const exitAnimation = () => {
    return animate(
      scope.current.querySelectorAll(".word"),
      {
        transform: "translateY(100%)",
      },
      {
        duration: 0.3,
        delay: stagger(-0.025, {
          startDelay: scope.current.querySelectorAll(".word").length * 0.25,
        }),
      },
    );
  };

  return {
    scope,
    enterenceAnimation,
    exitAnimation,
  };
};

export default useTextRevealAnimation;
