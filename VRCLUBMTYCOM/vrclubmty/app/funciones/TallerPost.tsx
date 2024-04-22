// components/MyComponent.tsx

import React from 'react';
import Image from 'next/image';
import TallerInfo from '../funciones/TallerInfo';

interface TallerPost {
  color: string
  post: string;
  grupo: string;
  nombre: string;
  descripcion: string;
  leftSide: boolean;
}

const MyComponent: React.FC<TallerPost> = ({ color, post, grupo, nombre, descripcion, leftSide }) => {
  return (
    <div className="flex flex-col items-center justify-between">
      {/* Asegurar que la imagen de fondo cubra todo el div y esté centrada 
      min-h-screen*/}
      <div className="bg-cover bg-center bg-no-repeat" style={{ backgroundImage: grupo }}>
        <div className="flex justify-between px-20" style={{ backgroundColor:color }}>
          {leftSide ? (
            <>
              <Image src={post} alt="GOL" width={500} height={500} className="hover:scale-110 hover:-rotate-6 duration-200 relative drop-shadow-2xl mt-10 mb-10"/>
              <TallerInfo nombre={nombre} descripcion={descripcion} leftSide={leftSide}/>
            </>
          ) : (
            <>
              <TallerInfo nombre={nombre} descripcion={descripcion} leftSide={leftSide}/>
              <Image src={post} alt="GOL" width={500} height={500} className="hover:scale-110 hover:rotate-6 duration-200 relative drop-shadow-2xl mt-10 mb-10"/>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default MyComponent;