import React, { useState } from "react";
import style from "./style.module.css";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputAdornment from "@mui/material/InputAdornment";
import Button from "@mui/material/Button";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import AddIcon from "@mui/icons-material/Add";
import Web3 from "web3";

export default function Liquidity() {
  const [value, setValue] = useState("");
  const [activeSet, setActiveSet] = useState(false);

  const handleChange = (prop) => (event) => {
    setValue(event.target.value);
  };

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

  return (
    // <div>
    activeSet ? (
      <div className={style.continerSwap} style={{ height: 250 }}>
        <div
          style={{
            margin: 10,
            width: "100%",
            marginLeft: 20,
            // backgroundColor: "red",
            paddingLeft: 20,
            paddingTop: 20,
          }}
        >
          <h1>Your Liquidity</h1>
          <p style={{ color: "#9470AA", fontWeight: 500, fontSize: 13 }}>
            Remove liquidity to receive tokens back
          </p>
        </div>
        <div className={style.divConnect}>
          <h2>Connect to a wallet to view your liquidity.</h2>
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
          startIcon={<AddIcon />}
          // onClick={loadWeb3}
          onClick={() => setActiveSet(false)}
        >
          Add Liquidity
        </Button>
      </div>
    ) : (
      <div className={style.continerSwap}>
        <div className={style.divArrow}>
          <div onClick={() => setActiveSet(true)}>
            <ArrowBackIcon
              style={{ marginInline: 20, fontSize: 30, cursor: "pointer" }}
            />
          </div>
          <div>
            <h1>Add Liquidity</h1>
            <p style={{ color: "#9470AA", fontWeight: 500, fontSize: 13 }}>
              Add liquidity to receive LP tokens
            </p>
          </div>
        </div>
        <div style={{ width: "90%" }}>
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
              width: "100%",
              // borderColor: "red",
              // border: "solid",
              // borderWidth: 0,
            }}
            type="number"
            id="outlined-adornment-weight"
            value={value}
            onChange={handleChange("weight")}
            endAdornment={<InputAdornment position="end">0.0</InputAdornment>}
            aria-describedby="outlined-weight-helper-text"
            inputProps={{
              "aria-label": "weight",
            }}
          />
        </div>
        <h1
          style={{
            margin: 0,
            textAlign: "center",
            marginBottom: -20,
            fontSize: 20,
            fontWeight: 400,
          }}
        >
          +
        </h1>
        <div style={{ width: "90%" }}>
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
              width: "100%",
              // borderColor: "red",
              // border: "solid",
              // borderWidth: 0,
            }}
            type="number"
            id="outlined-adornment-weight"
            value={value}
            onChange={handleChange("weight")}
            endAdornment={<InputAdornment position="end">0.0</InputAdornment>}
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
    )
    // </div>
  );
}
