import React from "react";
import ContactPage from "../ContactPage/ContactPage";
import CoverPage from "../Coverpage/CoverPage";
import Nav from "../Nav/Nav";

const Home = () => {
  return (
    <>
      <div className="home-container">
        <Nav />
        <CoverPage />
        <ContactPage />
      </div>
    </>
  );
};

export default Home;
