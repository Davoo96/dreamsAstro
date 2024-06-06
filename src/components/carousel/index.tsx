import { useState } from "react";

const Carousel = ({
  slides,
  id,
  leftArrow,
  rightArrow
}: {
  slides: { src: string; name: string }[];
  id: string;
  leftArrow: string;
  rightArrow: string;
}) => {
  const [current, setCurrent] = useState(0);

  const prevSlide = () => {
    if (current === 0) setCurrent(slides.length - 1);
    else setCurrent(current - 1);
  };

  const nextSlide = () => {
    if (current === slides.length - 1) setCurrent(0);
    else setCurrent(current + 1);
  };

  const onDotClick = (index: number) => {
    return setCurrent(index);
  };

  return (
    <div className="overflow-hidden">
      <ul
        key={id}
        className={`flex transition ease-out duration-300`}
        style={{ transform: `translateX(-${current * 300}px)` }}
      >
        {slides.map(slides => (
          <li key={slides.name}>
            <img
              src={slides.src}
              alt="Imagem de uma casa"
              className="h-[400px] rounded-[40px] max-w-none w-[300px]"
            />
          </li>
        ))}
      </ul>
      <div className="flex items-center justify-center px-2 pt-6 pb-10 gap-2">
        <button className="text-none p-2" onClick={prevSlide}>
          <img src={leftArrow} alt="Anterior" />
        </button>
        <div className="p-2 flex flex-nowrap items-center justify-center gap-[10px]">
          {slides.map((_, index) => (
            <button
              className={`text-none w-4 h-4 rounded-full bg-orange-50 duration-300 transition-all ${
                index === current ? "bg-orange-300 scale-110" : ""
              }`}
              key={"circle" + index}
              onClick={() => onDotClick(index)}
            >
              {index + 1}
            </button>
          ))}
        </div>
        <button className="text-none p-2" onClick={nextSlide}>
          <img src={rightArrow} alt="Próximo" />
        </button>
      </div>
    </div>
  );
};

export default Carousel;
