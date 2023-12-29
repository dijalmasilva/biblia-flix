'use client'

import Link from "next/link";
import LazyImage from "@/components/lazy-image/lazy-image";
import {useEffect, useState} from "react";

type ResumeChapterProps = {
    book: string
    chapter: number
    verses: number
    description: string
}

const imageWidth = 150

const ResumeChapter = ({chapter, verses, description, book}: ResumeChapterProps) => {
    const [alreadyRead, setAlreadyRead] = useState(false)

    useEffect(() => {
        if (localStorage) {
            const readChapters = localStorage.getItem('read') || ''
            if (!readChapters) return;

            const chapters = JSON.parse(readChapters) as string[];
            const pattern = `${book}-${chapter}`

            if (chapters.find(chapter => chapter === pattern)) {
                setAlreadyRead(true)
            }
        }
    }, []);

    return (
        <Link className="flex flex-col gap-2" href={`/${book}/${chapter}`}>
            <div className="flex gap-3">
                <div className={`h-[90px] relative`} style={{width: `${imageWidth}px`}}>
                    <LazyImage book={book} chapter={chapter} fallback={`/assets/books/loading-content.png`} />
                    {
                        alreadyRead && (
                            <div className={`bg-red-500 h-1 absolute bottom-0 left-0`}
                                 style={{width: `${imageWidth}px`}}/>
                        )
                    }
                </div>
                <div className="flex flex-col justify-center">
                    <h1>{`Capítulo ${chapter}`}</h1>
                    <p className="text-gray-500">{`${verses} versículo${verses > 1 ? 's' : ''}`}</p>
                </div>
            </div>
            <p className="text-gray-500 text-md">
                {description.length > 200 ? `${description.substring(0, 100)}...` : description}
            </p>
        </Link>
    )
}

export default ResumeChapter
