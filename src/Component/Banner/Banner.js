import React, { useState } from "react";
import bannerImage from "../../Assets/Image/Banner/Banner.jpg";
import Typewriter from "typewriter-effect";

const Banner = () => {
  const [myInfo, setMyInfo] = useState({
    name: "I Am Shamim Hossen",
    profession: {
      freelancer: "I Am A Freelancer",
      developer: "I Am A MERN Stack Developer",
    },
  });

  // destructor personal info
  const { name, profession } = myInfo;
  const { freelancer, developer } = profession;
  return (
    <div className="w-full h-screen">
      {/* banner Image */}
      <img src={bannerImage} alt="bannerImage" />

      {/* upper layer */}
      <div></div>

      {/* personal info */}
      <div>
        <h1>Welcome</h1>

        {/* type writing */}
        {
          <h1 className="w-96">
            <Typewriter
              options={{
                strings: [name, freelancer, developer],
                autoStart: true,
                loop: true,
              }}
            />
          </h1>
        }

        <h2>Based In Dhaka, Bangladesh.</h2>
      </div>
    </div>
  );
};

export default Banner;
