import React from "react";

export default function VideoDetail({ video }) {
  if (!video) {
    return <h2>Loading .....</h2>;
  }

  return (
    <div>
      <div></div>
      <h3>{video.title}</h3>
      <p>{video.description}</p>
    </div>
  );
}
