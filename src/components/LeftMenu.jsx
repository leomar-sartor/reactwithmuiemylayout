import { Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import React from "react";
import InboxIcon from "@mui/icons-material/Inbox";
import DraftsIcon from "@mui/icons-material/Drafts";

const LeftMenu = () => {

  return (
      <Drawer
        variant="persistent"
        open={false}
        anchor="left"
        PaperProps={{
          sx: {
            paddingTop: "80px",
            width: "270px"
          }
        }}
      >
        <List>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <InboxIcon />
              </ListItemIcon>
              <ListItemText primary="Home" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <DraftsIcon />
              </ListItemIcon>
              <ListItemText primary="Sobre" />
            </ListItemButton>
          </ListItem>
        </List>
      </Drawer>
  );
};

export default LeftMenu;
