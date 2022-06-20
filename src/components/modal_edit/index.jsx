import * as React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { TextField } from "@mui/material";
import MenuItem from "@mui/material/MenuItem";
import Button from "../../components/button";
import { StyledHeaderEdit } from "./style";
import { StyledMainEdit } from "./style";
import ApiKenzieHub from "../../services/api";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { toast } from "react-toastify";

export default function ModalEdit({
  getTechs,
  handleEditClose,
  actUser,
  editOpen,
  actualEditTech,
}) {
  function editTech(data) {
    ApiKenzieHub.put(`/users/techs/${actualEditTech.id}`, data, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("kenzieHub:token")}`,
      },
    })
      .then((res) => {
        if (res.status == 201) {
          toast.success("Tecnologia Atualizada!");
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

  const editTechSchema = yup.object().shape({
    status: yup.string().required("Selecione um status"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(editTechSchema) });
  return (
    <Modal open={editOpen} onClose={handleEditClose} sx={style}>
      <Box
        sx={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <StyledHeaderEdit className="header">
          <span>Tecnologia Detalhes</span>
          <button onClick={handleEditClose}>X</button>
        </StyledHeaderEdit>
        <StyledMainEdit>
          <form action="" onSubmit={handleSubmit(editTech)}>
            <TextField
              disabled
              label={`${actualEditTech.title}`}
              color="secondary"
              sx={{ width: "100%", color: "white " }}
              inputProps={{
                style: { color: "white", background: "#343b41" },
              }}
            />
            <TextField
              {...register("status")}
              error={!!errors.status}
              helperText={errors?.status?.message}
              color="secondary"
              label="Status"
              defaultValue={actualEditTech.status}
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
            <Button type="submit" Backcolor="#59323F">
              Salvar Alterações
            </Button>
          </form>
        </StyledMainEdit>
      </Box>
    </Modal>
  );
}
