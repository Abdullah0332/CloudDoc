import React, { useState } from "react";
import { Route } from "react-router-dom";

//CloudDoc Doctor
import Header from "../components/CloudDoc-Doc/Header";
import SideBar from "../components/CloudDoc-Doc/SideBar";

import DashboardPage from "../Pages/CloudDoc-Doc/DashboardPage/DashboardPage";
import AppointmentsPage from "../Pages/CloudDoc-Doc/AppointmentsPage/AppointmentsPage";
import ConsulationPage from "../Pages/CloudDoc-Doc/ConsulationPage/ConsulationPage";
import MessagingPage from "../Pages/CloudDoc-Doc/MessagingPage/MessagingPage";
import PaymentHistory from "../Pages/CloudDoc-Doc/PaymentHistory/PaymentHistory";
import PrescriptionPage from "../Pages/CloudDoc-Doc/PrescriptionPage/PrescriptionPage";
import SettingPage from "../Pages/CloudDoc-Doc/SettingPage/SettingPage";

const DocRoutes = () => {

    const [active, setHandleActive] = useState(false);

    return (
        <div className="dashboardMainDiv">

          <div>
              <SideBar active={active} setHandleActive={setHandleActive} />
          </div>
          <div className="headerSec">
              <Header active={active} setHandleActive={setHandleActive} />
              <div className="contentMainSec">
                <Route path="/doc" exact component={DashboardPage}></Route>
                <Route path="/doc/appointment" component={AppointmentsPage}></Route>
                <Route path="/doc/consulation" component={ConsulationPage}></Route>
                <Route path="/doc/messages" component={MessagingPage}></Route>
                <Route path="/doc/payment-history" component={PaymentHistory}></Route>
                <Route path="/doc/prescription" component={PrescriptionPage}></Route>
                <Route path="/doc/setting" component={SettingPage}></Route>
              </div>
          </div>

      </div>
    )
}

export default DocRoutes
