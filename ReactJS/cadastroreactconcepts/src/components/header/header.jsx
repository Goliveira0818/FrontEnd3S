import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header>
        <nav>

            <Link to="/">Home</Link> {" | "}
            <Link to="/quemsomos">Quem Somos</Link> {" | "}
            <Link to="/cadastrofrutas">Cadastro de Frutas</Link>
            <Link to="/produtos">Produtos</Link>
        </nav>
    </header>
  );
}