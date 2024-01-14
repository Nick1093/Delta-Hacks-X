import React, { useEffect, useState } from "react";

import Loading from "./Components/Loading";

const Reels = ({ formData }) => {
  const [loading, setLoading] = useState(true);
  const [reelsContent, setReelsContent] = useState([]);
  const [ws, setWs] = useState(null);

  useEffect(() => {
    const scrape_ppts = async () => {
      const response = await fetch("http://localhost:8000/upload_pptx/", {
        method: "POST",
        body: formData,
      });
      if (response.ok) {
        console.log("Files scraped successfully");
        const reels_data = await response.json();
        setReelsContent(reels_data);
      } else {
        console.error("Error when scraping");
      }
    };

    scrape_ppts();

    const webSocket = new WebSocket("ws://localhost:8000/ws");
    setWs(webSocket);

    ws.send(JSON.stringify(reelsContent));

    ws.onmessage = (e) => {
      console.log("Message: ", e.data);
    };
  }, []);

  return <>{loading ? <Loading></Loading> : <p>handleSubmit</p>}</>;
};

export default Reels;

// const generateReels = async () => {
//     try {
//       // Send the FormData to the backend
//       const response = await fetch("http://localhost:8000/upload_pptx/", {
//         method: "POST",
//         body: formData,
//       });

//       if (response.ok) {
//         console.log("Files uploaded successfully");
//         setLoading(false);

//         const reels_content = await response.json();

//         setReelsContent(reels_content);
//       } else {
//         console.error("File upload failed");
//       }
//     } catch (error) {
//       console.error("Error uploading files", error);
//     }
//   };

//   generateReels();
