import UserInformation from "../../Hooks/userInformation";

export default function ReplyTweet() {
  const {firs_name,avatar} = UserInformation()
  return (
    <div>
      <article className="py-3 px-4 h-auto">
        <div className="grid grid-cols-[40px,1fr] mr-3 ">
          <div className="w-10 grid justify-items-center mr-3">
            <img
            src={avatar}
              className="w-10 h-10 rounded-full 
            bg-black cursor-pointer"
            />
            <div className="relative">
              <div className="border-l-2 border-gray-400 absolute -left-[1px] -top-6 h-[72px]" />
            </div>
          </div>
          <div className="flex flex-col ml-3">
            <div className="flex justify-between">
              <div className="flex gap-1 items-center">
                <span className="hover:underline">{firs_name || ""}</span>
                <span>@{firs_name || ""}</span>

                <span className="mb-2">.</span>
                {/* <span className=""><TimeAgo timestamp={tweet.created} /></span> */}
              </div>
            </div>
            {/* <div className="mb-3 grid">
              <p className=" text-justify hyphens-auto">{contenido}</p>
            </div> */}
            <div className="flex flex-row P-4">
              <p className="text-gray-500">Replying to</p>
              <span className="text-blue-500">@{firs_name || ""}</span>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
}
