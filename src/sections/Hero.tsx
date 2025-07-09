import { FC } from "react";
/* eslint-disable-next-line @typescript-eslint/no-unused-vars */
import heroImage from "@/assets/images/hero-image.jpg";
import Image from "next/image";
import Button from "@/components/Button";

const Hero: FC = () => {
  return (
    <section>
      <div className="grid items-stretch md:h-screen md:grid-cols-12">
        <div className="flex flex-col justify-center md:col-span-7">
          <div className="container !max-w-full">
            <h1 className="mt-40 text-5xl md:mt-0 md:text-6xl lg:text-7xl">
              Crafting digital experiences through code and creative design
            </h1>
            <div className="mt-10 flex flex-col items-start gap-6 md:flex-row md:items-center">
              <Button
                variant="secondary"
                iconAfter={
                  <svg
                    className="size-5"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    strokeWidth="1.5"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m4.5 5.25 7.5 7.5 7.5-7.5m-15 6 7.5 7.5 7.5-7.5"
                    />
                  </svg>
                }
              >
                <span>View my work</span>
              </Button>
              <Button variant="text">Let&apos;s Talk</Button>
            </div>
          </div>
        </div>
        <div className="md:col-span-5">
          <div className="mt-20 md:mt-0 md:h-full">
            <Image
              className="size-full object-cover"
              src={heroImage}
              alt={`My portrait`}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
