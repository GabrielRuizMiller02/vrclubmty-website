import { maxHeaderSize } from "http";
import Image from "next/image";
import Link from "next/link";
import React from 'react';
//import TallerInfo from '../funciones/TallerInfo';
import TallerPost from '../funciones/TallerPost';
import Portada from '../funciones/Portada';

export default function Home() {
  return (
    <main>

      <Portada image="/Eventos/Media/Peggtus/Pegg1.jpeg" titulo="Talleres" descripcion="Grasadaiosjfduishfihwi"
      />
      
      <div className="bg-[#835932da]">
      <TallerPost color="#835932da" post = "/Eventos/Posts/Taller_Blender.png" grupo="url('/Eventos/Media/Blender/Grupo.JPG')" nombre="Taller de Introducción a Blender" leftSide={true} descripcion="Esta es una descripción Esta es una descripción  Esta es una descripción  Esta es una descripción  Esta es una descripción " />
      <TallerPost color="#294a69da" post = "/Eventos/Posts/Taller_IAEnemigos.png" grupo="url('/Eventos/Media/Icillas/GrupoNew.JPG')" nombre="Taller de Inteligencia Artificial para Enemigos en Videojuegos" leftSide={false} descripcion="Esta es una descripción Esta es una descripción  Esta es una descripción  Esta es una descripción  Esta es una descripción "/>
      <TallerPost color="#662b59da" post = "/Eventos/Posts/Taller_Peggtus.png" grupo="url('/Eventos/Media/Peggtus/Grupo.jpeg')" nombre="Taller de Introducción a Unity y Multijugador Local" leftSide={true} descripcion="Esta es una descripción Esta es una descripción  Esta es una descripción  Esta es una descripción  Esta es una descripción " />
      <TallerPost color="#3f663fda" post = "/Eventos/Posts/Taller_VRIntro.png" grupo="url('/Eventos/Media/VRIntro/GrupoNew.JPG')" nombre="Taller de Desarrollo de Realidad Virtual" leftSide={false} descripcion="Esta es una descripción Esta es una descripción  Esta es una descripción  Esta es una descripción  Esta es una descripción " />
      <TallerPost color="#294a69da" post = "/Eventos/Posts/Taller_Maya.png" grupo="url('/Eventos/Media/Maya/Grupo.png')" nombre="Taller de Modelación 3D en Maya" leftSide={true} descripcion="Esta es una descripción Esta es una descripción  Esta es una descripción  Esta es una descripción  Esta es una descripción " />
      <TallerPost color="#2b2b2bda" post = "/Eventos/Posts/Taller_Unity.png" grupo="url('/Eventos/Media/Unity/Grupo.png')" nombre="Taller de Introducción a Unity" leftSide={false} descripcion="Esta es una descripción Esta es una descripción  Esta es una descripción  Esta es una descripción  Esta es una descripción " />
      </div>
      
      

    </main>
  );
}
