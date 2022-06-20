import { useEffect, useState } from "react";
import React from "react";
import { StyledDashboard } from "./style";
import ApiKenzieHub from "../../services/api";
import Logo from "../../components/logo";
import Card from "../../components/card";
import { useHistory } from "react-router-dom";
import ModalRegister from "../../components/modal_register";
import ModalEdit from "../../components/modal_edit";

export default function Dashboard() {
  let history = useHistory();

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [editOpen, setEditOpen] = useState(false);
  const handleEditOpen = () => setEditOpen(true);
  const handleEditClose = () => setEditOpen(false);

  const [actualEditTech, setActualEditTech] = useState({});

  const [techs, setTechs] = useState([]);
  const [actUser, setActUser] = useState({});

  function logout() {
    localStorage.clear();
    history.push("/");
  }

  function getTechs(userId) {
    ApiKenzieHub.get(`/users/${userId}`)
      .then((res) => {
        if (res.data) {
          setTechs([...res.data.techs]);
        }
      })
      .catch((error) => console.error(error));
  }
  useEffect(() => {
    if (!localStorage.getItem("kenzieHub:token")) {
      history.push("/");
      return;
    }
    setActUser({ ...JSON.parse(localStorage.getItem("kenzieHub:user")) });
    const { id } = JSON.parse(localStorage.getItem("kenzieHub:user"));
    getTechs(id);
  }, []);

  return (
    <StyledDashboard>
      {open && (
        <ModalRegister
          handleClose={handleClose}
          open={open}
          getTechs={getTechs}
          actUser={actUser}
          actualEditTech={actualEditTech}
        />
      )}
      {editOpen && (
        <ModalEdit
          getTechs={getTechs}
          handleEditClose={handleEditClose}
          actUser={actUser}
          editOpen={editOpen}
          actualEditTech={actualEditTech}
        />
      )}
      <header>
        <Logo />
        <button onClick={() => logout()}>Sair</button>
      </header>
      <div className="userInfo">
        <h3>Olá, {actUser.name} !</h3>
        <p>{actUser.course_module}</p>
      </div>
      <main>
        <div className="createTech">
          <span>Tecnologias</span>
          <button onClick={() => handleOpen()}>+</button>
        </div>
        <ul>
          {techs.map((card) => {
            return (
              <Card
                key={card.id}
                card={card}
                setTechs={setTechs}
                techs={techs}
                handleEditOpen={handleEditOpen}
                setActualEditTech={setActualEditTech}
              />
            );
          })}
        </ul>
      </main>
    </StyledDashboard>
  );
}
