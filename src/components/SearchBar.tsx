import { MagnifyingGlassIcon, ViewfinderCircleIcon } from "@heroicons/react/20/solid";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
// ${process.env.REACT_APP_UNSPLASH_API_KEY}

const SearchBar = () => {

    const [query, setQuery] = useState("");
    const navigate = useNavigate();

    const goToResults = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Enter") {
            navigate(`/photos/${query}`)
        }
        console.log('query', query)
    }

    return (
        <div
            className="mt-4 p-2 flex items-center justify-between border order-slate-500 rounded-md bg-slate-50 group focus-within:ring-slate-800/50 focus-within:ring-8 hover:ring-slate-800/50 hover:ring-8 ease-linear duration-300">
            <MagnifyingGlassIcon className="w-6 h-6 m-2 text-slate-500" />
            <input
                type="text"
                className="group p-2 text-slate-500 bg-slate-50 text-start w-full focus:outline-none"
                placeholder="Search for photos"
                onKeyDown={goToResults}
                onChange={(e) => setQuery(e.target.value)}
            />
            <ViewfinderCircleIcon className="w-6 h-6 m-2 text-slate-500" />
        </div>
    )
}
export default SearchBar


