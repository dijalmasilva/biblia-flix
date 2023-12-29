'use client'

import Image from "next/image";
import {LucideInfo} from "lucide-react";
import Link from "next/link";
import RedBar from "@/components/red-bar/red-bar";

type CardBookProps = {
    title: string
    cover: string
    slug: string
}

const CardBook = ({ title, cover, slug}: CardBookProps) => {
    return (
        <Link className="flex flex-col-reverse items-center min-w-[200px]" href={`/${slug}`}>
            <h1 className="font-bold p-2 text-center bg-[#0f0f0f] w-full gap-2 rounded-b flex items-center justify-between">
                {title}
                <span>
                    <LucideInfo size={22} />
                </span>
            </h1>
            <div className="w-full h-[250px] relative">
                <Image
                    src={cover}
                    className="rounded-t"
                    alt={slug}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    fill style={{ objectFit: 'cover' }}
                />
                <RedBar imageWidth={200} bookAbbreviation={slug} isBook />
            </div>

        </Link>
    )
}

export default CardBook
