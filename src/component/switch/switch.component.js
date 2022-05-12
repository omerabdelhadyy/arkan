import React, { useEffect, useState } from "react";
import style from "./style.module.css";
import { useHistory, useParams } from "react-router-dom";

export default function Switch() {
  const [active, setActive] = useState(0);
  let history = useHistory();
  const { id } = useParams();
  useEffect(() => {
    console.log(window.location.pathname);
  }, []);
  const stylee = (number) => {
    if (number === history.location.pathname) {
      return style.activeDiv;
    } else {
      return style.notActive;
    }
  };

  return (
    <div className={style.continerSwitch}>
      <div className={style.divSwitch}>
        <div
          // style={{ backgroundColor: id == 0 ? "red" : "green" }}
          className={
            id == "swap" || !id || id == "/arkan/" || id == "/arkan"
              ? style.activeDiv
              : style.notActive
          }
          // onClick={() => history.push("/0")}
          onClick={() => history.push("/swap")}
        >
          <h1>Swap</h1>
        </div>
        <div
          // className={stylee("/liquidity")}
          className={id == "liquidity" ? style.activeDiv : style.notActive}
          // onClick={() => history.push("/1")}
          onClick={() => history.push("/liquidity")}
          // onClick={() => (window.location.href = "/arkan/liquidity")}
        >
          <h1>Liquidity</h1>
        </div>
        <div
          // className={stylee("/liquidity")}
          className={id == "market" ? style.activeDiv : style.notActive}
          // onClick={() => history.push("/1")}
          onClick={() => history.push("/market")}
        >
          <h1>MORABHA</h1>
        </div>
        <div
          // className={stylee("/liquidity")}
          className={id == "speculation" ? style.activeDiv : style.notActive}
          // onClick={() => history.push("/1")}
          onClick={() => history.push("/speculation")}
        >
          <h1>MODARABA</h1>
        </div>
        {/* <div className={stylee(2)} onClick={() => setActive(2)}>
          <h1>Limit</h1>
        </div> */}
      </div>
    </div>
  );
}
