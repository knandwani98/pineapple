import Link from "next/link";
import React from "react";
import * as data from "@/data/offers.json";

type Props = {};

export const AlertBar = (props: Props) => {
  const { description, link } = data.offers;
  const style = {
    alertBar: {
      height: "84px",
    },
  };
  return (
    <>
      <pre
        style={style.alertBar}
        className="text-center bg-white py-4 font-inherit"
      >
        {description}{" "}
        <Link className="text-pa-blue" href={link.url}>
          {link.label}
        </Link>
      </pre>
    </>
  );
};
