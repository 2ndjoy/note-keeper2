import React from "react";
import { useState } from "react";

const AddNote = () => {
  const [extdend, setExtend] = useState(false);
  const [title, setTitle] = useState("");
  const [note, setNote] = useState("");

  const handleSave = (event) => {
    event.preventDefault();
    setExtend(false);
    console.log(title.target.value);
    console.log(note.target.value);
    title.target.value = "";
  };
  return (
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
                        <button onClick={handleSave} className="btn btn-xs">
                          Save
                        </button>
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
  );
};

export default AddNote;
