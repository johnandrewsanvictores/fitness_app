import { useState, useEffect } from "react";
import { Box, Button, Stack, TextField, Typography } from "@mui/material";
import { exerciseOptions, fetchData } from "../utils/fetchData";
import HorizontalScrollBar from "./HorizontalScrollBar";

const SearchExercises = ({ setExercises, bodyPart, setBodyPart }) => {
  const [search, setSearch] = useState("");
  const [bodyParts, setBodyParts] = useState([]);

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
    setBodyParts(["all", "chest", "back", "legs", "shoulder"]);
  }, []);

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

      setSearch("");
      setExercises(searchedExercises);
    }
  };

  return (
    <div>
      <div className="flex flex-col gap-8 text-center justify-center items-center py-8 w-full md:pt-32 md:pb-20">
        <h5 className=" text-gray-800 text-3xl w-full max-w-md leading-snug px-4">
          Awesome Exercise You Should know
        </h5>
        <div className="flex w-full items-center justify-center px-6">
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

      <div className=" p-5 w-full max-w-7xl mx-auto bg-yellow-100 relative">
        <HorizontalScrollBar
          data={bodyParts}
          bodyPart={bodyPart}
          setBodyPart={setBodyPart}
          isBodyParts
        />
      </div>
    </div>
    // <Stack alignItems="center" mt="37px" justifyContent="center" p="20px">
    //     <Typography fontWeight={700} sx={{
    //         fontSize: { lg: '44px', xs: '30px'}
    //     }} mb="50px" textAlign="center">
    //         Awesome Exercises You <br />Should Know
    //     </Typography>
    //     <Box position="relative" mb="72px">
    //         <TextField
    //         sx={{
    //             input: { fontWeight: '700', border: 'none', borderRadius: '4px'},
    //             width: {lg: '800px', xs: '350px'},
    //             backgroundColor: '#fff',
    //             borderRadius: '40px'
    //         }} height="76px" value={search} onChange={(e) => setSearch(e.target.value.toLowerCase())} placeholder="Search Exercises" type="text" />
    //         <Button className="search-btn"
    //         sx={{
    //             bgcolor: '#FF2625',
    //             color: '#fff',
    //             textTransform: 'none',
    //             width: {lg: '175px', xs: '80px'},
    //             fontSize: {lg: '20px', xs: '14px'},
    //             height: '56px',
    //             position: 'absolute',
    //             right: '0'
    //         }}
    //         onClick={handleSearch}>Search</Button>
    //     </Box>

    //     <Box sx={{position: 'relative', width: '100%', p: '20px'}}>
    //         <HorizontalScrollBar data={bodyParts} bodyPart={bodyPart} setBodyPart={setBodyPart} isBodyParts/>
    //     </Box>
    // </Stack>
  );
};

export default SearchExercises;
