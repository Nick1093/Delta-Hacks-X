import React, { useState } from "react";

import Navbar from "./Components/Navbar";

const Home = () => {
  const [file, setFile] = useState();

  const handleSubmit = async (e) => {
    e.preventDefault();
  };

  const handleOnChange = async (e) => {
    setFile(e.target.files[0]);
  };

  return (
    <>
      <Navbar></Navbar>
      <div>
        <h1>Welcome!</h1>

        <h2>Please drag and drop what we're learning about today!</h2>
      </div>
      <form onSubmit={handleSubmit}>
        <input type="file" name="powerpoint" onChange={handleOnChange}></input>
        <button type="submit">Upload File</button>
      </form>
    </>
  );
};

export default Home;
