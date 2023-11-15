import HorizontalScrollBar from "./HorizontalScrollBar";
import Loader from "./Loader";

const SimilarExercises = ({ targetMuscleExercises, equipmentExercises }) => {
  return (
    <div className="flex gap-12 md:gap-20 flex-col px-8 md:px-12">
      <div>
        <h3 className=" text-gray-700 text-xl mb-4 md:text-3xl">
          Exercises that target the{" "}
          <span className="text-red-500">same muscle group</span>
        </h3>
        <div className="p-5 w-full max-w-7xl mx-auto bg-red-100 relative">
          {targetMuscleExercises.length ? (
            <HorizontalScrollBar data={targetMuscleExercises} isRecom={true} />
          ) : (
            <Loader />
          )}
        </div>
      </div>
      <div>
        <h3 className="text-gray-700 text-xl mb-4 md:text-3xl">
          Exercises that use the{" "}
          <span className="text-red-500">same equipment</span>
        </h3>
        <div className="p-5 mb-4 md:mb-40 w-full max-w-7xl mx-auto bg-red-100 relative">
          {targetMuscleExercises.length ? (
            <HorizontalScrollBar data={equipmentExercises} isRecom={true} />
          ) : (
            <Loader />
          )}
        </div>
      </div>
    </div>
  );
};

export default SimilarExercises;
