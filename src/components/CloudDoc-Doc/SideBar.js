import React, { useState, useEffect } from "react";
import { withRouter, Link } from "react-router-dom";
function SideBar({ active, setHandleActive, location }) {
  const itemsData = [
    {
      img: "/images/CloudDoc-Doc/dashboard.svg",
      img1: "/images/CloudDoc-Doc/dashboard1.svg",

      name: "Dashboard",
      link: "/doc",
    },
    {
      img: "/images/CloudDoc-Doc/google-forms.svg",
      img1: "/images/CloudDoc-Doc/google-forms1.svg",
      name: "Consultation",
      link: "/doc/consulation",
    },
    {
      img: "/images/CloudDoc-Doc/appointment.svg",
      img1: "/images/CloudDoc-Doc/appointment1.svg",
      name: "Appointments",
      link: "/doc/appointment",
    },
    {
      img: "/images/CloudDoc-Doc/chat-box.svg",
      img1: "/images/CloudDoc-Doc/chat box1.svg",
      name: "Messaging",
      link: "/doc/messages",
    },
    {
      img: "/images/CloudDoc-Doc/prescription.svg",
      img1: "/images/CloudDoc-Doc/prescription1.svg",
      name: "Prescriptions",
      link: "/doc/prescription",
    },
    {
      img: "/images/CloudDoc-Doc/history.svg",
      img1: "/images/CloudDoc-Doc/history1.svg",
      name: "Payment History",
      link: "/doc/payment-history",
    },
  ];

  // getting active path
  const path = location.pathname;

  useEffect(() => {
    if (path.indexOf("/doc/consulation") > -1) setAactiveItem("Consultation");
    if (path.indexOf("/doc/appointment") > -1) setAactiveItem("Appointments");
    if (path.indexOf("/doc/messages") > -1) setAactiveItem("Messaging");
    if (path.indexOf("/doc/prescription") > -1) setAactiveItem("Prescriptions");
    if (path.indexOf("/doc/payment-history") > -1)
      setAactiveItem("Payment History");
    if (path.indexOf("/doc/setting") > -1) setAactiveItem("Settings");
    return () => {
      setAactiveItem("Dashboard");
    };
  }, [path]);

  const [activeItem, setAactiveItem] = useState("Dashboard");
  return (
    <>
      <div className="sideBar sideBarDiv d-none d-md-block">
        <div className="centerDiv">
          <img src="/images/CloudDoc-Doc/logoBlue.png" className="logo"></img>
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
            <Link to="/doc/setting">
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
                        ? "/images/CloudDoc-Doc/setting1.svg"
                        : "/images/CloudDoc-Doc/setting.svg"
                    }
                    className="icon"
                  ></img>
                </div>
                <div className="title">Settings</div>
              </div>
            </Link>
            <div className="DashboardSideBarItem">
              <div className="circleIcon">
                <img src="/images/CloudDoc-Doc/logout.svg" className="icon"></img>
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
            <img src="/images/CloudDoc-Doc/logoBlue.png" className="logo"></img>
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
              <Link to="/doc/setting">
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
                          ? "/images/CloudDoc-Doc/setting1.svg"
                          : "/images/CloudDoc-Doc/setting.svg"
                      }
                      className="icon"
                    ></img>
                  </div>
                  <div className="title">Settings</div>
                </div>
              </Link>
              <div className="DashboardSideBarItem">
                <div className="circleIcon">
                  <img src="/images/CloudDoc-Doc/logout.svg" className="icon"></img>
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
