import { Container, Stack, Typography } from "@mui/material";
import React from "react";

function Header() {
  return (
    <Container sx={{ alignItems: "center", width: "100%" }}>
      <Stack direction="row" mt={6}>
        <Typography mx={10}>Home</Typography>
        <Typography mx={5}>Services</Typography>
        <Typography mx={10}>About</Typography>
      </Stack>
    </Container>
  );
}

export default Header;
