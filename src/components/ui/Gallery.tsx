'use client';
import React from 'react';
import Image from 'next/image';

const Gallery = () => {
  const images = [
    'https://images.pexels.com/photos/158188/insect-bee-macro-nature-158188.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/62649/pexels-photo-62649.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/219835/pexels-photo-219835.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/66220/pexels-photo-66220.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  ];

  return (
    <div className="mx-auto max-h-full max-w-7xl rounded border p-5">
      <div className="grid h-full grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-2">
        {/* Top Image - Full Width */}
        <div className="col-span-1 h-full md:col-span-2">
          <Image
            src={images[0]}
            alt="Top Image"
            width={1600}
            height={900}
            className="h-full w-full rounded-lg object-cover shadow-md"
          />
        </div>

        {/* Middle Images */}
        <div className="col-span-1 h-full">
          <Image
            src={images[1]}
            alt="Middle Left Image"
            width={800}
            height={900}
            className="h-full w-full rounded-lg object-cover shadow-md"
          />
        </div>
        <div className="col-span-1 h-full">
          <Image
            src={images[2]}
            alt="Middle Right Image"
            width={800}
            height={900}
            className="h-full w-full rounded-lg object-cover shadow-md"
          />
        </div>

        {/* Bottom Image - Full Width */}
        <div className="col-span-1 h-full md:col-span-2">
          <Image
            src={images[3]}
            alt="Bottom Image"
            width={1600}
            height={900}
            className="h-full w-full rounded-lg object-cover shadow-md"
          />
        </div>
      </div>
    </div>
  );
};

export default Gallery;
