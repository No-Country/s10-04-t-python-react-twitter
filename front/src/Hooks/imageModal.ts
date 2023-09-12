import { useState } from "react";
export default function useImageModal(){
    const [enlargedImage, setEnlargedImage] = useState<string | null>(null);

const openImage = (imageSrc: string) => {
  setEnlargedImage(imageSrc);
};

const closeImage = () => {
  setEnlargedImage(null);
};
return {enlargedImage,openImage,closeImage};

}

