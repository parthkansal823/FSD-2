import {Box,Typography,Container,List,ListItem,ListItemText,Divider,Checkbox} from "@mui/material";

function Menu() {
  return (
    <Container maxWidth="md" sx={{ mt: 4 }}>
      <Box textAlign="center">
        <Typography variant="h3" fontWeight="bold">Our Menu</Typography>
        <Typography color="text.secondary">Pure Veg • Healthy • Light</Typography>
      </Box>

      <List>
        <ListItem secondaryAction={<Typography fontWeight="bold">₹210</Typography>}>
          <Checkbox /> <ListItemText primary="Protein Veg Bowl" />
        </ListItem>
        <Divider />

        <ListItem secondaryAction={<Typography fontWeight="bold">₹190</Typography>}>
          <Checkbox /><ListItemText primary="Grilled Paneer Plate" />
        </ListItem>
        <Divider />

        <ListItem secondaryAction={<Typography fontWeight="bold">₹180</Typography>}>
          <Checkbox /><ListItemText primary="Steamed Veg Mix" />
        </ListItem>
        <Divider />

        <ListItem secondaryAction={<Typography fontWeight="bold">₹170</Typography>}>
          <Checkbox /><ListItemText primary="Veggie Power Salad" />
        </ListItem>
        <Divider />

        <ListItem secondaryAction={<Typography fontWeight="bold">₹160</Typography>}>
          <Checkbox /><ListItemText primary="Whole Grain Sandwich" />
        </ListItem>
        <Divider />

        <ListItem secondaryAction={<Typography fontWeight="bold">₹150</Typography>}>
          <Checkbox /><ListItemText primary="Quinoa Veg Bowl" />
        </ListItem>
        <Divider />

        <ListItem secondaryAction={<Typography fontWeight="bold">₹140</Typography>}>
          <Checkbox /><ListItemText primary="Fresh Green Salad" />
        </ListItem>
        <Divider />

        <ListItem secondaryAction={<Typography fontWeight="bold">₹130</Typography>}>
          <Checkbox /><ListItemText primary="Clear Veg Soup" />
        </ListItem>
      </List>
    </Container>
  );
}

export default Menu;