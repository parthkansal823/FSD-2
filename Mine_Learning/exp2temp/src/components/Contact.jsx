import { Select, MenuItem, Checkbox, FormControlLabel } from "@mui/material";
import { useState } from "react";

export default function Contact() {
  const [city, setCity] = useState("");

  return (
    <>
      <h2>Contact Page</h2>

      <Select value={city} onChange={(e) => setCity(e.target.value)} displayEmpty>
        <MenuItem value="">Select City</MenuItem>
        <MenuItem value="delhi">Delhi</MenuItem>
        <MenuItem value="chandigarh">Chandigarh</MenuItem>
      </Select>

      <br /><br />

      <FormControlLabel control={<Checkbox />} label="Agree" />
    </>
  );
}
