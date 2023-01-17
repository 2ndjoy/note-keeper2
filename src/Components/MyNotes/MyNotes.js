import React, { useState } from "react";

const MyNotes = () => {
  const [extdend, setExtend] = useState(false);
  return (
    <div>
      This is my notes
      <div>
        {/* The button to open modal */}
        <label htmlFor="my-modal-3" className="btn btn-xs">
          Edit
        </label>

        {/* Put this part before </body> tag */}
        <input type="checkbox" id="my-modal-3" className="modal-toggle" />
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
              />
              <button className="btn btn-xs btn-success">Save</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyNotes;
