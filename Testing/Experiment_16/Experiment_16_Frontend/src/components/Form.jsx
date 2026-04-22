import { useState } from "react";
import { TextField, Button, Box, Typography } from "@mui/material";

function Form() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const handleNameChange = (e) => {
    const value = e.target.value;
    setName(value);

    if (!value) {
      setNameError("Name is required");
    } else if (!/^[A-Za-z\s]+$/.test(value)) {
      setNameError("Only alphabets");
    } else {
      setNameError("");
    }
  };

  const handleEmailBlur = () => {
    if (!email) {
      setEmailError("Email is required");
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setEmailError("Invalid email");
    } else {
      setEmailError("");
    }
  };

  const handlePasswordBlur = () => {
    if (!password) {
      setPasswordError("Password is required");
    } else if (
      !/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).{8,}$/.test(password)
    ) {
      setPasswordError(
        "8+ chars with upper, lower, number & special char"
      );
    } else {
      setPasswordError("");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !email || !password) {
      alert("All fields required");
      return;
    }

    if (nameError || emailError || passwordError) {
      alert("Error");
      return;
    }

    console.log({ name, email, password });
    alert("Registration Successful");
  };

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
      }}
    >
      <form onSubmit={handleSubmit} style={{ width: 400, margin:"normal"}}>
        <Typography variant="h4">Student Registration</Typography>

        <TextField label="Name" fullWidth required value={name}
          onChange={handleNameChange}
          error={!!nameError}
          helperText={nameError}
          
        />

        <TextField fullWidth required label="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          onBlur={handleEmailBlur}
          error={!!emailError}
          helperText={emailError}
          margin="normal"
        />

        <TextField fullWidth required label="Password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          onBlur={handlePasswordBlur}
          error={!!passwordError}
          helperText={passwordError}
          margin="normal"
        />

        <Button fullWidth type="submit" variant="contained" color="success">Register</Button>
      </form>
    </Box>
  );
}

export default Form;