import React, { useState } from "react";
import style from "./style.module.css";

export default function Switch() {
  const [active, setActive] = useState(0);
  const stylee = (number) => {
    if (active === number) {
      return style.activeDiv;
    } else {
      return style.notActive;
    }
  };
  return (
    <div className={style.continerSwitch}>
      <div className={style.divSwitch}>
        <div className={stylee(0)} onClick={() => setActive(0)}>
          <h1>Swap</h1>
        </div>
        <div className={stylee(1)} onClick={() => setActive(1)}>
          <h1>Liquidity</h1>
        </div>
        <div className={stylee(2)} onClick={() => setActive(2)}>
          <h1>Limit</h1>
        </div>
      </div>
    </div>
  );
}
