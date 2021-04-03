import React, { useState } from "react";

export default function NotificationSec() {
  const data = [
    { title: "Meet Jessica", time: "14:30 PM" },
    { title: "New Message received", time: "14:30 PM" },
  ];
  const [notiData, setnotiData] = useState([...data]);

  const clearAll = () => {
    setnotiData([]);
  };
  return (
    <div className="secDiv notificationSec">
      <div className="mainFlex">
        <div className="flexBetweenCenter">
          <div className="secTitle">Don’t Forget</div>
          {notiData.length > 0 && (
            <div onClick={clearAll} className="clearText">
              Clear
            </div>
          )}
        </div>
        {notiData.length <= 0 ? (
          <div className="textColor2 text-center mt-5">
            No new notifications to note
          </div>
        ) : (
          notiData.map((item, index) => {
            return <NotificationDiv {...item} key={index} />;
          })
        )}

        {notiData.length > 0 && (
          <div className="centerDiv ">
            <div className="textBlue pointer poppinsSb mt-4">View all</div>
          </div>
        )}
      </div>
      <img
        src="/images/CloudDoc-Doc/notiBg.png"
        className="imgBg d-none d-md-block"
        alt="noti"
      ></img>
    </div>
  );
}

const NotificationDiv = ({ title, time }) => {
  return (
    <div className=" flexBetweenCenter notificationDiv">
      <div className="flexCenter">
        <img src="/images/CloudDoc-Doc/notiBell.png" className="img" alt="noti"></img>
        <div className="title">{title}</div>
      </div>
      <div className="time">{time}</div>
    </div>
  );
};
