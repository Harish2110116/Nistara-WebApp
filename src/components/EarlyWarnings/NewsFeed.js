import React from "react";
//import "./NewsFeed.css"; // Optional: Add CSS for styling

const NewsFeed = ({ profilePicUrl, profileName, headline, content, readMoreLink, newsPicUrl }) => {
  return (
    <div className="NewsFeed">
      <div className="Profile">
        <img src={profilePicUrl} alt="Profile Pic" />
        <span>{profileName}</span>
      </div>
      <div className="Headline">{headline}</div>
      <div className="Content">{content}</div>
      <div className="NewsPic">
        <img src={newsPicUrl} alt="News Pic" />
      </div>
      <div className="ReadMore">
        <a href={readMoreLink}>Read more</a>
      </div>
    </div>
  );
};

export default NewsFeed;
