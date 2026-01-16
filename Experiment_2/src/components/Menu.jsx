import {Box,Typography,Container,List,ListItem,ListItemText,Divider} from "@mui/material";

function Menu() {
  return (
    <Container maxWidth="md" sx={{mt:2}}>
      <Box textAlign="center">
        <Typography variant="h3" fontWeight="bold">Our Menu</Typography>
        <Typography color="text.secondary">Authentic Pure Veg Punjabi Dishes</Typography>
      </Box>

      <List>
        <ListItem secondaryAction={<Typography fontWeight="bold">₹250</Typography>}>
            <ListItemText primary="A" />
        </ListItem>
        <Divider />

        <ListItem secondaryAction={<Typography fontWeight="bold">₹200</Typography>}>
          <ListItemText primary="B" />
        </ListItem>
        <Divider />
      </List>
    </Container>
  );
}

export default Menu;