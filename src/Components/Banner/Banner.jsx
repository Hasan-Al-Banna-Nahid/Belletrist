import React from "react";
import AnimatedCursor from "react-animated-cursor";
import ParallaxComponent from "react-parallax-component";
import { Parallax } from "react-scroll-parallax";

const Banner = () => {
  return (
    <div>
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
      <Parallax speed={-10}>
        <div>
          <img className="my-4" width={2000} src="/Asset/Write.webp" alt="" />
          <p className="md:absolute text-6xl text-white font-bold top-96 left-32">
            Unlocking the secrets of <br />
            successful screenwriting
          </p>
        </div>
      </Parallax>
    </div>
  );
};

export default Banner;
