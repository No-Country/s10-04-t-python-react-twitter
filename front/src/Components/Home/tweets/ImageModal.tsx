
import { closeIcon } from "../createPost/Icons/closeIcon";
interface ImageModalProps {
  enlargedImage: string | null;
  closeImage: () => void;
}

export default function ImageModal({ enlargedImage, closeImage }:ImageModalProps) {
    return (
      <div>
        {enlargedImage && (
          <div className="fixed top-0 left-0 w-screen h-screen flex items-center justify-center bg-black z-50">
            <div className=" relative w-screen h-screen">
              <img
                src={enlargedImage}
                alt="Enlarged Image"
                className="w-full h-full object-contain rounded-lg"
              />
              <button
                onClick={closeImage}
                className="absolute top-0 left-0 m-4 p-2 rounded-full hover:bg-gray-100 focus:outline-none"
              >
                {closeIcon}
              </button>
            </div>
          </div>
        )}
      </div>
    );
  }
  