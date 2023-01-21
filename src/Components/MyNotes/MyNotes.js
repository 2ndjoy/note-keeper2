import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../UserContext/AuthProvider/AuthProvider";

const MyNotes = () => {
  const [datass, setData] = useState([]);

  const { user, loading, setLoading } = useContext(AuthContext);
  const [page, setPage] = useState(0);
  const [size, setSize] = useState(3);
  // const perPage = 3;

  useEffect(() => {
    fetch(
      `https://note-niye-naw-server-2ndjoy.vercel.app/mynotes?userEmail=${user?.email}&page=${page}&size=${size}`
    )
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        setLoading(false);
      });
  }, [loading, user, page, size, setLoading]);

  const { mynotes, count } = datass;
  console.log(count);
  const pages = Math.ceil(count / (size * 2));
  console.log(pages);
  return (
    <div>
      {!user ? (
        <p>
          Please <Link to="/login">Log in</Link>
        </p>
      ) : (
        <div>
          <h1 className="text-center text-xl font-bold">My Notes</h1>
          <div className="lg:grid lg:justify-center lg:grid-cols-3 lg:gap-3 grid justify-center ">
            {loading ? (
              <p>Loading..</p>
            ) : mynotes?.length === 0 ? (
              <p>No data available</p>
            ) : (
              mynotes?.map((data) => (
                <div
                  key={data?._id}
                  className="justify-center border border-2 border-red-800 p-3 rounded my-3"
                >
                  <h1 className="text-xl font-bold">{data?.title}</h1>
                  <p>{data?.note}</p>
                  <label htmlFor="my-modal-3" className="btn btn-xs">
                    Edit
                  </label>
                  <div>
                    {/* The button to open modal */}

                    {/* Put this part before </body> tag */}
                    <input
                      type="checkbox"
                      id="my-modal-3"
                      className="modal-toggle"
                    />
                    <div className="modal">
                      <div className="modal-box relative">
                        <label
                          htmlFor="my-modal-3"
                          className="btn btn-sm btn-circle absolute right-2 top-2"
                        >
                          ✕
                        </label>
                        <div className="flex justify-center items-center gap-2">
                          <input
                            type="text"
                            className="input input-bordered input-accent w-full max-w-xs my-3"
                            value={data?.title}
                          />
                          <input
                            type="text"
                            className="input input-bordered input-accent w-full max-w-xs my-3"
                            value={data?.note}
                          />
                          <div className="grid justify-center items-center gap-2 mt-5">
                            <button className="btn btn-xs btn-success">
                              Save
                            </button>
                            <button className="btn btn-xs btn-error">
                              Delete
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      )}{" "}
      <br />
      <div className="btn-group mt-8">
        {/* <button className="btn">1</button>
        <button className="btn btn-active">2</button>
        <button className="btn">3</button>
        <button className="btn">4</button> */}
        {user && pages ? (
          [...Array(pages).keys()].map((number) => (
            <button
              key={number}
              onClick={() => setPage(number)}
              className={`btn + ${page === number && `btn-active`}`}
            >
              {number + 1}
            </button>
          ))
        ) : (
          <></>
        )}
        {/* <select
          className="select select-info ml-5"
          onChange={(event) => setSize(event.target.value)}
        >
          {/* <option disabled selected>Select language</option> */}
        {/* <option value="10">10</option>
          <option value="20">20</option>
          <option value="30">30</option>
        </select> */}{" "}
      </div>
    </div>
  );
};

export default MyNotes;
