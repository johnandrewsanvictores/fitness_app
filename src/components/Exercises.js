import { useState, useEffect } from "react";
import { Pagination } from "@mui/material";
import { Box, Stack, Typography } from "@mui/material";

import { exerciseOptions, fetchData } from "../utils/fetchData";
import ExerciseCard from "./ExerciseCard";
import Loader from "./Loader";

const Exercises = ({ exercises, setExercises, bodyPart }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const exercisesPerPage = 9;

  const indexOfLastExercise = currentPage * exercisesPerPage;
  const indexOfFirstExercise = indexOfLastExercise - exercisesPerPage;
  const currentExercises = exercises.slice(
    indexOfFirstExercise,
    indexOfLastExercise,
  );

  const paginate = (e, value) => {
    setCurrentPage(value);

    window.scrollTo({ top: 1800, behavior: "smooth" });
  };

  //temp data
  const ex = [
    {
      id: 3,
      gifUrl: "/logo192.png",
      name: "test",
      bodyPart: "chest",
      target: "chest",
    },
    {
      id: 4,
      gifUrl: "/logo192.png",
      name: "test",
      bodyPart: "chest",
      target: "chest",
    },
    {
      id: 5,
      gifUrl: "/logo192.png",
      name: "test",
      bodyPart: "chest",
      target: "chest",
    },
    {
      id: 6,
      gifUrl: "/logo192.png",
      name: "test",
      bodyPart: "chest",
      target: "chest",
    },
    {
      id: 7,
      gifUrl: "/logo192.png",
      name: "test",
      bodyPart: "chest",
      target: "chest",
    },
    {
      id: 5,
      gifUrl: "/logo192.png",
      name: "test",
      bodyPart: "chest",
      target: "chest",
    },
    {
      id: 6,
      gifUrl: "/logo192.png",
      name: "test",
      bodyPart: "chest",
      target: "chest",
    },
    {
      id: 7,
      gifUrl: "/logo192.png",
      name: "test",
      bodyPart: "chest",
      target: "chest",
    },
    {
      id: 5,
      gifUrl: "/logo192.png",
      name: "test",
      bodyPart: "chest",
      target: "chest",
    },
    {
      id: 6,
      gifUrl: "/logo192.png",
      name: "test",
      bodyPart: "chest",
      target: "chest",
    },
    {
      id: 7,
      gifUrl: "/logo192.png",
      name: "test",
      bodyPart: "chest",
      target: "chest",
    },
    {
      id: 5,
      gifUrl: "/logo192.png",
      name: "test",
      bodyPart: "chest",
      target: "chest",
    },
    {
      id: 6,
      gifUrl: "/logo192.png",
      name: "test",
      bodyPart: "chest",
      target: "chest",
    },
    {
      id: 7,
      gifUrl: "/logo192.png",
      name: "test",
      bodyPart: "chest",
      target: "chest",
    },
  ];

  useEffect(() => {
    const fetchExercisesData = async () => {
      let exercisesData = [];

      if (bodyPart === "all") {
        setExercises([]);
        exercisesData = await fetchData(
          "https://exercisedb.p.rapidapi.com/exercises",
          exerciseOptions,
        );
      } else {
        setExercises([]);
        exercisesData = await fetchData(
          `https://exercisedb.p.rapidapi.com/exercises/bodyPart/${bodyPart}`,
          exerciseOptions,
        );
      }

      setExercises(exercisesData);
    };
    //setExercises(ex);
    fetchExercisesData();
  }, [bodyPart]);

  return (
    <div
      id="exercises"
      className=" lg:py-28 pt-12 px-5 py-10 flex flex-col md:py-25 gap-10"
    >
      <h3 className="text-3xl text-gray-800 text-center">Showing Results</h3>
      <div className="flex flex-row lg:gap-24 gap-[25px] flex-wrap justify-center w-full max-w-[70em] m-auto">
        {exercises.length > 0 ? (
          currentExercises.map((exercise, index) => (
            <ExerciseCard key={index} exercise={exercise} isSimilar={false} />
          ))
        ) : (
          <Loader />
        )}
      </div>
      <div className="items-center self-center">
        {exercises.length > 9 && (
          <Pagination
            color="standard"
            shape="rounded"
            defaultPage={1}
            count={Math.ceil(exercises.length / exercisesPerPage)}
            page={currentPage}
            onChange={paginate}
            size="small"
          />
        )}
      </div>
    </div>
    // <Box id="exercises" sx={{ mt: { lg: "110px" } }} mt="50px" p="20px">
    //   <Typography variant="h3" mb="46px">
    //     Showing Results
    //   </Typography>

    //   <Stack
    //     direction="row"
    //     sx={{ gap: { lg: "100px", xs: "50px" } }}
    //     flexWrap="wrap"
    //     justifyContent="center"
    //   >
    //     {exercises.length > 0 ? (
    //       currentExercises.map((exercise, index) => (
    //         <ExerciseCard key={index} exercise={exercise} />
    //       ))
    //     ) : (
    //       <Loader />
    //     )}
    //   </Stack>

    //   <Stack mt="100px" alignItems="center">
    //     {exercises.length > 9 && (
    //       <Pagination
    //         color="standard"
    //         shape="rounded"
    //         defaultPage={1}
    //         count={Math.ceil(exercises.length / exercisesPerPage)}
    //         page={currentPage}
    //         onChange={paginate}
    //         size="large"
    //       />
    //     )}
    //   </Stack>
    // </Box>
  );
};

export default Exercises;
