import { AppBar, Toolbar, Button, Container } from "@mui/material";
import { Routes, Route, Link } from "react-router-dom";

import Home from "./components/Home";
import About from "./components/About";
import Menu from "./components/Menu";
import Services from "./components/Services";
import Contact from "./components/Contact";

function App() {
  return (
    <>
      <AppBar position="static" sx={{ backgroundColor: "#7b1c1c" }}>
        <Toolbar>
          <Button color="inherit" component={Link} to="/">Home</Button>
          <Button color="inherit" component={Link} to="/about">About</Button>
          <Button color="inherit" component={Link} to="/menu">Menu</Button>
          <Button color="inherit" component={Link} to="/services">Services</Button>
          <Button color="inherit" component={Link} to="/contact">Contact</Button>
        </Toolbar>
      </AppBar>

      <Container sx={{ mt: 4 }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Container>
    </>
  );
}

export default App;
