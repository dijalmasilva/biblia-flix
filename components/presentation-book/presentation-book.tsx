'use client'

import Image from "next/image";
import {LucideInfo, LucidePlay} from "lucide-react";
import {useRouter} from "next/navigation";
import BackButton from "@/components/back-button/back-button";
import {Suspense} from "react";
import ImageFallback from "@/components/image-fallback/image-fallback";

type PresentationBookProps = {
  image: string;
  slug: string;
  title: string;
  showInfo?: boolean;
  hasBack?: boolean;
  hideRead?: boolean;
}

const PresentationBook = ({
  image,
  slug,
  title,
  showInfo,
  hasBack = true,
  hideRead = false
}: PresentationBookProps) => {
  const router = useRouter()

  const onRead = () => {
    router.push(`/${slug}`)
  }

  return (
    <div className="w-full h-[420px] relative backdrop-blur">
      {hasBack && <BackButton/>}
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
              <button onClick={onRead}
                      className="flex gap-2 py-2 min-w-[100px] justify-center items-center bg-gray-300 text-black rounded-lg">
                <LucidePlay fill="black"/>
                <span className="font-bold text-xl">Ler</span>
              </button>
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
