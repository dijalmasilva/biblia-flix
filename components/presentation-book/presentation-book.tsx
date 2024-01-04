'use client'

import Image from "next/image";
import {LucideInfo, LucidePlay} from "lucide-react";
import {useRouter} from "next/navigation";
import BackButton from "@/components/back-button/back-button";
import {Suspense, useEffect, useState} from "react";
import ImageFallback from "@/components/image-fallback/image-fallback";
import Button from "@/components/button/button";
import SafeArea from "@/components/safe-area/safe-area";

type PresentationBookProps = {
  slug: string;
  title: string;
  showInfo?: boolean;
  hasBack?: boolean;
  hideRead?: boolean;
}

const PresentationBook = ({
  slug,
  title,
  showInfo,
  hasBack = true,
  hideRead = false
}: PresentationBookProps) => {
  const router = useRouter()
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

  const onRead = () => {
    router.push(`/${slug}`)
  }

  return (
    <div className="w-full h-[420px] relative backdrop-blur">
      {hasBack && <SafeArea><BackButton /></SafeArea>}
      <Suspense fallback={<ImageFallback width="100%" height="420px" />}>
        <Image src={image} priority fill style={{objectFit: 'cover'}} alt={slug}
               sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"/>
      </Suspense>
      <div className="absolute inset-0 bg-black bg-opacity-[0.3]"/>
      <div className="z-10 absolute bottom-0 w-full pb-2 flex flex-col gap-4 items-center">
        <h1 className="font-bold text-3xl">{title}</h1>
        <div className="flex w-full justify-evenly">
          {
            !hideRead && (
              <Button onClick={onRead} size="medium">
                <LucidePlay fill="black"/>
                <span className="font-bold text-xl">Ler</span>
              </Button>
            )
          }
          {
            showInfo &&
            <button className="flex flex-col justify-center items-center">
              <LucideInfo size={24}/>
              Info
            </button>
          }
        </div>
      </div>
    </div>
  )
}

export default PresentationBook
