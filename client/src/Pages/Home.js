import React from "react";
// import Container from "../components/Container";
import HeroPic from "../components/HeroPic";
import JoinButton from "../components/JoinButton/JoinButton";
import Nav from "../components/Nav/Nav";
import InfoBoxes from "../components/InfoBoxes/InfoBoxes";

import ImageUpload from "../components/ImageUpload/ImageUpload";

import FooterPage from "../components/Footer/Footer";

const Home = () => (
  <div className="container-fluid">
    <div className="row">
      <div className="col-12">
        <Nav />
        <HeroPic>
          <h1 className="title">PupLife</h1>
          <h2 className="description">Does your pup need some new friends?</h2>
          <h3 className="description">You came to the right place!</h3>
          <JoinButton />
        </HeroPic>
      </div>
    </div>

    <ImageUpload />

    <InfoBoxes />
    <FooterPage />
  </div>
);

export default Home;
