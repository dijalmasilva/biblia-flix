'use client'

import {useEffect, useState} from "react";
import Image from "next/image";

type LazyImageProps = {
    book: string
    chapter: number
    fallback?: string
    className?: string
    objectFit?: 'cover' | 'contain'
}

const LazyImage = ({fallback, chapter, book, className, objectFit = 'cover'}: LazyImageProps) => {

    const [image, setImage] = useState<string | any>(fallback)

    useEffect(() => {
        import((`../../public/assets/books/${book}/${book}-${chapter}.png`)).then(image => {
            setImage(image.default.src)
        }).catch(() => {
        })
    }, [chapter, book])

    if (!image) return <></>

    return <Image src={image} alt={book} fill style={{objectFit}}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" className={className}/>
}

export default LazyImage