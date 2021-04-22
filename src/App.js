import "./App.css";
import ImageLink from "./components/ImageLink";
import Logo from "./components/Logo";
import Navigation from "./components/Navigation";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Rank from "./components/Rank";
import ImageFromLink from "./components/ImageFormLink";
// import ClarifaiStud, { grpc } from "clarifai-nodejs-grpc";

import React, { Component } from "react";

import Clarifai from "clarifai";
const app = new Clarifai.App({
  apiKey: "e6a86ffb7b9f4e399a3385c421168066",
});
class App extends Component {
  constructor() {
    super();

    this.state = {
      imageLink: "",
      imageURL: "",
    };
  }

  onImageLink = (event) => {
    this.setState({
      imageLink: event.target.value,
    });
  };
  onButtonClick = () => {
    console.log("click");
    this.setState({
      imageURL: this.state.imageLink,
    });
    app.models
      .predict(Clarifai.COLOR_MODEL, this.state.imageLink)
      .then(function (reponse) {
        console.log(reponse);
      })
      .catch(function (e) {
        console.log(e);
      });
  };
  render() {
    return (
      <div className="App">
        <Logo />
        <ImageLink
          onImageLink={this.onImageLink}
          onButtonClick={this.onButtonClick}
        />
        <Rank />
        <Navigation />
        <ImageFromLink imageURL={this.state.imageURL} />
      </div>
    );
  }
}

export default App;
