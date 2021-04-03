import React, { useState, useEffect } from "react";
import { withRouter, Link } from "react-router-dom";
function SideBar({ active, setHandleActive, location }) {
  const itemsData = [
    {
      img: "/images/CloudDoc-Pat/dashboard.svg",
      img1: "/images/CloudDoc-Pat/dashboard1.svg",

      name: "Dashboard",
      link: "/pat",
    },
    {
      img: "/images/CloudDoc-Pat/google-forms.svg",
      img1: "/images/CloudDoc-Pat/google-forms1.svg",
      name: "Consultation",
      link: "/pat/consulation",
    },
    {
      img: "/images/CloudDoc-Pat/appointment.svg",
      img1: "/images/CloudDoc-Pat/appointment1.svg",
      name: "Appointments",
      link: "/pat/appointment",
    },
    {
      img: "/images/CloudDoc-Pat/chat-box.svg",
      img1: "/images/CloudDoc-Pat/chat box1.svg",
      name: "Messaging",
      link: "/pat/messages",
    },
    {
      img: "/images/CloudDoc-Pat/prescription.svg",
      img1: "/images/CloudDoc-Pat/prescription1.svg",
      name: "Prescriptions",
      link: "/pat/prescription",
    },
    {
      img: "/images/CloudDoc-Pat/history.svg",
      img1: "/images/CloudDoc-Pat/history1.svg",
      name: "Payment History",
      link: "/pat/payment-history",
    },
  ];

  // getting active path
  const path = location.pathname;

  useEffect(() => {
    if (path.indexOf("/pat/consulation") > -1) setAactiveItem("Consultation");
    if (path.indexOf("/pat/appointment") > -1) setAactiveItem("Appointments");
    if (path.indexOf("/pat/messages") > -1) setAactiveItem("Messaging");
    if (path.indexOf("/pat/prescription") > -1) setAactiveItem("Prescriptions");
    if (path.indexOf("/pat/payment-history") > -1)
      setAactiveItem("Payment History");
    if (path.indexOf("/pat/setting") > -1) setAactiveItem("Settings");
    return () => {
      setAactiveItem("Dashboard");
    };
  }, [path]);
  // console.log(active)

  const [activeItem, setAactiveItem] = useState("Dashboard");
  // console.log(activeItem)
  return (
    <>
      <div className="sideBar sideBarDiv d-none d-md-block">
        <div className="centerDiv">
          <img src="/images/CloudDoc-Pat/logoBlue.png" className="logo"></img>
        </div>

        <div className="itemsFlex">
          <div className="w-100">
            {itemsData.map((item, index) => {
              return (
                <Link to={item.link}>
                  <div
                    onClick={() => setAactiveItem(item.name)}
                    key={index}
                    className={
                      activeItem === item.name
                        ? "DashboardSideBarItem sideBarItemActive"
                        : "DashboardSideBarItem"
                    }
                  >
                    <div className="circleIcon">
                      <img
                        src={activeItem === item.name ? item.img : item.img1}
                        className="icon"
                      ></img>
                    </div>
                    <div className="title">{item.name}</div>
                  </div>
                </Link>
              );
            })}
          </div>
          <div className="w-100 ">
            <Link to="/pat/setting">
              <div
                onClick={() => setAactiveItem("Settings")}
                className={
                  activeItem === "Settings"
                    ? "DashboardSideBarItem sideBarItemActive"
                    : "DashboardSideBarItem"
                }
              >
                <div className="circleIcon">
                  <img
                    src={
                      activeItem === "Settings"
                        ? "/images/CloudDoc-Pat/setting1.svg"
                        : "/images/CloudDoc-Pat/setting.svg"
                    }
                    className="icon"
                  ></img>
                </div>
                <div className="title">Settings</div>
              </div>
            </Link>
            <div className="DashboardSideBarItem">
              <div className="circleIcon">
                <img src="/images/CloudDoc-Pat/logout.svg" className="icon"></img>
              </div>
              <div className="title">Logout</div>
            </div>
          </div>
        </div>
      </div>

      {/* mobile Side Bar */}
      <div className="d-block d-md-none">
        <div
          onClick={() => setHandleActive(false)}
          className={
            active ? "sideBarModal sideBarModalActive" : "sideBarModal"
          }
        ></div>
        <div
          className={
            active
              ? "sideBarM sideBarDiv sideBarMActive"
              : "sideBarM sideBarDiv"
          }
        >
          <div className="centerDiv">
            <img src="/images/CloudDoc-Pat/logoBlue.png" className="logo"></img>
          </div>

          <div className="itemsFlex">
            <div className="w-100">
              {itemsData.map((item, index) => {
                return (
                  <Link to={item.link}>
                    <div
                      onClick={() => {
                        setAactiveItem(item.name);
                        setHandleActive(false);
                      }}
                      key={index}
                      className={
                        activeItem === item.name
                          ? "DashboardSideBarItem sideBarItemActive"
                          : "DashboardSideBarItem"
                      }
                    >
                      <div className="circleIcon">
                        <img
                          src={activeItem === item.name ? item.img : item.img1}
                          className="icon"
                        ></img>
                      </div>
                      <div className="title">{item.name}</div>
                    </div>
                  </Link>
                );
              })}
            </div>
            <div className="w-100 ">
              <Link to="/pat/setting">
                <div
                  onClick={() => {
                    setAactiveItem("Settings");
                    setHandleActive(false);
                  }}
                  className={
                    activeItem === "Settings"
                      ? "DashboardSideBarItem sideBarItemActive"
                      : "DashboardSideBarItem"
                  }
                >
                  <div className="circleIcon">
                    <img
                      src={
                        activeItem === "Settings"
                          ? "/images/CloudDoc-Pat/setting1.svg"
                          : "/images/CloudDoc-Pat/setting.svg"
                      }
                      className="icon"
                    ></img>
                  </div>
                  <div className="title">Settings</div>
                </div>
              </Link>
              <div className="DashboardSideBarItem">
                <div className="circleIcon">
                  <img src="/images/CloudDoc-Pat/logout.svg" className="icon"></img>
                </div>
                <div className="title">Logout</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default withRouter(SideBar);
