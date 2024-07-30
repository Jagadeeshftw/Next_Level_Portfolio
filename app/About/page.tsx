import React from "react";
import Github from "../../components/about/Github";
import Aboutcard from "../../components/about/AboutCard";
import ProgrammingLanguages from "../../components/about/ProgrammingLanguages";
import Frameworks from "../../components/about/Frameworks";
import Databases from "../../components/about/Databases";
import Linuxdistros from "../../components/about/Linuxdistros";
import DevOps from "../../components/about/DevOps";
import Footer from "@/components/Footer";
import MyIconCloud from "@/components/MyIconCloud";

function About() {
  return (
    <>
      <div className="about-section py-12  relative z-48">
        <div className="container mx-auto sm:px-14">
          <div
            className="flex flex-col md:flex-row"
            style={{ padding: "10px" }}
          >
            <div
              className="w-full md:w-2/3"
              style={{
                justifyContent: "center",
                paddingTop: "30px",
                paddingBottom: "50px",
              }}
            >
              <h1 className="text-4xl mb-6 text-center">
                Discover<strong className="purple"> My Journey</strong>
              </h1>
              <Aboutcard />
            </div>
            <MyIconCloud />
          </div>
          <h1 className="project-heading text-4xl mt-14 mb-14 text-center">
            Languages <strong className="purple">I Command </strong>
          </h1>
          <ProgrammingLanguages />

          <h1 className="project-heading text-4xl mt-14 mb-14 text-center">
            Frameworks <strong className="purple">I Master</strong>
          </h1>
          <Frameworks />

          <h1 className="project-heading text-4xl mt-14 mb-14 text-center">
            Database Systems <strong className="purple">I Depend On </strong>
          </h1>
          <Databases />

          <h1 className="project-heading text-4xl mt-14 mb-14 text-center">
            Linux Distros <strong className="purple">I Navigate</strong>
          </h1>
          <Linuxdistros />

          <h1 className="project-heading text-4xl mt-14 mb-14 text-center">
            DevOps Skills <strong className="purple">I Excel In</strong>
          </h1>
          <DevOps />

          <h1 className="project-heading text-4xl mt-14 mb-14 text-center">
            Days <strong className="purple">I Code</strong>
          </h1>
          <Github />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default About;
