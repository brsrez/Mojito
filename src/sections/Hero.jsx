import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React from "react";
import { SplitText } from "gsap/all";

gsap.registerPlugin(SplitText);

const Hero = () => {
  useGSAP(() => {
    const heroSplit = new SplitText(".title", { type: "chars, words" });
    const paragraphSplit = new SplitText(".subtitle", { type: "lines" });

    heroSplit.chars.forEach((char) => char.classList.add("text-gradient"));

    gsap.from(heroSplit.chars, {
      yPercent: 100,
      duration: 1.8,
      ease: "expo.out",
      stagger: 0.05,
      opacity: 0,
    });

    gsap.from(paragraphSplit.lines, {
      opacity: 0,
      yPercent: 100,
      duration: 1.8,
      ease: "expo.out",
      stagger: 0.05,
      delay: 1,
    });

    return () => {
      heroSplit.revert();
      paragraphSplit.revert();
    };
  }, []);
  return (
    <section id="hero" className="noisy">
      <h1 className="title uppercase">Mojito</h1>
      <img
        src="/public/images/hero-left-leaf.png"
        alt="left leaf"
        className="left-leaf"
      />
      <img
        src="/public/images/hero-right-leaf.png"
        alt="right leaf"
        className="right-leaf"
      />

      <div className="body">
        <div className="content">
          <div className="space-y-5 md:block hidden">
            <p>Cool. Crisp. Just classic</p>
            <p className="subtitle">
              Sip the Spirit <br />
              of Summer
            </p>
          </div>

          <div className="view-cocktails">
            <p className="subtitle">
              Every cocktail on our menu is a blend of premium ingredients,
              creative flair, and timeless recipes — designed to delight your
              senses.
            </p>
            <a href="#cocktails">View cocktails</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
