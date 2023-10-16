import React, { useEffect, useState } from "react";
import { Blurhash } from "react-blurhash";

const BlurHashExample1 = ({ image }) => {
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    const img = new Image();
    img.onload = () => {
      setImageLoaded(true);
    };
    img.src = image;
  }, [image]);
  return (
    <>
      {!imageLoaded && (
        <Blurhash
          hash="L5I#lXDN00B?yD.975~900xV%NcE"
          width={200}
          height={200}
          resolutionX={32}
          resolutionY={32}
          punch={1}
        />
      )}
      {imageLoaded && (
        <img
          onLoad={() => setImageLoaded(true)}
          src={image}
          alt="u"
          width={200}
          height={200}
        />
      )}
    </>
  );
};

export default BlurHashExample1;
