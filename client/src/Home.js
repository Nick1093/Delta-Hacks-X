import React, { useState } from "react";

import Navbar from "./Components/Navbar";

import video from "./Components/video-test/minecraft.mp4";
import VideoCarousel from "./Components/VideoCarousel";

const Home = () => {
  const [files, setFiles] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Create a FormData object to send files
    // let selected_files = [];
    // for (const file of files) {
    //   const formData = new FormData();
    //   console.log(file);
    //   formData.append("uploaded_files", file);
    //   selected_files.push(formData);
    // }

    const formData = new FormData();
    formData.append("uploaded_files", files[0]);

    try {
      // Send the FormData to the backend
      const response = await fetch("http://localhost:8000/upload_pptx/", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        console.log("Files uploaded successfully");
        // Optionally, you can reset the input after successful upload
        setFiles([]);
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
