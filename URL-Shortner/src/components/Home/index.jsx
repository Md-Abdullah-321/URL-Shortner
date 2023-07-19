import React, { useState } from "react";

const Home = () => {
  const [input, setInput] = useState("");
  const [shortenedURL, setShortenedURL] = useState("");

  // Function to generate a random short code
  const generateShortCode = () => {
    const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    const shortCodeLength = 6;
    let shortCode = "";
    for (let i = 0; i < shortCodeLength; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      shortCode += characters.charAt(randomIndex);
    }
    return shortCode;
  };

  const handleSubmit = () => {
    // Replace this with your actual URL shortening logic
    const shortCode = generateShortCode();
    const shortenedURL = `https://short.url/${shortCode}`;

    // Store the shortened URL in localStorage
    localStorage.setItem(shortenedURL, input);

    setShortenedURL(shortenedURL);
  };

  const handleRedirect = (shortCode) => {
    const longURL = localStorage.getItem(shortCode);
    if (longURL) {
      window.open(longURL, "_blank"); // Open the original URL in a new tab
    } else {
      console.error("URL not found.");
    }
  };

  return (
    <div className="w-full h-screen flex justify-center items-center bg-background shadow-custom">
      <div className="w-11/12 md:w-1/2 bg-block h-1/3 flex items-center justify-center">
        <div className="w-5/6 flex">
          <input
            className="w-2/3 p-3 outline-none bg-background"
            type="text"
            placeholder="Enter Your URL"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />

          <button className="w-1/3 bg-heading p-3 text-block" onClick={handleSubmit}>
            Shorten URL
          </button>

          {shortenedURL && (
            <div className="mt-3">
              <p 
              className="underline cursor-pointer text-center my-3 bg-background py-1"
                onClick={() => handleRedirect(shortenedURL.split("/").pop())}
              >
                <p className="font-light">
                    <span className="font-normal">Shortened URL: </span>{shortenedURL}</p>
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;
