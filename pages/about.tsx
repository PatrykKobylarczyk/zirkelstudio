import Image from "next/image";
import React from "react";
import profile from "../assets/profile2.jpg";

const About = () => {
  return (
    <div className="py-32 w-full h-full grid place-items-center">
      <div className="flex flex-col p-5 md:flex-row md:w-[60vw] gap-16 md:gap-24 ">
        <div className="w-full md:w-5/12 h-auto">
          <Image src={profile} alt="Patryk Kobylarczyk" />
        </div>
        <div className="w-full md:w-7/12 flex flex-col gap-5 justify-center p-5">
          <h2 className="text-3xl font-bold">Hello.</h2>
          <p>
            My name is Patrick. I've never climbed Everest, crushed cars with
            monster truck or lived in Bali (maybe next year). 
          </p>
          <p>
            In this life I did marry the only one, I created the other in her
            likeness, I wish could live in Croatia, sail, eat fishes everyday and
            have been creating clean, crisp, world class imagery for my clients.
          </p>
          <p>
            Interested in web development and traveling.
          </p>
          <p>
            foot size: 44
          </p>
          <p>
            Head over to the contact page so we can talk about shooting your
            next project!
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
