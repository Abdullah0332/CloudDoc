import React, { useState } from "react";
import SearchBar from "material-ui-search-bar";

export default function AppointmentsPage() {
  const [value, setValue] = useState("");

  const data = [
    {
      name: "Mike Andrew",
      email: "abc@email.com",
      date: "01/01/2021",
      img: "/images/CloudDoc-Doc/profileM1.png",
      address: "House #883 Lahore, Pakistan",
      fee: "200$",
      status: "Unapproved",
      visitSchedule: "02/03/2020 at 10:00 PM",
    },
    {
      name: "Mike Andrew",
      email: "abc@email.com",
      date: "01/01/2021",
      img: "/images/CloudDoc-Doc/profileM1.png",
      address: "House #883 Lahore, Pakistan",
      fee: "200$",
      status: "Unapproved",
      visitSchedule: "02/03/2020 at 10:00 PM",
    },
    {
      name: "Mike Andrew",
      email: "abc@email.com",
      date: "01/01/2021",
      img: "/images/CloudDoc-Doc/profileM1.png",
      address: "House #883 Lahore, Pakistan",
      fee: "200$",
      status: "Unapproved",
      visitSchedule: "02/03/2020 at 10:00 PM",
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
              <th>Clinic Address</th>
              <th>Fee</th>
              <th>Visit schedule</th>
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
                  <td>{item.address}</td>
                  <td>{item.fee}</td>
                  <td>{item.visitSchedule}</td>
                  <td>{item.status}</td>

                  <td>
                    <div className="centerDiv">
                      <div className="flexCenterCol">
                        <img
                          className=" mb-2"
                          src="/images/CloudDoc-Doc/eye.svg"
                          style={{ width: "20px" }}
                          alt="icon"
                        ></img>
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
