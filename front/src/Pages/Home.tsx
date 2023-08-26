import Tweets from "../Components/Home/tweets/tweets";
import NavBar from "../layout/NavBar";
export default function home() {
  return (
    <>
      <div className="min-h-screen">
        <NavBar />
        <div className="mt-16 mr-3 xl:ml-[300px]">
          <Tweets />
        </div>
        {/* <div className="xl:ml-[300px] bg-amber-800 min-h-screen">Hola mundo</div> */}
      </div>
    </>
  );
}
