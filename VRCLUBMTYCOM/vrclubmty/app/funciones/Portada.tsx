// components/MyComponent.tsx

import React from 'react';
import Image from 'next/image';
import TallerInfo from './TallerInfo';

interface Portada {
  image: string;
  titulo: string;
  descripcion: string;
  divContent?: React.ReactNode;
}

const MyComponent: React.FC<Portada> = ({ image, titulo, descripcion, divContent }) => {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-[#294a69] text-white">
        <Image src={image} alt="GOL" fill className="object-cover opacity-15">
          </Image>
      <p className="relative text-8xl font-bold hover:scale-125 hover:drop-shadow-2xl duration-200">{titulo}</p>
      <p className="relative text-4xl text-center mt-10 mb-20">{descripcion}</p>
      <div className="flex items-center justify-start">
      {divContent}
      </div>
      

    </main>
  );
};

export default MyComponent;