import React from "react";
import AboutImg from "../assets/about.png";

const About = () => {
  return (
    <section className="bg-secondery text-black px-5 py-32" id="about">
      <div className="container mx-auto grid md:grid-cols-2 items-center justify-center md:justify-between">
        <div className="about-info">
          <h2 className="text-4xl font-bold mb-5 border-b-[4px] w-[180px] border-indigo-6001 pb-2">
            About Me
          </h2>

          <p className="pb-2 " >
          Hi, I’m Harini, a passionate and driven fresher with a Bachelor’s degree in Computer Science Engineering. I recently completed an internship in web development, where I gained practical experience and honed my skills in creating dynamic and responsive web applications.
          </p>

          <p className="pb-2">
          I have a strong foundation in Python, HTML, CSS, JavaScript, React, Bootstrap, Django, and SQL, which I have applied in several projects during my studies and internship. These projects have allowed me to develop a keen eye for detail and a problem-solving mindset, essential for any developer.
          </p>
          <p className="pb-2">
          As I step into the professional world, I am actively seeking a job opportunity where I can contribute my skills and continue to grow as a developer. I am eager to bring my knowledge and creativity to a forward-thinking team, where I can collaborate on innovative projects and make a meaningful impact.
          </p>

         

          <p>
          I’m excited about the possibilities ahead and would love to connect with potential employers, mentors, or fellow developers. Let’s create something amazing together!
          </p>

         
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