'use client'

import {LucideArrowBigLeftDash} from "lucide-react";
import {useParams, usePathname, useRouter, useSearchParams} from "next/navigation";
import Button from "@/components/button/button";
import menuActor from "@/machines/menu-machine/menu-machine";

type Props = {
    size?: 'small' | 'medium'
}

const BackButton = ({ size = 'small'}: Props) => {
    const router = useRouter()
    const params = useParams()
    const searchParams = useSearchParams()
    const path = usePathname();

    const back = async () => {
        const { book, chapter } = params

        if (path.includes('settings')) {
            // router.back()
            menuActor.send({type: 'MENU'})
            return
        }

        if (path.includes('quiz')) {
            const bookSearch = searchParams.get('book')
            const chapterSearch = searchParams.get('chapter')
            router.push(`/${bookSearch}/${chapterSearch}`)
            return
        }

        if (book && chapter) {
            router.push(`/${book}`)
            return
        }

        if (book && !chapter) {
            router.push('/')
            return
        }
    }

    return (
        <div className="flex p-4">
            <Button onClick={back} size={size} className="z-10">
                <LucideArrowBigLeftDash size={size === 'small' ? 20 : 28} />
                Voltar
            </Button>
        </div>
    )
}

export default BackButton
