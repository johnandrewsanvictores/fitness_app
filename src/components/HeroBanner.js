import Row from "../assets/images/row.jpg";
import Twist from "../assets/images/twist.jpg";
import Deadlift from "../assets/images/deadlift.jpeg";

const HeroBanner = () => {
  const handleClickScroll = () => {
    const element = document.querySelector("#exercises");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="flex items-center text-gray-600 bg-[#e4dbdb] px-8 py-16 md:py-24">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between md:gap-10">
        <div className="md:w-1/2 text-center md:text-left mb-4 md:mb-0 flex flex-col gap-5">
          <h1 className="text-5xl font-extrabold leading-tight text-red-500">
            Discover, Learn, and Stay Fit
          </h1>
          <p className="text-lg w-full max-w-[48ch]">
            Discover a vast library of exercises, master proper form, and
            achieve your fitness goals with ease.
          </p>
          <div>
            <button
              className="bg-red-500 hover:bg-red-600 text-white px-6 py-3 rounded-full text-lg transition-transform transform hover:scale-105 ease-in-out"
              onClick={handleClickScroll}
            >
              Get Started
            </button>
          </div>
        </div>
        <div className="md:w-1/2 mt-6 md:mt-0 flex flex-col items-center gap-5 w-full">
          <div className="image-container rounded-lg w-full h-40 relative">
            <div className="overlay absolute inset-0 rounded-lg bg-red-500 opacity-20"></div>
            <img
              src={Row}
              alt="Image 1"
              className="object-cover w-full h-full rounded-lg"
            />
          </div>
          <div className="image-container rounded-lg w-full h-40 relative">
            <div className="overlay absolute inset-0 rounded-lg bg-red-500 opacity-20"></div>
            <img
              src={Deadlift}
              alt="Image 2"
              className="object-cover w-full h-full rounded-lg"
            />
          </div>
          <div className="image-container rounded-lg w-full h-40 relative">
            <div className="overlay absolute inset-0 rounded-lg bg-red-500 opacity-20"></div>
            <img
              src={Twist}
              alt="Image 3"
              className="object-cover w-full h-full rounded-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
