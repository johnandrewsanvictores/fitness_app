//import { Box, Stack, Typography, Button } from "@mui/material";
import HeroBannerImg from "../assets/images/banner_img.png";
const HeroBanner = () => {
  const handleClickScroll = () => {
    const element = document.querySelector("#exercises");
    if (element) {
      // 👇 Will scroll smoothly to the top of the next section
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="flex flex-col gap-8 px-4 py-8 md:grid md:grid-cols-2 items-center md:px-12 md:py-24 bg-gray-200">
      <div className="flex flex-col gap-4 items-center">
        <div>
          <p className=" text-5xl text-red-500 leading-tight text-center">
            Fitness Club
          </p>
          <p className=" text-xl text-gray-800 alig text-center">
            Sweat, Smile and Repeat
          </p>
        </div>

        <div>
          <img
            src={HeroBannerImg}
            alt="hero-banner"
            className="rounded-3xl h-auto mx-auto w-full max-w-3xl md:hidden"
          />
        </div>
        <div className="flex flex-col gap-2 mx-auto items-center">
          <p className="text-gray-800 text-base text-center">
            Check out the most effective exercises
          </p>
          <div>
            <button
              className=" bg-yellow-500 px-6 py-3 rounded-md text-white"
              onClick={handleClickScroll}
            >
              Explore exercises
            </button>
          </div>
        </div>
      </div>
      <div>
        <img
          src={HeroBannerImg}
          alt="hero-banner"
          className="rounded-3xl h-auto mx-auto w-full max-w-3xl hidden md:block"
        />
      </div>
    </div>

    // <Box
    //     sx={{
    //         mt: {lg:'212px', xs: '70px'},
    //         ml: { sm: '50px' }
    //     }}
    //     position="relative" p="20px"
    // >

    //     <Typography
    //         color="#FF2625"
    //         fontWeight="600"
    //         fontSize="26px"
    //     >
    //         Fitness Club
    //     </Typography>

    //     <Typography
    //         fontWeight={700}
    //         sx={{fontSize: {lg: '44px', xs: '40px'}}
    //         }
    //         mb="23px" mt="30px"
    //     >
    //         Sweat, Smile <br/> and Repeat
    //     </Typography>

    //     <Typography
    //         fontSize="22px"
    //         lineHeight="35px"
    //         mb={4}
    //     >
    //         Check out the most effective exercises
    //     </Typography>

    //     <Button
    //         variant="contained"
    //         color="error"
    //         href="#exercises"
    //         sx={{backgroundColor: '#ff2625', padding: '10px'}}
    //     >Explore Exercises</Button>

    //     <Typography
    //         fontWeight={600}
    //         color="#ff2625"
    //         sx={{
    //             opacity: 0.1,
    //             display: {lg: 'block', xs: 'none'}
    //         }}
    //         fontSize="200px"
    //     >Exercise</Typography>

    //     <img src={HeroBannerImg} alt="banner" className="hero-banner-img" />
    // </Box>
  );
};

export default HeroBanner;
