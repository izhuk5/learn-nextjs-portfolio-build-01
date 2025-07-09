import { FC } from "react";
import Button from "@/components/Button";

const navItems = [
  {
    href: "#",
    label: "Home",
  },
  {
    href: "#",
    label: "Projects",
  },
  {
    href: "#",
    label: "Testimonials",
  },
  {
    href: "#",
    label: "Faqs",
  },
  {
    href: "#",
    label: "Contact",
  },
];

const Footer: FC = () => {
  return (
    <footer className="bg-stone-900 text-white" id="contact">
      <div className="container">
        <div className="section">
          <div className="flex items-center gap-3">
            <div className="size-3 rounded-full bg-green-400"></div>
            <span className="uppercase">One spot available for next month</span>
          </div>
          <div className="grid md:grid-cols-3 md:items-center">
            <div className="md:col-span-2">
              <h2 className="mt-8 text-4xl font-extralight md:text-7xl lg:text-8xl">
                Enough talk. Let&apos;s make something great together.
              </h2>
              <Button
                className="mt-8"
                variant="secondary"
                iconAfter={
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="size-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
                    />
                  </svg>
                }
              >
                info@alextalor.com
              </Button>
            </div>
            <div>
              <nav className="mt-16 flex flex-col gap-8 md:mt-0 md:items-end">
                {navItems.map(({ href, label }) => (
                  <a href={href} key={label}>
                    <Button variant="text" className="text-lg">
                      {label}
                    </Button>
                  </a>
                ))}
              </nav>
            </div>
          </div>
        </div>
        <p className="py-16 text-sm text-white/30">
          Copyright &copy; Alex Taylor &bull; All rights reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
