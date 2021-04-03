import React from "react";
import "./components/dashboard.css";
import NotificationSec from "./components/NotificationSec";
import WelcomeSec from "./components/WelcomeSec";
export default function DashboardPage() {
  return (
    <div className="contentRow dashboard">
      <WelcomeSec />
      <NotificationSec />
    </div>
  );
}
