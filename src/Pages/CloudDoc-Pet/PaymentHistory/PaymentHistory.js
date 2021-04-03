import React, { useState } from "react";
import SearchBar from "material-ui-search-bar";
export default function PaymentHistory() {
  const [value, setValue] = useState("");

  const data = [
    {
      name: "Mike Andrew",
      email: "abc@email.com",
      date: "01/01/2021",
      img: "/images/CloudDoc-Pat/profileM1.png",
      fee: "200$",
      medicalCondition: "not good",
      status: "approved",
    },
    {
      name: "Mike Andrew",
      email: "abc@email.com",
      date: "01/01/2021",
      img: "/images/CloudDoc-Pat/profileM1.png",
      fee: "200$",
      medicalCondition: "not good",
      status: "approved",
    },
    {
      name: "Mike Andrew",
      email: "abc@email.com",
      date: "01/01/2021",
      img: "/images/CloudDoc-Pat/profileM1.png",
      fee: "200$",
      medicalCondition: "not good",
      status: "approved",
    },
    {
      name: "Mike Andrew",
      email: "abc@email.com",
      date: "01/01/2021",
      img: "/images/CloudDoc-Pat/profileM1.png",
      fee: "200$",
      medicalCondition: "not good",
      status: "approved",
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
              <th>Date</th>
              <th>Fee</th>
              <th>Medical Condition</th>
              <th>Status</th>
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
                  <td>{item.fee}</td>
                  <td>{item.medicalCondition}</td>
                  <td>{item.status}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
