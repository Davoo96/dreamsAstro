import ArrowLeft from "@components/icons/arrowLeft";
import ArrowRight from "@components/icons/arrowRight";
import { useState } from "react";

const Carousel = ({
  slides,
  id,
  isDarkBackground = false
}: {
  slides: { src: string; name: string }[];
  id: string;
  isDarkBackground?: boolean;
}) => {
  const [current, setCurrent] = useState(0);

  const prevSlide = () =>
    setCurrent(current === 0 ? slides.length - 1 : current - 1);

  const nextSlide = () =>
    setCurrent(current === slides.length - 1 ? 0 : current + 1);

  const onDotClick = (index: number) => setCurrent(index);

  return (
    <div
      data-animate-type="motion-safe:animate-fadeDown"
      className="relative overflow-hidden w-full js-animation-on-scroll"
    >
      <ul
        key={id}
        className={`overflow-hidden relative my-0 mx-auto flex ease-out duration-300 w-[250px] h-[280px] tablet:h-[400px] tablet:w-[800px]`}
      >
        {slides.map((slides, index) => (
          <li
            key={slides.name}
            className={`absolute w-full left-1/2 -translate-x-1/2 duration-500 ease-in-out ${
              current === index ? "opacity-100 scale-100" : "opacity-0 scale-90"
            }`}
          >
            <img
              src={slides.src}
              alt="Imagem de uma casa"
              className="h-[280px] rounded-[40px] max-w-full tablet:h-[400px] mx-auto my-0"
            />
          </li>
        ))}
      </ul>
      <div className="flex items-center justify-center px-2 pt-6 pb-10 gap-2">
        <button
          className="text-none p-2 absolute left-1 top-1/2 -translate-y-1/2 tablet:static tablet:translate-y-0 tablet:left-0 tablet:top-0"
          aria-label="previous slide"
          onClick={prevSlide}
        >
          <ArrowLeft
            className={isDarkBackground ? "text-white" : "text-[#1F2224]"}
          />
        </button>
        <div className="p-2 flex flex-nowrap items-center justify-center gap-[10px]">
          {slides.map((_, index) => (
            <button
              className={`text-none w-4 h-4 rounded-full duration-300 transition-all ${
                index === current
                  ? "bg-orange-300 scale-110"
                  : "bg-gray-100 scale-75"
              }`}
              key={"circle" + index}
              onClick={() => onDotClick(index)}
            >
              {index + 1}
            </button>
          ))}
        </div>
        <button
          className="text-none p-2 absolute right-1 top-1/2 -translate-y-1/2 tablet:static tablet:translate-y-0 tablet:right-0 tablet:top-0"
          aria-label="next slide"
          onClick={nextSlide}
        >
          <ArrowRight
            className={isDarkBackground ? "text-white" : "text-[#1F2224]"}
          />
        </button>
      </div>
    </div>
  );
};

export default Carousel;
