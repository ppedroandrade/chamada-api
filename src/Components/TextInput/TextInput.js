import { useState } from "react";
import { TextField } from "@mui/material";
import "./TextInput.css";

function TextInput(props) {
  const [ra, setRA] = useState("");

  const handleRAChange = (event) => {
    const value = event.target.value.replace(/[^\d]/g, ""); // permite apenas números
    setRA(value.slice(0, 6)); // limita o número de caracteres a 6
  };
  
  return (
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
      {...props}
    />
  );
}

export default TextInput;
