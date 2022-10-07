import React, { Component } from "react";

export default class searchBar extends Component {
  state = { term: "" };

  onTermSubmit = (e) => {
    e.preventDefault();

    this.props.onTermSubmit(this.state.term);
  };

  OnInputChange = (e) => {
    this.setState({ term: e.target.value });
  };

  render() {
    return (
      <div className="search-bar ui segment">
        <form onSubmit={this.onTermSubmit} className="ui form">
          <div className="field">
            <label>Search for video</label>
            <input
              type="text"
              value={this.state.term}
              onChange={this.OnInputChange}
            />
          </div>
        </form>
      </div>
    );
  }
}
