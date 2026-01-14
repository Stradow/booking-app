import { useState } from "react";

import heroImg from "../../assets/heroimg.png";

function HeroSection() {
  const [heroImage, setHeroImage] = useState(heroImg);
  const [headline, setHeadline] = useState("Book Your moment of relief.");
  const [subtext, setSubtext] = useState(
    "Massage & body therapy, booked online in just a few clicks."
  );

  return (
    <section className="">
      <div className="absolute inset-0 bg-black/20" />
      <div className="">
        <img src={heroImage} />
        <h1 className="">{headline}</h1>
        <p className="">{subtext}</p>
      </div>
    </section>
  );
}
export default HeroSection;
