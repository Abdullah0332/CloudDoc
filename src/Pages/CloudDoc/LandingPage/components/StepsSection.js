import React from "react";

export default function StepsSection() {
  return (
    <div className="lightBg">
      <div className="basicLandingRow stepsSec">
        <div className="basicLandingTitle" style={{ paddingTop: '50px', paddingBottom: '50px', textAlign: 'center' }}>
          The Cloud doc is telehealth, but convenient
        </div>
        <div className="stepFlex">
          <div className="contentSec">
            <div className="countCircle">1</div>
            <div className="title">Browse doctors who take your insurance</div>
            <div className="text">
              Get a small advance on your next paycheck and then pay Dave back
              when it arrives. No interest. No credit check.
            </div>
            <button className="primaryBtn seeBtn ">See specialties</button>
          </div>
          <div className="imgSec">
            <img src="/images/CloudDoc/step1.svg" className="img" alt="step"></img>
          </div>
        </div>
        <div className="centerFlex d-none d-md-flex">
          <img className="lineImg" alt="line" src="/images/CloudDoc/line1.png"></img>
        </div>
        <div className="stepFlex flexReverse">
          <div className="imgSec">
            <img src="/images/CloudDoc/step2.svg" className="img" alt="step"></img>
          </div>
          <div className="contentSec">
            <div className="countCircle">2</div>
            <div className="title">Read Reviews from Users</div>
            <div className="text">
              Get a small advance on your next paycheck and then pay Dave back
              when it arrives. No interest. No credit check.
            </div>
            <button className="primaryBtn seeBtn ">See Providers</button>
          </div>
        </div>
        <div className="centerFlex d-none d-md-flex">
          <img className="lineImg" alt="line" src="/images/CloudDoc/line2.png"></img>
        </div>
        <div className="stepFlex">
          <div className="contentSec">
            <div className="countCircle">3</div>
            <div className="title">Book an Appointment today,Online</div>
            <div className="text">
              Get a small advance on your next paycheck and then pay Dave back
              when it arrives. No interest. No credit check.
            </div>
            <button className="primaryBtn seeBtn ">See Availability</button>
          </div>
          <div className="imgSec">
            <img src="/images/CloudDoc/step3.svg" className="img" alt="step"></img>
          </div>
        </div>
      </div>
    </div>
  );
}
