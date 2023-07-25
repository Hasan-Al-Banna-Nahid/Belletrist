import React, { useEffect, useState } from "react";
import Header from "../Header/Header";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const DashBoard = () => {
  const [myScript, setMyScript] = useState([]);
  console.log(myScript);
  useEffect(() => {
    fetch("https://belletrist-neon.vercel.app/script")
      .then((res) => res.json())
      .then((data) => setMyScript(data));
  }, []);
  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://belletrist-neon.vercel.app/script/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            Swal.fire("Deleted!", "Your file has been deleted.", "success");
            const remaining = myScript.filter((s) => s._id !== id);
            setMyScript(remaining);
          });
      }
    });
  };

  return (
    <div>
      <Header />
      <h2 className="text-3xl text-center font-bold text-white my-6">
        Your Latest Script
      </h2>
      <div className="tabs tabs-boxed mx-auto my-12 p-6 w-96">
        <Link className="tab" to={"/act"}>
          Create Script
        </Link>
        <Link className="tab tab-active">My Script</Link>
      </div>
      <div>
        {myScript.map((script) => {
          return (
            <div
              key={script._id}
              className="w-[800px] mx-auto p-12  flex justify-between items-center bg-base-300 rounded-lg"
            >
              <div>
                <h2 className="text-2xl font-bold">
                  Title : {script?.title || script?.data?.title}
                </h2>
                <h2 className="text-2xl font-bold">
                  Genre : {script?.genre || script?.data?.genre}
                </h2>
                <h2 className="text-2xl font-bold">
                  Synopsis :{script?.synopsis || script?.data?.synopsis}
                </h2>
              </div>
              <div className="inline">
                <button className="btn btn-primary my-2">Edit</button> <br />
                <button className="btn btn-secondary my-2">
                  Screen Breakdown
                </button>{" "}
                <br />
                <button
                  className="btn btn-error my-2"
                  onClick={() => handleDelete(script?._id || script?.data?._id)}
                >
                  Delete
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default DashBoard;
