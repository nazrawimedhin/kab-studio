import Box from "@mui/material/Box";
import SpeedDial from "@mui/material/SpeedDial";
import SpeedDialIcon from "@mui/material/SpeedDialIcon";
import SpeedDialAction from "@mui/material/SpeedDialAction";
import AddCardIcon from "@mui/icons-material/AddCard";
import CreateNewFolderIcon from "@mui/icons-material/CreateNewFolder";

const actions = [
  { icon: <AddCardIcon />, name: "Create Meeting" },
  { icon: <CreateNewFolderIcon />, name: "Share Project" },
];

export default function Dial() {
  return (
    <Box sx={{ height: 320, transform: "translateZ(0px)", flexGrow: 1 }}>
      <SpeedDial ariaLabel="SpeedDial basic example" icon={<SpeedDialIcon />}>
        {actions.map((action) => (
          <SpeedDialAction
            key={action.name}
            icon={action.icon}
            tooltipTitle={action.name}
          />
        ))}
      </SpeedDial>
    </Box>
  );
}
