import { Box, Typography, TextField, Button } from "@mui/material";

function Contact() {
  return (
    <Box sx={{ maxWidth: 300 }}>
      <Typography variant="h4" gutterBottom>Contact Us</Typography>
      <TextField fullWidth label="Name" margin="normal" />
      <TextField fullWidth label="Email" margin="normal" />
      <TextField fullWidth label="Message" margin="normal" multiline rows={4} />
      <Button variant="contained" sx={{ mt: 2 }}>Send Message</Button>
    </Box>
  );
}

export default Contact;
