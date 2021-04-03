import React from "react";

export default function WelcomeSec() {
  return (
    <div>
      <div className="  welcomeSec">
        <div className="secTitle">Hi, Smith</div>
        <div className="flexBetweenCenter welcomeFlex">
          <div className="welcomeCard consulationBg">
            <img src="/images/CloudDoc-Pat/newCons.png" className="img"></img>
            <div className="title">
              Upcoming
              <br /> Consultation
            </div>
            <div className="value">11</div>
          </div>
          <div className="welcomeCard revenueBg">
            <img src="/images/CloudDoc-Pat/upIcon.png" className="img"></img>
            <div className="title">
              Upcoming
              <br /> Appointment
            </div>
            <div className="value">26</div>
          </div>
          <div className="welcomeCard consulationBg2">
            <img src="/images/CloudDoc-Pat/tick.png" className="img"></img>
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
