import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <>
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/counter">Counter</Link>
          </li>
          <li>
            <Link to="/lista-tarea">Lista de tareas</Link>
          </li>
          <li>
            <Link to="/tree-image">Show or hide</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Nav;
