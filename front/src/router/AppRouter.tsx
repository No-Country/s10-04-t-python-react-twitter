import { BrowserRouter, Route, Routes } from "react-router-dom";
import { lazy, Suspense } from "react";
import Loading from "../Components/Loading";

const Login: React.LazyExoticComponent<() => JSX.Element> = lazy(
  () => import("../Pages/Login")
);
const Home: React.LazyExoticComponent<() => JSX.Element> = lazy(
  () => import("../Pages/Home")
);
const PostTweets: React.LazyExoticComponent<() => JSX.Element> = lazy(
  () => import("../Pages/PostTweets")
);
const GiftPage: React.LazyExoticComponent<() => JSX.Element> = lazy(
  () => import("../Pages/gift")
);

export default function AppRouter(): JSX.Element {
  return (
    <Suspense fallback={<Loading />}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/posttweets" element={<PostTweets />} />
          <Route path="/login" element={<Login />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/gift" element={<GiftPage />} />
        </Routes>
      </BrowserRouter>
    </Suspense>
  );
}
