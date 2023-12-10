import {LucideSearch} from "lucide-react";
import SearchBook from "@/components/search-book/search-book";

const Search = () => {
    return (
        <div className="flex-col">
            <div className="bg-[#424242] gap-4 text-[#C4C4C4] px-6 py-4 w-full font-light flex">
                <LucideSearch/>
                <input autoFocus type="search" className="flex-1 border-none none outline-none"
                       style={{background: 'none'}} placeholder="Busque pelo nome do livro"/>
            </div>
            <div className="mt-6 flex flex-col gap-4">
                <h1 className="ml-4 text-2xl font-bold">Top buscas</h1>
                <div className="flex flex-col gap-1">
                    <SearchBook slug="mt" title="Mateus" />
                    <SearchBook slug="atos" title="Atos" />
                    <SearchBook slug="gn" title="Gênesis" />
                </div>
            </div>
        </div>
    )
}

export default Search