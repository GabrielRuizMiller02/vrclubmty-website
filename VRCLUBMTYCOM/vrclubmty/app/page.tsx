import { maxHeaderSize } from "http";
import Image from "next/image";
import Link from "next/link";
import Portada from './funciones/Portada';

export default function Home() {
  return (
    <div>
      <Portada image="/Eventos/Media/Icillas/Grupo.JPG" titulo="VR Club Mty" descripcion="Grupo estudiantil enfocado"
      divContent={
      <Image src="/Virtus/VirtuBody1.png" alt="GOL" width={400} height={400} className="relative object-cover hover:scale-110 hover:-rotate-12 duration-300"/>
      }/>
      
    </div>
  );
}
