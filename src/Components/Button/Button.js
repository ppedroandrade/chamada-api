import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";

const BootstrapButton = styled(Button)({
  boxShadow: "none",
  textTransform: "none",
  fontSize: 20,
  lineHeight: 1.5,
  backgroundColor: "#0069d9",
  borderColor: "#0069d9",
  fontFamily: ["sans-serif"].join(","),
  "&:hover": {
    backgroundColor: "#01e78e",
    borderColor: "#01e78e",
    boxShadow: "none",
  },
});

function ButtonCall(props) {
  return (
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
      {...props}
    >
      Fazer Chamada
    </BootstrapButton>
  );
}

export default ButtonCall;
