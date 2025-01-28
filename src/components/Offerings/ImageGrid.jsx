import React from 'react';

export function ImageGrid({ images, className }) {
  return (
    <div className="flex gap-5 max-md:flex-col">
      {images.map((image) => (
        <div key={image.id} className={`flex flex-col ${className || 'w-3/12'} max-md:ml-0 max-md:w-full`}>
          <img
            loading="lazy"
            src={image.src}
            alt={image.alt}
            className="object-contain grow shrink-0 max-w-full aspect-[0.76] w-[396px] max-md:mt-6 hover:scale-105 transition-transform duration-300"
          />
        </div>
      ))}
    </div>
  );
}