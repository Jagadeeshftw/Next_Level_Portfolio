import React from "react";
import p5js from "../../Assets/svg/p5js.svg";
import { CardBody, CardContainer, CardItem } from "../../components/ui/3d-card";
import { AnimatedTooltip } from "../../components/ui/animated-tooltip";
import Image from "next/image";
import Link from "next/link";
import projects from "@/data/Projects";
import Footer from "@/components/Footer";
function Projects() {
  return (
    <>
      <div className="about-section py-12  relative z-48">
        <div className="container mx-auto sm:px-14">
          <h1 className="project-heading text-4xl mt-14 mb-6 text-center">
            What <strong className="purple"> I&apos;ve Been Up To </strong>
          </h1>
          <p className="text-white text-center">
            Here are some of the innovative projects I’ve recently brought to
            life.
          </p>
          <div className=" grid md:grid-cols-2 grid-cols-1">
            {projects.map((proj) => (
              <CardContainer className="inter-var" key={proj.Id}>
                <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-transparent tech-icons sm:w-5/6 h-full rounded-xl p-6 border  ">
                  <CardItem
                    translateZ="50"
                    className="text-xl font-bold text-neutral-600 dark:text-white"
                  >
                    {proj.Title}
                  </CardItem>
                  <CardItem
                    as="p"
                    translateZ="60"
                    className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
                  >
                    {proj.Description}
                  </CardItem>

                  <CardItem
                    as="div"
                    translateZ="60"
                    className=" flex flex-row items-center justify-center mt-4 w-full "
                  >
                    <AnimatedTooltip items={proj.Icon} />
                  </CardItem>

                  <CardItem translateZ="100" className="w-full mt-4">
                    <Image
                      src={proj.Image}
                      height="1000"
                      width="1000"
                      className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                      alt="thumbnail"
                    />
                  </CardItem>
                  <div className="flex justify-between items-center mt-4">
                    <CardItem
                      translateZ={20}
                      as={Link}
                      href={proj.DemoLink}
                      target="__blank"
                      className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
                    >
                      Try now →
                    </CardItem>
                    <CardItem
                      translateZ={20}
                      as={Link}
                      href={proj.ProjectLink}
                      target="__blank"
                      className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
                    >
                      Code
                    </CardItem>
                  </div>
                </CardBody>
              </CardContainer>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Projects;
