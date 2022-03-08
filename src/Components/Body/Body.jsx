import React from "react";

import Arrow from "../../Images/arrow.png";
import Copy from "../../Images/copy.png";
import Check from "../../Images/check.png";
import Back1 from "../../Images/back1.png";
import Back2 from "../../Images/back2.png";
import Tick from "../../Images/tick.png";

import "./Body.scss";

const App = () => {
  return (
    <>
      <div className="body-wrapper">
        <div className="main-back">
          <img src={Back1} alt="ERROR" />{" "}
          <img src={Back2} alt="ERROR" className="back2" />{" "}
        </div>

        <div className="know_container">
          <div className="heading">Get to know your body</div>

          <div className="cards_box">
            <div className="card">
              <div className="icon">
                <img
                  style={{ height: "px", width: "53.92px" }}
                  src={Arrow}
                  alt="ERROR"
                />
              </div>
              <div className="title">Connect your glucometer</div>
              <div className="dec" style={{ marginLeft: '-14px' }}>
                We connect with most covered glucometers. Don't see yours? Submit
                a custom request and we'll get you set up.
              </div>
            </div>

            <div className="card">
              <div className="icon">
                <img
                  style={{ height: "63px", width: "49.5px" }}
                  src={Copy}
                  alt="ERROR"
                />
              </div>
              <div className="title">View your data</div>
              <div className="dec" style={{ marginLeft: '-14px' }}>
                View all data as a chart, or in calendar form with % time-in-range
                for daily, weekly and monthly averages.
              </div>
            </div>

            <div className="card">
              <div className="icon">
                <img
                  style={{ height: "64.67px", width: "55.43px" }}
                  src={Check}
                  alt="ERROR"
                />
              </div>
              <div className="title">Identify top triggers</div>
              <div className="dec" style={{ marginLeft: '-14px' }}>
                Understand what foods are associated with highs (or lows), and
                track patterns over time.
              </div>
            </div>
          </div>

          <div className="options">
            <div className="option">
              <img src={Tick} alt="ERROR" className="icon" />
              <div className="content">Actionable Insights</div>
            </div>

            <div className="option">
              <img src={Tick} alt="ERROR" className="icon" />
              <div className="content">Easy to use</div>
            </div>

            <div className="option">
              <img src={Tick} alt="ERROR" className="icon" />
              <div className="content">Try it yourself!</div>
            </div>
          </div>

          <div className="hell">
            <div className="title">HELL YES.</div>
            <div className="content_para">
              Finally, a solution for moms(to-be) just trying to do (live) their
              best life while growing a baby.
            </div>
            <button className="btn"> Sign up </button>
          </div>

          <div className="how">
            {/* <div className="title">
            HOW TO WORKS
          </div>
          <div className="detail">
            Get started in less than 5 minutes.
          </div> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
