import {useEffect, useState} from "react";

const useBookImage = (bookAbbrev: string, chapter?: number, cache: RequestCache = 'default'): { image: string, blob: Blob | null } => {
  const [image, setImage] = useState<string>('/assets/books/bg-cross.png')
  const [blob, setBlob] = useState<Blob | null>(null)

  useEffect(() => {
    if (bookAbbrev) {
      let url = `https://raw.githubusercontent.com/dijalmasilva/biblia-flix-assets/main/assets/covers/${bookAbbrev}.png`
      if (chapter) {
        url = `https://raw.githubusercontent.com/dijalmasilva/biblia-flix-assets/main/assets/books/${bookAbbrev}/${bookAbbrev}-${chapter}.png`
      }
      fetch(url, { cache }).then(async response => {
        if (response.status === 404) {
          setImage('/assets/books/bg-cross.png')
        } else if (response.status === 200) {
          const imageBlob = await response.blob()
          setBlob(imageBlob)
          const imageObjectUrl = URL.createObjectURL(imageBlob)
          setImage(imageObjectUrl)
        }
      }).catch(() => {
        setImage('/assets/books/bg-cross.png')
      })
    } else {
      setImage('/assets/books/bg-cross.png')
    }

  }, [bookAbbrev]);

  return {
    image,
    blob
  };
}

export default useBookImage
