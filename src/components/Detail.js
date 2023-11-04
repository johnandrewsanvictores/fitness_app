import { Typography, Stack, Button } from "@mui/material";

import BodyPartImage from "../assets/icons/body-part.png";
import TargetImage from "../assets/icons/target.png";
import EquipmentImage from "../assets/icons/equipment.png";

import { IoIosBody } from "react-icons/io";
import { SiTarget } from "react-icons/si";
import { FaDumbbell } from "react-icons/fa";

const Detail = ({ exerciseDetail }) => {
  const { bodyPart, gifUrl, name, target, equipment } = exerciseDetail;

  const extraDetail = [
    {
      icon: <IoIosBody size="25" color="red" />,
      name: bodyPart,
    },
    {
      icon: <SiTarget size="25" color="red" />,
      name: target,
    },
    {
      icon: <FaDumbbell size="25" color="red" />,
      name: equipment,
    },
  ];

  return (
    <div
      className="flex flex-col gap-9 px-8 py-8 md:p-8 md:pb-0 items-center justify-center md:flex-row md:px-12 md:py-24 "
      id="detail-sec"
    >
      <img
        src={gifUrl}
        alt={name}
        loading="lazy"
        className=" w-full max-w-[35rem] h-auto  bg-black rounded-lg"
      />
      <div>
        <h3 className="text-red-500 text-3xl leading-8 capitalize md:text-5xl">
          {name}
        </h3>
        <h6 className="text-gray-900 text-base max-w-[56ch] my-4">
          Exercises keep you strong. {name} is one of the best exercises to
          target your {target}. It will help you improve your mood and gian
          energy.
        </h6>

        <div className="flex gap-8 flex-col mt-6">
          {extraDetail.map((item) => (
            <div className="flex gap-2 items-center ">
              <button>{item.icon}</button>
              <h5 className="text-base text-gray-900 capitalize">
                {item.name}
              </h5>
            </div>
          ))}
        </div>
      </div>
    </div>

    // <Stack
    //   gap="60px"
    //   sx={{ flexDirection: { lg: "row" }, p: "20px", alignItems: "center" }}
    // >
    //   <img
    //     src={gifUrl}
    //     alt={name}
    //     loading="lazy"
    //     className=" w-full max-w-[35rem] h-auto  bg-black"
    //   />
    //   <Stack sx={{ gap: { lg: "35px", xs: "20px" } }}>
    //     <Typography variant="h3">{name}</Typography>
    //     <Typography variant="h6">
    //       Exercises keep you strong. {name} is one of the best exercises to
    //       target your {target}. It will help you improve your mood and gain
    //       energy.
    //     </Typography>
    //     {extraDetail.map((item) => (
    //       <Stack key={item.name} direction="row" gap="24px" alignItems="center">
    //         <Button
    //           sx={{
    //             background: "#fff2db",
    //             borderRadius: "50%",
    //             width: "100px",
    //             height: "100px",
    //           }}
    //         >
    //           <img
    //             src={item.icon}
    //             alt={bodyPart}
    //             style={{ width: "50px", height: "50px" }}
    //           />
    //         </Button>
    //         <Typography textTransform="capitalize" variant="h5">
    //           {item.name}
    //         </Typography>
    //       </Stack>
    //     ))}
    //   </Stack>
    // </Stack>
  );
};

export default Detail;
