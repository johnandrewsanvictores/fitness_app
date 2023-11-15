import { AiFillPlaySquare } from "react-icons/ai";
import Loader from "./Loader";

const ExerciseVideos = ({ exerciseVideos, name }) => {
  if (!exerciseVideos.length) return <Loader />;

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
  );
};

export default ExerciseVideos;
