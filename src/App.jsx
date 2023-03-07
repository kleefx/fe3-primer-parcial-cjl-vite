//Aqui deberias agregar los estados y los handlers para los input
import React, { useState } from "react";

function App() {
  const [user, setUser] = userState({
    nombre: "",
    color: "",
    deporteFavorito: "",
    email: "",
  });
  const [show, setShow] = userState(false);
  const [err, setErr] = userState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (user.nombre.length >= 3 && user.deporteFavorito !== "") {
      setShow(true);
      setErr(false);
    } else {
      setErr(true);
    }
  };

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <label>Nombre Complete</label>
        <input
          type="text"
          value={user.nombre}
          onChange={(e) => setUser({ ...user, nombre: e.target.value })}
        />
        <label>Color</label>{" "}
        <input
          type="text"
          value={user.color}
          onChange={(e) =>
            setUser({ ...user, deporteFavorito: e.target.value })
          }
        />
        <label>Email</label>{" "}
        <input
          type="email"
          value={user.email}
          onChange={(e) => setUser({ ...user, email: e.target.value })}
        />
        <select
          value={user.deporteFavorito}
          onChange={(e) =>
            setUser({ ...user, deporteFavorito: e.target.value })
          }
        >
          <option value="">Seleccione una opción</option>
          <option value="Basket-Ball">Basket-Ball</option>
          <option value="Foot-Ball">Foot-Ball</option>
          <option value="Tennis">Tennis</option>
        </select>
        <button>Enviar</button>
        {err && "Por favor chequea que la información sea correcta"}
      </form>
    </div>
  );
}

export default App;
