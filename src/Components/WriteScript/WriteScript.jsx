import React, { useEffect, useState } from "react";
import AnimatedCursor from "react-animated-cursor";
import Header from "../Header/Header";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { FaPersonBooth, FaToggleOff, FaToggleOn } from "react-icons/fa";
import { AiOutlinePlus, AiFillVideoCamera } from "react-icons/ai";
import "react-notion/src/styles.css";
import "prismjs/themes/prism-tomorrow.css"; // only needed for code highlighting
import { NotionRenderer } from "react-notion";
import Swal from "sweetalert2";

const WriteScript = () => {
  const [screenHeading, setScreenHeading] = useState(false);
  const [action, setAction] = useState(false);
  const [character, setCharacter] = useState(false);
  const [parenthetical, setParenthetical] = useState(false);
  const [dialog, setDialog] = useState(false);
  const [transition, setTransition] = useState(false);
  const handleScriptToDB = (e) => {
    e.preventDefault();
    const form = e.target;
    const title = form.title.value;
    const heading = form.heading.value;
    const action = form.action.value;
    const character = form.character.value;
    const dialog = form.dialog.value;
    const transition = form.transition.value;
    const parenthetical = form.parenthetical.value;
    const script = form.script.value;
    const data = {
      title,
      heading,
      action,
      character,
      dialog,
      transition,
      parenthetical,
      script,
    };
    console.log(data);
    fetch("http://localhost:5000/script", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then(() => {
        Swal.fire("Good job!", "Your Script Is Saved!", "success");
      });
  };

  const [scripts, setScripts] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/script")
      .then((res) => res.json())
      .then((data) => setScripts(data));
  }, []);

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
    }, 20500);
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
    const OPENAI_API_KEY =
      "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";
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
        <div>
          <h1 className="text-white text-center my-6 font-bold text-3xl">
            Write Script
          </h1>
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
                            <p onClick={handleScreenHeading}>Screen Heading</p>
                            <p onClick={handleCharacter}>Character</p>
                            <p onClick={handleDialog}>Dialog</p>
                            <p onClick={handleAction}>Action</p>
                            <p onClick={handleTransition}>Transition</p>
                            <p onClick={handleParenthetical}>Parenthetical</p>
                            {/* Add more options as needed */}
                          </div>
                        )}
                      </div>
                    </div>
                    <div className="w-96 mx-auto">
                      <input
                        type="text"
                        defaultValue={"Title"}
                        className={"visible p-4 font-bold"}
                        name="title"
                      />
                    </div>
                    <div className="w-96 mx-auto">
                      <input
                        type="text"
                        defaultValue={"Screen Heading"}
                        name="heading"
                        className={
                          screenHeading
                            ? "visible p-4 font-bold"
                            : "p-4 font-bold hidden"
                        }
                      />
                    </div>
                    <br />
                    <div className="w-96 mx-auto">
                      <input
                        type="text"
                        defaultValue={"Action"}
                        name="action"
                        className={
                          action
                            ? "visible p-4 font-bold"
                            : "p-4 font-bold hidden"
                        }
                      />
                    </div>
                    <br />
                    <div className="w-96 mx-auto">
                      <input
                        type="text"
                        defaultValue={"Character"}
                        name="character"
                        className={
                          character
                            ? "visible p-4 font-bold"
                            : "p-4 font-bold hidden"
                        }
                      />
                    </div>
                    <br />
                    <div className="w-96 mx-auto">
                      <input
                        type="text"
                        defaultValue={"Parenthetical"}
                        name="parenthetical"
                        className={
                          parenthetical
                            ? "visible p-4 font-bold"
                            : "p-4 font-bold hidden"
                        }
                      />
                    </div>
                    <br />
                    <div className="w-96 mx-auto">
                      <input
                        type="text"
                        defaultValue={"Dialog"}
                        name="dialog"
                        className={
                          dialog
                            ? "visible p-4 font-bold"
                            : "p-4 font-bold hidden"
                        }
                      />
                    </div>
                    <br />
                    <div className="w-96 mx-auto">
                      <input
                        type="text"
                        defaultValue={"Transition"}
                        name="transition"
                        className={
                          transition
                            ? "visible p-4 font-bold"
                            : "p-4 font-bold hidden"
                        }
                      />
                    </div>
                    <br />
                    <textarea
                      className="w-[800px]  border-red-300 border-3 mx-auto p-8 font-bold text-[20px]"
                      name="script"
                      id="script"
                      cols="30"
                      rows="10"
                      onChange={handleInputChange}
                      defaultValue={"Act Script"}
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
                <ul className="menu p-4 w-80 h-full bg-base-200 text-base-content rounded-lg">
                  {/* Sidebar content here */}
                  <li>
                    <h2 className="text-center font-bold underline text-[18px]">
                      Title
                    </h2>
                    {scripts.map((title) => {
                      return <a key={title._id}>{title.title}</a>;
                    })}
                  </li>
                  <li>
                    <a>Sidebar Item 2</a>
                  </li>
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
