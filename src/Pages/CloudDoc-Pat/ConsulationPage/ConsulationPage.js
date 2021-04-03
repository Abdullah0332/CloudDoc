import React, { useState } from "react";
import SearchBar from "material-ui-search-bar";
import "./components/consulation.css";
export default function ConsulationPage() {
  const [value, setValue] = useState("");

  const data = [
    {
      name: "Mike Andrew",
      email: "abc@email.com",
      date: "01/01/2021",
      img: "/images/CloudDoc-Pat/profileM1.png",
      medicalCondition: "not good",
      consultationSedule: "02/03/2020",
      status: "Approved",
      fee: "200$",
    },
    {
      name: "Mike Andrew",
      email: "abc@email.com",
      date: "01/01/2021",
      img: "/images/CloudDoc-Pat/profileM1.png",
      medicalCondition: "not good",
      consultationSedule: "02/03/2020",
      status: "Approved",
      fee: "200$",
    },
    {
      name: "Mike Andrew",
      email: "abc@email.com",
      date: "01/01/2021",
      img: "/images/CloudDoc-Pat/profileM1.png",
      medicalCondition: "not good",
      consultationSedule: "02/03/2020",
      status: "Approved",
      fee: "200$",
    },
    {
      name: "Mike Andrew",
      email: "abc@email.com",
      date: "01/01/2021",
      img: "/images/CloudDoc-Pat/profileM1.png",
      medicalCondition: "not good",
      consultationSedule: "02/03/2020",
      status: "Approved",
      fee: "200$",
    },
  ];
  return (
    <div className="contentRow">
      <SearchBar value={value} onChange={(v) => setValue(v)} />

      <div className="classicTable">
        <table class="table table-borderless">
          <thead>
            <tr>
              <th>Name</th>
              <th>DOB</th>
              <th>Medical Condition</th>
              <th>Consulation schedule </th>
              <th>Fee</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => {
              return (
                <tr key={index}>
                  <td>
                    <div>
                      <img src={item.img} className="nameImg" alt="name"></img>
                      <span>{item.name}</span>
                    </div>
                  </td>

                  <td>{item.date}</td>
                  <td>{item.medicalCondition}</td>
                  <td>{item.consultationSedule}</td>
                  <td>{item.fee}</td>
                  <td>{item.status}</td>

                  <td>
                    <div className="centerDiv">
                      <div className="flexCenterCol">
                        <img
                          className=" mb-2"
                          src="/images/CloudDoc-Pat/eye.svg"
                          style={{ width: "20px" }}
                          alt="icon"
                        ></img>
                        <button
                          className="btn btn-outline-primary btn-sm"
                          style={{ font: "12px roboto" }}
                          onClick={() =>
                            (window.location.href = "/waiting-room")
                          }
                        >
                          Start Consulation
                        </button>
                      </div>
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
