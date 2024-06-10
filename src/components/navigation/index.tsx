import { useEffect, useState } from "react";
import DreamsLogo from "../icons/dreamsIncorporadora";
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
  }, [scrollPosition]);

  return (
    <nav
      className={`fixed z-50 p-7 w-full bg-black-300 ease-in-out duration-500 ${
        scrollPosition > HEADER_HEIGHT
          ? "tablet:bg-black-300"
          : "tablet:bg-transparent"
      }`}
    >
      <div className="w-full tablet:flex tablet:justify-between tablet:items-center tablet:max-w-5xl tablet:m-auto">
        <header className="flex gap-5 items-center justify-between">
          <a aria-label="Dreams Logo" href={logoNavigation}>
            <DreamsLogo className="w-[220px] tablet:w-full" />
          </a>
          <button
            className={`relative flex rounded px-6 py-4 my-2.5 before:content-[''] before:h-0.5 before:w-8 before:bg-white before:absolute before:inline-block before:transition-transform before:duration-300 before:shadow-copy-x before:left-2 tablet:hidden ${
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
          className={`pl-7 mt-7 text-white uppercase w-full left-0 absolute transition-opacity duration-500 ease-in-out tablet:visible tablet:pl-0 tablet:mt-0 tablet:opacity-100 tablet:w-auto tablet:flex tablet:items-center tablet:gap-7 tablet:relative ${
            isOpen ? "visible opacity-100 bg-black-300" : "invisible opacity-0"
          }`}
        >
          {items.map((item, index) => (
            <Item
              key={index}
              onClick={() => setIsOpen(false)}
              className="mb-5 font-bold text-2xl relative tablet:mb-0 tablet:after:content-[''] tablet:after:absolute tablet:after:w-full tablet:after:h-0.5 tablet:after:scale-0 tablet:after:left-0 tablet:after:origin-right tablet:after:bottom-0 tablet:after:transition-transform tablet:after:duration-300 tablet:after:ease-in tablet:after:bg-orange-300 tablet:hover:after:scale-100 tablet:hover:after:origin-left"
              {...item}
            />
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;
