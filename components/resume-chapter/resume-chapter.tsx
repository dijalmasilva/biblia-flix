'use client'

import Link from "next/link";
import LazyImage from "@/components/lazy-image/lazy-image";
import RedBar from "@/components/red-bar/red-bar";

type ResumeChapterProps = {
    book: string
    chapter: number
    verses: number
    description: string
}

const imageWidth = 150

const ResumeChapter = ({chapter, verses, description, book}: ResumeChapterProps) => {

    return (
        <Link className="flex flex-col gap-2" href={`/${book}/${chapter}`}>
            <div className="flex gap-3">
                <div className={`h-[90px] relative`} style={{width: `${imageWidth}px`}}>
                    <LazyImage book={book} chapter={chapter} fallback={`/assets/books/loading-content.png`} />
                    <RedBar imageWidth={imageWidth} bookAbbreviation={book} chapter={chapter} />
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
