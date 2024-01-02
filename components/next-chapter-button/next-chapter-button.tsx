'use client'

import {hasNextChapter} from "@/helpers/bible-helper/bible-helper";
import Button from "@/components/button/button";
import {LucideArrowBigRightDash} from "lucide-react";
import {useRouter} from "next/navigation";

type Props = {
  abbrev: string,
  chapter: number,
}

const NextChapterButton = ({ abbrev, chapter}: Props) => {
  const router = useRouter()

  if (!hasNextChapter(abbrev, chapter)) {
    return <></>
  }

  const goToNextChapter = async () => {
    const chapterNumber = parseInt(String(chapter))
    router.push(`/${abbrev}/${(chapterNumber + 1)}`)
  }

  return (
    <Button size="medium" onClick={goToNextChapter}>
      Prox. capítulo
      <LucideArrowBigRightDash size={28} />
    </Button>
  )
}

export default NextChapterButton