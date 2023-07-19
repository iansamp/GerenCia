import styled from "./Navbar.module.css";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <>
      <nav className={styled.navbar}>
        <h1>
          <Link to="/">GerenCia</Link>
        </h1>
        <ul>
          <li>Caixa</li>
          <li>Pedidos</li>
<<<<<<< HEAD
          <Link to="/lanches">
            <li>Lanches</li>
          </Link>
          <Link to="/estoque">
            <li>Estoque</li>
          </Link>
=======
          <li><Link to="/lanches">Lanches</Link></li>
          <li><Link to="/estoque">Estoque</Link> </li>
>>>>>>> f19e8018babc6708b17c84774f40c5bdc5a7aa8e
        </ul>
      </nav>
    </>
  );
}
