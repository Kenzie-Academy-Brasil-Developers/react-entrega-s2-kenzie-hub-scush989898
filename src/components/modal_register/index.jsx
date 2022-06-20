import * as React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { TextField } from "@mui/material";
import MenuItem from "@mui/material/MenuItem";
import Button from "../../components/button";
import { StyledHeaderModal } from "./style";
import { StyledMainModal } from "./style";
import ApiKenzieHub from "../../services/api";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { toast } from "react-toastify";

export default function ModalRegister({
  open,
  handleClose,
  getTechs,
  actUser,
}) {
  const registerTechSchema = yup.object().shape({
    title: yup.string().required("Nome obrigatório"),
    status: yup.string().required("Selecione um status"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(registerTechSchema) });

  function registerTech(data) {
    ApiKenzieHub.post("/users/techs", data, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("kenzieHub:token")}`,
      },
    })
      .then((res) => {
        if (res.status == 201) {
          toast.success("Tecnologia Cadastrada!");
          getTechs(actUser.id);
        }
      })
      .catch((error) => console.log(error));
  }
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 380,
    bgcolor: "#212529",
    border: "3px solid #FF577F",
    boxShadow: 24,
    p: 0,
  };

  return (
    <Modal open={open} onClose={handleClose} sx={style}>
      <Box
        sx={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <StyledHeaderModal className="header">
          <span>Cadastrar Tecnologia </span>
          <button onClick={handleClose}>X</button>
        </StyledHeaderModal>
        <StyledMainModal>
          <form action="" onSubmit={handleSubmit(registerTech)}>
            <TextField
              {...register("title")}
              error={!!errors.title}
              helperText={errors?.title?.message}
              label="Nome"
              placeholder="Nome da tecnologia"
              color="secondary"
              sx={{ width: "100%" }}
              inputProps={{
                style: { color: "white", background: "#343b41" },
              }}
            />
            <TextField
              {...register("status")}
              error={!!errors.status}
              helperText={errors?.status?.message}
              label="Selecionar status"
              color="secondary"
              placeholder="Selecione o status"
              defaultValue=""
              select
              sx={{ width: "100%", background: "#343b41", color: "white" }}
              inputProps={{
                style: { color: "white" },
              }}
            >
              <MenuItem
                sx={{
                  color: "black",
                  "&.Mui-selected": {
                    background: "#212529",
                    color: "#f8f9fa",
                  },
                }}
                value="Iniciante"
              >
                Iniciante
              </MenuItem>
              <MenuItem
                sx={{
                  color: "black",
                  "&.Mui-selected": {
                    background: "#212529",
                    color: "#f8f9fa",
                  },
                }}
                value="Intermediário"
              >
                Intermediário
              </MenuItem>
              <MenuItem
                sx={{
                  color: "black",
                  "&.Mui-selected": {
                    background: "#212529",
                    color: "#f8f9fa",
                  },
                }}
                value="Avançado"
              >
                Avançado
              </MenuItem>
            </TextField>
            <Button type="submit" Backcolor="#FF577F">
              Cadastrar Tecnologia
            </Button>
          </form>
        </StyledMainModal>
      </Box>
    </Modal>
  );
}
