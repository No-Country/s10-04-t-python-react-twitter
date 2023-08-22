import{BrowserRouter,Route,Routes}from "react-router-dom"
import {lazy, Suspense} from "react"

const Home: React.LazyExoticComponent<() => JSX.Element> = lazy(
    () => import ("../Pages/Home"))


export default function AppRouter(): JSX.Element{
    return (
        <Suspense fallback={<h1>loading...</h1>}>
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home />}/>

        </Routes>
        </BrowserRouter>
        </Suspense>
    )

}

