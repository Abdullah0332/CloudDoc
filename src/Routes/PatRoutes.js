import React, { useState } from 'react';
import { Route } from "react-router-dom";

//CloudDoc Patient
import Header from "../components/CloudDoc-Pat/Header";
import SideBar from "../components/CloudDoc-Pat/SideBar";

import DashboardPage from "../Pages/CloudDoc-Pat/DashboardPage/DashboardPage";
import AppointmentsPage from "../Pages/CloudDoc-Pat/AppointmentsPage/AppointmentsPage";
import ConsulationPage from "../Pages/CloudDoc-Pat/ConsulationPage/ConsulationPage";
import MessagingPage from "../Pages/CloudDoc-Pat/MessagingPage/MessagingPage";
import PaymentHistory from "../Pages/CloudDoc-Pat/PaymentHistory/PaymentHistory";
import PrescriptionPage from "../Pages/CloudDoc-Pat/PrescriptionPage/PrescriptionPage";
import SettingPage from "../Pages/CloudDoc-Pat/SettingPage/SettingPage";

const PatRoutes = () => {

    const [active, setHandleActive] = useState(false);

    return (
        <div className="dashboardMainDiv">

            <div>
                <SideBar active={active} setHandleActive={setHandleActive} />
            </div>
            <div className="headerSec">
                <Header active={active} setHandleActive={setHandleActive} />
                <div className="contentMainSec">
                <Route path="/pat" exact component={DashboardPage}></Route>
                <Route path="/pat/appointment" component={AppointmentsPage}></Route>
                <Route path="/pat/consulation" component={ConsulationPage}></Route>
                <Route path="/pat/messages" component={MessagingPage}></Route>
                <Route path="/pat/payment-history" component={PaymentHistory}></Route>
                <Route path="/pat/prescription" component={PrescriptionPage}></Route>
                <Route path="/pat/setting" component={SettingPage}></Route>
                </div>
            </div>

        </div>
    )
}

export default PatRoutes
