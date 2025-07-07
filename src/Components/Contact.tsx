import {
  Box,
  Container,
  Button,
  TextField,
  Typography,
  CardContent,
  CardActions,
  
} from "@mui/material";
import Card from "@mui/material/Card";
import MailIcon from "@mui/icons-material/Mail";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import PhoneInTalkIcon from "@mui/icons-material/PhoneInTalk";
import InstagramIcon from "@mui/icons-material/Instagram"
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import XIcon from '@mui/icons-material/X';
import FacebookIcon from '@mui/icons-material/Facebook';
import YouTubeIcon from '@mui/icons-material/YouTube';

const Contact = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#f4f4f4",
        padding: 4,
        gap: 2,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Container
        sx={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          gap: 2,
          maxWidth: "800px",
        }}
      >
        <Card
          sx={{
            padding: 4,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 4,
            backgroundColor: "#caf0f8",
            width: "50%",
            height: "70vh",
          }}
        >
          <CardContent
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: 2,
              color: "#000",
            }}
          >
            <Typography variant = "h3" sx={{ textAlign: "center", marginBottom: 2, color: "purple" }}>
            Contact Us
            </Typography>
            <Typography variant = "h6" sx={{ textAlign: "center", marginBottom: 2 }}>
            <p>
              We would love to hear from you! Please reach out with any
              questions or feedback.
            </p>
            </Typography>
            <TextField variant="outlined" placeholder="Enter your name" sx ={{backgroundcolor: "#fff"}}>
              Name
            </TextField>
            <TextField variant="outlined" placeholder="Enter your email">
              Email
            </TextField>
            <TextField
              variant="outlined"
              multiline
              rows={4}
              placeholder="Your message here..."
            />
            <CardActions sx={{ justifyContent: "center", marginTop: 2 }}>
              <Button variant="contained" color="primary">
                Subscribe
              </Button>
            </CardActions>
          </CardContent>
        </Card>

        

        <Box>
          <Card
            sx={{
              padding: 4,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: 2,
              backgroundColor: "#caf0f8",
              width: "100%",
              height: "70vh",
            }}
          >
            <Typography
              variant="h3"
              sx={{ textAlign: "center", marginBottom: 2, color: "purple" }}
            >
              Contact Info
            </Typography>
            <Card sx = {{ margin: 1, padding: 2, backgroundColor: "#fff", width: "50%" }}>
              <CardContent>
                <a href="mailto:chepkuruiprudence403@gmail.com">
                  <MailIcon sx={{color: "Navy"}}/>
                  <Typography variant="body2" sx={{color: "Navy"}}> chepkuruiprudence403@gmail.com</Typography>
                </a>
              </CardContent>
            </Card>
            <Card sx = {{ margin: 1, padding: 2, backgroundColor: "#fff", width: "50%" }}>
              <CardContent>
                <a href="https://wa.me/254712345789">
                  <WhatsAppIcon sx={{color: "Navy"}}/>
                  <Typography variant="body2" sx={{color: "Navy"}}>+254 712345789</Typography>
                </a>
              </CardContent>
            </Card>
            <Card sx = {{ margin: 1, padding: 2, backgroundColor: "#fff", width: "50%" }}>
              <CardContent>
                <a href="tel:+254712345789">
                  <PhoneInTalkIcon sx={{color: "Navy"}} />
                  <Typography variant="body2" sx={{color: "Navy"}}>Address: P.O. Box 123, Nairobi, Kenya</Typography>
                </a>
              </CardContent>
            </Card>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.5067340724604!2d37.147217600000005!3d-0.7160659999999976!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x18289873299b19ed%3A0x97675389aba81506!2sM%C5%A8RANG&#39;A%20UNIVERSITY%20OF%20TECHNOLOGY%20y!5e0!3m2!1sen!2ske!4v1751548542100!5m2!1sen!2ske" width="600" height="450" style={{border:0,}} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>            
          </Card>
          
        </Box>


      </Container>

      <Box sx = {{backgroundColor: "#caf0f8", padding: 4, marginTop: 4, display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "center", gap: 4, width: "100%", }}>
        
        <Card
          sx={{
            padding: 4,
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            gap: 2,
            backgroundColor: "",
          }}
        >
          <Typography variant="h4" sx={{ textAlign: "center", marginBottom: 2,color: "purple" }}>
          Our Socials
        </Typography>
          <Card sx={{ margin: 1, padding: 2, backgroundColor: "#", color: "purple",  }}>
            <CardContent>
            <a href="https://www.instagram.com/ItsPruddie">
                <InstagramIcon sx={{color: "Navy"}} />
                <Typography variant="body2" sx={{color: "Navy"}}>@ZaphTours</Typography>
              </a>
            </CardContent>
          </Card>
          <Card>
            <CardContent>
              <a href="https://www.linkedin.com/in/prudence-chepkurui-8709a2284/">
              <LinkedInIcon sx={{color: "Navy"}}/>
              <Typography variant="body2" sx={{color: "Navy"}}>@ZaphTours</Typography>
              </a>
            </CardContent>
          </Card>
          <Card>
            <CardContent>
              <a href="https://x.com/Pruddy_gee3">
                <XIcon sx={{color: "Navy"}} />
                <Typography variant="body2" sx={{color: "Navy"}}>@ZaphTours</Typography>
              </a>
            </CardContent>
          </Card>
          <Card>
            <CardContent>
              <a href="https://wa.me/254712345789">
                <FacebookIcon sx={{color: "Navy"}} />
                <Typography variant="body2" sx={{color: "Navy"}}>+254 712345789</Typography>
              </a>
            </CardContent>
          </Card>
          <Card>
            <CardContent>
              <a href="https://instagram.com/ItsPruddie">
                <YouTubeIcon sx={{color: "Navy"}} />
                <p> @ZaphTours</p>
              </a>
            </CardContent>
          </Card>
        </Card>
        <Card>
              <CardContent>
                <Typography variant = "h4" sx={{ textAlign: "center", marginTop: 2, color: "purple" }}>
                  Office Hours
                </Typography>
                <Typography variant="body1" sx={{ textAlign: "center", marginTop: 1 , color: "black", fontWeight: "bold"}}>
                  We are available <div style={{
                    textAlign: "center",
                    marginTop: 1,
                    color: "Navy",
                  }}>Monday to Friday from 9 AM to 5 PM.</div>
                  <div style={{
                    textAlign: "center",
                    marginTop: 1,
                    color: "Navy",
                  }}>Saturday from 10 AM to 4 PM.</div> 
                </Typography>
              </CardContent>
            </Card>
      </Box>
    </Box>

  );
};

export default Contact;
