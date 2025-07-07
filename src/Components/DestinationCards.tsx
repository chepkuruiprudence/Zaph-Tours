// import * as React from "react";
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
  Stack
} from "@mui/material";

interface DestinationCardProps {
  img: string;
  title: string;
  description: string;
  pricepergroup: string;
  priceperindividual: string;
}

const DestinationCard: React.FC<DestinationCardProps> = ({
  img,
  title,
  description,
  pricepergroup,
  priceperindividual,
}) => {
  return (
    <Card sx={{ width: 300, margin: 2, borderRadius: "10px", boxShadow: 3, transition: "transform 0.3s ease-in-out", "&:hover": { transform: "scale(1.05)" } }}>
      <CardMedia
        component="img"
        height="180"
        image={img}
        alt={title}
        sx={{ objectFit: "cover" }}
      />
      <CardContent sx={{ textAlign: "center", padding: 2 }}>
        <Typography gutterBottom variant="h5" component="div" color="purple">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
        <Stack direction="row" spacing={2} sx={{ color: "purple", marginTop: 2, justifyContent: "center" }}>
          <Button variant="contained" sx={{ backgroundColor: "Purple", color: "white" }}>
            Group: {pricepergroup}
          </Button>
          <Button variant="contained" sx={{ backgroundColor: "Purple", color: "white" }}>
            Individual: {priceperindividual}
          </Button>
        </Stack>
      </CardContent>
      <CardActions>
        <Button size="medium" variant="outlined">Learn More</Button>
      </CardActions>
    </Card>
  );
};

export default DestinationCard;
