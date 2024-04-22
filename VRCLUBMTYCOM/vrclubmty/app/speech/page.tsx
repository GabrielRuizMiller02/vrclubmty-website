import { maxHeaderSize } from "http";
import Image from "next/image";
import Link from "next/link";
import Portada from '../funciones/Portada';

export default function Home() {
  return (
    <div>
      <Portada image="/Eventos/Media/Icillas/Grupo.JPG" titulo="Speech To Text" descripcion="DDDDA da ds da sad d"
      />
      
    </div>
  );
}
