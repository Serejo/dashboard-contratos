import React, { useState } from "react";
import Illustration from "../../../assets/Tela Ilustração.svg";

import {
  TextField,
  Button,
  CircularProgress,
  Container,
  Typography,
  IconButton,
} from "@mui/material";
import Grid from "@mui/material/Grid2";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [modelLogin, setModelLogin] = useState({
    email: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState({ email: "", password: "" });

  const validateFields = () => {
    let isValid = true;
    const newErrors = { email: "", password: "" };

    if (!modelLogin.email.trim()) {
      newErrors.email = "O campo 'Usuário' é obrigatório.";
      isValid = false;
    }

    if (!modelLogin.password.trim()) {
      newErrors.password = "O campo 'Senha' é obrigatório.";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const navigate = useNavigate();

  const handleLogin = async () => {
    if (!validateFields()) return;
    setIsLoading(true);

    setTimeout(() => {
      navigate("/dashboard");
      setIsLoading(false);
    }, 2000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setModelLogin({
      ...modelLogin,
      [e.target.name]: e.target.value,
    });

    setErrors({ ...errors, [e.target.name]: "" });
  };

  const handleTogglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <Container
      sx={{ paddingLeft: 1, paddingTop: 2, marginTop: 0 }}
      className="h-screen"
      style={{
        minHeight: "100vh",
        overflow: "auto",
        minWidth: "100vw",
        alignContent: "center",
      }}
    >
      <Grid container justifyContent="space-between" spacing={2}>
        <Grid size={6}>
          <img
            src={Illustration}
            alt="Ilustração"
            className="h-screen v-img-contain min-w-full"
            style={{ objectFit: "cover", width: "100%" }}
          />
        </Grid>

        <Grid size={6}>
          <div className="bg-surface rounded-xl mx-6 border border-[#794BCF]-200 p-6">
            <div>
              <Grid container justifyContent="center" className="pb-5">
                <Grid>
                  <img
                    src="https://4matt.com.br/wp-content/uploads/2021/10/Logo-Principal-Roxo-1.png"
                    alt="Logo 2"
                    style={{ maxWidth: "100px" }}
                  />
                </Grid>
              </Grid>
            </div>
            <div
              className="py-4"
              style={{ marginLeft: "15.5rem", marginRight: "15.5rem" }}
            >
              <Grid container justifyContent="center" className="my-2 ">
                <TextField
                  className=""
                  label="Usuário"
                  variant="outlined"
                  fullWidth
                  error={!!errors.email}
                  helperText={
                    errors.email && "O campo 'Usuário' é obrigatório."
                  }
                  value={modelLogin.email}
                  onChange={handleChange}
                  name="email"
                  margin="normal"
                />
              </Grid>
            </div>

            <div
              className="py-4"
              style={{ marginLeft: "15.5rem", marginRight: "15.5rem" }}
            >
              <Grid container justifyContent="center" className="mt-2">
                <TextField
                  label="Senha"
                  variant="outlined"
                  fullWidth
                  value={modelLogin.password}
                  onChange={handleChange}
                  error={!!errors.password}
                  helperText={
                    errors.password && "O campo 'Senha' é obrigatório."
                  }
                  name="password"
                  type={showPassword ? "text" : "password"}
                  margin="normal"
                  InputProps={{
                    endAdornment: (
                      <IconButton onClick={handleTogglePasswordVisibility}>
                        {showPassword ? <Visibility /> : <VisibilityOff />}
                      </IconButton>
                    ),
                  }}
                />
              </Grid>
            </div>

            <div style={{ marginTop: "1.1rem", marginBottom: "1.1rem" }}>
              <Grid container justifyContent="center" className="mt-10 mb-10">
                <Grid>
                  <Button
                    variant="contained"
                    color="primary"
                    fullWidth
                    disabled={isLoading}
                    onClick={handleLogin}
                    style={{
                      textTransform: "none",
                      fontWeight: "bolder",
                      backgroundColor: "#794BCF",
                    }}
                  >
                    {isLoading ? (
                      <CircularProgress size={24} color="inherit" />
                    ) : (
                      "Login"
                    )}
                  </Button>
                </Grid>
              </Grid>
            </div>

            <div>
              <Grid container justifyContent="center" className="mt-6 mb-6">
                <Grid>
                  <Typography
                    variant="body2"
                    color="#794BCF"
                    style={{
                      cursor: "pointer",
                      textDecoration: "underline",

                      fontWeight: "bold",
                    }}
                  >
                    Não tem acesso? Cadastre-se
                  </Typography>
                </Grid>
              </Grid>
            </div>
          </div>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Login;
