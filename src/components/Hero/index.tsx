import React from "react";
import Image from "next/image";
import Link from "next/link";

type Props = {};

export const Hero = (props: Props) => {
  return (
    <section className="pa-container flex justify-between items-center">
      {/* Left Side */}
      <div>
        <h1 className="pa-container text-5xl text-pa-text-light font-semibold">
          <strong className="text-black font-bold">Store.</strong> The best way
          to buy the products you love.
        </h1>
      </div>

      {/* Right Side */}
      <div>
        {/* Card One */}
        <div className="flex justify-between item-center gap-4">
          <Image
            className="rounded-full"
            src={"/assets/hero/mac.jpg"}
            width={40}
            height={40}
            alt="Ask a Specialist"
          ></Image>
          <div className="whitespace-nowrap">
            <h2 className="font-medium">Need shopping help?</h2>
            <Link target="_blank" className="text-pa-blue font-light" href="/">
              Ask a Specialist
            </Link>
          </div>
        </div>

        {/* Card Two */}
        <div className="flex justify-between item-center gap-4">
          <Image
            className="rounded-full"
            src={"/assets/hero/mac.jpg"}
            width={40}
            height={40}
            alt="Ask a Specialist"
          ></Image>
          <div className="whitespace-nowrap">
            <h2 className="font-medium">Visit a Pineapple Store</h2>
            <Link target="_blank" className="text-pa-blue font-light" href="/">
              Find one near you
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
