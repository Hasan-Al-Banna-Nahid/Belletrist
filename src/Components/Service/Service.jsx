import React from "react";
import AnimatedCursor from "react-animated-cursor";
import { TypeAnimation } from "react-type-animation";

const Service = () => {
  return (
    <div className="my-24">
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
      <div>
        <h2 className=" text-3xl font-bold text-center my-12">
          <span className="my-8 text-center font-bold text-4xl text-white">
            {" "}
            Script Writer For Creating
          </span>
          <br />
          <TypeAnimation
            sequence={[
              "Web Agency",
              1000,
              "Social marketing",
              1000,
              "Movies",
              1000,
              "Business",
              1000,
              "Student",
              1000,
            ]}
            wrapper="span"
            speed={50}
            style={{
              fontSize: "2em",
              display: "inline-block",
              color: "#9b59b6",
              marginTop: "0.7rem",
            }}
            repeat={Infinity}
          />
        </h2>
        <div className="w-96 mx-auto my-3">
          <button className="btn btn-primary mx-12 ">
            Start Writing For Free
          </button>
        </div>
      </div>
    </div>
  );
};

export default Service;
