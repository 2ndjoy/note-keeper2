import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../UserContext/AuthProvider/AuthProvider";

const MyNotes = ({ loading, setLoading }) => {
  const [extdend, setExtend] = useState(false);
  const [datas, setData] = useState([]);
  // const [loading, setLoading] = useState(true);

  const { user } = useContext(AuthContext);

  useEffect(() => {
    fetch(
      `https://note-niye-naw-server-2ndjoy.vercel.app/mynotes?userEmail=${user?.email}`
    )
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        setLoading(false);
      });
  }, [loading, user]);
  // console.log(datas);

  return (
    <div>
      {!user ? (
        <p>Please Log in</p>
      ) : (
        <div>
          <h1 className="text-center">My Notes</h1>
          <div className="lg:grid lg:justify-center lg:grid-cols-3 lg:gap-3 grid justify-center ">
            {loading ? (
              <p>Loading..</p>
            ) : datas.length === 0 ? (
              <p>No data available</p>
            ) : (
              datas?.map((data) => (
                <div className="justify-center border border-red-500 p-3 rounded my-3">
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
                          <button className="btn btn-xs btn-success">
                            Save
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default MyNotes;
