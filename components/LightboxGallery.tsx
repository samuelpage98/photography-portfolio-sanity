'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';
import { Photo } from '../types';

interface Props {
  photos: Photo[];
}

const LightboxGallery: React.FC<Props> = ({ photos }) => {
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);

  const slides = photos.map((photo) => ({
    src: photo.asset.url,
    title: photo.title,
    description: photo.description,
  }));

  return (
    <>
      <div className="masonry-grid w-full max-w-7xl mx-auto px-4">
        {photos.map((photo, idx) => (
          <div
            key={photo._key}
            className="mb-4 break-inside-avoid"
            onClick={() => {
              setIndex(idx);
              setOpen(true);
            }}
          >
            <div className="w-full overflow-hidden cursor-pointer">
              <Image
                src={photo.asset.url}
                alt={photo.title || ''}
                width={photo.asset.metadata?.dimensions?.width || 800}
                height={photo.asset.metadata?.dimensions?.height || 600}
                className="w-full h-auto transition-transform duration-300 hover:scale-105"
              // loading="lazy"
              />
              {photo.title && (
                <div className="text-center mt-2 text-sm text-gray-700">
                  {photo.title}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      <Lightbox
        open={open}
        index={index}
        close={() => setOpen(false)}
        slides={slides}
      />
    </>
  );
};

export default LightboxGallery;
