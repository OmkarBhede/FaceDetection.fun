import "./App.css";
import ImageLink from "./components/ImageLink";
import Logo from "./components/Logo";
import Navigation from "./components/Navigation";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Rank from "./components/Rank";
import ImageFromLink from "./components/ImageFormLink";
import Particles from "react-particles-js";
// import ClarifaiStud, { grpc } from "clarifai-nodejs-grpc";

import React, { Component } from "react";

import Clarifai from "clarifai";
const app = new Clarifai.App({
  apiKey: "ad630f0723264ea3ae48c3e703faa14c",
});
class App extends Component {
  constructor() {
    super();

    this.state = {
      imageLink: "",
      imageURL: "",
      box: {},
    };
  }

  calcFaceLoc = (data) => {
    const clarifaiFace =
      data.outputs[0].data.regions[0].region_info.bounding_box;
    const image = document.getElementById("inputImage");
    const width = Number(image.width);
    const height = Number(image.height);
    console.log(width, height);
  };

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
      .predict(Clarifai.FACE_DETECT_MODEL, this.state.imageLink)
      .then((reponse) => this.calcFaceLoc(reponse))
      .catch((e) => console.log(e, "error"));
  };

  render() {
    return (
      <div className="App">
        {/* <Particles
          className="particles"
          params={{
            polygon: {
              draw: {
                stroke: {
                  color: "rgba(255,140,0, 1)",
                },
              },
            },
            particles: {
              number: {
                value: 50,
                density: {
                  enable: true,
                  value_area: 400,
                },
              },
              size: {
                value: 3,
              },
            },
            interactivity: {
              events: {
                onhover: {
                  enable: true,
                  mode: "repulse",
                },
              },
            },
          }}
        /> */}
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
