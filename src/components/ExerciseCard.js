import { Link } from "react-router-dom";

const ExerciseCard = ({ key, exercise, isRecom }) => {
  const handleClickScroll = () => {
    const element = document.querySelector("#detail-sec");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <Link
      className={`w-56 md:w-72 h-auto  bg-white border-t-2 border-t-solid border-t-red-500 rounded-br-3xl no-underline flex
      justify-between flex-col scale-100 transition-all hover:scale-110`}
      to={`/exercise/${exercise.id}`}
      onClick={isRecom && handleClickScroll}
    >
      <img
        src={exercise.gifUrl}
        alt={exercise.name}
        loading="lazy"
        className={`${isRecom ? "h-[220px]" : "h-[326px]"} md:h-[326px]`}
      />
      <div>
        <button className=" ml-5 text-white text-base rounded-3xl capitalize bg-red-500 px-4 py-2 mb-2">
          {exercise.bodyPart}
        </button>
        <button className=" ml-5 text-white text-base rounded-3xl capitalize bg-yellow-500 px-4 py-2">
          {exercise.target}
        </button>
      </div>
      <p className=" ml-5 text-gray-800 font-bold mt-3 pb-3 capitalize text-lg lg:text-xl">
        {exercise.name.length > 30
          ? exercise.name.substring(0, 25) + "..."
          : exercise.name}
      </p>
    </Link>
  );
};

export default ExerciseCard;
