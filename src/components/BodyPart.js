import { Stack, Typography } from "@mui/material";

import Icon from "../assets/icons/gym.png";

const BodyPart = ({ item, setBodyPart, bodyPart }) => {
  return (
    <div
      class={`bodyPart-card p-4 ${
        bodyPart === item ? "border-t-4 border-red-600" : ""
      } bg-white rounded-bl-20 w-48 h-56 md:w-72 md:h-80 cursor-pointer gap-4 md:gap-12 flex flex-col justify-center items-center`}
      onClick={() => {
        setBodyPart(item);
        window.scrollTo({ top: 1800, left: 100, behavior: "smooth" });
      }}
    >
      <img src={Icon} alt="dumbbell" class="w-10 h-10" />
      <p class="text-xl md:text-2xl font-bold text-gray-800 capitalize text-center">
        {item}
      </p>
    </div>
  );
};

export default BodyPart;
