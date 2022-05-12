import React, { useState } from "react";
import style from "./style.module.css";
import StarIcon from "@mui/icons-material/Star";
import { useHistory, useParams } from "react-router-dom";

export default function CardUsers({ item }) {
  let history = useHistory();

  const [activePayment, setActivePayment] = useState(0);
  return (
    <>
      <div className={style.cardContiner}>
        <h2 className={style.profitTitle}>{item?.profit}</h2>
        <div className={style.imageNFT}>
          <img alt="NFTImage" src={item?.image} />
        </div>
        <h1 className={style.titleNFT}>{item?.name}</h1>
        {/* <h1 className={style.priceNFT}>
          {item?.price}
        </h1> */}
        <div className={style.divRate}>
          <StarIcon style={{ fontSize: 18, color: "#000", marginTop: 2 }} />
          <h1 className={style.priceNFT}>{item?.rate}</h1>
          <h2>(30 jobs)</h2>
        </div>
        <div className={style.divProfit}>
          <h1>number of operations</h1>
          <h2 style={{ color: "#4E7499" }} color="#888">
            {item?.operations}
          </h2>
        </div>
        {/* <div className={style.divProfit}>
          <h1>Profit Ratio</h1>
          <h2>{item?.profit}</h2>
        </div> */}
        <h1 className={style.titleAvailable}>
          Installment available:
          <span> (Month)</span>
        </h1>

        <div className={style.divList}>
          <div className={style.divInstallment}>
            {item.Installment?.map?.((item, index) => {
              return (
                <div className={style.numbers} key={index}>
                  <h1>{item}</h1>
                </div>
              );
            })}
          </div>
        </div>
        <button
          className={style.buttonBuy}
          onClick={() => {
            history.push("/market");
            // window.location.href = "/market";
            // window.alert("Done");
          }}
        >
          <span>Send</span>
        </button>
        {/* <Modal item={item} /> */}
      </div>
    </>
  );
}
