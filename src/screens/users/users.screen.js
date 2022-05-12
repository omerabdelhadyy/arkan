import React from "react";
import style from "./style.module.css";
import Header from "../../component/header/header.component";
import CardUsers from "../../component/cardUsers/card.component";

export default function Users() {
  const data = [
    {
      name: "Ahmed Mohamed",
      rate: 3.5,
      Installment: [6, 12],
      profit: "30%",
      operations: 14,
      image:
        "https://png.pngtree.com/png-clipart/20190922/original/pngtree-business-male-user-avatar-vector-png-image_4774078.jpg",
    },
    {
      name: "Omar Ahmed",
      rate: 2.5,
      Installment: [6, 12, 24],
      profit: "28%",
      operations: 10,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMx1itTXTXLB8p4ALTTL8mUPa9TFN_m9h5VQ&usqp=CAU",
    },
    {
      name: "Ebrahim Mohamed",
      rate: 4.7,
      Installment: [4, 6, 12, 24],
      profit: "33%",
      operations: 17,
      image:
        "https://png.pngtree.com/png-clipart/20190924/original/pngtree-female-user-avatars-flat-style-women-profession-vector-png-image_4822944.jpg",
    },
    {
      name: "Mohamed Ahmed",
      rate: 3.2,
      Installment: [4, 12, 24],
      profit: "31%",
      operations: 20,
      image:
        "https://cdn.pixabay.com/photo/2018/08/28/12/41/avatar-3637425__340.png",
    },
  ];
  return (
    <div>
      <Header />
      {/* <h1 className={style.titleUsers}>Users</h1> */}
      <div className={style.continer}>
        {data.map((item, index) => {
          return <CardUsers item={item} key={index} />;
        })}
      </div>
    </div>
  );
}
