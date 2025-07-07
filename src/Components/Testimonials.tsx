import {
  CardMedia,
  CardContent,
  Typography,
  Card,
  Button,
  CardActions,
  Box,
} from "@mui/material";
import TestimonialData from "../Data/Testimoniallist";

const Testimonials = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        padding: 2,
        backgroundColor: "#f4f4f4",
      }}
    >
      {TestimonialData.map((testimonial) => (
        <Card
          sx={{
            maxWidth: 500,
            margin: 2,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            border: "1px solid #ccc",
            borderRadius: "10px",
            boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
            
          }}
          key={testimonial.id}
        >
          <Card
            sx={{
              width: "100%",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              padding: 2,
              backgroundColor: "#e5e5e5",
            }}
          >
            <CardMedia
              component={"img"}
              height="140"
              image={testimonial.image}
              alt="Testimonial Image"
              sx={{
                borderRadius: "50%",
                width: 150,
                height: 150,
                marginTop: 2,
                backgroundColor: "grey",
                objectFit: "cover",
                
              }}
            />
          </Card>
          <Card
            sx={{
              width: "100%",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              padding: 2,
              backgroundColor: "#f1f2f6",
            }}
          >
            <CardContent>
              <Typography
                gutterBottom
                variant="h5"
                component="div"
                sx={{
                  fontWeight: "bold",
                  textAlign: "center",
                  color: "purple",
                }}
              >
                {testimonial.name}
              </Typography>
              <Typography variant="h6" color="text.secondary">
                {testimonial.comment}
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">Read More</Button>
            </CardActions>
          </Card>
        </Card>
      ))}
    </Box>
  );
};

export default Testimonials;
