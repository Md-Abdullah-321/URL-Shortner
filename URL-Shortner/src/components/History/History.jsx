// HistoryPage.js
import React, { useEffect, useState } from "react";

const History = () => {
  const [shortUrls, setShortUrls] = useState([]);

  useEffect(() => {
    const allData = Object.entries(localStorage).map(([short, long]) => ({ short, long }));
    setShortUrls(allData);
  }, []);

  const openLongUrlInNewTab = (longUrl) => {
    window.open(longUrl, "_blank");
  };

  const copyLongUrlToClipboard = (longUrl) => {
    navigator.clipboard.writeText(longUrl)
      .then(() => alert("Long URL copied to clipboard!"))
      .catch((error) => console.error("Copy failed:", error));
  };

  return (
    <div className="min-h-screen w-full bg-background flex justify-center items-center">
      <div className="w-full mx-auto text-center">
        <h1 className="text-2xl font-bold mb-4">History of Short URLs</h1>
        <ul>
          {shortUrls.map((shortUrl, index) => (
            <li key={index} className="mb-2 flex w-11/12 md:w-5/6 lg:w-2/3 mx-auto justify-between items-center text-start bg-block p-2 rounded-md">
              <button className="hover:bg-background p-1 mr-3 md:mr-20 rounded-md w-2/6 hover:text-heading truncate" onClick={() => openLongUrlInNewTab(shortUrl.long)}>
                {shortUrl.short}
              </button>{" "}
              - <p className="w-3/6 truncate">{shortUrl.long}</p>
              <button className="w-2/12 ml-2 bg-blue-500 hover:bg-heading hover:text-block text-white rounded-md px-2 py-1" onClick={() => copyLongUrlToClipboard(shortUrl.long)}>
                Copy
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default History;
