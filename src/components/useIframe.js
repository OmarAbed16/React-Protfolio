// useIframe.js
import React from "react";

const useIframe = (url) => {
  // This hook returns an iframe element with the provided URL
  const createIframe = () => {
    return (
      <iframe
        src={url}
        width="100%"
        style={{ border: "none", height: "100vh", position: "fixed" }}
        title="Iframe"
      ></iframe>
    );
  };

  return { createIframe };
};

export default useIframe;
