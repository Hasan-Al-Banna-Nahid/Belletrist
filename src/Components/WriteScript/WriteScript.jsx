import React, { useEffect, useState } from "react";
import AnimatedCursor from "react-animated-cursor";
import Header from "../Header/Header";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { FaToggleOff, FaToggleOn } from "react-icons/fa";
import { AiOutlinePlus, AiFillVideoCamera } from "react-icons/ai";
import Swal from "sweetalert2";
import { useLoaderData } from "react-router-dom";

const WriteScript = () => {
  const [screenHeading, setScreenHeading] = useState(false);
  const [action, setAction] = useState(false);
  const [character, setCharacter] = useState(false);
  const [parenthetical, setParenthetical] = useState(false);
  const [dialog, setDialog] = useState(false);
  const [transition, setTransition] = useState(false);
  const scripts = useLoaderData();

  const handleScriptToDB = (e) => {
    e.preventDefault();
    const form = e.target;
    const title = form.title.value;
    const genre = form.genre.value;
    const synopsis = form.synopsis.value;
    const heading = form.heading.value;
    const action = form.action.value;
    const character = form.character.value;
    const dialog = form.dialog.value;
    const transition = form.transition.value;
    const parenthetical = form.parenthetical.value;
    const script = form.script.value;
    const data = {
      title,
      genre,
      synopsis,
      heading,
      action,
      character,
      dialog,
      transition,
      parenthetical,
      script,
    };
    // console.log(data);

    if (scripts) {
      fetch(
        `https://belletrist-iamnahid591998-gmailcom.vercel.app/${scripts._id}`,
        {
          method: "PATCH",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(data),
        }
      )
        .then((res) => res.json())
        .then(() => {
          Swal.fire("Good job!", "Your Script Is Updated!", "success");
        });
    } else {
      fetch(`https://belletrist-iamnahid591998-gmailcom.vercel.app/`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      })
        .then((res) => res.json())
        .then(() => {
          Swal.fire("Good job!", "Your Script Is Saved!", "success");
        });
    }
  };

  // const [scripts, setScripts] = useState([]);

  // console.log(scripts);
  // useEffect(() => {
  //   fetch("https://belletrist-iamnahid591998-gmailcom.vercel.app")
  //     .then((res) => res.json())
  //     .then((data) => setScripts(data));
  // }, []);

  const handleScreenHeading = () => {
    setScreenHeading((click) => !click);
  };
  const handleCharacter = () => {
    setCharacter((click) => !click);
  };
  const handleAction = () => {
    setAction((click) => !click);
  };
  const handleParenthetical = () => {
    setParenthetical((click) => !click);
  };
  const handleDialog = () => {
    setDialog((click) => !click);
  };
  const handleTransition = () => {
    setTransition((click) => !click);
  };

  const [isClicked, setIsClicked] = useState(false);
  const handleLoadingClick = () => {
    setIsClicked((click) => !click);
    setIsClicked(true);
    setTimeout(() => {
      setIsClicked(false);
    }, 60500);
  };
  const [aiMood, setAiMood] = useState(false);

  const handleAIMood = () => {
    setAiMood((ai) => !ai);
  };
  const [showOptions, setShowOptions] = useState(false);

  const toggleOptions = () => {
    setShowOptions(!showOptions);
  };
  // Define the function to call the OpenAI API
  async function getAIResponse() {
    const OPENAI_API_KEY = import.meta.env.VITE_OpenAi_Secret;
    const apiUrl = "https://api.openai.com/v1/chat/completions";

    const requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${OPENAI_API_KEY}`,
      },
      body: JSON.stringify({
        model: "gpt-3.5-turbo",
        messages: [
          {
            role: "system",
            content: "You are a helpful assistant.",
          },
          {
            role: "user",
            content: userQuestion,
          },
        ],
      }),
    };

    const response = await fetch(apiUrl, requestOptions);
    const data = await response.json();
    console.log("API Response:", data);
    const answer = data.choices[0].message.content;
    console.log("Extracted Answer:", answer);
    return answer;
  }
  const [answer, setAnswer] = useState("");
  const [userQuestion, setUserQuestion] = useState("");

  const handleInputChange = (event) => {
    setUserQuestion(event.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;

    getAIResponse(userQuestion)
      .then((response) => {
        setAnswer(response);
        form.reset();
      })
      .catch((error) => {
        console.error("Error fetching AI response:", error);
      });
  };

  return (
    <div>
      <Header />
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

      <>
        <div className="flex justify-between p-4 items-center flex-row-reverse">
          <div className="mx-auto">
            <h1 className="text-white text-center my-6 font-bold text-3xl">
              Write Script
            </h1>
          </div>
          <div className="">
            <input
              type="text"
              defaultValue={scripts?.title || "Title"}
              readOnly
              className="input input-bordered input-accent w-full max-w-xs"
            />
          </div>
        </div>
        <div className="w-[1200] mx-auto rounded-lg bg-[#130f40] p-10 ">
          <div className="flex justify-between items-center navbar bg-base-300 rounded-lg text-slate-900">
            <div>
              <button className="btn btn-warning">Template</button>
            </div>
            <div>
              <span className="text-3xl">AI Mood </span>
              {aiMood ? (
                <FaToggleOn onClick={handleAIMood} className="text-4xl  mx-8" />
              ) : (
                <FaToggleOff
                  onClick={handleAIMood}
                  className="text-4xl  mx-8"
                />
              )}
              {aiMood && (
                <form onSubmit={handleSubmit}>
                  <div className="flex items-center justify-center gap-6">
                    <div>
                      <textarea
                        type="text"
                        value={userQuestion}
                        onChange={handleInputChange}
                        placeholder="Enter your question..."
                        className="input input-bordered w-[600px] "
                      />
                    </div>
                    <div>
                      {" "}
                      <button
                        onClick={handleLoadingClick}
                        className="btn btn-outline btn-primary"
                      >
                        Answer
                      </button>
                      {isClicked ? <h2 className="font-bold">Wait...</h2> : ""}
                    </div>
                  </div>
                </form>
              )}
            </div>
            <div className="flex justify-center items-center gap-6">
              <div>
                <button className="btn btn-outline btn-success">
                  Download
                </button>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1">
            {aiMood && (
              <div className="w-[800]">
                <div className="mx-48 my-6 w-[1200px] bg-white text-slate-950 rounded-lg p-6">
                  <p>{answer}</p>
                </div>
              </div>
            )}
            {/* <div className=" bg-white w-[1200px] text-slate-900 rounded-lg my-6 p-6 mx-auto">
              <ReactQuill theme="snow" value={value} onChange={setValue} />
            </div> */}
          </div>
          <div className="my-12">
            <div className="drawer lg:drawer-open ">
              <input
                id="my-drawer-2"
                type="checkbox"
                className="drawer-toggle"
              />
              <div className="drawer-content flex flex-col items-center justify-center bg-base-300 rounded-lg">
                {/* Page content here */}
                <h2>Write Your Script</h2>
                <form onSubmit={handleScriptToDB}>
                  <pre className="bg-white w-[1000px] rounded-lg p-8 mx-auto">
                    <div>
                      <div className="flex justify-center items-center gap-6">
                        <div>
                          <AiOutlinePlus
                            onClick={toggleOptions}
                            className="text-2xl text-blue-700"
                          />
                        </div>
                        <div>
                          <AiFillVideoCamera className="text-2xl text-red-700" />
                        </div>
                      </div>
                      <div className="w-96 mx-auto my-6">
                        {showOptions && (
                          <div>
                            <p
                              className="text-[20px] font-bold p-4"
                              onClick={handleScreenHeading}
                            >
                              Screen Heading
                            </p>
                            <p
                              className="text-[20px] font-bold p-4"
                              onClick={handleCharacter}
                            >
                              Character
                            </p>
                            <p
                              className="text-[20px] font-bold p-4"
                              onClick={handleDialog}
                            >
                              Dialog
                            </p>
                            <p
                              className="text-[20px] font-bold p-4"
                              onClick={handleAction}
                            >
                              Action
                            </p>
                            <p
                              className="text-[20px] font-bold p-4"
                              onClick={handleTransition}
                            >
                              Transition
                            </p>
                            <p
                              className="text-[20px] font-bold p-4"
                              onClick={handleParenthetical}
                            >
                              Parenthetical
                            </p>
                            <hr className="border-4" />
                            {/* Add more options as needed */}
                          </div>
                        )}
                      </div>
                    </div>

                    <div className="w-96 mx-auto">
                      <div className="flex gap-4 justify-center items-center">
                        <div>
                          <input
                            type="text"
                            defaultValue={
                              scripts?.genre || scripts?.data?.genre || "Genre"
                            }
                            className={
                              "visible p-4 font-bold text-[18px] input input-bordered input-accent w-full max-w-xs  "
                            }
                            name="genre"
                          />
                        </div>
                        <div>
                          <input
                            type="text"
                            defaultValue={
                              scripts?.synopsis ||
                              scripts?.data?.synopsis ||
                              "Synopsis"
                            }
                            className={
                              "visible p-4 font-bold text-[18px] input input-bordered input-accent w-full max-w-xs  "
                            }
                            name="synopsis"
                          />
                        </div>
                      </div>
                      <div className="my-6">
                        <input
                          type="text"
                          defaultValue={
                            scripts?.title || scripts?.data?.title || "Title"
                          }
                          name="title"
                          className="input input-bordered input-accent w-full max-w-xs"
                        />
                      </div>
                      <textarea
                        type="text"
                        defaultValue={
                          scripts?.screenHeading ||
                          scripts?.data?.screenHeading ||
                          "Screen Heading"
                        }
                        name="heading"
                        className={
                          screenHeading
                            ? "visible p-4 font-bold text-[18px] w-[600px] input input-bordered input-error "
                            : "p-4 font-bold hidden text-[18px] w-[600px] input input-bordered input-error "
                        }
                      />
                    </div>
                    <br />
                    <div className="w-96 mx-auto">
                      <textarea
                        type="text"
                        defaultValue={
                          scripts?.action || scripts?.data?.action || "Action"
                        }
                        name="action"
                        className={
                          action
                            ? "visible p-4 font-bold text-[18px] w-[600px] input input-bordered input-error "
                            : "p-4 font-bold hidden text-[18px] w-[600px] input input-bordered input-error "
                        }
                      />
                    </div>
                    <br />
                    <div className="w-96 mx-auto">
                      <textarea
                        type="text"
                        defaultValue={
                          scripts?.character ||
                          scripts?.data?.character ||
                          "Character"
                        }
                        name="character"
                        className={
                          character
                            ? "visible p-4 font-bold text-[18px] w-[600px] input input-bordered input-error "
                            : "p-4 font-bold hidden text-[18px] w-[600px] input input-bordered input-error "
                        }
                      />
                    </div>
                    <br />
                    <div className="w-96 mx-auto">
                      <textarea
                        type="text"
                        defaultValue={
                          scripts?.parenthetical ||
                          scripts?.data?.parenthetical ||
                          "Parenthetical"
                        }
                        name="parenthetical"
                        className={
                          parenthetical
                            ? "visible p-4 font-bold text-[18px] w-[600px] input input-bordered input-error "
                            : "p-4 font-bold hidden text-[18px] w-[600px] input input-bordered input-error "
                        }
                      />
                    </div>
                    <br />
                    <div className="w-96 mx-auto">
                      <textarea
                        type="text"
                        defaultValue={
                          scripts?.dialog || scripts?.data?.dialog || "Dialog"
                        }
                        name="dialog"
                        className={
                          dialog
                            ? "visible p-4 font-bold text-[18px] w-[600px] input input-bordered input-error "
                            : "p-4 font-bold hidden text-[18px] w-[600px] input input-bordered input-error "
                        }
                      />
                    </div>
                    <br />
                    <div className="w-96 mx-auto">
                      <textarea
                        type="text"
                        defaultValue={
                          scripts?.transition ||
                          scripts?.data?.transition ||
                          "Transition"
                        }
                        name="transition"
                        className={
                          transition
                            ? "visible p-4 font-bold text-[18px] w-[600px] input input-bordered input-error "
                            : "p-4 font-bold hidden text-[18px] w-[600px] input input-bordered input-error "
                        }
                      />
                    </div>
                    <br />

                    <textarea
                      className="w-[800px]  border-red-300 border-3 mx-auto p-8 font-bold text-[20px] input-warning "
                      name="script"
                      id="script"
                      cols="30"
                      rows="10"
                      onChange={handleInputChange}
                      defaultValue={
                        scripts?.script || scripts?.data?.script || "Act"
                      }
                    ></textarea>
                  </pre>
                  <div className="w-full mx-auto  my-6">
                    <button
                      type="submit"
                      className="btn btn-outline btn-success"
                    >
                      Save
                    </button>
                  </div>
                </form>
                <label
                  htmlFor="my-drawer-2"
                  className="btn btn-primary drawer-button lg:hidden"
                >
                  Open drawer
                </label>
              </div>
              <div className="drawer-side">
                <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                <ul className="menu p-4 w-96 h-full bg-base-200 text-base-content rounded-lg">
                  {/* Sidebar content here */}
                  <li className="text-[18px]">
                    <h2 className="text-center font-bold underline ">
                      Create Scene
                    </h2>
                    <a href="">{scripts?.data?.script || scripts?.script}</a>
                  </li>
                  <li></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </>
    </div>
  );
};

export default WriteScript;
