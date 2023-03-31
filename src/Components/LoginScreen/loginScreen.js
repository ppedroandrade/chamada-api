import React, { useState } from "react";

import { TextField } from "@mui/material";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogActions from "@mui/material/DialogActions";

import "./loginScreen.css";

const BootstrapButton = styled(Button)({
  boxShadow: "none",
  textTransform: "none",
  fontSize: 20,
  lineHeight: 1.5,
  backgroundColor: "#0069d9",
  borderColor: "#0069d9",
  fontFamily: ["sans-serif"].join(","),
  "&:hover": {
    backgroundColor: "#0069d9",
    borderColor: "#01e78e",
    boxShadow: "none",
  },
});

function CustomPopup({ open, onClose }) {
  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>Sucesso!</DialogTitle>
      <DialogContent>
        <DialogContentText>
          Sua chamada foi realizada com sucesso!
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Fechar</Button>
      </DialogActions>
    </Dialog>
  );
}

function Home() {
  const [ra, setRA] = useState("");
  const [openPopup, setOpenPopup] = useState(false);
  const [openError, setOpenError] = useState(false);

  const handleRAChange = (event) => {
    const value = event.target.value.replace(/[^\d]/g, ""); // permite apenas números
    setRA(value.slice(0, 6)); // limita o número de caracteres a 6
  };

  const handlePopupClose = () => {
    setOpenPopup(false);
  };

  const handleButtonClick = () => {
    if (ra.length === 6) {
      setOpenPopup(true);
      setOpenError(false);
    } else {
      setOpenError(true);
    }
  };

  return (
    <div className="login-screen">
      <div className="cointainer">
        <div className="box-white">
          <div className="box">
            <div className="teste">
              <p className="login-title">
                Login
                <br /> Sistemas de efetuar chamada
              </p>
            </div>
            <div className="login-input">
              <TextField
                value={ra}
                onChange={handleRAChange}
                type="tel"
                id="outlined-basic"
                label="Informe seu RA"
                variant="outlined"
                inputProps={{ maxLength: 6 }}
                className="input-login"
                style={{
                  width: 465,
                  height: 45,
                  marginBottom: 30,
                  marginTop: 45,
                }}
                onKeyDown={(event) => {
                  if (event.keyCode === 13) {
                    handleButtonClick();
                  }
                }}
              />
            </div>
            <div className="button-login">
              <BootstrapButton
                variant="contained"
                style={{
                  width: 465,
                  height: 45,
                  marginBottom: 30,
                  marginLeft: 20,
                  marginRight: 20,
                  marginTop: 15,
                }}
                onClick={handleButtonClick}
              >
                Fazer Chamada
              </BootstrapButton>
            </div>
          </div>
        </div>
      </div>
      <CustomPopup open={openPopup} onClose={handlePopupClose} />
      <Dialog open={openError} onClose={() => setOpenError(false)}>
        <DialogTitle>Erro</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Por favor, preencha os 6 números do seu RA.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpenError(false)}>Fechar</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default Home;
