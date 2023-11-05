import React from "react";
import Link from "next/link";

export const Menu: React.FC = () => {
  return (
    <nav className="bg-stone-950">
      <div className="container mx-auto">
        <ul className="flex justify-start items-center py-4 text-white">
          <li className="px-4">
            <Link href="/">Home</Link>
          </li>
          <li className="px-4">
            <Link href="/LivroLista">Catálogo</Link>
          </li>
          <li className="px-4">
            <Link href="/LivroDados">Novo</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};
