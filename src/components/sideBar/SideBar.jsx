import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import GroupsIcon from "@mui/icons-material/Groups";
import DashboardIcon from "@mui/icons-material/Dashboard";
import Dial from "../dial/Dial";
import { useNavigate } from "react-router-dom";
import logo from "../../assets/logo.jfif";

function SideBar() {
  const navigate = useNavigate();

  const handleClick = (link) => {
    navigate(`/${link}`);
  };

  return (
    <Box sx={{ width: 200, position: "sticky" }} role="presentation">
      <Box
        component="img"
        src={logo}
        sx={{
          width: 120,
          height: 120,
          borderRadius: "50%",
          margin: 5,
        }}
      />
      <List>
        <ListItem
          onClick={() => {
            handleClick("meets");
          }}
        >
          <ListItemButton sx={{ marginY: 2 }}>
            <ListItemIcon>
              <GroupsIcon />
            </ListItemIcon>
            <ListItemText primary="Meetings" />
          </ListItemButton>
        </ListItem>

        <ListItem
          onClick={() => {
            handleClick("projects");
          }}
        >
          <ListItemButton sx={{ marginY: 2 }}>
            <ListItemIcon>
              <DashboardIcon />
            </ListItemIcon>
            <ListItemText primary="Projects" />
          </ListItemButton>
        </ListItem>
      </List>
      <Dial />
    </Box>
  );
}

export default SideBar;
