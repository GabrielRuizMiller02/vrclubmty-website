import { maxHeaderSize } from "http";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-[#294a69] text-white">
        <Image src="/Equipo/FullTeam.jpeg" alt="GOL" fill className="object-cover opacity-15">
          </Image>
      <p className="relative text-8xl font-bold">Equipo</p>
      <p className="relative text-4xl text-center">Grupo Estudiantil enfocado en videojuegos, talleres, torneos, reuniones en Realidad Virtual.</p>
      <div className="flex items-center justify-start">
      <Image src="/Eventos/Posts/Taller_Blender.png" alt="GOL" width={400} height={400} className="relative"/>
      </div>
      <div>
      <Image src="/Eventos/Posts/Taller_Blender.png" alt="GOL" width={400} height={400} className="relative"/>
      </div>
      

    </main>
  );
}
