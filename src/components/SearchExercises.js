import { useState, useEffect } from "react";
import { exerciseOptions, fetchData } from "../utils/fetchData";
import HorizontalScrollBar from "./HorizontalScrollBar";

import Icon from "../assets/icons/gym.png";
import Arms from "../assets/icons/arms.png";
import Back from "../assets/icons/back.png";
import Cardio from "../assets/icons/cardio.png";
import Chest from "../assets/icons/chest.png";
import Legs from "../assets/icons/legs.png";
import Neck from "../assets/icons/neck.png";
import Shoulders from "../assets/icons/shoulders.png";
import Waist from "../assets/icons/waist.png";

const SearchExercises = ({
  setExercises,
  bodyPart,
  setBodyPart,
  setSearchInput,
}) => {
  const [search, setSearch] = useState("");
  const [bodyParts, setBodyParts] = useState([]);

  const handleClickScroll = () => {
    const element = document.querySelector("#exercises");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    const fetchExerciseData = async () => {
      const bodyPartsData = await fetchData(
        "https://exercisedb.p.rapidapi.com/exercises/bodyPartList",
        exerciseOptions,
      );

      setBodyParts(["all", ...bodyPartsData]);
    };

    //fetchExerciseData();
    //temp
    setBodyParts([
      "all",
      "back",
      "cardio",
      "chest",
      "lower arms",
      "lower legs",
      "neck",
      "shoulders",
      "upper arms",
      "upper legs",
      "waist",
    ]);
  }, []);

  const icons_body_part = [
    Icon,
    Back,
    Cardio,
    Chest,
    Arms,
    Legs,
    Neck,
    Shoulders,
    Arms,
    Legs,
    Waist,
  ];

  const handleSearch = async () => {
    if (search) {
      const exercisesData = await fetchData(
        "https://exercisedb.p.rapidapi.com/exercises",
        exerciseOptions,
      );

      const searchedExercises = exercisesData.filter(
        (exercise) =>
          exercise.name.toLowerCase().includes(search) ||
          exercise.target.toLowerCase().includes(search) ||
          exercise.equipment.toLowerCase().includes(search) ||
          exercise.bodyPart.toLowerCase().includes(search),
      );

      setSearchInput(search);
      setSearch("");
      setExercises(searchedExercises);

      handleClickScroll();
    }
  };

  return (
    <div>
      <div className="flex flex-col gap-8 text-center justify-center items-center py-16 w-full md:pt-32 md:pb-20">
        <h5 className=" text-gray-800 text-3xl w-full max-w-md leading-snug px-8">
          Awesome Exercise You Should know
        </h5>
        <div className="flex w-full items-center justify-center px-12">
          <input
            type="text"
            placeholder="Search Exercises"
            value={search}
            onChange={(e) => setSearch(e.target.value.toLowerCase())}
            className=" bg-red-50 rounded-sm px-4 py-2 border-gray-400 border-solid border-[1px] w-full max-w-lg text-gray-600"
          />
          <button
            onClick={handleSearch}
            className=" bg-red-600 text-white py-2 px-4"
          >
            Search
          </button>
        </div>
      </div>

      <div className=" p-5 w-full max-w-7xl mx-auto bg-red-100 relative">
        <HorizontalScrollBar
          data={bodyParts}
          bodyPart={bodyPart}
          setBodyPart={setBodyPart}
          icons_body_part={icons_body_part}
          setSearchInput={setSearchInput}
          isBodyParts
        />
      </div>
    </div>
  );
};

export default SearchExercises;
