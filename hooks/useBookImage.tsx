import {useEffect, useState} from "react";

const useBookImage = (bookAbbrev: string, cache: RequestCache = 'default'): string => {
  const [image, setImage] = useState<string>('/assets/books/bg-cross.png')

  useEffect(() => {
    if (bookAbbrev) {
      const url = `https://raw.githubusercontent.com/dijalmasilva/biblia-flix-assets/main/assets/covers/${bookAbbrev}.png`
      fetch(url, { cache }).then(async response => {
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
    } else {
      setImage('/assets/books/bg-cross.png')
    }

  }, [bookAbbrev]);

  return image;
}

export default useBookImage
