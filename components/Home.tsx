import React from "react";
import { AiFillGithub } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <div className=" py-12 home-about-section" id="about">
      <div className="container mx-auto px-14">
        <div className="flex flex-wrap">
          <div className="w-full md:w-2/3 mb-8 md:mb-0 home-about-description">
            <h1 className="text-4xl font-bold mb-12 font-Playfair">
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="text-lg leading-relaxed text-justify md:p-10">
              I&apos;m a passionate Block Chain & Full Stack Developer hailing
              from Chennai, India. My journey in the realm of technology has
              been fueled by my deep love for coding and problem-solving.
              <br />
              <br />
              With a strong foundation in
              <i>
                <b className="purple">
                  {" "}
                  Solidity, React, Node.js, and Blockchain technologies{" "}
                </b>
              </i>
              , I thrive in building scalable and efficient web applications.
              <br />
              <br />
              My skills extend to
              <i>
                <b className="purple">
                  {" "}
                  managing databases, orchestrating containers, and implementing
                  CI/CD pipelines{" "}
                </b>
              </i>
              to ensure seamless deployment and maintenance of applications.
              <br />
              <br />
              I&apos;m particularly passionate about creating
              <i>
                <b className="purple">
                  {" "}
                  decentralized applications (dApps) on Ethereum and other
                  blockchain platforms
                </b>
              </i>
              , exploring the endless possibilities of blockchain technology.
            </p>
          </div>
        </div>

        <div className="flex flex-wrap justify-center mt-12 home-about-social">
          <div className="w-full text-center">
            <h1 className="text-3xl font-bold mb-6">FIND ME ON</h1>
            <p className="text-lg">
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className=" home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/Jagadeeshftw"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub className="mt-2 ml-2.5" />
                </a>
              </li>
              <li className=" social-icons flex justify-center">
                <a
                  href="https://www.linkedin.com/in/jagadeesh-b-042b38208/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons "
                >
                  <FaLinkedinIn className="mt-2 ml-2.5" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Home2;
