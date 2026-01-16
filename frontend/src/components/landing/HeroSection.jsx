import { useState } from "react";

import heroImg from "../../assets/hero.png";

function HeroSection() {
  const [heroImage, setHeroImage] = useState(heroImg);
  const [headline, setHeadline] = useState("Book Your moment of relief.");
  const [subtext, setSubtext] = useState(
    "Massage & body therapy, booked online in just a few clicks."
  );

  return (
    <section
      /*  style={{ backgroundImage: `url(${heroImg})` }} */

      className="flex justify-center"
    >
      {/* <div className="">
        <h1 className="">{headline}</h1>
        <p className="">{subtext}</p>
      </div> */}
      <img src={heroImage} className="" />
    </section>
  );
}
export default HeroSection;
