import React from "react";
import SideBar from "../components/sideBar/SideBar";
import { Stack, Typography } from "@mui/material";
import ProjectCard from "../components/projectCard/ProjectCard";
import { projects } from "../data/data";
import Category from "../components/category/Category";

function Projects() {
  return (
    <Stack direction="row">
      <SideBar />
      <Stack sx={{ width: "100%" }} ml={5}>
        <Typography mt={10} ml={10} mb={5} sx={{ fontSize: 26 }}>
          Shared Projects
        </Typography>
        <Category />
        <Stack
          direction="row"
          my={2}
          mx={8}
          sx={{
            flexWrap: "wrap",
          }}
        >
          {projects.map((project, index) => (
            <React.Fragment key={index}>
              <ProjectCard project={project} />
            </React.Fragment>
          ))}
        </Stack>
      </Stack>
    </Stack>
  );
}

export default Projects;
