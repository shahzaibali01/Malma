import React from 'react'

import Arrow from "../../Images/arrow.png"
import Copy from "../../Images/copy.png"
import Check from "../../Images/check.png"
import Back1 from "../../Images/back1.png"
import Back2 from "../../Images/back2.png"
import Tick from "../../Images/tick.png"


import "./Body.scss"

const App = () => {


  return (
    <>
      <div className="know_container">
        <div className="heading">
          Get to know your body
        </div>

        <div className="cards_box">
          <div className="back1"> <img src={Back1} alt="ERROR" /> </div>
          <div className="back2"> <img src={Back2} alt="ERROR" /> </div>

          <div className="card">
            <div className="icon">
              <img src={Arrow} alt="ERROR" />
            </div>
            <div className="title">
              Connect your glucometer
            </div>
            <div className="dec">
              We connect with most covered glucometers. Don't see yours? Submit a custom request and we'll get you set up.
            </div>
          </div>

          <div className="card">
            <div className="icon">
              <img src={Copy} alt="ERROR" />
            </div>
            <div className="title">
              View your data
            </div>
            <div className="dec">
              View all data as a chart, or in calendar form with % time-in-range for daily, weekly and monthly averages.
            </div>
          </div>

          <div className="card">
            <div className="icon">
              <img src={Check} alt="ERROR" />
            </div>
            <div className="title">
              Identify top triggers
            </div>
            <div className="dec">
              Understand what foods are associated with highs (or lows), and track patterns over time.
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
          <div className="title">
            HELL YES.
          </div>
          <div className="content">
            Finally, a solution for moms(to-be) just trying to do (live) their best life while growing a baby.
          </div>
          <button className="btn" > Sign up </button>
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
    </>
  )
}

export default App;

