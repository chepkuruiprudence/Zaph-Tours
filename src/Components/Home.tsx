import {
  Box,
  Typography,
  Button,
  Container,
  Stack,
  CardContent,
  CardActions,
  TextField,
} from "@mui/material";
import HeroImageSrc from "../assets/images/HeroSection.jpg";
import Testimonials from "./Testimonials";
import Card from "@mui/material/Card";
import Destinationshome from "./Destinationshome";


export default function HeroImage() {
  return (
    <>
      <Box
        sx={{
          height: "100vh",
          backgroundImage: `url(${HeroImageSrc})`,
          backgroundBlendMode: "overlay",
          backgroundColor: "rgba(0, 0, 0, 0.5)",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          alignItems: "center",
          justifyContent: "center",
          color: "#fff",
          textAlign: "center",
          borderRadius: "10px",
          boxShadow: "0 4px 20px rgba(0, 0, 0, 0.3)",
          "&:hover": {
            boxShadow: "0 8px 30px rgba(172, 50, 50, 0.4)",
          },
          transition: "box-shadow 0.3s ease-in-out",
         
          marginTop: 4,
          overflow: "hidden",
          backgroundSize: "cover"

        }}
      >
        <Container
          sx={{
            marginTop: "40vh",
          }}
        >
          <Typography variant="h2" gutterBottom sx={{ fontWeight: "bold", color: "#fff" }}>
            Best safaris and adventures
          </Typography>
          <Typography variant="h6" gutterBottom>
            Travel to wherever whenever at our comfort.
          </Typography>
          <Button
            variant="contained"
            color="secondary"
            size="large"
            sx={{ mt: 3, borderRadius: "30px", fontWeight: "bold" }}
          >
            Get Started
          </Button>
        </Container>
      </Box>

      <Card
        sx={{
          padding: 4,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 2,
          marginTop: 4,
          width: "50%",
          justifyContent: "center",
          backgroundColor: "#f1f2f6",
          marginLeft: "auto",
          marginRight: "auto",
        }}
      >
        <CardContent>
          <Typography
            variant="h4"
            component="div"
            sx={{
              fontWeight: "bold",
              color: "purple",
              justifyContent: "center",
              textAlign: "center",
            }}
          >
            About Us
          </Typography>
          <Typography
            variant="body1"
            color="text.secondary"
            sx={{ textAlign: "center", marginTop: 2 }}
          >
            Welcome to Zaph Tours, your gateway to unforgettable adventures
            across Kenya and East Africa. We specialize in providing seamless
            travel experiences, connecting you with the best safaris, cultural
            tours, and natural wonders. Whether you're seeking thrilling
            wildlife encounters or serene landscapes, our expert team is here to
            make your journey extraordinary.
          </Typography>
        </CardContent>
      </Card>
      <Destinationshome />
      <Testimonials />

      <Card
        sx={{
          maxWidth: 1000,
          margin: "auto",
          marginTop: 4,
          padding: 4,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 2,
          backgroundColor: "#f1f2f6",
        }}
      >
        <CardContent>
          <Typography
            variant="h4"
            component="div"
            sx={{ fontWeight: "bold", textAlign: "center", color: "purple" }}
          >
            Stay up to date with our newsletter.
          </Typography>
          <Typography
            variant="h6"
            color="text.secondary"
            sx={{ textAlign: "center", marginTop: 2 }}
          >
            Subscribe to our news letter and get the latest news on the latest
            travels and adventures.
          </Typography>
          <Stack>
            <TextField
              variant="outlined"
              placeholder="Enter your email.."
              sx={{ padding: 4 }}
            ></TextField>
          </Stack>
        </CardContent>
        <CardActions>
          <Button variant="contained" color="primary">
            Subscribe
          </Button>
        </CardActions>
      </Card>
    </>
  );
}

// const ItemData = [
//   {
//     img: CoastalKenya,
//     title: "Coastal Kenya",
//   },
//   {
//     img: LakeNakuru,
//     title: "Lake Nakuru",
//   },
//   {
//     img: MtRuwenzori,
//     title: "Mt. Ruwenzori",
//   },

//   {
//     img: MtKilimanjaro,
//     title: "Mt. Kilimanjaro",
//   },
//   {
//     img: NairobiNationalPark,
//     title: "Nairobi National Park",
//   },
//   {
//     img: TsavoNationalPark,
//     title: "Tsavo National Park",
//   },
// ];
