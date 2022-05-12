import React, { useState } from "react";
import style from "./style.module.css";
import Header from "../../component/header/header.component";
import Switch from "../../component/switch/switch.component";
import Chart from "../../component/chart.component";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputAdornment from "@mui/material/InputAdornment";
import Button from "@mui/material/Button";
import Web3 from "web3";
import { useHistory, useParams } from "react-router-dom";
import Liquidity from "../liquidity/liquidity.screen";
import Market from "../market/market.screen";
import Speculation from "../speculation/speculation.screen";

export default function Swap() {
  const [value, setValue] = useState("");
  const { id } = useParams();

  const loadWeb3 = async () => {
    if (window.ethereum) {
      const web3 = new Web3(window.web3.currentProvider);
      const userAccount = await web3.eth.getAccounts();
      if (userAccount.length) {
        //user already login in metamask
        console.log("done login");
        await window.ethereum.enable();
      } else {
        window.web3 = new Web3(window.ethereum);
        await window.ethereum.enable();
        window.location.reload();
      }
    } else if (window.web3) {
      window.web3 = new Web3(window.web3.currentProvider);
      console.log("web3");
    } else {
      window.alert(
        "Non-Ethereum browser detected. You should consider trying MetaMask!"
      );
    }
  };
  const handleChange = (prop) => (event) => {
    setValue(event.target.value);
  };
  return (
    <>
      <Header />
      <Switch />
      <div className={style.continer}>
        {id == "swap" ? (
          <>
            <Chart />
            <div className={style.continerSwap}>
              <h1>Swap</h1>
              <div>
                <div className={style.divLogo}>
                  <img
                    src="https://bitcoin.org/img/icons/opengraph.png?1648897668"
                    className={style.logo}
                    alt="logo"
                  />
                  <h2>BTCB</h2>
                </div>
                <OutlinedInput
                  style={{
                    borderRadius: 20,
                    backgroundColor: "#EEEAF4",
                    // borderColor: "red",
                    // border: "solid",
                    // borderWidth: 0,
                  }}
                  type="number"
                  id="outlined-adornment-weight"
                  value={value}
                  onChange={handleChange("weight")}
                  endAdornment={
                    <InputAdornment position="end">0.0</InputAdornment>
                  }
                  aria-describedby="outlined-weight-helper-text"
                  inputProps={{
                    "aria-label": "weight",
                  }}
                />
              </div>
              <div>
                <div className={style.divLogo}>
                  <img
                    src="https://th.bing.com/th/id/R.9f0166a6c4d288937f977d08f2baddad?rik=9VrCJnR%2fOflc7Q&pid=ImgRaw&r=0"
                    className={style.logo}
                    alt="logo"
                  />
                  <h2>ETH</h2>
                </div>
                <OutlinedInput
                  style={{
                    borderRadius: 20,
                    backgroundColor: "#EEEAF4",
                    // borderColor: "red",
                    // border: "solid",
                    // borderWidth: 0,
                  }}
                  type="number"
                  id="outlined-adornment-weight"
                  value={value}
                  onChange={handleChange("weight")}
                  endAdornment={
                    <InputAdornment position="end">0.0</InputAdornment>
                  }
                  aria-describedby="outlined-weight-helper-text"
                  inputProps={{
                    "aria-label": "weight",
                  }}
                />
              </div>
              <Button
                variant="contained"
                style={{
                  width: "80%",
                  marginBlock: 20,
                  backgroundColor: "#1FC7D4",
                  coloe: "#fff",
                  padding: 10,
                  borderRadius: 10,
                }}
                onClick={loadWeb3}
              >
                Connect Wallet
              </Button>
            </div>
          </>
        ) : id == "liquidity" ? (
          <Liquidity />
        ) : id == "market" ? (
          <Market />
        ) : (
          <Speculation />
        )}
      </div>
    </>
  );
}
