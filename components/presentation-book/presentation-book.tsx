'use client'

import Image from "next/image";
import {LucideArrowBigLeftDash, LucideInfo, LucidePlay, LucidePlus} from "lucide-react";
import Link from "next/link";
import {useRouter} from "next/navigation";
import BackButton from "@/components/back-button/back-button";

type PresentationBookProps = {
    image: string;
    slug: string;
    title: string;
    showInfo?: boolean;
    info?: string;
    hasBack?: boolean;
}

const PresentationBook = ({
  image,
  slug,
  info,
  title,
  showInfo,
  hasBack = true
}: PresentationBookProps) => {
    const router = useRouter()

    const onClickInfo = () => {
        alert('Clicou em info')
    }

    const onAdd = () => {
    }
    const onRead = () => {
        router.push(`/${slug}`)
    }

    return (
        <div className="w-full h-[420px] relative backdrop-blur">
            {hasBack && <BackButton/>}
            <Image src={image} priority fill style={{objectFit: 'cover'}} alt={slug}
                   sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"/>
            <div className="absolute inset-0 bg-black bg-opacity-[0.3]"/>
            <div className="z-10 absolute bottom-0 w-full pb-2 flex flex-col gap-4 items-center">
                <h1 className="font-bold text-3xl">{title}</h1>
                <div className="flex w-full justify-evenly">
                    <button onClick={onAdd} className="flex flex-col justify-center items-center">
                        <LucidePlus size={24}/>
                        Sua lista
                    </button>
                    <button onClick={onRead}
                            className="flex gap-2 min-w-[100px] justify-center items-center bg-gray-300 text-black rounded-lg">
                        <LucidePlay fill="black"/>
                        <span className="font-bold text-xl">Ler</span>
                    </button>
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
