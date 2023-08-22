import { Message, Retweet, Like, Measure, Share } from "./TweetIcons/Icons";

export default function Functionality(): JSX.Element {
  return (
    <div className="flex flex-row items-center justify-between gap-2 mt-3">
      <div className="flex flex-row items-center gap-1 group">
        <div className="flex w-[35px] h-[35px] items-center 
        justify-center group-hover:bg-blue-100 rounded-full">{Message}</div>
        <span className="group-hover:text-blue-400">2</span>
      </div>
      <div className="flex flex-row items-center gap-1 group">
        <div className="flex w-[35px] h-[35px] items-center 
        justify-center group-hover:bg-blue-100 rounded-full">{Retweet}</div>
        <span className="group-hover:text-green-400">2</span>
      </div>
      <div className="flex flex-row items-center gap-1 group">
        <div className="flex w-[35px] h-[35px] items-center 
        justify-center group-hover:bg-red-100 rounded-full">{Like}</div>
        <span className="group-hover:text-red-400">2</span>
      </div>
      <div className="flex flex-row items-center gap-1 group">
        <div className="flex w-[35px] h-[35px] items-center 
        justify-center group-hover:bg-blue-100 rounded-full">{Measure}</div>
        <span className="group-hover:text-blue-400">2</span>
      </div>
      <div className="flex flex-row items-center group">
        <div className="flex w-[35px] h-[35px] items-center 
        justify-center group-hover:bg-blue-100 rounded-full">{Share}</div>
        </div>
    </div>
  );
}
