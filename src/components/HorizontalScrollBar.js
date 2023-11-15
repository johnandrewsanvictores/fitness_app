import { useContext } from "react";
import { ScrollMenu, VisibilityContext } from "react-horizontal-scrolling-menu";

import BodyPart from "./BodyPart";
import ExerciseCard from "./ExerciseCard";

import RightArrowIcon from "../assets/icons/right-arrow.png";
import LeftArrowIcon from "../assets/icons/left-arrow.png";

const LeftArrow = () => {
  const { scrollPrev } = useContext(VisibilityContext);

  return (
    <button
      onClick={() => scrollPrev()}
      className="cursor-pointer bg-transparent outline-none border-none flex justify-center items-center text-red-500 text-2xl rounded-md static md:absolute md:-bottom-8 md:  scale-100 transition-all md:right-12 md:hover:scale-125"
    >
      <img src={LeftArrowIcon} alt="right-arrow" />
    </button>
  );
};

const RightArrow = () => {
  const { scrollNext } = useContext(VisibilityContext);

  return (
    <button
      onClick={() => scrollNext()}
      className="cursor-pointer bg-transparent outline-none border-none flex justify-center items-center text-red-500 text-2xl rounded-md static md:absolute md:-bottom-8 md:right-1 scale-100 transition-all md:hover:scale-125"
    >
      <img src={RightArrowIcon} alt="right-arrow" />
    </button>
  );
};

const HorizontalScrollBar = ({
  data,
  bodyPart,
  setBodyPart,
  isBodyParts,
  icons_body_part,
  setSearchInput,
  isRecom,
}) => {
  return (
    <ScrollMenu
      LeftArrow={LeftArrow}
      RightArrow={RightArrow}
      scrollContainerClassName="flex items-center"
    >
      {data.map((item, index) => (
        <div
          key={item.id || item}
          itemId={item.id || item}
          title={item.id || item}
          className="p-5"
          onClick={() => setSearchInput("")}
        >
          {isBodyParts ? (
            <BodyPart
              item={item}
              bodyPart={bodyPart}
              setBodyPart={setBodyPart}
              img={icons_body_part[index]}
            />
          ) : (
            <ExerciseCard exercise={item} isRecom={isRecom} />
          )}
        </div>
      ))}
    </ScrollMenu>
  );
};

export default HorizontalScrollBar;
