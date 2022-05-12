import React from "react";
import style from "./style.module.css";
import Chart from "../chartSpeculation";
import Button from "@mui/material/Button";
import Modal from "../modal";

export default function Card({ item }) {
  return (
    <div className={style.continer}>
      <div className={style.divHead}>
        <div>
          <img alt="images" src={item?.image} />
          <h1>{item?.email}</h1>
        </div>
        <div className={style.textFee}>
          <h2>{item?.FEE}</h2>
          <h3>SUCCESS FEE</h3>
        </div>
      </div>
      <div style={{ width: "100%" }}>
        <div className={style.divnumbersChart}>
          <div>
            <h1>{item?.RETURN}</h1>
            <h2>RETURN (90d)</h2>
          </div>
          <div className={style.divRightNumber}>
            <h1>{item?.POSITIONS}</h1>
            <h2>OPEN POSITIONS</h2>
          </div>
        </div>
        <Chart data={item?.chart} />
        <h1 className={style.titleChart}>
          {item?.people} people Copying this trader
        </h1>
        <h1 className={style.titleDuration}>
          Duration<span style={{ color: "green" }}>: {item?.Duration}</span>
          /Days
        </h1>
      </div>
      {/* <Button
        style={{
          width: "100%",
          border: "solid",
          borderWidth: 0,
          marginTop: 15,
          color: "#1355D4",
        }}
        variant="outlined"
      >
        Copy strategy
      </Button> */}
      <Modal />
    </div>
  );
}
