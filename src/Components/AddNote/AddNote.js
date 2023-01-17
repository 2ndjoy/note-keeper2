import React, { useContext } from "react";
import { useState } from "react";
import { toast } from "react-hot-toast";
import { Link } from "react-router-dom";
import { AuthContext } from "../../UserContext/AuthProvider/AuthProvider";
import MyNotes from "../MyNotes/MyNotes";

const AddNote = () => {
  const { user } = useContext(AuthContext);
  const [extdend, setExtend] = useState(false);
  const [title, setTitle] = useState("");
  const [note, setNote] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSave = (event) => {
    event.preventDefault();

    setExtend(false);
    setLoading(true);
    const mynote = {
      title: title.target.value,
      note: note.target.value,
      userEmail: user.email,
    };
    console.log(mynote.title.length);
    console.log(mynote.note.length);

    if (mynote.title.length === 0 || mynote.note.length === 0) {
      toast.error("Please write some this");
      setLoading(false);
      title.target.value = "";
      note.target.value = "";
    } else {
      fetch("https://note-niye-naw-server-2ndjoy.vercel.app/mynotes", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(mynote),
      })
        .then((res) => res.json())
        .then((data) => {
          toast.success("Added");
          setLoading(false);
          title.target.value = "";
          note.target.value = "";
        });
    }
  };

  return (
    <div className="lg:flex lg:justify-between lg:gap-2 lg:mx-9 lg:items-center mx-0 grid justify-center">
      <div>
        <form className="grid my-9 justify-center">
          <div className=" ">
            <div className="">
              <div className=" ">
                <div className="">
                  <div className="form-control">
                    <input
                      onClick={() => setExtend(true)}
                      onBlur={setTitle}
                      type="text"
                      placeholder={!extdend ? "Take a note" : "Title"}
                      className="input input-bordered input-accent w-full max-w-xs my-3"
                      required
                    />
                  </div>
                  {extdend && (
                    <div className="form-control">
                      <input
                        onBlur={setNote}
                        type="text"
                        placeholder="Take a note"
                        className="input input-bordered"
                        required
                      />
                      <div className="form-control mt-6">
                        <div className="flex justify-center gap-2">
                          {user ? (
                            <button
                              onClick={handleSave}
                              className="btn btn-xs form-control"
                            >
                              Save
                            </button>
                          ) : (
                            <Link className="btn btn-xs" to="/login">
                              Log in
                            </Link>
                          )}
                          <button
                            onClick={() => setExtend(false)}
                            className="btn btn-xs"
                          >
                            Close
                          </button>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
      <div>
        <MyNotes loading={loading} setLoading={setLoading}></MyNotes>
      </div>
    </div>
  );
};

export default AddNote;
