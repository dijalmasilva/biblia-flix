'use client'

import Image from "next/image";
import {LucideInfo} from "lucide-react";
import Link from "next/link";
import RedBar from "@/components/red-bar/red-bar";
import {Suspense, useEffect, useState} from "react";
import ImageFallback from "@/components/image-fallback/image-fallback";
import useBookImage from "@/hooks/useBookImage";

type CardBookProps = {
  title: string
  slug: string
}

const CardBook = ({title, slug}: CardBookProps) => {
  const image = useBookImage(slug, 'force-cache')

  return (
    <Link className="flex flex-col-reverse items-center min-w-[200px]" href={`/${slug}`}>
      <h1 className="font-bold p-2 text-center bg-[#0f0f0f] w-full gap-2 rounded-b flex items-center justify-between">
        {title}
        <span>
            <LucideInfo size={22}/>
        </span>
      </h1>
      <div className="w-full h-[250px] relative">
        <Suspense fallback={<ImageFallback width="100%" height="250px"/>}>
          <Image
            src={image}
            className="rounded-t"
            alt={slug}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            fill style={{objectFit: 'cover'}}
          />
        </Suspense>
        <RedBar imageWidth={200} bookAbbreviation={slug} isBook/>
      </div>

    </Link>
  )
}

export default CardBook
