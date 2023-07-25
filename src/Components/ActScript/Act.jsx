import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Header from "../Header/Header";

const Act = () => {
  const [data, setData] = useState([]);
  const id = data.map((data) => data._id);

  useEffect(() => {
    fetch(`https://belletrist-neon.vercel.app/script`)
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  return (
    <div>
      <Header />
      <div className="drawer lg:drawer-open">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col items-center justify-center">
          {/* Page content here */}
          <form>
            <h2 className="text-4xl font-bold text-center text-white">
              New Script
            </h2>
            <div className="w-96 mx-auto my-6"></div>
            <div className="w-96 mx-auto">
              <Link to={`/writeScript`}>
                <button
                  type="submit"
                  className="w-full mx-auto my-6 btn-outline btn-primary"
                >
                  Create
                </button>
              </Link>
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
          <ul className="menu p-4 w-[400px] h-full bg-base-300 text-base-content">
            {/* Sidebar content here */}
            <li>
              <h2 className="text-2xl font-bold underline shadow-sm">
                Previous Script
              </h2>
            </li>
            <li>
              {data.map((data, index) => {
                return (
                  <Link
                    to={`/writeScript/${data._id}`}
                    className="text-[20px] font-bold"
                    key={data._id}
                  >
                    {index + 1}.{data?.data?.title || data?.title}{" "}
                    <button className="btn btn-outline btn-warning w-24">
                      Update
                    </button>
                  </Link>
                );
              })}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Act;
