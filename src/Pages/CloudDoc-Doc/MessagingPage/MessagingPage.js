import React from "react";
import "./components/message.css";
import MessageSec from "./components/MessageSec";
import UserSec from "./components/UserSec";
export default function MessagingPage() {
  return (
    <div className="contentRow py-3">
      <div className="secDiv p-0 message">
        <div className="mainFlex">
          <div className="userSec d-none d-md-block">
            <div className="searchBar">
              <input placeholder="Seacrh" className="search"></input>
              <div className="searchIconDiv">
                <img
                  className="searchIcon w-100"
                  src="/images/CloudDoc-Doc/searchIcon.png"
                  alt="search"
                ></img>
              </div>
            </div>

            <div className="overFlowAuto">
              <UserSec />
            </div>
          </div>
          <MessageSec />
        </div>
      </div>
    </div>
  );
}
