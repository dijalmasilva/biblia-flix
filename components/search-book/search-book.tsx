'use client'

import Image from "next/image";
import {LucidePlay} from "lucide-react";
import {useRouter} from "next/navigation";
import {BookType} from "@/models/book";
import RedBar from "@/components/red-bar/red-bar";

type SearchBookProps = {
  slug: string;
  title: string;
}

const SearchBook = ({slug, title}: SearchBookProps) => {
  const router = useRouter()
  const onClick = () => {
    console.log(localStorage)
    if (localStorage) {
      let searchStorage = localStorage.getItem('recent-books')
      if (!searchStorage) {
        searchStorage = `[]`
      }

      let recentBooks = JSON.parse(searchStorage) as BookType[]
      recentBooks = recentBooks.filter(book => book.abbrev !== slug)

      if (recentBooks.length === 7) {
        recentBooks.shift();
      }

      recentBooks.push({abbrev: slug, name: title})
      localStorage.setItem('recent-books', JSON.stringify(recentBooks))
    }

    router.push(`/${slug}`)
  }

  return (
    <div className="flex bg-[#424242] w-full cursor-pointer" onClick={onClick}>
      <div className="w-[220px] h-[80px] relative">
        <Image src={`/assets/covers/${slug}.png`} alt={slug} fill style={{objectFit: 'cover'}}
               sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"/>
        <RedBar imageWidth={220} bookAbbreviation={slug} isBook/>
      </div>
      <div className="flex items-center justify-between w-full px-4">
        <h1 className="font-light">{title}</h1>
        <LucidePlay/>
      </div>
    </div>
  )
}

export default SearchBook
