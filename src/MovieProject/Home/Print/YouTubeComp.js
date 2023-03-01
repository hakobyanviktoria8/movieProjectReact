import React from "react";
import YouTube from "react-youtube";

class YouTubeComp extends React.Component {
  _onReady(event) {
    event.target.pauseVideo();
  }
  render() {
    const opts = {
      height: "390",
      width: "100%",
      playerVars: {
        // https://developers.google.com/youtube/player_parameters
        autoplay: 1,
      },
    };

    return (
      <YouTube
        videoId={this.props.videoId}
        opts={opts}
        onReady={this._onReady}
      />
    );
  }
}
export default YouTubeComp;

//use this https://www.npmjs.com/package/react-youtube
