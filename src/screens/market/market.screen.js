import React from "react";
import CardNFT from "../../component/cardNFT/card.component";
import style from "./style.module.css";
import Image1 from "../../assets/nft.png";
import Image2 from "../../assets/nft2.png";
import Image3 from "../../assets/nft3.png";

export default function Market() {
  const data = [
    { title: "nft item 1", image: Image1, price: 0.99 },
    { title: "nft item 2", image: Image2, price: 0.42 },
    { title: "nft item 3", image: Image3, price: 0.71 },
  ];
  return (
    <div className={style.continer}>
      {data.map((item, index) => {
        return <CardNFT item={item} key={index} />;
      })}
    </div>
  );
}
