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
          <Link to="/lanches">
            <li>Lanches</li>
          </Link>
          <Link to="/estoque">
            <li>Estoque</li>
          </Link>
        </ul>
      </nav>
    </>
  );
}
