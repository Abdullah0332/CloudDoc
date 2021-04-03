import React from "react";

export default function UserSec() {
  const data = [
    {
      id: "1",
      img: "/images/CloudDoc-Doc/profileM1.png",
      newM: false,
      newCount: 0,
      name: "Marie Dee",
      desc: "Strep Throat",
    },
    {
      img: "/images/CloudDoc-Doc/profileM2.png",
      newM: true,
      newCount: 3,
      name: "John Doe",
      desc: "Cold/Flu",
    },
    {
      img: "/images/CloudDoc-Doc/profileM1.png",
      newM: false,
      newCount: 0,
      name: "Jessica Jung",
      desc: "Strep Throat",
    },
    {
      img: "/images/CloudDoc-Doc/profileM2.png",
      newM: false,
      newCount: 2,
      name: "John Doe",
      desc: "Cold/Flu",
    },
    {
      img: "/images/CloudDoc-Doc/profileM2.png",
      newM: false,
      newCount: 2,
      name: "John Doe",
      desc: "Cold/Flu",
    },
    {
      img: "/images/CloudDoc-Doc/profileM1.png",
      newM: false,
      newCount: 0,
      name: "Jessica Jung",
      desc: "Strep Throat",
    },
    {
      img: "/images/CloudDoc-Doc/profileM2.png",
      newM: false,
      newCount: 2,
      name: "John Doe",
      desc: "Cold/Flu",
    },
  ];
  return (
    <>
      {data.map((item, index) => {
        return <UserItem {...item} key={index} />;
      })}
    </>
  );
}

const UserItem = ({ newM, newCount, name, desc, img, id }) => {
  return (
    <div className={id === "1" ? "userItem userItemActive" : "userItem"}>
      {newM && <div className="new">{newCount}</div>}
      <img src={img} className="profileImg"></img>
      <div>
        <div className="name">{name}</div>
        <div className="text textBlue">{desc}</div>
      </div>
    </div>
  );
};
