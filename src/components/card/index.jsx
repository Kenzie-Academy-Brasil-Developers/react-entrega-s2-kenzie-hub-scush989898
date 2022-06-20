import React from "react";
import { StyledCard } from "./style";
import EditIcon from "@mui/icons-material/Edit";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import ApiKenzieHub from "../../services/api";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Card({
  card,
  setTechs,
  techs,
  handleEditOpen,
  setActualEditTech,
}) {
  function editCardTech() {
    setActualEditTech({ ...card });
    handleEditOpen();
  }
  function deleteCard(cardId) {
    ApiKenzieHub.delete(`/users/techs/${cardId}`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("kenzieHub:token")}`,
      },
    })
      .then((res) => {
        if (res.status == 204) {
          toast.success("Tecnologia deletada!");
          let result = techs.filter((elem) => elem.id !== card.id);
          setTechs([...result]);
        }
      })
      .catch((error) => console.log(error));
  }
  return (
    <StyledCard>
      <div className="title">
        <p>{card.title}</p>
      </div>
      <div className="status">
        <span>{card.status}</span>
      </div>
      <div className="optCard">
        <button className="btnIcon" onClick={() => editCardTech()}>
          <EditIcon sx={{ width: "22px", height: "22px" }} />
        </button>
        <button className="btnIcon" onClick={() => deleteCard(card.id)}>
          <DeleteForeverIcon sx={{ width: "22px", height: "22px" }} />
        </button>
      </div>
    </StyledCard>
  );
}
