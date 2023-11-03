import { AiFillPlaySquare } from "react-icons/ai";

const ExerciseVideos = ({ exerciseVideos, name }) => {
  if (!exerciseVideos.length) return "Loading...";

  return (
    <div className=" my-12 flex flex-col gap-8 items-center px-8 pb-8 md:p-8 md:px-12 md:py-24 md:pt-1">
      <h3 className="self-start text-xl md:text-3xl text-gray-800">
        How to <span className=" text-red-500 capitalize">{name}</span> ?
      </h3>
      <div className="flex flex-row justify-center items-center flex-wrap gap-16">
        {exerciseVideos?.slice(0, 3).map((item, index) => (
          <a
            key={index}
            className="flex flex-col gap-4 items-center justify-center w-full max-w-[25em]  h-auto"
            href={`https://www.youtube.com/watch?v=${item.video.videoId}`}
            target="__blank"
            rel="noreferrer"
          >
            <div className="relative">
              <img src={item.video.thumbnails[0].url} alt={item.video.title} />
              <AiFillPlaySquare
                size={64}
                color="red"
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
              />
            </div>
            <div>
              <h5 className="text-center text-[#292929] text-base leading-8">
                {item.video.title}
              </h5>
              <h6 className="text-center text-[#5c5c5c] text-sm">
                {item.video.channelName}
              </h6>
            </div>
          </a>
        ))}
      </div>
    </div>

    // <Box sx={{ marginTop: {lg: '200px', xs: '20px' }}} p="20px">
    //     <Typography variant="h3" mb="33px">
    //         Watch <span style={{color: '#ff2625', textTransform: 'capitalize'}}>{name}</span> exercise videos
    //     </Typography>
    //     <Stack justifyContent="flex-start" flexWrap="wrap" alignItems="center" sx={{
    //         flexDirection: {lg:'row'},
    //         gap: {lg: '110px', xs: '0'}
    //     }}>

    //         {
    //             exerciseVideos?.slice(0,4).map((item, index) => (
    //                 <a
    //                     key={index}
    //                     className="exercise-video"
    //                     href={`https://www.youtube.com/watch?v=${item.video.videoId}`}
    //                     target="__blank"
    //                     rel="noreferrer"
    //                 >
    //                     <img src={item.video.thumbnails[0].url} alt={item.video.title} />
    //                     <Box>
    //                         <Typography variant="h5" color="#121212">
    //                             {item.video.title}
    //                         </Typography>
    //                         <Typography variant="h6" color="#121212">
    //                             {item.video.channelName}
    //                         </Typography>
    //                     </Box>
    //                 </a>
    //             ))
    //         }
    //     </Stack>
    // </Box>
  );
};

export default ExerciseVideos;
