import { Rating } from "@mui/material";
import { useState } from "react";

export default function About() {
  const [value, setValue] = useState(3);

  return (
    <>
      <h2>About Page</h2>

      <Rating value={value} onChange={(e, v) => setValue(v)} />
    </>
  );
}
