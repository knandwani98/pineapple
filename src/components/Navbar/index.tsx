import * as data from "@/data/navbar.json";
import Link from "next/link";
import React from "react";
import { SubMenu } from "./subMenu";

type Props = {};

export const Navbar = (props: Props) => {
  return (
    <nav className="pa-header-container flex justify-center items-center relative">
      <ul className="flex justify-between item-center gap-16">
        {data.navLinks.map((product, i) => {
          return (
            <li key={i} className="group py-4">
              <Link
                className="text-sm text-black/80 hover:text-black"
                href={product.link}
              >
                {product.label}
              </Link>
              <SubMenu product={product} />
            </li>
          );
        })}
      </ul>
    </nav>
  );
};
