import React from "react";

export default function MedicalSpecialities() {
  const data = [
    {
      img: "/images/CloudDoc/heart.svg",
      title: "Primary Care",
      text: " Lorem ipsum dolor sit amet, consectetur adipiscing.",
    },
    {
      img: "/images/CloudDoc/teeth.svg",
      title: "Dentist",
      text: " Lorem ipsum dolor sit amet, consectetur adipiscing.",
    },
    {
      img: "/images/CloudDoc/lungs.svg",
      title: "Purmanologist",
      text: " Lorem ipsum dolor sit amet, consectetur adipiscing.",
    },
    {
      img: "/images/CloudDoc/stomach.svg",
      title: "Gastrologist ",
      text: " Lorem ipsum dolor sit amet, consectetur adipiscing.",
    },
    {
      img: "/images/CloudDoc/ear.svg",
      title: "ENT Specialist",
      text: " Lorem ipsum dolor sit amet, consectetur adipiscing.",
    },
  ];
  return (
    <div>
      <div className="basicLandingRow medicalSpec">
        <div className="flexBetweenCenter">
          <div className="basicLandingTitle mb-0">Medical Specialities</div>
          <button className="primaryBtn seeAllBtn d-none d-md-inline">
            See all specialities
          </button>
        </div>
        <div className="itemFlex">
          {data.map((item) => {
            return (
              <div className="item">
                <div className="circle">
                  <img src={item.img} className="img" alt="item"></img>
                </div>
                <div className="title">{item.title}</div>
                <div className="text">{item.text}</div>
              </div>
            );
          })}
        </div>
        <div className="centerDiv mb-5">
          <button className="primaryBtn seeAllBtn d-inline d-md-none">
            See all specialities
          </button>
        </div>
      </div>
    </div>
  );
}
