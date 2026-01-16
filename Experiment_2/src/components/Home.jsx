import {Box,Typography,Button,Stack,Container} from "@mui/material";
import { Link } from "react-router-dom";
import RestaurantIcon from "@mui/icons-material/Restaurant";
import LocalDiningIcon from "@mui/icons-material/LocalDining";
import DeliveryDiningIcon from "@mui/icons-material/DeliveryDining";

function Home() {
  return (
    <>
      <Box
        sx={{
          background: "linear-gradient(135deg, #7b1c1c, #b71c1c)",
          color: "white",
          py: { xs: 6, md: 10 }
        }}
      >
        <Container maxWidth="md">
          <Stack spacing={3} alignItems="center" textAlign="center">
            <RestaurantIcon sx={{ fontSize: 70 }} />

            <Typography variant="h2" fontWeight="bold">PIND & SPICE</Typography>
            <Typography variant="h6">Authentic Pure Veg Punjabi Restaurant</Typography>

            <Stack
              direction={{ xs: "column", sm: "row" }}
              spacing={2}
              sx={{ mt: 2 }}
            >
              <Button
                size="large"
                variant="contained"
                startIcon={<LocalDiningIcon />}
                component={Link}
                to="/menu"
              >View Menu</Button>

              <Button
                size="large"
                variant="outlined"
                color="inherit"
                startIcon={<DeliveryDiningIcon />}
                component="a"
                href="https://www.swiggy.com/city/chandigarh/pind-and-spice-greater-mohali-rest1279371"
                target="_blank"
                rel="noopener noreferrer"
              >Order Online</Button>
            </Stack>
          </Stack>
        </Container>
      </Box>
    </>
  );
}

export default Home;
