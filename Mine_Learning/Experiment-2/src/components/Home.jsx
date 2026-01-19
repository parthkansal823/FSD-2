import { TextField, Button } from "@mui/material";

export default function Home() {
  return (
    <>
      <h2>Home Page</h2>

      <TextField label="Enter Name" sx={{ mb: 2 }} />

      <br />

      <Button variant="contained">Submit</Button>
    </>
  );
}
