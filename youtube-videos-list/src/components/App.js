import React, { Component } from "react";

import SearchBar from "./SearchBar";
import VideoList from "./VideoList";
import VideoDetail from "./VideoDetail";
import youtube from "../apis/youtube";

export default class App extends Component {
  state = { videos: [], selectedVideo: null };

  onTermSubmit = async (term) => {
    try {
      const response = await youtube.get("/search", {
        params: { q: term },
      });

      this.setState({ videos: response.data.items });
    } catch (error) {
      console.warn("Youtube Api Error: ", error);
    }
  };

  onVideoSelect = (video) => {
    this.setState({ selectedVideo: video });
  };

  render() {
    return (
      <div className="ui container" style={{ marginTop: 20 }}>
        <SearchBar onTermSubmit={this.onTermSubmit} />
        <VideoDetail video={this.state.selectedVideo} />
        <VideoList
          onVideoSelect={this.onVideoSelect}
          videos={this.state.videos}
        />
      </div>
    );
  }
}
