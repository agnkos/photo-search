import { MagnifyingGlassIcon, ViewfinderCircleIcon, XMarkIcon } from "@heroicons/react/20/solid";
import { useNavigate } from "react-router-dom";
import { useRef, useState } from "react";
// ${process.env.REACT_APP_UNSPLASH_API_KEY}

type SearchBarType = {
    miniSearchBar?: boolean
}

const SearchBar = ({ miniSearchBar }: SearchBarType) => {

    const [query, setQuery] = useState<string>("");
    const navigate = useNavigate();
    const inputRef = useRef<HTMLInputElement>(null);

    const goToResults = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Enter") {
            navigate(`/photos/${query}`)
        }
    }

    const resetQuery = () => {
        const ref = inputRef.current
        if (ref) {
            ref.value = "";
            setQuery("")
        }
    }

    return (
        <div
            className={`p-2 flex items-center justify-between border border-slate-500 ${miniSearchBar === true ? "rounded-full focus-within:ring-2 hover:ring-2 flex-grow mt-0" : "mt-4 rounded-md focus-within:ring-8 hover:ring-8"} bg-slate-50  focus-within:ring-slate-600/40 hover:ring-slate-600/40 ease-linear duration-300`}>
            <MagnifyingGlassIcon className="w-6 h-6 m-2 text-slate-500" />
            <input
                type="text"
                className="p-2 text-slate-500 bg-slate-50 text-start w-full focus:outline-none"
                placeholder="Search for photos"
                onKeyDown={goToResults}
                onChange={(e) => setQuery(e.target.value)}
                ref={inputRef}
            />
            {query.length >= 1 && <XMarkIcon className="w-6 h-6 m-2 text-slate-500" onClick={resetQuery} />}
            <ViewfinderCircleIcon className="w-6 h-6 m-2 text-slate-500" />
        </div>
    )
}
export default SearchBar


