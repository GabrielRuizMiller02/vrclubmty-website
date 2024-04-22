// components/MyComponent.tsx

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface HeaderOption {
  option: string;
  path: string;
}

const MyComponent: React.FC<HeaderOption> = ({ option, path }) => {
  return (
    <Link href={path} className="hover:text-[#000000] duration-200 px-8 group flex justify-center items-center h-full  overflow-hidden text-center relative hover:bg-[#57ddff] transition duration 1000">
        <p className="group-hover:scale-110 group-hover:-rotate-6 group-hover:font-bold duration-200">{option}</p>
          </Link>
  );
};

export default MyComponent;