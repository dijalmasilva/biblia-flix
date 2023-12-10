import Image from "next/image";
import {LucidePlay} from "lucide-react";

type SearchBookProps = {
    slug: string;
    title: string;
}

const SearchBook = ({slug, title}: SearchBookProps) => {
    return (
        <div className="flex bg-[#424242] w-full">
            <div className="w-[220px] h-[80px] relative">
                <Image src={`/assets/covers/${slug}.png`} alt={slug} fill style={{objectFit: 'cover'}}
                       sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"/>
            </div>
            <div className="flex items-center justify-between w-full px-4">
                <h1 className="font-light">{title}</h1>
                <a href={`/${slug}`}>
                    <LucidePlay/>
                </a>
            </div>
        </div>
    )
}

export default SearchBook
