import React from "react";
import AnimatedCursor from "react-animated-cursor";
import Marquee from "react-fast-marquee";

const Sponsor = () => {
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
      <div>
        <img
          width={800}
          height={600}
          className="rounded-lg mx-auto"
          src="/Asset/1.jpg"
          alt=""
        />
        <h2 className="text-center font-bold my-4 text-white">
          Trusted by 60,000+ freelancers, marketing teams and agencies.
        </h2>
        <Marquee style={{ width: "400px", margin: "0 auto" }}>
          <div className="flex justify-center items-center">
            <div className="mx-6 ">
              <img width={100} height={100} src="/Asset/s1.png" alt="" />
            </div>
            <div className="mx-6 ">
              <img width={100} height={100} src="/Asset/s2.png" alt="" />
            </div>
            <div className="mx-6 ">
              <img width={100} height={100} src="/Asset/s3.png" alt="" />
            </div>
            <div className="mx-6 ">
              <img width={100} height={100} src="/Asset/s4.png" alt="" />
            </div>
          </div>
        </Marquee>
      </div>
    </div>
  );
};

export default Sponsor;
