import { Box, Stack, Typography } from "@mui/material";
import HorizontalScrollBar from "./HorizontalScrollBar";
import Loader from "./Loader";

const SimilarExercises = ({ targetMuscleExercises, equipmentExercises }) => {
  return (
    <div className="flex gap-20 flex-col">
      <div>
        <h3>Exercises that target the same muscle group</h3>
        <div className="p-5 w-full max-w-7xl mx-auto bg-yellow-100 relative">
          {targetMuscleExercises.length ? (
            <HorizontalScrollBar data={targetMuscleExercises} />
          ) : (
            <Loader />
          )}
        </div>
      </div>
      <div>
        <h3>Exercises that use the same equipment</h3>
        <div className="p-5 mb-20 w-full max-w-7xl mx-auto bg-yellow-100 relative">
          {targetMuscleExercises.length ? (
            <HorizontalScrollBar data={equipmentExercises} />
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
