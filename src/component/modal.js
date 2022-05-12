import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import styles from "../component/cardNFT/style.module.css";
import FormControl from "@mui/material/FormControl";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputAdornment from "@mui/material/InputAdornment";
import FormHelperText from "@mui/material/FormHelperText";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function BasicModal({ item }) {
  const [open, setOpen] = React.useState(false);
  const [amount, setAmount] = React.useState("");
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handelChickNext = () => {
    // window.alert("Done");
    setOpen(false);
  };

  return (
    <div
      style={{
        width: "100%",
        // backgroundColor: "red",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Button
        onClick={handleOpen}
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
      </Button>
      {/* <button onClick={handleOpen} className={styles.buttonBuy}>
        <span>buy Now</span>
      </button> */}
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          sx={style}
          style={{
            // backgroundColor: "#356AA0",
            backgroundColor: "#ECEAEA",
            border: "solid",
            borderWidth: 0,
            borderRadius: 10,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <h2 className={styles.titleForm}>Start Profit Sharing</h2>
          <h1 className={styles.textMuch}>How much do you want to invest?</h1>
          <FormControl sx={{ m: 0, width: "30ch" }} variant="outlined">
            <OutlinedInput
              type="number"
              placeholder="Enter amount to invest"
              id="outlined-adornment-weight"
              value={amount}
              onChange={(value) => setAmount(value.target.value)}
              endAdornment={
                <InputAdornment position="end">USDT</InputAdornment>
              }
              aria-describedby="outlined-weight-helper-text"
              inputProps={{
                "aria-label": "weight",
              }}
            />
            {/* <FormHelperText id="outlined-weight-helper-text">
              Weight
            </FormHelperText> */}
          </FormControl>
          <h2 className={styles.textBalance}>
            Available Balance:USDT 0.000000
          </h2>
          {/* <div className={styles.divTitle}>
            <h1 className={styles.NftName}>Nft Name : </h1>
            <div className={styles.divTitleback}>
              <h1> {item?.title}</h1>
            </div>
          </div>
          <div className={styles.divTitle}>
            <h1 className={styles.NftName}>Price : </h1>
            <div className={styles.divTitleback}>
              <h1> {item?.price}</h1>
            </div>
          </div>
          <div className={styles.divTitle}>
            <h1 className={styles.NftName} style={{ fontSize: 15 }}>
              Payment System : (Month)
            </h1>
            {/* <h1> {item.price}</h1> */}
          {/* <input
              style={{ width: "20%" }}
              className={styles.divTitleback}
              type={"number"}
            />
          </div>  */}
          <Button
            onClick={handelChickNext}
            variant="contained"
            style={{
              backgroundColor: "#1355D4",
              marginTop: 20,
              width: "40%",
            }}
          >
            NEXT
          </Button>
          {/* <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Payment System
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
          </Typography> */}
        </Box>
      </Modal>
    </div>
  );
}
