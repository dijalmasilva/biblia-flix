'use client'

import {useEffect, useState} from "react";
import Image from "next/image";
import ImageFallback from "@/components/image-fallback/image-fallback";

type LazyImageProps = {
  book: string
  chapter: number
  fallback?: string
  className?: string
  objectFit?: 'cover' | 'contain'
}

const LazyImage = ({fallback, chapter, book, className, objectFit = 'cover'}: LazyImageProps) => {

  const [image, setImage] = useState<string | any>('')

  useEffect(() => {
    const url = `https://raw.githubusercontent.com/dijalmasilva/biblia-flix-assets/main/assets/books/${book}/${book}-${chapter}.png`
    fetch(url, {cache: 'default'}).then(async response => {
      if (response.status === 404) {
        setImage(fallback)
      } else if (response.status === 200) {
        const imageBlob = await response.blob()
        const imageObjectUrl = URL.createObjectURL(imageBlob)
        setImage(imageObjectUrl)
      }
    }).catch(() => {
      setImage(fallback)
    })
  }, [chapter, book, fallback])

  if (!image) return <ImageFallback width="100%" height="100%"/>

  return (
    <Image src={image} alt={book} fill style={{objectFit}}
           sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" className={className}/>
  )
}

export default LazyImage