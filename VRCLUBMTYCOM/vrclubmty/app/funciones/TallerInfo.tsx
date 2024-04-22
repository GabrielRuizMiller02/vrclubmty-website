import React from 'react';
import Image from 'next/image';

interface TallerInfo {
    nombre: string;
    descripcion: string;
    leftSide: boolean;
}


const MyComponent: React.FC<TallerInfo> = ({ nombre, descripcion, leftSide }) => {
  return (
    <div>
        <div className="relative  text-white">
        <div>
        {leftSide ? (
          <div className='text-end mt-10 mb-10'>
            <p className='font-bold text-5xl mb-16 hover:scale-110 hover:drop-shadow-2xl transition duration 1000'>{nombre}</p>
            <p className='text-3xl hover:drop-shadow-2xl transition duration 1000 px-16'>{descripcion}</p>
          </div>
        ):(
          <div className='text-start mt-10 mb-10'>
            <p className='font-bold text-5xl mb-16 hover:scale-110 hover:drop-shadow-2xl transition duration 1000'>{nombre}</p>
            <p className='text-3xl hover:drop-shadow-2xl transition duration 1000  px-16'>{descripcion}</p>
          </div>
        )}
          </div>
        </div>
    </div>
  );
};

export default MyComponent;