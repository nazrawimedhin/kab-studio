import { Avatar, Card, Divider, Stack, Typography } from "@mui/material";
import { meets } from "../../data/data";
import person1 from "../../assets/person1.jpg";

function MeetDetail() {
  const participants = meets[0].participants;

  return (
    <Stack direction="row" spacing={4} mx={8} mt={3}>
      <Card sx={{ width: "50%", boxShadow: "initial" }}>
        <Typography m={2} fontSize={21}>
          Title of the meeting
        </Typography>
        <Typography m={3}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet ut
          facere accusantium dolorem commodi repellendus! Mollitia ratione
          facilis totam magnam eligendi commodi repellendus!
        </Typography>
        <Typography sx={{ mb: 1, fontSize: 14, ml: 3 }} color="text.secondary">
          12/12/2024
        </Typography>
        <Typography variant="body2" ml={3} mt={2}>
          3 peoples
        </Typography>
      </Card>
      <Divider orientation="vertical" />
      <Card sx={{ boxShadow: "initial" }}>
        <Typography m={2} fontSize={22}>
          Participants
        </Typography>
        {participants.map((meet, index) => (
          <Stack m={2} direction="row" alignItems={"center"} key={index}>
            <Avatar
              sx={{ height: 25, width: 25, marginRight: 1 }}
              src={person1}
            />
            <Typography m={1}>John Doe</Typography>
            <Divider orientation="vertical" />
            <Typography m={1}>jhondoe@gmail.com</Typography>
          </Stack>
        ))}
      </Card>
    </Stack>
  );
}

export default MeetDetail;
