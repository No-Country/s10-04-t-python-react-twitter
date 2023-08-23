import { BrowserRouter, Route, Routes } from "react-router-dom";
import { lazy, Suspense } from "react";

const Login: React.LazyExoticComponent<() => JSX.Element> = lazy(
  () => import("../Pages/Login")
);

const Home: React.LazyExoticComponent<() => JSX.Element> = lazy(
  () => import("../Pages/Home")
);

export default function AppRouter(): JSX.Element {
  return (
    <Suspense fallback={<h1>loading...</h1>}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/Home" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </Suspense>
  );
}
