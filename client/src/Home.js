import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

import Navbar from "./Components/Navbar";

import video from "./Components/video-test/minecraft.mp4";
import VideoCarousel from "./Components/VideoCarousel";

const Home = () => {
  let navigate = useNavigate();

  const [files, setFiles] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Create a single FormData object to send all files
    const formData = new FormData();
    for (const file of files) {
      // Append each file under the same key "uploaded_files"
      formData.append("uploaded_files", file);
    }

    try {
      const response = await fetch("http://localhost:8000/upload_pptx/", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        console.log("Files uploaded successfully");
        // If you need to pass data to the Reels component, do it here
        const reelsData = await response.json();
        console.log(reelsData);
        navigate("/reels", { state: { reelsData: reelsData.slides_content } });
      } else {
        console.error("File upload failed");
      }
    } catch (error) {
      console.error("Error uploading files", error);
    }
  };

  // handle when user adds more files
  const handleOnChange = (e) => {
    const selectedFiles = e.target.files;
    const filesArray = Array.from(selectedFiles);
    setFiles((prevFiles) => [...prevFiles, ...filesArray]);
  };

  const videoTest = {
    video: video,
    transcript: "This is a test transcript",
  };

  return (
    <>
      <div>
        <h1>Welcome!</h1>

        <h2>Please drag and drop what we're learning about today!</h2>
      </div>
      <form onSubmit={handleSubmit}>
        <input type="file" name="powerpoint" onChange={handleOnChange}></input>
        <button type="submit">Upload File</button>
      </form>

      {/* scroll carousel test */}
      {/* <VideoCarousel videos={[videoTest, videoTest, videoTest]} /> */}
    </>
  );
};

export default Home;
