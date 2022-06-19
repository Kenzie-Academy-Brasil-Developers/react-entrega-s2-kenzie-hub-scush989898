import { useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import React from "react";
import { StyledRegister } from "./style";
import ApiKenzieHub from "../../services/api";
import Logo from "../../components/logo";
import Button from "../../components/button";
import { TextField } from "@mui/material";
import MenuItem from "@mui/material/MenuItem";
import { InputAdornment, IconButton, Grid, Paper } from "@mui/material";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { useHistory } from "react-router-dom";
import registerSchema from "../../scripts/UserSchema";

export default function Register() {
  const [showPasswordRegister, setShowPasswordRegister] = useState(false);
  let history = useHistory();
  function getRegisterData(data) {
    const { email, password, name, bio, contact, course_module } = data;
    const obj = { email, password, name, bio, contact, course_module };
    ApiKenzieHub.post("/users", obj)
      .then((res) => {
        if (res.data) {
          toast.success("Cadastrado com sucesso");
          setTimeout(() => {
            history.push("/");
          }, 1200);
          return;
        }
        throw new Error("Dados inválidos/Usuario já cadastrado");
      })
      .catch((error) => toast.error("Dados inválidos/Usuario já cadastrado"));
  }

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(registerSchema) });

  return (
    <StyledRegister>
      <header>
        <Logo />
        <button onClick={() => history.push("/")}>Voltar</button>
      </header>
      <form action="" onSubmit={handleSubmit(getRegisterData)}>
        <h4>Crie sua conta</h4>
        <h6>Rápido e grátis, vamos nessa!</h6>

        <TextField
          {...register("name")}
          error={!!errors.name}
          helperText={errors?.name?.message}
          label="Nome"
          placeholder="Digite aqui seu nome"
          variant="outlined"
          color="secondary"
        />
        <TextField
          {...register("email")}
          error={!!errors.email}
          helperText={errors?.email?.message}
          label="Email"
          placeholder="Digite aqui seu email"
          variant="outlined"
          color="secondary"
        />

        <TextField
          placeholder="Digite sua senha"
          color="secondary"
          {...register("password")}
          name="password"
          label="Senha"
          error={!!errors.password}
          helperText={errors?.password?.message}
          type={showPasswordRegister ? "text" : "password"}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  onClick={() => setShowPasswordRegister(!showPasswordRegister)}
                >
                  {showPasswordRegister ? <Visibility /> : <VisibilityOff />}
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
        <TextField
          placeholder="Confirme sua senha"
          color="secondary"
          {...register("confirm_password")}
          name="confirm_password"
          label="Confirmar Senha"
          error={!!errors.confirm_password}
          helperText={errors?.confirm_password?.message}
          type={showPasswordRegister ? "text" : "password"}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  onClick={() => setShowPasswordRegister(!showPasswordRegister)}
                >
                  {showPasswordRegister ? <Visibility /> : <VisibilityOff />}
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
        <TextField
          {...register("bio")}
          error={!!errors.bio}
          helperText={errors?.bio?.message}
          label="Bio"
          placeholder="Fale um pouco sobre você"
          variant="outlined"
          color="secondary"
        />
        <TextField
          {...register("contact")}
          error={!!errors.contact}
          helperText={errors?.contact?.message}
          label="Contato"
          placeholder="Opção de contato"
          variant="outlined"
          color="secondary"
        />
        <TextField
          {...register("course_module")}
          error={!!errors.course_module}
          helperText={errors?.course_module?.message}
          label="Selecionar Módulo"
          color="secondary"
          placeholder="Selecione o Módulo"
          defaultValue=""
          select
        >
          <MenuItem
            sx={{
              color: "#f8f9fa",
              background: "#212529",
              "&.Mui-selected": {
                background: "#212529",
                color: "#f8f9fa",
              },
            }}
            value="Primeiro Módulo (Introdução ao Front-End)"
          >
            Primeiro Módulo
          </MenuItem>
          <MenuItem
            sx={{
              color: "#f8f9fa",
              background: "#212529",
              "&.Mui-selected": {
                background: "#212529",
                color: "#f8f9fa",
              },
            }}
            value="Segundo Módulo (Front-End Intermediário)"
          >
            Segundo Módulo
          </MenuItem>
          <MenuItem
            sx={{
              color: "#f8f9fa",
              background: "#212529",
              "&.Mui-selected": {
                background: "#212529",
                color: "#f8f9fa",
              },
            }}
            value="Terceiro Módulo (Front-End Avançado)"
          >
            Terceiro Módulo
          </MenuItem>
          <MenuItem
            sx={{
              color: "#f8f9fa",
              background: "#212529",
              "&.Mui-selected": {
                background: "#212529",
                color: "#f8f9fa",
              },
            }}
            value="Quarto Módulo (Front-End Expert)"
          >
            Quarto Módulo
          </MenuItem>
        </TextField>

        <Button type="submit" Backcolor="#59323F">
          Cadastrar
        </Button>
      </form>
    </StyledRegister>
  );
}
