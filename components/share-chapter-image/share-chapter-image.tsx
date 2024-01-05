'use client'

import ShareButton from "@/components/share-button/share-button";
import useBookImage from "@/hooks/useBookImage";
import {BookType} from "@/models/book";

type Props = {
  children: React.ReactNode,
  book: BookType,
  chapter: number,
  className?: string,
}

const ShareChapterImage = ({ chapter, children, book, className }: Props) => {
  const { blob} = useBookImage(book.abbrev, chapter, 'force-cache')

  if (!blob) return null;

  return (
    <ShareButton
      className={`p-2 rounded-xl bg-red-500 w-full ${className}`}
      dialogTitle="Compartilhar capítulo"
      title={`Bíblia Flix - ${book.name}, Capítulo ${chapter}`}
      text={`Terminei de assistir - ${book.name}, Capítulo ${chapter} no Bíblia Flix!`}
      blob={blob}
      url={`https://biblia-flix.vercel.app/${book.abbrev}/${chapter}`}
    >
      {children}
    </ShareButton>
  )
}

export default ShareChapterImage
