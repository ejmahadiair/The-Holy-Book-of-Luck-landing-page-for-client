import React from "react";
import "./coverPage.css";
import Book from "../../photos/taskimg.PNG";
const CoverPage = () => {
  return (
    <>
      <div id="home" className="cover-page-container">
        <div className="cover-page-box">
          <div className="left">
            <div className="left-box">
              <p className="main-title">The Holy Book of Luck</p>
              <p className="vew-details">
                Available on Amazon, Walmart, WHSmith, eBay, Barnes & Noble and
                many online stores around the world
              </p>

              <div className="button-box">
                <a href="mailto:contact@as-alzein.com" className="for-query">
                  Contact
                </a>
              </div>
            </div>
          </div>
          <div className="right">
            <div className="image-box">
              <img src={Book} alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CoverPage;
