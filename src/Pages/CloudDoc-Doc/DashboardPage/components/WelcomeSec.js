import React from "react";

export default function WelcomeSec() {
  return (
    <div>
      <div className="welcomeSec">
        <div className="secTitle">Hi, Dr. John</div>
        <div className="flexBetweenCenter welcomeFlex">
          <div className="welcomeCard consulationBg">
            <img src="/images/CloudDoc-Doc/newCons.png" className="img"></img>
            <div className="title">
              New
              <br /> Consultation Requests
            </div>
            <div className="value">11</div>
          </div>
          <div className="welcomeCard revenueBg">
            <img src="/images/CloudDoc-Doc/upIcon.png" className="img"></img>
            <div className="title">
              New
              <br /> Appointment Requests
            </div>
            <div className="value">26</div>
          </div>
          <div className="welcomeCard consulationBg2">
            <img src="/images/CloudDoc-Doc/tick.png" className="img"></img>
            <div className="title">
              Total
              <br /> Completed Consultations
            </div>
            <div className="value">56</div>
          </div>
        </div>
      </div>
    </div>
  );
}
