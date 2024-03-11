import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import { Link } from "react-router-dom";

export default function ProjectCard({ project }) {
  return (
    <Card sx={{ maxWidth: 345, margin: 2, borderRadius: "5%" }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} src={project.photo}>
            {!project.sharedBy?.photo && project.sharedBy?.name.charAt(0)}
          </Avatar>
        }
        title={project.sharedBy?.name}
        subheader={project.sharedBy?.email}
      />
      <Link to="/projects/1">
        <CardMedia
          component="img"
          height="194"
          image={project.covers && project.covers[0]}
          alt="project image"
        />
      </Link>
      <CardContent>
        <Typography
          variant="body2"
          color="text.secondary"
          sx={{
            overflow: "hidden",
            textOverflow: "ellipsis",
            display: "-webkit-box",
            WebkitLineClamp: "2",
            WebkitBoxOrient: "vertical",
          }}
        >
          {project.description}
        </Typography>
      </CardContent>
    </Card>
  );
}
