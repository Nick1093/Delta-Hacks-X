import React, { useState } from "react";

import Navbar from "./Components/Navbar";

import video from "./Components/video-test/minecraft.mp4";
import VideoCarousel from "./Components/VideoCarousel";

const Home = () => {
  const [file, setFile] = useState();

  const handleSubmit = async (e) => {
    e.preventDefault();
  };

  const handleOnChange = async (e) => {
    setFile(e.target.files[0]);
  };

  const videoTest = {
    video: video,
    transcript: "This is a test transcript",
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

      {/* scroll carousel test */}
      <VideoCarousel videos={[videoTest, videoTest, videoTest]} />
    </>
  );
};

export default Home;
