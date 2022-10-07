import React from "react";
import VideoItem from "./VideoItem";

export default function VideoList({ videos, onVideoSelect }) {
  const renderedList = videos.map((video) => {
    const videoId = video.id.videoId;

    return (
      <VideoItem onVideoSelect={onVideoSelect} key={videoId} video={video} />
    );
  });

  return <div>{renderedList}</div>;
}
