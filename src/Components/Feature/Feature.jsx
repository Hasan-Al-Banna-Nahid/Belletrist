import React from "react";
import AnimatedCursor from "react-animated-cursor";
import { FaLightbulb } from "react-icons/fa";
import { BiSolidChip } from "react-icons/bi";
import { AiFillThunderbolt } from "react-icons/ai";
import { BsLink45Deg, BsFillEnvelopePaperFill } from "react-icons/bs";
import { TbLetterT } from "react-icons/tb";

const Feature = () => {
  return (
    <div className="my-12">
      <AnimatedCursor
        innerSize={8}
        outerSize={8}
        outerStyle={{
          border: "3px solid var(--cursor-color)",
        }}
        innerStyle={{
          backgroundColor: "var(--cursor-color)",
        }}
        outerAlpha={0.2}
        innerScale={0.7}
        outerScale={5}
        clickables={[
          "a",
          'input[type="text"]',
          'input[type="email"]',
          'input[type="number"]',
          'input[type="submit"]',
          'input[type="image"]',
          "label[for]",
          "select",
          "textarea",
          "button",
          ".link",
        ]}
      />
      <h2 className="text-white text-3xl font-bold text-center my-6">
        Superpower with AI Writer
      </h2>
      <div className="grid md:grid-cols-3 gap-6 mx-auto w-[1200]">
        <div>
          <div className="card w-96 text-white bg-[#2c3e50]  shadow-xl">
            <figure className="px-10 pt-10">
              <FaLightbulb className="text-blue-600 text-4xl" />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title">Brainstorm faster!</h2>

              <div className="card-actions">
                <button className="btn btn-primary">Learn More</button>
              </div>
            </div>
          </div>
        </div>
        {/* Card1 */}
        <div>
          <div className="card w-96 text-white bg-[#2c3e50]  shadow-xl">
            <figure className="px-10 pt-10">
              <BiSolidChip className="text-4xl text-cyan-400" />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title">Tools & Templates!</h2>

              <div className="card-actions">
                <button className="btn btn-primary">Learn More</button>
              </div>
            </div>
          </div>
        </div>
        {/* Card2 */}
        <div>
          <div className="card w-96 text-white bg-[#2c3e50]  shadow-xl">
            <figure className="px-10 pt-10">
              <AiFillThunderbolt className="text-red-700 text-4xl" />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title">Write Content Faster!</h2>

              <div className="card-actions">
                <button className="btn btn-primary">Learn More</button>
              </div>
            </div>
          </div>
        </div>
        {/* Card3 */}
        <div>
          <div className="card w-96 text-white bg-[#2c3e50]  shadow-xl">
            <figure className="px-10 pt-10">
              <BsLink45Deg className="text-4xl text-primary" />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title">Repurpose Content Easily!</h2>

              <div className="card-actions">
                <button className="btn btn-primary">Learn More</button>
              </div>
            </div>
          </div>
        </div>
        {/* Card4 */}
        <div>
          <div className="card w-96 text-white bg-[#2c3e50]  shadow-xl">
            <figure className="px-10 pt-10">
              <TbLetterT className="text-4xl text-info" />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title">Write in Any Language!</h2>

              <div className="card-actions">
                <button className="btn btn-primary">Learn More</button>
              </div>
            </div>
          </div>
        </div>
        {/* Card5 */}
        <div>
          <div className="card w-96 text-white bg-[#2c3e50]  shadow-xl">
            <figure className="px-10 pt-10">
              <BsFillEnvelopePaperFill className="text-4xl text-secondary " />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title">Copy & Publish Anywhere!</h2>

              <div className="card-actions">
                <button className="btn btn-primary">Learn More</button>
              </div>
            </div>
          </div>
        </div>
        {/* Card6 */}
      </div>
    </div>
  );
};

export default Feature;
