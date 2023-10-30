import { Link } from "react-router-dom";
import { Button, Stack, Typography } from "@mui/material";

const ExerciseCard = ({ key, exercise, isSimilar }) => {
  return (
    <Link
      className={` w-56 md:w-72 h-auto  bg-white border-t-2 border-t-solid border-t-red-500 rounded-br-3xl no-underline flex
      justify-between flex-col scale-100 transition-all hover:scale-110`}
      to={`/exercise/${exercise.id}`}
    >
      <img
        src={exercise.gifUrl}
        alt={exercise.name}
        loading="lazy"
        className=" h-[326px]"
      />
      <div>
        <button className=" ml-5 text-white text-base rounded-3xl capitalize bg-red-500 px-4 py-2">
          {exercise.bodyPart}
        </button>
        <button className=" ml-5 text-white text-base rounded-3xl capitalize bg-yellow-500 px-4 py-2">
          {exercise.target}
        </button>
      </div>
      <p className=" ml-5 text-gray-800 font-bold mt-3 pb-3 capitalize text-lg md:text-2xl">
        {exercise.name}
      </p>
    </Link>

    // <Link className="exercise-card" to={`/exercise/${exercise.id}`}>
    //     <img src={exercise.gifUrl} alt={exercise.name} loading="lazy" />
    //     <Stack direction="row">
    //         <Button sx={{ ml: '21px', color: '#fff', background: '#ffa9a9', fontSize: '14px', borderRadius: '20px', textTransform: 'capitalize'}}>
    //             {exercise.bodyPart}
    //         </Button>

    //         <Button sx={{ ml: '21px', color: '#fff', background: '#fcc757', fontSize: '14px', borderRadius: '20px', textTransform: 'capitalize'}}>
    //             {exercise.target}
    //         </Button>
    //     </Stack>

    //     <Typography ml="21px" color="#121212" fontWeight="bold" mt="11px" pb="10px" textTransform="capitalize" fontSize="22px">
    //             {exercise.name}
    //         </Typography>
    // </Link>
  );
};

export default ExerciseCard;
