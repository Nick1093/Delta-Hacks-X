import React, { useState } from "react";

import Navbar from "./Components/Navbar";
// nM8bIvLjiaisgUUQJJj2DtTU30Q
const Home = () => {
  const [file, setFile] = useState();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!file) {
      console.log("No file selected");
      return;
    }

    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", "test-react-uploads-unsigned");
    formData.append("api_key", "893612613169993");

    const results = await fetch(
      "https://api.cloudinary.com/v1_1/dnogijm4l/image/upload",
      {
        method: "POST",
        body: formData,
      }
    );

    // Process the results as needed
    const response = await results.json();
    console.log(response);
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
