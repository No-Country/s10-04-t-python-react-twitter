import React from "react";

type textopost = { text: string };

const NotificationSystem: React.FC<textopost> = ({ text }) => {
  return (
    <div className="w-full flex px-4 py-3">
      <div className="w-10 h-10 mr-3 flex justify-end items-start">
        <div className="w-[30px] h-[30px]">
          <svg
            viewBox="0 0 24 24"
            aria-hidden="true"
            className="r-18jsvk2 r-4qtqp9 r-yyyyoo r-yucp9h r-dnmrzs r-bnwqim r-1plcrui r-lrvibr"
          >
            <g>
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path>
            </g>
          </svg>
        </div>
      </div>
      <div className="flex-1">
        <p className="font-normal text-[15px] leading-5 text-textblack">
          {text}
        </p>
      </div>
    </div>
  );
};

export default NotificationSystem;
