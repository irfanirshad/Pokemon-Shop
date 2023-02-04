import React from "react";
import Link from "next/link";

import { urlFor } from "../lib/client";

const HeroBanner = ({ heroBanner }) => {
  return (
    <div className="hero-banner-container">
      <div>
        <p className="beats-solo">{heroBanner.smallText}</p>
        <h3>{heroBanner.midText}</h3>
        <h1>{heroBanner.largeText1}</h1>
        <img
          src={urlFor(heroBanner.image)}
          alt="headphones"
          className="hero-banner-image"
        />

        <div>
          <Link href={`/product/${heroBanner.product}`}>
            <button type="button">{heroBanner.buttonText}</button>
          </Link>
          <div className="desc">
            <h5>Buy your favourite Pokémons</h5>
            <h5>Only on Pokémon Store</h5>
            <p>{heroBanner.desc}</p>
          </div>
        </div>
      </div>
      <br />
      <br />
      <p>Pokémon Store only sells authentic pokémons at great prices.</p>
    </div>
  );
};

export default HeroBanner;
