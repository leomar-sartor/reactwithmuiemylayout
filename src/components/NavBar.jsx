import {
  AppBar,
  IconButton,
  Toolbar,
  Typography,
  useTheme
} from "@mui/material";
import React from "react";
import MenuIcon from "@mui/icons-material/Menu";

const NavBar = () => {

  const theme = useTheme();
  
  return (
    <AppBar position="sticky" sx={{ zIndex: 1201 }}>
      <Toolbar>
        <Typography sx={{ ml: 2 }} variant="h6">
          MEU LAYOUT
        </Typography>

        <IconButton color="inherit" sx={{ ml: 4 }}>
          <MenuIcon />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
