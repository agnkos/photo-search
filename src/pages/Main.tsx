import SearchBar from "../components/SearchBar";
import { Link } from "react-router-dom";

const Main = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-[url('images/road.jpg')]">
      <div className="w-3/5 max-w-4xl">
        <h1 className="text-5xl font-bold text-slate-50">PhotoGallery</h1>
        <p className="mt-4 text-lg text-slate-50">The internet’s source for visuals.</p>
        <p className="text-lg text-slate-50">Powered by creators everywhere.</p>
        <SearchBar />
      </div>
      <div className="fixed bottom-2 left-2 grid gap-2 w-full grid-cols-3">
        <p className="text-slate-100">Photo by
          <Link to="https://unsplash.com/photos/c0I4ahyGIkA"
            className="hover:text-amber-200 duration-300"
          > Jesse Bowser</Link>
        </p>
        <p className="text-slate-100 justify-self-center">powered by
          <Link to="https://unsplash.com/developers"
            className="hover:text-amber-200 duration-300"
          > Unsplash API</Link>
        </p>
      </div>
    </div>
  )
}
export default Main
