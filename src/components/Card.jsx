//Este componente deberia recibir por props y mostrar en pantalla la informacion
//que envia el usuario

import React from "react";
import App from "./App";

function Card({ nombre, deporteFavorito }) {
  const date = new Date();
  const dia = date.getDate();
  const mes = date.getMonth();

  return (
    <div>
      <h2>
        {nombre}, Tu deporte favorito es {deporteFavorito}
      </h2>
      <h2>
        Comopletaste el formulario el quiz dia {dia + 7}/{mes + 1} para las
        13:00
      </h2>
    </div>
  );
}

export default Card;
