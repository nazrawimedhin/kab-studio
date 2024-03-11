import React from "react";
import SideBar from "../components/sideBar/SideBar";
import { Stack, Typography, Divider } from "@mui/material";
import { meets } from "../data/data";
import MeetCard from "../components/meetCard/MeetCard";
import MeetDetail from "../components/meetDetail/MeetDetail";
import Category from "../components/category/Category";

function Meets() {
  return (
    <Stack direction="row">
      <SideBar />
      <Divider orientation="vertical" />
      <Stack sx={{ width: "100%" }}>
        <Typography mt={10} ml={10} mb={5} sx={{ fontSize: 26 }}>
          Scheduled Meetings
        </Typography>
        <Category />
        <Stack
          direction="row"
          my={2}
          mx={8}
          sx={{ overflow: "auto", maxWidth: 1000 }}
        >
          {meets.map((meet, index) => (
            <React.Fragment key={index}>
              <MeetCard />
            </React.Fragment>
          ))}
        </Stack>
        <MeetDetail />
      </Stack>
    </Stack>
  );
}

export default Meets;
