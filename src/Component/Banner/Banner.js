import bannerImage from "../../Assets/Image/Banner/Banner.jpg";
import Typewriter from "typewriter-effect";
import "./Banner.css";

const Banner = () => {
  const myInfo = {
    name: "I'm Shamim Hossen.",
    profession: {
      freelancer: "I'm A Freelancer.",
      developer: "I'm A MERN Stack Developer.",
    },
  };

  // destructor personal info
  const { name, profession } = myInfo;
  const { freelancer, developer } = profession;
  return (
    <div className="w-full h-screen relative ">
      {/* banner Image */}
      <img src={bannerImage} alt="bannerImage" className="w-full h-full" />

      {/* upper layer */}
      <div className="w-full h-full bg-slate-800 opacity-70 absolute bottom-0 left-0"></div>

      {/* personal info */}
      <div className="w-full flex flex-col text-center justify-center items-center text-white  absolute top-2/4 left-2/4 myInfo mt-10">
        <h1 className="font-bold text-4xl">Welcome</h1>

        {/* type writing */}
        {
          <h1 className="font-extrabold text-5xl mt-5 mb-5 ">
            <Typewriter
              options={{
                strings: [name, freelancer, developer],
                autoStart: true,
                loop: true,
              }}
            />
          </h1>
        }

        <h2 className="font-semibold text-xl">Based In Dhaka, Bangladesh.</h2>
      </div>
    </div>
  );
};

export default Banner;
