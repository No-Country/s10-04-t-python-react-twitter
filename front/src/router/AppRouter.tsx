import { BrowserRouter, Route, Routes } from "react-router-dom";
import { lazy, Suspense } from "react";
import Loading from "../Components/Loading";


interface Page {
  path: string;
  component: React.LazyExoticComponent<React.ComponentType<unknown>>;
}

const pages: Page[] = [
  { path: "/", component: lazy(() => import("../Pages/Login")) },
  { path: "/Home", component: lazy(() => import("../Pages/Home")) },
  { path: "/Profile", component: lazy(() => import("../Pages/Profile")) },
  {
    path: "/Notifications",
    component: lazy(() => import("../Pages/Notifications")),
  },
  { path: "/Explore", component: lazy(() => import("../Pages/Explore")) },
  { path: "/posttweets", component: lazy(() => import("../Pages/PostTweets")) },
  {path: "/gift", component: lazy(() => import("../Pages/gif"))},
  {path: "/comments", component: lazy(() => import("../Pages/Comments"))},
  {path:"/replycomments", component: lazy(() => import("../Pages/replyComment"))}
];

export default function AppRouter(): JSX.Element {
  return (
    <Suspense fallback={<Loading />}>
      <BrowserRouter>
        <Routes>
          {pages.map((page) => (
            <Route
              key={page.path}
              path={page.path}
              element={<page.component />}
            />
          ))}
        </Routes>
      </BrowserRouter>
    </Suspense>
  );
}
