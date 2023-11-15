import Me from "../assets/images/me.jpg";
import AboutBg from "../assets/images/about-bg.png";

const About = () => {
  return (
    <section className=" p-4 md:p-10 py-10">
      <div
        className="fixed top-0 left-0 w-full h-full bg-cover bg-center bg-no-repeat opacity-50 -z-50"
        style={{
          backgroundImage: `linear-gradient(0deg, rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0.2)), url(${AboutBg})`,
        }}
      ></div>
      <div className="flex flex-col gap-10 items-center justify-center">
        <div className="border-2 border-gray-950 border-solid flex flex-col-reverse w-full max-w-7xl md:flex-row md:mx-auto">
          <div className="border-2 border-gray-950 border-solid p-6 flex flex-col gap-5 bg-gray-900 text-white md:flex-auto md:w-1/3 md:justify-center md:p-10">
            <h2 className=" text-3xl text-red-600 font-bold text-center">
              Meet the Creator
            </h2>
            <div className=" text-base leading-loose w-full max-w-[56ch] mx-auto">
              <p className="mb-2">
                Hey there, folks, it’s your main man{" "}
                <span className="text-red-400">John Andrew San Victores</span>,
                the powerhouse behind this kickin’ website - FitGIFs! Yes, baby,
                were diving deep into the world of fitness like never before.
              </p>
              <p>
                So, you might be wondering, who’s this guy, Andrew? Well, I’m
                not just your average web developer, folks; I’m a gym-loving
                beast who’s been there, done that, and is here to guide you
                through the fitness jungle
              </p>
            </div>
          </div>
          <div className="border-2 border-gray-950 border-solid p-10 md:flex-auto md:w-1/2 flex justify-center items-center bg-white">
            <img
              src={Me}
              al="Creator's picture"
              className=" w-64 border-4 border-gray-950 border-solid md:w-96"
            />
          </div>
        </div>
        <div className="flex flex-col gap-10 text-gray-900 text-base leading-relaxed md:flex-row md:justify-between w-full max-w-7xl ">
          <div>
            <h2 className="text-xl text-red-700 font-bold mb-3 text-center">
              About the Website
            </h2>
            <p className="w-full max-w-[56ch] mx-auto">
              This website isn’t your run-of -the-mill code - it’s my digital
              dojo, a sanctuary wehre fitness fanatics, just like you and me,
              come together to soak up knowledge, lift each other up, and make
              those gains, yes, baby!.
            </p>
          </div>
          <div>
            <h2 className="text-xl text-red-700 font-bold mb-3 text-center">
              My Fitness Odyssey
            </h2>
            <p className="w-full max-w-[56ch] mx-auto">
              My journey in the iron game has been one heck of a ride. I’ve
              faced the sweat, embraced the pain, and, oh boy, the GAINS -
              that’s what it’s all about! And now, I’m here to share all that
              wisdom with you.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
