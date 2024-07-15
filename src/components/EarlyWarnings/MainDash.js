import React from "react";

import "./MainDash.css";
import { EarlyWarningData } from "../../Data/Data";

const EarlyWarningsMainDash = () => {
  const handleReadMore = (id) => {
    // Replace with your logic to handle redirection or further action
    console.log(`Clicked Read More for item with ID ${id}`);
    // Example: Redirect to a new page or open a modal
    // window.location.href = `/details/${id}`;
  };

  return (
    <div className="early-warnings-container">
      <h1 className="early-warnings-heading">Early Warnings</h1>
      <p className="tagline">Stay Informed. Act Quickly.</p>
      <div className="early-warnings">
        {EarlyWarningData.map((warning) => (
          <div key={warning.id} className="warning-card">
            <div className="image-container">
              {warning.imageUrl && (
                <img
                  src={warning.imageUrl}
                  alt="Warning Image"
                  className="warning-image"
                />
              )}
            </div>
            <div className="content">
              <h2 className="headline">{warning.headline}</h2>
              <p className="warning-content">{warning.content}</p>
              <a
                href="#"
                className="read-more"
                onClick={() => handleReadMore(warning.id)}
              >
                Read More
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EarlyWarningsMainDash;
