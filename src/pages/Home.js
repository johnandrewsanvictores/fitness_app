import { useState } from "react";
import { Box } from "@mui/material";

import HeroBanner from "../components/HeroBanner";
import SearchExercises from "../components/SearchExercises";
import Excercises from "../components/Exercises";

const Home = () => {
  const [exercises, setExercises] = useState([]);
  const [bodyPart, setBodyPart] = useState("all");
  const [searchInput, setSearchInput] = useState("");

  return (
    <Box>
      <HeroBanner />
      <SearchExercises
        setExercises={setExercises}
        bodyPart={bodyPart}
        setBodyPart={setBodyPart}
        setSearchInput={setSearchInput}
      />
      <Excercises
        setExercises={setExercises}
        bodyPart={bodyPart}
        exercises={exercises}
        searchInput={searchInput}
      />
    </Box>
  );
};

export default Home;
