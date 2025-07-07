import { Card, CardContent, Button, Typography, Box } from "@mui/material";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import tripPackages from "../Data/Triptypelist";

const TripTypes = () => {
  return (
    <Box
      sx={{
    display: "flex",
    flexWrap: "wrap",
    gap: 2,
    padding: 3,
    width: "100%",
    justifyContent: "space-evenly"
      }}
    >
      
      {tripPackages.map((trip) => (
        <Card
          key={trip.id}
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "centre",
            justifyContent: "centre",
            height: 450,
            marginBottom: 4,
            border: "2px solid #f4f4f4",
            transition: "transform 0.3s ease-in-out",
            "&:hover": { transform: "scale(1.05)" },
            width: "30%"
          }}
        >
          <Carousel
            showThumbs={false}
            showStatus={false}
            infiniteLoop
            autoPlay
            stopOnHover
          >
            {trip.images.map((imageUrl, index) => (
              <div key={index} style = {{border: "5px solid green",height: "200px", objectFit: "cover" }}>
                <img
                  src={imageUrl}
                  alt={`${trip.title} ${index + 1}`}
                  style={{ height: "200px", objectFit: "cover" }}
                />
              </div>
            ))}
          </Carousel>
          <CardContent>
            <Typography
              variant="h6"
              sx={{ fontWeight: "bold", mb: 1, color: "purple" }}
            >
              {trip.title}
            </Typography>
            <Typography variant="body2" color="black">
              {trip.description}
            </Typography>
            <Button variant="outlined"  sx={{ mt: 1, color: "green", margin: 2 }}>
              {trip.pricing}
            </Button>
          </CardContent>
        </Card>
      ))}
    </Box>
  );
};

export default TripTypes;
