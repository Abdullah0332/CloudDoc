import React from "react";

export default function Header({ active, setHandleActive }) {
  return (
    <div>
      <nav class="flexBetweenCenter navBar ">
        {/* SideBarButton */}
        <div className="d-inline d-md-none">
          <div
            onClick={() => setHandleActive(!active)}
            className={
              active ? " navaBarButton activeSideBar " : "navaBarButton"
            }
          >
            <div className="navBarLine navBarLine1"></div>
            <div className="navBarLine navBarLine2"></div>
            <div className="navBarLine navBarLine3"></div>
          </div>
        </div>
        <a class="navBrand">Dashboard</a>

        <div className="flexCenter navIcons">
          <img src="/images/CloudDoc-Pat/noti.png" className="icon" alt="noit"></img>
          <img src="/images/CloudDoc-Pat/userIcon.png" className="icon" alt="noit"></img>
        </div>
      </nav>
    </div>
  );
}
