"use client";
import { useEffect } from "react";
import Image from "next/image";
import IndexHeroImage from "@/images/foo-fest-hero-w-text.png";
import IndexFansHero from "@/images/fans-for-parallax.png";
import { gsap } from "gsap";

const Hero = () => {
  useEffect(() => {
    const tl = gsap.timeline().from(".hero-text p", {
      xPercent: gsap.utils.wrap([100, -100]),
      stagger: 0.4,
      opacity: 0,
      ease: "circ.inOut",
    });
  }, []);

  return (
    <div className="relative w-full h-screen">
      <div className="relative h-full">
        <Image src={IndexHeroImage} alt="Hero background for index" layout="fill" objectFit="cover" priority={true} className="z-0" />

        <div className="absolute inset-0 z-40">
          <Image src={IndexFansHero} alt="Fans Image" width={3000} height={100} priority={true} className="w-full h-full object-cover" />
        </div>
        <div className="absolute bottom-10 w-full text-white flex flex-col items-start p-4 z-40">
          <div className="hero-text overflow-hidden">
            <p className="ml-14 text-xl font-bold sm:text-lg md:text-xl lg:text-2xl xl:text-9xl">March</p>
          </div>
          <div className="hero-text overflow-hidden">
            <p className="ml-14 text-xl font-bold sm:text-lg md:text-xl lg:text-2xl xl:text-9xl">24th ─ 28th</p>
          </div>
          <div className="hero-text overflow-hidden">
            <p className="ml-14 text-xl font-medium sm:text-lg md:text-xl lg:text-2xl xl:text-9xl">2025</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
