'use client'

import Image from "next/image";
import {LucidePlay} from "lucide-react";
import {useRouter} from "next/navigation";
import {BookType} from "@/models/book";
import RedBar from "@/components/red-bar/red-bar";
import {Suspense, useEffect, useState} from "react";
import ImageFallback from "@/components/image-fallback/image-fallback";

type SearchBookProps = {
  slug: string;
  title: string;
}

const SearchBook = ({slug, title}: SearchBookProps) => {
  const [image, setImage] = useState<string>('/assets/books/bg-cross.png')

  useEffect(() => {
    const url = `https://raw.githubusercontent.com/dijalmasilva/biblia-flix-assets/main/assets/covers/${slug}.png`
    fetch(url, {cache: 'force-cache'}).then(async response => {
      if (response.status === 404) {
        setImage('/assets/books/bg-cross.png')
      } else if (response.status === 200) {
        const imageBlob = await response.blob()
        const imageObjectUrl = URL.createObjectURL(imageBlob)
        setImage(imageObjectUrl)
      }
    }).catch(() => {
      setImage('/assets/books/bg-cross.png')
    })
  }, []);

  const router = useRouter()
  const onClick = () => {
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
    <div className="flex dark:bg-[#424242] bg-netflix-white shadow w-full cursor-pointer" onClick={onClick}>
      <div className="w-[150px] h-[100px] relative">
        <Suspense fallback={<ImageFallback width="180px" height="100px" />}>
          <Image src={image} alt={slug} fill style={{objectFit: 'cover'}}
                 sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"/>
        </Suspense>
        <RedBar imageWidth={150} bookAbbreviation={slug} isBook/>
      </div>
      <div className="flex items-center justify-between flex-1 px-4">
        <h1 className="font-light">{title}</h1>
        <LucidePlay/>
      </div>
    </div>
  )
}

export default SearchBook
