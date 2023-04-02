import React, { useState } from "react";
import ButtonCall from "../Components/Button/Button";
import TextInput from "../Components/TextInput/TextInput";
import ErrorDialog from "../Components/ModalError/ErrorDialog";
import SuccessDialog from "../Components/ModalError/SuccessDialog";

import "./loginScreen.css";

function Home() {
  const [ra, setRA] = useState("");
  const [isError, setIsError] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleButtonClick = () => {
    if (ra.length === 6) {
      setIsSuccess(true);
    } else {
      setIsError(true);
    }
  };

  const handleDialogClose = () => {
    setIsError(false);
    setIsSuccess(false);
  };

  return (
    <div className="login-screen">
      <div className="container">
        <div className="box-white">
          <div className="box">
            <div className="teste">
              <p className="login-title">
                Login
                <br /> Sistemas de efetuar chamada
              </p>
            </div>
            <div className="login-input">
              <TextInput
                value={ra}
                onChange={(event) =>
                  setRA(event.target.value.replace(/[^\d]/g, "").slice(0, 6))
                }
              />
            </div>
            <div className="button-login">
              <ButtonCall onClick={handleButtonClick} />
            </div>
          </div>
        </div>
      </div>
      <ErrorDialog open={isError} onClose={handleDialogClose} />
      <SuccessDialog open={isSuccess} onClose={handleDialogClose} />
    </div>
  );
}

export default Home;
