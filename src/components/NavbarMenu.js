import {
  Avatar,
  Box,
  IconButton,
  Menu,
  MenuItem,
  Tooltip,
  Typography,
} from "@mui/material";
import { useContext, useState } from "react";
import { signOut } from "firebase/auth";
import { Context } from "../context/contextAuth";

const settings = ["Logout"];

const NavbarMenu = () => {
  const [anchorElUser, setAnchorElUser] = useState(null);
  const { auth, userData, setUserData } = useContext(Context);

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  // TODO onAuthStateChanged  сделать синхронизацию с юзером, firestore.collection.add(orderBy) создать базу данных

  const handleLogout = async () => {
    try {
      const signout = await signOut(auth);
      console.log(userData);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Box sx={{ flexGrow: 0, marginRight: 10 }}>
      <Tooltip title="Open settings">
        <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
          <Avatar alt="Remy Sharp" src={userData?.photoURL} />
        </IconButton>
      </Tooltip>
      <Menu
        sx={{ mt: "45px" }}
        id="menu-appbar"
        anchorEl={anchorElUser}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        keepMounted
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        open={Boolean(anchorElUser)}
        onClose={handleCloseUserMenu}
      >
        {settings.map((setting) => (
          <MenuItem key={setting} onClick={handleCloseUserMenu}>
            <Typography textAlign="center" onClick={handleLogout}>
              {setting}
            </Typography>
          </MenuItem>
        ))}
      </Menu>
    </Box>
  );
};

export default NavbarMenu;
