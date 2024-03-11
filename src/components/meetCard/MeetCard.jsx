import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

export default function MeetCard() {
  return (
    <Card sx={{ minWidth: 180, borderRadius: "8%", margin: 2 }}>
      <CardContent>
        <Typography sx={{ fontSize: 16 }} color="text.primary" gutterBottom>
          Title of the meeting
        </Typography>

        <Typography sx={{ fontSize: 13.5 }} variant="body2">
          3 peoples
        </Typography>
        <Typography sx={{ mt: 1.5, fontSize: 13 }} color="text.secondary">
          12/12/2024
        </Typography>
      </CardContent>
    </Card>
  );
}
