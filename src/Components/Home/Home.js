import React from "react";
import AddNote from "../AddNote/AddNote";
import MyNotes from "../MyNotes/MyNotes";

const Home = () => {
  return (
    <div className="lg:flex lg:justify-between lg:mx-9 lg:items-center mx-0 grid justify-center">
      <AddNote />
      <MyNotes />
    </div>
  );
};

export default Home;
