import { Box, Stack, Typography } from "@mui/material";
import Logo from "../assets/images/Logo-1.png";

const Footer = () => {
  return (
    <div className="flex justify-between items-center py-5 px-20 bg-yellow-500 text-white">
      <p className="flex gap-2 items-center justify-center text-xl">
        Gym <i className="fab fa-typo3" />
      </p>
      <small className="text-base">Gym © {new Date().getFullYear()}</small>
    </div>
  );
};

export default Footer;
