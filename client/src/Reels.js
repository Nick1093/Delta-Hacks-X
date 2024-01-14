import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

import Loading from "./Components/Loading";

const Reels = () => {
  const location = useLocation();

  const [loading, setLoading] = useState(true);
  const [reelsContent, setReelsContent] = useState([]);
  const [ws, setWs] = useState(null);

  useEffect(() => {
    // Initialize WebSocket and set up event handlers
    const webSocket = new WebSocket("ws://localhost:8000/ws");

    webSocket.onopen = () => {
      console.log("WebSocket Connected");
      // Send data here
      if (location.state?.reelsData) {
        console.log(location.state.reelsData);
        webSocket.send(JSON.stringify(location.state.reelsData));
      }
    };

    webSocket.onmessage = (e) => {
      console.log("Message: ", e.data);
      const newData = e.data;
      setReelsContent([...reelsContent, newData]);
      setLoading(false);
    };

    return () => {
      webSocket.close();
    };
  }, []);

  return <>{loading ? <Loading></Loading> : <p>{reelsContent}</p>}</>;
};

export default Reels;
