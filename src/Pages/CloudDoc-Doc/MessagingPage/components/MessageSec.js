import React, { useEffect } from "react";

export default function MessageSec() {
  const data = [
    {
      id: "1",
      message:
        " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
    },
    {
      id: "2",
      message:
        " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
    },
    {
      id: "1",
      message:
        " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
    },
    { id: "2", message: " Better." },
    {
      id: "1",
      message:
        " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
    },
    {
      id: "2",
      message:
        " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
    },
    {
      id: "1",
      message: " How would you like us to advise about your health?",
    },
    { id: "2", message: " Better." },
  ];

  useEffect(() => {
    scrollToBottom();

    return () => {};
  }, []);

  const scrollToBottom = () => {
    var objDiv = document.getElementsByClassName("innerMessageSec");
    objDiv.scrollTop = objDiv.scrollHeight;
  };
  return (
    <>
      <div className="messageSec">
        <div className="flexBetweenCenter header">
          <div className="userItem" style={{ height: "100%" }}>
            <img src="/images/CloudDoc-Doc/profileM1.png" className="profileImg"></img>
            <div>
              <div className="name">Marie Dee</div>
              <div className="text textBlue">Strep Throat</div>
            </div>
          </div>
          <div className="moreIconDiv">
            <img
              src="/images/CloudDoc-Doc/moreIcon.png"
              className="moreIcon pointer"
              style={{ width: "4px" }}
              alt="Icon "
            ></img>
          </div>
        </div>
        <div className="innerMessageSec">
          {data.map((item, index) => {
            return <MessageDiv {...item} key={index} />;
          })}
        </div>
        <div className="bottomSec">
          <div className="sendDiv">
            <div className="attachmentDiv">
              <img
                className="attachmentIcon pointer"
                src="/images/CloudDoc-Doc/attach.svg"
                style={{ width: "100%" }}
                alt="icon"
              ></img>
            </div>
            <input
              className="sendInput"
              placeholder="Type your question here…"
            ></input>
            <div className="sendIconDiv">
              <img
                className="sendIcon pointer"
                src="/images/CloudDoc-Doc/send.svg"
                style={{ width: "100%" }}
                alt="icon"
              ></img>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

const MessageDiv = ({ id, message }) => {
  return (
    <div className={id === "1" ? "messageDiv myMessage" : "messageDiv "}>
      <img src="/images/CloudDoc-Doc/profileM2.png" className="msgImg"></img>
      <div className="messageText">{message}</div>
    </div>
  );
};
