import React, { ReactNode } from "react";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {
  const modalClassName = isOpen ? "block" : "hidden";

  return (
    <>
      <div
        id="authentication-modal"
        aria-hidden="true"
        className={`fixed inset-0 z-10 bg-[#0000008f] flex justify-center items-center ${modalClassName}`}
      >
        <div className="relative w-full h-full flex max-w-2xl ">
          <div className="relative bg-white flex items-center justify-center w-full shadow md:my-10 md:rounded-md dark:bg-gray-700">
            <button
              type="button"
              className="absolute top-3 left-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
              data-modal-hide="authentication-modal"
              onClick={onClose}
            >
              <svg
                className="w-3 h-3"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 14"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                />
              </svg>
              <span className="sr-only">Close modal</span>
            </button>
            {children}
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
