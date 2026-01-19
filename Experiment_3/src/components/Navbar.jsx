import { AppBar, Toolbar, Typography, Button, Box } from "@mui/material"

function Navbar() {
  return (
    <AppBar position="static" color="success">
      <Toolbar>
        <Box>
          <Button>Home</Button>
          <Button>About</Button>
          <Button>Contact U</Button>
        </Box>
      </Toolbar>
    </AppBar>
  )
}

export default Navbar