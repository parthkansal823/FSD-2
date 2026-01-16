import { Grid, Card, CardContent, Typography } from "@mui/material";
import RestaurantIcon from "@mui/icons-material/Restaurant";
import DeliveryDiningIcon from "@mui/icons-material/DeliveryDining";
import EventIcon from "@mui/icons-material/Event";

function Services() {
  return (
    <Grid container spacing={3}>
      <Grid item xs={12} md={4}>
        <Card>
          <CardContent>
            <RestaurantIcon color="error" />
            <Typography variant="h6">Dine-In</Typography>
            <Typography>Comfortable seating & Punjabi ambiance</Typography>
          </CardContent>
        </Card>
      </Grid>

      <Grid item xs={12} md={4}>
        <Card>
          <CardContent>
            <DeliveryDiningIcon color="warning" />
            <Typography variant="h6">Online Delivery</Typography>
            <Typography>Fast delivery via Zomato & Swiggy</Typography>
          </CardContent>
        </Card>
      </Grid>

      <Grid item xs={12} md={4}>
        <Card>
          <CardContent>
            <EventIcon color="success" />
            <Typography variant="h6">Catering</Typography>
            <Typography>Party & event catering services</Typography>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
}

export default Services;
