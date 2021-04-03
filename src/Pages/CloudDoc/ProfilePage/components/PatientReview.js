import React, { useState } from "react";
import Rating from "../../../../components/CloudDoc/Rating/Rating";
import ReviewCard from "./reviewCard";

export default function PatientReviewSec() {
  const [activeReview, setactiveReview] = useState("1");
  const user = [
    {
      id: "1",
      name: "John Doe",
      verified: true,
      date: "09/01/2021",
      img: "/images/CloudDoc/reviewProfile1.png",
    },
    {
      id: "2",
      name: "Shane Star",
      verified: false,
      date: "09/01/2021",
      img: "/images/CloudDoc/reviewProfile2.png",
    },
    {
      id: "3",
      name: "David John",
      verified: false,
      date: "09/01/2021",
      img: "/images/CloudDoc/reviewProfile3.png",
    },
  ];
  const reviewData = [
    {
      rating: "5",
      text:
        "The staff and Dr. Martinez were wonderful. I felt listened to and comfortable. Dr. Martinez was thorough and kind. I feel like I have found an excellent primary care doctor in Dr. Martinez!",

      videoVisit: true,
      title: "Great Experience",
    },
    {
      rating: "4",
      text:
        "She was amazing ! Very personable , goes the extra mile ! Really refreshing to have her for my new pcp",

      videoVisit: false,
    },
    {
      rating: "5",
      text: "Great visit and I didn’t feel rushed at all.",

      videoVisit: true,
    },
  ];
  return (
    <>
      <div className="patientReviewDiv">
        <div className="flexCenter header">
          <div className="secTitle">Patient reviews</div>
          <div className="flexCenter">
            <div className="arrowIcon">
              <img src="/images/CloudDoc/arrowLeft1.png" alt="arrow"></img>
            </div>
            <div className="arrowIcon">
              <img src="/images/CloudDoc/arrowRight1.png" alt="arrow"></img>
            </div>
          </div>
        </div>
        <div className="patientFlex">
          <div className="userSec">
            {user.map((item, index) => {
              return (
                <div
                  key={index}
                  className={
                    activeReview === item.id
                      ? "userItem userItemActive"
                      : "userItem"
                  }
                >
                  <img src={item.img} className="profile"></img>
                  <div className="ml-0 ml-md-4">
                    <div className="flexCenter">
                      <div className="name mr-2">{item.name}</div>
                      {item.verified && (
                        <img src="/images/CloudDoc/verified.png" alt="verified"></img>
                      )}
                    </div>
                    <div className="dateText">{item.date}</div>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="reviewSec mt-4 mt-md-0">
            <ReviewCard {...reviewData[0]} />
          </div>
        </div>
      </div>
    </>
  );
}
