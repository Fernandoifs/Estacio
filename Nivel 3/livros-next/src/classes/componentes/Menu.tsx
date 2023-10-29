import React from "react";
import Link from "next/link";

export const Menu: React.FC = () => {
  return (
    <>
      <nav className="bg-dark text-white">
        <Link href="/" legacyBehavior>
          <a className="navbar-brand">Início</a>
        </Link>

        <Link href="/LivroLista" legacyBehavior>
          <a className="nav-link">Catálago</a>
        </Link>

        <Link href="/LivroDados" legacyBehavior>
          <a className="nav-link">Novo</a>
        </Link>
      </nav>
    </>
  );
};
