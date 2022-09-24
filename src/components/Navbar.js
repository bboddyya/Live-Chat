import { AppBar, Box, Button, Toolbar, Typography } from "@mui/material";
import { useContext } from "react";
import { Context } from "../context/contextAuth";
import NavbarMenu from "./NavbarMenu";

const Navbar = () => {
  const { userData } = useContext(Context);
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ background: "black" }}>
        <Toolbar>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, marginLeft: 10 }}
          >
            LIVE CHAT
          </Typography>
          {userData && <NavbarMenu userData={userData} />}
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navbar;
