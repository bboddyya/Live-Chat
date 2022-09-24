import { Box, Container } from "@mui/material";
import { Avatar } from "@mui/material";
import { useContext } from "react";
import { Context } from "../../context/contextAuth";
const Message = ({ text, photo, uid }) => {
  const { userData } = useContext(Context);
  return (
    <Container
      sx={{
        display: "flex",
        width: "100%",
        padding: "0px",
        flexDirection: uid === userData.uid ? "row-reverse" : "row",
      }}
    >
      <Box
        sx={{
          borderRadius: "10px",
          background: uid === userData.uid ? "#9fedaca6" : "#83a9e7",
          display: "flex",
          width: "fit-content",
          minWidth: "100px",
          p: "7px",
          paddingLeft: "9px",
          position: "relative",
          alignSelf: uid === userData.uid ? "flex-end" : "flex-start",
          marginBottom: "15px",
        }}
      >
        <Avatar
          alt="Remy Sharp"
          src={photo}
          sx={{
            width: 18,
            height: 18,
            position: "absolute",
            bottom: "-11px",
            left: "-9px",
            border: "solid 1px #b9b9b9",
          }}
        />
        {text}
      </Box>
    </Container>
  );
};

export default Message;
