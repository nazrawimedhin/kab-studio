import {
  Stack,
  Typography,
  Divider,
  CardHeader,
  Avatar,
  Grid,
} from "@mui/material";
import FolderIcon from "@mui/icons-material/Folder";
import React from "react";
import { red } from "@mui/material/colors";
import { styled } from "@mui/material/styles";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ListItemText from "@mui/material/ListItemText";
import ProjectCarousel from "../components/projectCarausel/ProjectCarausel";
import { projects } from "../data/data";

const Demo = styled("div")(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
}));

function generate(element) {
  return [0, 1, 2].map((value) =>
    React.cloneElement(element, {
      key: value,
    })
  );
}

function Project() {
  const project = projects[0];

  return (
    <Stack
      direction="row"
      spacing={5}
      sx={{
        margin: 10,
      }}
    >
      <Stack sx={{ width: "50%" }}>
        <ProjectCarousel covers={project.covers} />
        <CardHeader
          sx={{ marginTop: 1 }}
          avatar={
            <Avatar sx={{ bgcolor: red[500] }} src={project.photo}>
              {!project.sharedBy?.photo && project.sharedBy?.name.charAt(0)}
            </Avatar>
          }
          title={project.sharedBy?.name}
          subheader={project.sharedBy?.email}
        />
      </Stack>
      <Stack ml={2} sx={{ width: "70%" }}>
        <Typography
          sx={{
            fontSize: 26,
            marginBottom: 4,
          }}
        >
          {project.title}
        </Typography>
        <Typography
          sx={{
            fontSize: 18,
            marginBottom: 7,
          }}
        >
          {project.description}
        </Typography>
        <Divider />
        <Typography sx={{ mt: 4, mb: 2 }} variant="h6" component="div">
          Attached Files
        </Typography>
        <Grid>
          <Demo>
            <List sx={{ display: "flex" }}>
              {generate(
                <ListItem>
                  <ListItemAvatar>
                    <Avatar>
                      <FolderIcon />
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText
                    primary="File One"
                    secondary="Few descriptions"
                  />
                </ListItem>
              )}
            </List>
          </Demo>
        </Grid>
      </Stack>
    </Stack>
  );
}

export default Project;
