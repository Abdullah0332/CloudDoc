import React from "react";

export default function Header({ active, setHandleActive }) {
  return (
    <div>
      <nav class="flexBetweenCenter dashboardNavBar ">
        {/* SideBarButton */}
        <div className="d-inline d-md-none">
          <div
            onClick={() => setHandleActive(!active)}
            className={
              active ? " dashboardNavaBarButton activeSideBar " : "dashboardNavaBarButton"
            }
          >
            <div className="dashboardNavBarLine dashboardNavBarLine1"></div>
            <div className="dashboardNavBarLine dashboardNavBarLine2"></div>
            <div className="dashboardNavBarLine dashboardNavBarLine3"></div>
          </div>
        </div>
        <a class="navBrand">Dashboard</a>

        <div className="flexCenter navIcons">
          <img src="/images/CloudDoc-Doc/noti.png" className="icon" alt="noit"></img>
          <img src="/images/CloudDoc-Doc/userIcon.png" className="icon" alt="noit"></img>
        </div>
      </nav>
    </div>
  );
}
