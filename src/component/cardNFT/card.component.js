import React, { useState } from "react";
import style from "./style.module.css";
import Modal from "../modal";
import { useHistory, useParams } from "react-router-dom";

export default function CardNFT({ item }) {
  let history = useHistory();

  const [activePayment, setActivePayment] = useState(0);
  return (
    <>
      <div className={style.cardContiner}>
        <div className={style.imageNFT}>
          <img alt="NFTImage" src={item.image} />
        </div>
        <h1 className={style.titleNFT}>{item.title}</h1>
        <h1 className={style.priceNFT}>
          {item.price}
          <span>/Ether</span>
        </h1>

        <h1 className={style.payment} style={{ fontSize: 15 }}>
          Payment System : (Month)
        </h1>
        <div className={style.continerSystem}>
          <div className={style.divContinerSystem}>
            <div className={style.divSystem}>
              <h1>4</h1>
              <input
                onClick={() => setActivePayment(4)}
                type="checkbox"
                checked={activePayment === 4}
              />
            </div>
            <div className={style.divSystem}>
              <h1>6</h1>
              <input
                onClick={() => setActivePayment(2)}
                type="checkbox"
                checked={activePayment === 2}
              />
            </div>
          </div>
          <div className={style.divContinerSystem}>
            <div className={style.divSystem}>
              <h1>12</h1>
              <input
                onClick={() => setActivePayment(12)}
                type="checkbox"
                checked={activePayment === 12}
              />
            </div>
            <div className={style.divSystem}>
              <h1>24</h1>
              <input
                onClick={() => setActivePayment(24)}
                type="checkbox"
                checked={activePayment === 24}
              />
            </div>
          </div>
        </div>
        <button
          className={style.buttonBuy}
          onClick={() => history.push("/users")}
        >
          <span>Request a loan</span>
        </button>
        {/* <Modal item={item} /> */}
      </div>
    </>
  );
}
