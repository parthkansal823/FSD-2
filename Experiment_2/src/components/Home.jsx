import {Box,Typography,Button,Stack,Container,Rating,FormControl,Select,MenuItem} from "@mui/material";
import { Link } from "react-router-dom";
import RestaurantIcon from "@mui/icons-material/Restaurant";
import LocalDiningIcon from "@mui/icons-material/LocalDining";

function Home() {
  return (
    <Box sx={{background: "#7b1c1c", color: "white",py: { xs: 6, md: 10 }}}>
      <Container>
        <Stack spacing={1} alignItems="center" textAlign="center">
          <RestaurantIcon sx={{ fontSize: 70 }} />
          <Typography variant="h2" fontWeight="bold">PIND & SPICE</Typography>
          <Typography variant="h5" sx={{ opacity: 0.4 }}>Authentic Pure Veg Punjabi Restaurant</Typography>

          <Stack>
            <Typography variant="h6">Rate the Food!</Typography>
            <Rating defaultValue={4} precision={0.5} />
          </Stack>

          <Stack direction={{ xs: "column", sm: "row" }} spacing={2} sx={{ mt: 2 }}>
            <Button
              size="large"
              variant="contained"
              startIcon={<LocalDiningIcon />}
              component={Link}
              to="/menu"
            >View Menu
            </Button>

            <FormControl size="medium" sx={{minWidth: 180,backgroundColor: "white",borderRadius: 1}}>
              <Select
                displayEmpty
                defaultValue=""
                onChange={(e) => {
                  if (e.target.value) {
                    window.open(e.target.value, "_blank");
                  }
                }}
              >
                <MenuItem value="" disabled>Order Online</MenuItem>
                <MenuItem value="https://www.swiggy.com/city/chandigarh/pind-and-spice-greater-mohali-rest1279371">Swiggy</MenuItem>
                <MenuItem value="https://www.zomato.com/chandigarh/pind-spice-kharar-road-mohali">Zomato</MenuItem>
              </Select>
            </FormControl>
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
}

export default Home;