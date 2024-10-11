'use client';

import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Album } from '../types';
import { urlFor } from '../sanity/lib/image';
import { caveat } from '../lib/fonts';

interface PolaroidProps {
  album: Album;
}

const Polaroid: React.FC<PolaroidProps> = ({ album }) => {
  // Generate random values using useMemo to ensure they don't change on re-renders
  const randomValues = useMemo(() => {
    const rotation = Math.floor(Math.random() * 2) - 2; // Random rotation between -3 and +3 degrees
    return { rotation };
  }, []);

  const [isHovered, setIsHovered] = useState(false);

  const transformStyle = `rotate(${isHovered ? 0 : randomValues.rotation}deg) scale(${isHovered ? 1 : 1})`;

  return (
    <div
      className="relative group transition-transform duration-700 ease-out"
      style={{
        transform: transformStyle,
        transformOrigin: 'top center', // Set the rotation pivot to the top center
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Link href={`/albums/${album.slug}`}>
        <div className="relative w-full h-0 pb-[120%] bg-gray-200 shadow-2xl border-8 overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-[85%]">
            <Image
              src={urlFor(album.coverImage).width(800).height(800).url()}
              alt={album.title}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 33vw"
              loading="lazy"
            />
          </div>
          {/* Album Title */}
          <div className="absolute bottom-0 left-0 w-full h-[15%] flex flex-col items-center justify-center">
            <h2 className={`text-2xl font-semibold text-black ${caveat.className}`}>
              {album.title}
            </h2>
            {album.date && (
              <p className={`text-md text-black ${caveat.className}`}>
                {new Date(album.date).toLocaleDateString()}
              </p>
            )}
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Polaroid;
