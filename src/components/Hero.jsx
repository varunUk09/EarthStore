import React from "react";
import heroBg from "/herobg.jpg";

export default function Hero() {
  return (
    <section className='hero'>
      <div className='heroBgimg-container'>
        <img src={heroBg} />
      </div>
    </section>
  );
}
