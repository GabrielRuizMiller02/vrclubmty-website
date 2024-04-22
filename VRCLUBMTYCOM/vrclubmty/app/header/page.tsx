"use client";
import { maxHeaderSize } from "http";
import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import HeaderOption from '../funciones/HeaderOption';

export default function Home() {
  const [scrolling, setScrolling] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);


  return (
    <div className={`${scrolling ? "bg-[#07134b98]" : "bg-[#07134b98]  from-[#916a58]"} fixed top-0 z-30 w-full duration-500 transition-all 
    text-white text-2xl  h-14 flex items-center justify-start `}>
        <Image src="/Virtus/VRClubLogoWhite.png" alt="GOL" width={50} height={50} className="mx-5" />
        <HeaderOption option="Inicio" path="/"/>
        <HeaderOption option="Talleres" path="/talleres"/>
        <HeaderOption option="Torneos" path="/talleres"/>
        <HeaderOption option="Equipo" path="/equipo"/>
        <HeaderOption option="Redes Sociales" path="/talleres"/>
        <HeaderOption option="Speech To Text" path="/speech"/>
    </div>
  );
}
