import React, { useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

import Navbar from "./Components/Navbar";

import VideoApp from "./Components/VideoApp.jsx";

import DropZoneJS from "./Components/DropZone.js";
import { useDropzone } from 'react-dropzone';


const Home = () => {
  let navigate = useNavigate();

  const [files, setFiles] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log(files)

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

  const onDrop = useCallback(acceptedFiles => {
    // Do something with the files
    console.log(acceptedFiles)
  }, [])

  const { getRootProps, getInputProps } = useDropzone({
    accept: "pptx/*",
    onDrop: (acceptedFiles) => {
      console.log(files)
      setFiles(
        [...files, ...acceptedFiles]
      )
    },
  })

  return (
    <>
      <div className="flex flex-col w-screen h-screen items-center justify-self-auto bg-[#17181d] justify-center">
        <Navbar />

        <DropZoneJS />

        <form onSubmit={handleSubmit}>
          {/* <input type="file" name="powerpoint" onChange={handleOnChange}></input> */}

          <div {...getRootProps()}>
            <input {...getInputProps()} />
            {
              <p>Drag 'n' drop some files here, or click to select files</p>
            }
          </div>

          <button type="submit">Upload File</button>
        </form>
        <div >


        </div >

      </div>

      <VideoApp />

    </>
  );
};

export default Home;
