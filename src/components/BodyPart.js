const BodyPart = ({ item, setBodyPart, bodyPart, img }) => {
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
      <img src={img} alt="dumbbell" class="w-10 h-10 md:w-20 md:h-20" />
      <p class="text-xl md:text-2xl font-bold text-gray-800 capitalize text-center">
        {item}
      </p>
    </div>
  );
};

export default BodyPart;
