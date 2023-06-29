import styled from "./Navbar.module.css";

export default function Navbar() {
  return (
    <>
      <nav className={styled.navbar}>
        <h1>GerenCia</h1>
        <ul>
          <li>Caixa</li>
          <li>Pedidos</li>
          <li>Lanches</li>
          <li>Estoque</li>
        </ul>
      </nav>
    </>
  );
}
