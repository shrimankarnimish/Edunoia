import React from 'react';

export function CultureCard({ image, imageAlt, title }) {
  return (
    <div className="flex flex-col w-[33%] max-md:ml-0 max-md:w-full">
      <div className="flex flex-col grow pb-14 w-full text-3xl font-bold leading-9 text-black rounded-none bg-neutral-100 max-md:mt-5 max-md:max-w-full">
        <img
          loading="lazy"
          src={image}
          alt={imageAlt}
          className="object-contain w-full aspect-[1.57] max-md:max-w-full"
        />
        <div className="self-start mt-16 ml-16 max-md:mt-10 max-md:ml-2.5">
          {title}
        </div>
      </div>
    </div>
  );
}
export default CultureCard;