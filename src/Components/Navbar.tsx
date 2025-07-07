import {
  AppBar,
  Typography,
  Toolbar,
  Stack,
  Button,
  IconButton,
} from "@mui/material";
import NatureIcon from "@mui/icons-material/Nature";
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from "react-router-dom";

const Navbar = () => {
  // const pages = ["Home", "Destinations", "Trip Types", "Contact Us"];
  return (
    <AppBar
      position="static"
      sx={{
        backgroundColor: "#000033",
        color: "white",
        boxShadow: 3,
        width: "100%",
      }}
    >
      <Toolbar>
        <IconButton
          size="large"
          edge="start"
          aria-label="logo"
          sx={{
            display: { xs: "none", sm: "block", md: "flex", color: "inherit" },
          }}
        >
          <NatureIcon />
        </IconButton>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1, fontSize: "16px"}}>
          Zaph Tours
        </Typography>

        <Stack direction={"row"} spacing={2} sx={{ flexGrow: 1, }}>
          <Button sx={{ color: "white", fontSize: "16px" }} component={Link} to="/">
            Home
          </Button>
          <Button
            sx={{ color: "white", fontSize: "16px" }}
            component={Link}
            to="/DestinationCards"
          >
            Destinations
          </Button>
          <Button sx={{ color: "white", fontSize: "16px" }} component={Link} to="/Triptypes">
            Trip Types
          </Button>
          <Button sx={{ color: "white", fontSize: "16px" }} component={Link} to="/Contact">
            Contact Us
          </Button>
        </Stack>
        <IconButton edge="start" aria-label="menu" sx={{ mr: 2, color: "white", fontSize: "16px" }}>
      <MenuIcon />
    </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
