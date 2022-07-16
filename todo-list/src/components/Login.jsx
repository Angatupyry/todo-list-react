import { useState } from "react";

const Login = () => {
  const [userName, setUserName] = useState("");
  const [userPass, setUserPass] = useState("");

  const setJwt = async () => {
    try {
      const respuesta = await fetch("http://localhost:4000/user/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: userName,
          password: userPass,
        }),
      });

      if (!respuesta.ok) {
        throw new Error("Error en el servidor");
      }

      const respuestaJson = await respuesta.json();
      if (!respuestaJson.success) {
        throw new Error("No se encontró el usuario");
      }

      alert("Usted es feliz :D. Beba agua");

      localStorage.setItem("jwt", respuestaJson.token);
    } catch (error) {
      console.log(error);
    }
  };

  const onClick = (e) => {
    e.preventDefault();
    setJwt();
  };

  const onChangeUserName = (e) => {
    setUserName(e.target.value);
  };

  const onChangeUserPass = (e) => {
    setUserPass(e.target.value);
  };

  return (
    <>
      <form>
        <input
          value={userName}
          id="usuario"
          type="text"
          name="tarea"
          placeholder="Usuario"
          onChange={onChangeUserName}
        />

        <input
          value={userPass}
          id="pass"
          type="password"
          name="tarea"
          placeholder="Pass"
          onChange={onChangeUserPass}
        />

        <button onClick={onClick} id="agregar">
          Login
        </button>
      </form>
    </>
  );
};

export default Login;
