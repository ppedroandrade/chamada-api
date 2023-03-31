import React from "react";

import { TextField } from "@mui/material";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";

import "./loginScreen.css";

const BootstrapButton = styled(Button)({
  boxShadow: "none",
  textTransform: "none",
  fontSize: 20,
  lineHeight: 1.5,
  backgroundColor: "#01e78e",
  borderColor: "#01e78e",
  fontFamily: ["sans-serif"].join(","),
  "&:hover": {
    backgroundColor: "#0069d9",
    borderColor: "#01e78e",
    boxShadow: "none",
  },
});

function Home() {
  return (
    <div className="login-screen">
      <div className="cointainer">
        <div className="box-white">
          <div class="box">
            <p class="login-title">
              Login
              <br /> Sistemas de efetuar chamada
            </p>
            <div className="login-input">
              <TextField
                type="number"
                id="outlined-basic"
                label="Informe seu RA"
                variant="outlined"
                className="input-login"
                style={{
                  width: 465,
                  height: 45,
                  marginBottom: 30,
                  marginLeft: 40,
                  marginTop: 45,
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
                  marginLeft: 40,
                  marginTop: 15,
                }}
              >
                Fazer Chamada
              </BootstrapButton>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Home;
