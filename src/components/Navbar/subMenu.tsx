import { Nav } from "@/types/navbar";
import Link from "next/link";
import React from "react";

type Props = {
  product: Nav;
};

export const SubMenu = (props: Props) => {
  const { children } = props.product;

  if (!children) return null;

  return (
    <ul
      className={
        "bg-white"
      }
    >
      {children?.map((child, i) => {
        return (
          <li key={i} className="text-xl">
            <Link href={child.link} className="whitespace-nowrap">{child.label}</Link>
          </li>
        );
      })}
    </ul>
  );
};
