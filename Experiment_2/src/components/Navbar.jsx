import { AppBar, Toolbar, Typography, Button, Box } from "@mui/material"

function Navbar() {
  return (
    <AppBar position="static" color="success">
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          GreenLeaf Restaurant
        </Typography>
        <Box>
          <Button color="inherit">Home</Button>
          <Button color="inherit">About</Button>
          <Button color="inherit">Services</Button>
          <Button color="inherit">Contact</Button>
        </Box>
      </Toolbar>
    </AppBar>
  )
}

export default Navbar
