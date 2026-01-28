import { useState } from "react"
import { TextField, Button, Container, Typography } from "@mui/material"

const validName = (v) => v.match(/^[A-Za-z\s]*$/)

function StudentForm() {
  const [name, setName] = useState("")

  return (
    <>
        <Typography variant="h5" gutterBottom>Registration Form</Typography>

        <TextField label="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        error={name && !validName(name)}
        helperText={!validName(name) ? "Only alphabets allowed" : ""}/>
    </> 

  )
}

export default StudentForm
