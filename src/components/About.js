
import React from "react";
import AboutImg from "../assets/about.png";

const About = () => {
  return (
    <section className="bg-primary text-white px-5 py-32" id="about">
      <div className="container mx-auto grid md:grid-cols-2 items-center justify-center md:justify-between">
        <div className="about-info">
          <h2 className="text-4xl font-bold mb-5 border-b-[5px] w-[180px] border-indigo-600 pb-2">
            About Me
          </h2>

          <p className="pb-5">
            Hi, Im harini . I am a
            Frontend Developer/website Developer. I build beautifull websites with React and
            Django.
          </p>
          <p className="pb-5">
          As a passionate web developer, I have honed my skills in Python, HTML, JavaScript, React, SQL, MySQL, Django, and Bootstrap. Although I am a fresher, my strong foundation in these technologies, combined with hands-on experience from various projects, has equipped me to take on challenges in real-world development environments. I am eager to bring my technical abilities and enthusiasm to a dynamic team, where I can contribute to building innovative and efficient web solutions.
          </p>

          <p>In backend I know sql,mysql,python</p>

          
        </div>

        <div className="about-img">
          <img
            src={AboutImg}
            alt="coding illustration"
            className="lgw-[80%] md:ml-auto"
          />
        </div>
      </div>
    </section>
  );
};

export default About;