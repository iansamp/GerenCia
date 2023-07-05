import styled from "./Navbar.module.css";
import { Link } from "react-router-dom";
import Container from "../Container/Container";

export default function Navbar() {
  return (
    <>
      <nav className={styled.navbar}>
        <h1><Link to='/'>GerenCia</Link></h1>
        <ul>
          <li>Caixa</li>
          <li>Pedidos</li>
          <li>Lanches</li>
          <li><Link to="/estoque">Estoque</Link> </li>
        </ul>
      </nav>
    </>
  );
}
