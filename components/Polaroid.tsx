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
  return (
    <div
      className="relative group"
    >
      <Link href={`/albums/${album.slug}`}>
        <div className="relative w-full h-0 pb-[120%] bg-gray-200 shadow-2xl border-8 overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-[85%] overflow-hidden">
            <Image
              src={urlFor(album.coverImage).width(800).height(800).url()}
              alt={album.title}
              fill
              className="object-cover transition-transform duration-300 hover:scale-105"
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
