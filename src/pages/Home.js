import { useState } from "react";
import { Box } from "@mui/material";

import HeroBanner from '../components/HeroBanner';
import SearchExercises from '../components/SearchExercises';
import Excercises from '../components/Exercises';


const Home = () => {
    const [exercises, setExercises] = useState([]);
    const [bodyPart, setBodyPart] = useState('all');

    return ( 
        <Box>
            <HeroBanner />
            <SearchExercises 
                setExercises={setExercises} 
                bodyPart={bodyPart}
                setBodyPart={setBodyPart} 
            />
            <Excercises 
                setExercises={setExercises} 
                bodyPart={bodyPart}
                setBodyPart={setBodyPart} 
            />
        </Box>
     );
}
 
export default Home;