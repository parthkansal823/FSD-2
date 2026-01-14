import {
  Box,
  Typography,
  Container,
  List,
  ListItem,
  ListItemText,
  Divider
} from "@mui/material";

function Menu() {
  return (
    <Container maxWidth="md" sx={{ mt: 6 }}>
      <Box textAlign="center" sx={{ mb: 4 }}>
        <Typography variant="h3" fontWeight="bold">Our Menu</Typography>
        <Typography color="text.secondary">Authentic Pure Veg Punjabi Dishes</Typography>
      </Box>

      <List>
        <ListItem secondaryAction={<Typography fontWeight="bold">₹250</Typography>}>
            <ListItemText primary="Paneer Butter Masala" />
        </ListItem>
        
        <Divider />

        <ListItem secondaryAction={<Typography fontWeight="bold">₹200</Typography>}>
          <ListItemText primary="Dal Makhani" />
        </ListItem>
        
      </List>
    </Container>
  );
}

export default Menu;
