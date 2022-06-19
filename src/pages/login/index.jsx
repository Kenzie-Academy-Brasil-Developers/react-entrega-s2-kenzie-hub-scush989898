import { useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import React from "react";
import { StyledLogin } from "./style";
import ApiKenzieHub from "../../services/api";
import StyledLogo from "../../components/logo";
import Button from "../../components/button";
import { TextField, InputAdornment, IconButton } from "@mui/material";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { useHistory } from "react-router-dom";

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);
  let history = useHistory();

  function sendToRegister() {
    history.push("/register");
  }

  function getLoginData(data) {
    ApiKenzieHub.post("/sessions", data)
      .then((res) => {
        if (res.data) {
          const { token, user } = res.data;
          localStorage.clear();
          localStorage.setItem("kenzieHub:token", token);
          localStorage.setItem("kenzieHub:user", JSON.stringify(user));
          toast.success("Logado com sucesso");
          setTimeout(() => {
            history.push("/dashboard");
          }, 1200);
          return;
        }
        throw new Error("Dados inválidos!");
      })
      .catch((error) => toast.error("Dados inválidos"));
  }
  const loginSchema = yup.object().shape({
    email: yup.string().required("Email obrigatório").email("Email inválido"),
    password: yup
      .string()
      .required("Senha Obrigatória")
      .min(8, "Mínimo 8 caracteres"),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(loginSchema) });
  return (
    <StyledLogin>
      <StyledLogo />
      <div className="form">
        <form action="" onSubmit={handleSubmit(getLoginData)}>
          <h4>Login</h4>
          <TextField
            {...register("email")}
            error={!!errors.email}
            helperText={errors?.email?.message}
            label="Email"
            placeholder="Email"
            variant="outlined"
            color="secondary"
          />
          <TextField
            color="secondary"
            {...register("password")}
            name="password"
            label="Senha"
            error={!!errors.password}
            helperText={errors?.password?.message}
            type={showPassword ? "text" : "password"}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton onClick={() => setShowPassword(!showPassword)}>
                    {showPassword ? <Visibility /> : <VisibilityOff />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
          <Button type="submit" Backcolor="#FF577F">
            Entrar
          </Button>
        </form>
        <h5>Ainda não possui uma conta?</h5>
        <Button func={sendToRegister} Backcolor="#868E96">
          Cadastre-se
        </Button>
      </div>
    </StyledLogin>
  );
}
