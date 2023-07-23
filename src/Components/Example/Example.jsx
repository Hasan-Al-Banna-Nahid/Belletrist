import React, { useState } from "react";
import AnimatedCursor from "react-animated-cursor";
import { BsFillBoxSeamFill, BsMicFill, BsNewspaper } from "react-icons/bs";
import {
  FaArrowRight,
  FaHands,
  FaQuestion,
  FaStickyNote,
  FaToggleOff,
  FaToggleOn,
} from "react-icons/fa";
import { SiGoogleanalytics } from "react-icons/si";
import { MdOutlineTaskAlt } from "react-icons/md";
import { AiFillCheckCircle } from "react-icons/ai";

const Example = () => {
  const [IsYearly, setIsDarkMood] = useState(false);
  const handleToggle = () => {
    setIsDarkMood((isDarkMood) => !isDarkMood);
  };
  return (
    <div className="bg-white my-12 w-[1400px] rounded-lg mx-auto p-8">
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
      <div className="text-center">
        <div className="badge my-6 text-2xl p-6 badge-secondary badge-outline">
          How To?
        </div>
        <h2 className="text-center text-3xl font-bold my-4">
          Few Steps To Write Content
        </h2>
      </div>
      <div className="grid md:grid-cols-1 gap-6">
        {/* card1 */}
        <div className="flex justify-between items-start font-bold p-6 bg-[#F0EEFE] rounded-md">
          <div>
            <h2 className="text-4xl my-6 text-purple-600">
              Select Writing Template
            </h2>
            <p className="text-2xl my-6 ">
              Simply choose a template from available list to write <br />{" "}
              content for blog posts, landing page, website content etc.
            </p>
            <ul>
              <li>
                <MdOutlineTaskAlt />
                Available more than 10 template.
              </li>
              <li>
                <MdOutlineTaskAlt />A clean and minimalist editor.
              </li>
              <li>
                <MdOutlineTaskAlt />
                Article generator wizard.
              </li>
            </ul>
          </div>
          <div>
            <img
              className="border-4 border-purple-900"
              width={600}
              height={600}
              src="/Asset/a-3.jpg"
              alt=""
            />
          </div>
        </div>
        {/* Card1 */}
        {/* Card2 */}
        <div className="flex justify-between items-start font-bold p-6 bg-[#FDF9EB] rounded-md">
          <div>
            <h2 className="text-4xl my-6 text-blue-600">Describe Your Topic</h2>
            <p className="text-2xl my-6 ">
              Provide our AI content writer with few sentences on <br /> what
              you want to write, and it will start writing for you.
            </p>
            <ul>
              <li>
                <MdOutlineTaskAlt />
                Simply provide a few input as topic
              </li>
              <li>
                <MdOutlineTaskAlt />
                Type a topic like "best ways to earn money"
              </li>
              <li>
                <MdOutlineTaskAlt />
                Facebook Ads, Headlines and other 10
              </li>
            </ul>
          </div>
          <div>
            <img
              className="border-4 border-[#FEB399]"
              width={600}
              height={600}
              src="/Asset/a-3.jpg"
              alt=""
            />
          </div>
        </div>
        {/* Card2 */}
        {/* Card3 */}
        <div className="flex justify-between items-start font-bold p-6 bg-[#EAF8FE] rounded-md">
          <div>
            <h2 className="text-4xl my-6 text-blue-600">
              Generate Quality Content
            </h2>
            <p className="text-2xl my-6 ">
              Our powerful AI tools will generate content in few <br /> second,
              then you can export it to wherever you need.
            </p>
            <ul>
              <li>
                <MdOutlineTaskAlt />
                Generate content in under 30 seconds.
              </li>
              <li>
                <MdOutlineTaskAlt />
                All content is unique and original.
              </li>
              <li>
                <MdOutlineTaskAlt />
                Generate up to 200 words each time.
              </li>
            </ul>
          </div>
          <div>
            <img
              className="border-4 border-[#84BBFD]"
              width={600}
              height={600}
              src="/Asset/a-3.jpg"
              alt=""
            />
          </div>
        </div>
        {/* Card3 */}
        {/* Card4 */}
        <div>
          <div className="text-center">
            <div className="badge badge-primary badge-outline p-4">
              Use Cases
            </div>
            <h2 className="text-3xl font-bold">Generate in seconds using AI</h2>
            <p className="font-semibold">
              Let our AI assist with most time consuming to write blog articles,{" "}
              <br />
              product descriptions and more.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6 w-[800] mx-auto">
            <div>
              <div className="card w-96 bg-base-100 shadow-xl">
                <figure className="px-10 pt-10">
                  <BsNewspaper className="text-4xl text-blue-700" />
                </figure>
                <div className="card-body items-center text-center">
                  <h2 className="card-title">Blog Post & Articles!</h2>
                  <p>
                    Generate optimized blog post and articles <br /> to get
                    organic traffic - making you visible on the world.
                  </p>
                </div>
              </div>
            </div>

            <div>
              <div className="card w-96 bg-base-100 shadow-xl">
                <figure className="px-10 pt-10">
                  <BsFillBoxSeamFill className="text-4xl text-red-700" />
                </figure>
                <div className="card-body items-center text-center">
                  <h2 className="card-title">Product Description!</h2>
                  <p>
                    Create a perfect description for your products to <br />{" "}
                    engage your customers to click and buy.
                  </p>
                </div>
              </div>
            </div>
            <div>
              <div className="card w-96 bg-base-100 shadow-xl">
                <figure className="px-10 pt-10">
                  <BsMicFill className="text-4xl text-purple-300" />
                </figure>
                <div className="card-body items-center text-center">
                  <h2 className="card-title">Social Media Ad!</h2>
                  <p>
                    Create ads copies for your social media - make an <br />{" "}
                    impact with your online marketing campaigns.
                  </p>
                </div>
              </div>
            </div>
            <div>
              <div className="card w-96 bg-base-100 shadow-xl">
                <figure className="px-10 pt-10">
                  <FaHands className="text-4xl text-cyan-400" />
                </figure>
                <div className="card-body items-center text-center">
                  <h2 className="card-title">Product Benefits!</h2>
                  <p>
                    Create a bullet point list of your product benefits that{" "}
                    <br /> appeal to your customers to purchase.
                  </p>
                </div>
              </div>
            </div>
            <div>
              <div className="card w-96 bg-base-100 shadow-xl">
                <figure className="px-10 pt-10">
                  <SiGoogleanalytics className="text-4xl text-purple-500" />
                </figure>
                <div className="card-body items-center text-center">
                  <h2 className="card-title">Suggest Improvements!</h2>
                  <p>
                    Need to improve your existing content? <br /> Our AI will
                    rewrite and improve the content for you.
                  </p>
                </div>
              </div>
            </div>
            <div>
              <div className="card w-96 bg-base-100 shadow-xl">
                <figure className="px-10 pt-10">
                  <FaStickyNote className="text-4xl text-blue-950" />
                </figure>
                <div className="card-body items-center text-center">
                  <h2 className="card-title">Landing Page Content!</h2>
                  <p>
                    Write very attractive headlines, slogans <br /> or paragraph
                    for your landing page of your website.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Card 4 */}
        {/* Card 5 */}
        <div>
          <div className="text-center">
            <div className="badge badge-primary p-4 badge-outline">Pricing</div>
            <h2 className="text-3xl font-bold my-6">
              Plans that start free and <br />
              fits with your needs
            </h2>
          </div>
          <div
            id="price"
            onClick={handleToggle}
            className="shadow-2xl mx-auto w-48"
          >
            {!IsYearly ? (
              <button className="font-bold w-full">
                {" "}
                Monthly <FaToggleOff className="text-4xl" />
                <div className="badge badge-secondary badge-outline">
                  save 12%
                </div>
              </button>
            ) : (
              <button className="font-bold w-full">
                {" "}
                Yearly <FaToggleOn className="text-4xl" />
                <div className="badge badge-secondary badge-outline">
                  save 20%
                </div>
              </button>
            )}
          </div>
          {!IsYearly ? (
            <div className="grid md:grid-cols-3 gap-6 my-8">
              <div>
                <div className="card w-96 bg-base-300 shadow-xl border-3 border-sky-600">
                  <h2 className="text-center font-bold my-4">Regular Plan</h2>
                  <div className="card-body">
                    <h2 className="card-title">
                      $9 /Month!
                      <div className="badge badge-secondary">save 5%</div>
                    </h2>
                    <p className="font-bold">
                      Access to AI writer features to help you get a taste of AI
                      writing.
                    </p>
                    <div className="card-actions justify-end">
                      <button className="badge badge-outline p-6">
                        Learn More
                      </button>
                      <button className="badge badge-outline p-6">
                        Buy Now
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div className="card w-96 bg-base-300 shadow-xl border-3 border-sky-600">
                  <h2 className="text-center font-bold my-4 w-72 p-4 mx-auto badge badge-primary">
                    Popular
                  </h2>
                  <div className="card-body">
                    <h2 className="card-title">
                      $19 /Month!
                      <div className="badge badge-secondary">save 8%</div>
                    </h2>
                    <p className="font-bold">
                      For content marketers, bloggers, freelancers & startups
                    </p>
                    <div className="card-actions justify-end">
                      <button className="badge badge-outline p-6">
                        Learn More
                      </button>
                      <button className="badge badge-outline p-6">
                        Buy Now
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div className="card w-96 bg-base-300 shadow-xl border-3 border-sky-600">
                  <h2 className="text-center font-bold my-4 ">Golden Plan</h2>
                  <div className="card-body">
                    <h2 className="card-title">
                      $69 /Month!
                      <div className="badge badge-secondary">save 12%</div>
                    </h2>
                    <p className="font-bold">
                      Basic features for up to 40 users.
                    </p>
                    <div className="card-actions justify-end">
                      <button className="badge badge-outline p-6">
                        Learn More
                      </button>
                      <button className="badge badge-outline p-6">
                        Buy Now
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className="grid md:grid-cols-3 gap-6 my-8">
              <div>
                <div className="card w-96 bg-base-300 shadow-xl border-3 border-sky-600">
                  <h2 className="text-center font-bold my-4">Golden Plan</h2>
                  <div className="card-body">
                    <h2 className="card-title">
                      $1099 /Year!
                      <div className="badge badge-secondary">save 15%</div>
                    </h2>
                    <p className="font-bold">
                      Basic features for up to 40 users.
                    </p>
                    <div className="card-actions justify-end">
                      <button className="badge badge-outline p-6">
                        Learn More
                      </button>
                      <button className="badge badge-outline p-6">
                        Buy Now
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div className="card w-96 bg-base-300 shadow-xl border-3 border-sky-600">
                  <h2 className="text-center font-bold my-4 w-72 p-4 mx-auto badge badge-secondary">
                    Popular
                  </h2>
                  <div className="card-body">
                    <h2 className="card-title">
                      $199 /Year!
                      <div className="badge badge-secondary">save 8%</div>
                    </h2>
                    <p className="font-bold">
                      Basic features for up to 40 users.
                    </p>
                    <div className="card-actions justify-end">
                      <button className="badge badge-outline p-6">
                        Learn More
                      </button>
                      <button className="badge badge-outline p-6">
                        Buy Now
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div className="card w-96 bg-base-300 shadow-xl border-3 border-sky-600">
                  <h2 className="text-center font-bold my-4 ">Regular Plan</h2>
                  <div className="card-body">
                    <h2 className="card-title">
                      $29 /Year!
                      <div className="badge badge-secondary">save 12%</div>
                    </h2>
                    <p className="font-bold">
                      Basic features for up to 40 users.
                    </p>
                    <div className="card-actions justify-end">
                      <button className="badge badge-outline p-6">
                        Learn More
                      </button>
                      <button className="badge badge-outline p-6">
                        Buy Now
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
        {/* Card 5 */}
        {/* Card 6 */}
        <div className="my-6">
          <div className="text-center">
            <h2 className="text-2xl font-bold">Frequently Asked Questions</h2>
            <p className=" font-bold">
              If you have any questions not answered in the FAQ, please do not
              hesitate to contac us.
            </p>
          </div>
          <div>
            <div className="card w-[400] bg-base-200 mx-auto shadow-2xl">
              <figure>
                <FaQuestion className="text-4xl text-blue-700" />
              </figure>
              <div className="card-body">
                <div className="collapse collapse-plus bg-base-200">
                  <input type="radio" name="my-accordion-3" checked="checked" />
                  <div className="collapse-title text-xl font-bold text-purple-700">
                    How do I make a yearly payment?
                  </div>
                  <div className="collapse-content">
                    <p className="font-bold">
                      Serenity Is Multi-Faceted Blockchain Based Ecosystem,
                      Energy <br />
                      Retailer For The People, Focusing On The Promotion Of
                      Sustainable <br />
                      Living, Renewable Energy Production And Smart Energy Grid
                      Utility Services.
                    </p>
                  </div>
                </div>
                <div className="collapse collapse-plus bg-base-200">
                  <input type="radio" name="my-accordion-3" />
                  <div className="collapse-title text-xl font-bold text-purple-700">
                    How this technology works?
                  </div>
                  <div className="collapse-content">
                    <p className="font-bold">
                      Serenity Is Multi-Faceted Blockchain Based Ecosystem,
                      Energy <br />
                      Retailer For The People, Focusing On The Promotion Of
                      Sustainable <br />
                      Living, Renewable Energy Production And Smart Energy Grid
                      Utility Services.
                    </p>
                  </div>
                </div>
                <div className="collapse collapse-plus bg-base-200">
                  <input type="radio" name="my-accordion-3" />
                  <div className="collapse-title text-xl font-bold text-purple-700">
                    What is the community benefit?{" "}
                  </div>
                  <div className="collapse-content">
                    <p className="font-bold">
                      Serenity Is Multi-Faceted Blockchain Based Ecosystem,
                      Energy <br />
                      Retailer For The People, Focusing On The Promotion Of
                      Sustainable <br />
                      Living, Renewable Energy Production And Smart Energy Grid
                      Utility Services.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Card 6 */}
        {/* Card 7 */}
        <div className="flex justify-between items-center my-8 bg-[#2C2748] p-8 rounded-lg">
          <div>
            <h2 className="text-blue-500 my-4 text-[18px]">
              BOOST YOUR WRITING PRODUCTIVITY
            </h2>
            <h2 className="text-white my-4 text-[18px]">
              End writer’s block today
            </h2>
            <p className="text-purple-700 text-[18px] my-4">
              It’s like having access to a team of copywriting experts <br />{" "}
              writing powerful copy for you in 1-click.
            </p>
            <div className="flex justify-between items-center">
              <div>
                <p className="text-white">
                  <AiFillCheckCircle className="text-2xl text-blue-700" />
                  No Credit Card Required
                </p>
              </div>
              <div>
                <p className="text-white">
                  <AiFillCheckCircle className="text-2xl text-blue-700" />
                  Cancel Anytime
                </p>
              </div>
            </div>
            <div className="mx-auto w-[200]">
              <button className="btn btn-primary my-4">
                Start Writing For Free <FaArrowRight className="text-2xl" />
              </button>
            </div>
          </div>
          <div>
            <img
              width={600}
              height={600}
              className="rounded-lg"
              src="/Asset/c-2.jpg"
              alt=""
            />
          </div>
        </div>
        {/* Card 7 */}
      </div>
    </div>
  );
};

export default Example;
