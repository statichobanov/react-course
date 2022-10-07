import React from "react";

export default function VideoItem(props) {
  const videoId = props.video.id.videoId;
  const video = props.video.snippet;

  return (
    <div onClick={() => props.onVideoSelect(video)}>
      <h3>{video.title}</h3>
      <img src={video.thumbnails.medium.url} />
    </div>
  );
}
