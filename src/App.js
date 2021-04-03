import React, { useState } from "react";
import { Route, Switch } from "react-router-dom";

//CloudDoc Routes
import Header from "./components/CloudDoc/Header";
import Footer from "./components/CloudDoc/Footer";

import LandingPage from "./Pages/CloudDoc/LandingPage/LandingPage";
import SearchPage from "./Pages/CloudDoc/SearchPage/SearchPage";
import ProfilePage from "./Pages/CloudDoc/ProfilePage/ProfilePage";
import PatientLoginPage from "./Pages/CloudDoc/PatientLogin/PatientLoginPage";
import SingupPage from "./Pages/CloudDoc/PatientLogin/SingupPage";
import DoctorLogin from "./Pages/CloudDoc/DoctorLogin/DoctorLogin";
import ForgetPasswordPage from "./Pages/CloudDoc/DoctorLogin/ForgetPasswordPage";
import BookAndReviewPage from "./Pages/CloudDoc/BookAndReview/BookAndReviewPage";
import WaitingRoom from "./Pages/CloudDoc/WaitingRoom/WaitingRoom";
import BookingReviewLoading from "./Pages/CloudDoc/BookAndReview/BookingReviewLoading";

//ClouDoc Doctor Routes
import DocRoutes from './Routes/DocRoutes';

//CloudDoc Patent Routes
import PetRoutes from './Routes/PatRoutes';


export default function App() {

  return (
    <div>
      <Switch>

        <Route path="/doc">
          <DocRoutes />
        </Route>

        <Route path="/pat">
          <PetRoutes />
        </Route>

        <Route path="/">
          <Header />
              <Route path="/" exact component={LandingPage} />
              <Route path="/search" component={SearchPage} />
              <Route path="/profile" component={ProfilePage} />
              <Route path="/patient/login" component={PatientLoginPage} />
              <Route path="/patient/signup" component={SingupPage} />
              <Route path="/doctor/login" component={DoctorLogin} />
              <Route path="/auth/forget" component={ForgetPasswordPage} />
              <Route path="/waiting-room" component={WaitingRoom} />
              <Route path="/booking/review-booking" component={BookAndReviewPage} />
              <Route
                  path="/booking/review-booking-loading"
                  component={BookingReviewLoading}
              />

          <Footer />
        </Route>

      </Switch>
    </div>
  );
}
