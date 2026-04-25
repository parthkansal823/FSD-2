import {Box,Typography,Container,Grid,Card,CardContent,Stack} from "@mui/material";
import RestaurantIcon from "@mui/icons-material/Restaurant";
import SpaIcon from "@mui/icons-material/Spa";
import LocalDiningIcon from "@mui/icons-material/LocalDining";
import EmojiFoodBeverageIcon from "@mui/icons-material/EmojiFoodBeverage";

function About() {
  return (
    <>
      <Box sx={{ py: 6 }}>
        <Container maxWidth="md">
          <Stack spacing={2} alignItems="center" textAlign="center">
            <RestaurantIcon sx={{ fontSize: 50, color: "#7b1c1c" }} />
            <Typography variant="h3" fontWeight="bold">About PIND & SPICE</Typography>
            <Typography>Authentic Punjabi Flavors • Pure Vegetarian • Fresh Ingredients</Typography>
          </Stack>
        </Container>
      </Box>

      <Container maxWidth="md">
        <Typography textAlign="center" sx={{ mb: 5 }}>
          PIND & SPICE is a pure vegetarian Punjabi restaurant located on Kharar Road, Mohali. 
          We bring the true taste of Punjab using traditional recipes and fresh, high-quality ingredients in a hygienic and welcoming environment.
        </Typography>

        <Grid container spacing={3} justifyContent="center">
          <Grid item xs={3}>
            <Card>
              <CardContent>
                <Stack direction="row" spacing={2} alignItems="center">
                  <SpaIcon color="success" />
                  <Typography variant="h6">Pure Vegetarian</Typography>
                </Stack>
                <Typography color="text.secondary" sx={{ mt: 1 }}>100% vegetarian food prepared with fresh ingredients.</Typography>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={3}>
            <Card>
              <CardContent>
                <Stack direction="row" spacing={2} alignItems="center">
                  <LocalDiningIcon color="error" />
                  <Typography variant="h6">Punjabi Taste</Typography>
                </Stack>
                <Typography color="text.secondary" sx={{ mt: 1 }}>Traditional Punjabi flavors using classic recipes.</Typography>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={3}>
            <Card>
              <CardContent>
                <Stack direction="row" spacing={2} alignItems="center">
                  <EmojiFoodBeverageIcon color="warning" />
                  <Typography variant="h6">Quality Ingredients</Typography>
                </Stack>
                <Typography color="text.secondary" sx={{ mt: 1 }}>Premium spices and ingredients for rich taste.</Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}

export default About;