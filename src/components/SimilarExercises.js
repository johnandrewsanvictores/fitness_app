import { Box, Stack, Typography } from "@mui/material";
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
        <div className="p-5 w-full max-w-7xl mx-auto bg-yellow-100 relative">
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
        <div className="p-5 mb-4 md:mb-40 w-full max-w-7xl mx-auto bg-yellow-100 relative">
          {targetMuscleExercises.length ? (
            <HorizontalScrollBar data={equipmentExercises} isRecom={true} />
          ) : (
            <Loader />
          )}
        </div>
      </div>
    </div>
    // <Box sx={{mt: {lg: '100px', xs: '0'}}}>
    //     <Typography variant="h3" mb={5}>Exercises that target the same muscle group</Typography>

    //     <Stack direction="row" sx={{ p: '2', position: 'relative' }}>
    //         {targetMuscleExercises.length ? <HorizontalScrollBar data={targetMuscleExercises} /> : <Loader />}
    //     </Stack>

    //     <Typography variant="h3" mb={5}>Exercises that use the same equipment</Typography>

    //     <Stack direction="row" sx={{ p: '2', position: 'relative' }}>
    //         {equipmentExercises.length ? <HorizontalScrollBar data={equipmentExercises} /> : <Loader />}
    //     </Stack>
    // </Box>
  );
};

export default SimilarExercises;
