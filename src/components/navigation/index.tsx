import { useEffect, useState } from "react";
import DreamsLogo from "../../components/logos/dreamsIncorporadora";
import Item from "./item";

export type NavigationItemsProps = {
  items: { text: string; url: string }[];
  logoNavigation: string;
};

const Navigation = ({ items, logoNavigation }: NavigationItemsProps) => {
  const HEADER_HEIGHT = 100;
  const [isOpen, setIsOpen] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const updatePosition = () => {
      setScrollPosition(window.scrollY);
    };
    window.addEventListener("scroll", updatePosition);
    updatePosition();
    return () => window.removeEventListener("scroll", updatePosition);
  }, []);

  return (
    <nav
      className={`fixed z-50 p-7 w-full bg-black-300 ease-in-out duration-500 ${
        scrollPosition > HEADER_HEIGHT ? "md:bg-black-300" : "md:bg-transparent"
      }`}
    >
      <div className="w-full md:flex md:justify-between md:items-center md:max-w-5xl md:m-auto">
        <header className="flex gap-5 items-center justify-between">
          <a aria-label="Dreams Logo" href={logoNavigation}>
            <DreamsLogo />
          </a>
          <button
            className={`relative flex rounded px-6 py-4 my-2.5 before:content-[''] before:h-0.5 before:w-8 before:bg-white before:absolute before:inline-block before:transition-transform before:duration-300 before:shadow-copy-x before:left-2 md:hidden ${
              isOpen ? "before:rotate-90" : ""
            }`}
            type="button"
            aria-label="Menu expand and close button"
            aria-expanded={isOpen}
            onClick={() => {
              if (!isOpen) return setIsOpen(true);
              return setIsOpen(false);
            }}
          />
        </header>
        <ul
          className={`pl-7 mt-7 text-white uppercase w-full left-0 absolute transition-opacity duration-500 ease-in-out md:visible md:pl-0 md:mt-0 md:opacity-100 md:w-auto md:flex md:items-center md:gap-7 md:relative ${
            isOpen ? "visible opacity-100 bg-black-300" : "invisible opacity-0"
          }`}
        >
          {items.map((item, index) => (
            <Item
              key={index}
              onClick={() => setIsOpen(false)}
              className="mb-5 font-bold text-2xl relative md:mb-0 md:after:content-[''] md:after:absolute md:after:w-full md:after:h-0.5 md:after:scale-0 md:after:left-0 md:after:origin-right md:after:bottom-0 md:after:transition-transform md:after:duration-300 md:after:ease-in md:after:bg-orange-300 md:hover:after:scale-100 md:hover:after:origin-left"
              {...item}
            />
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;
