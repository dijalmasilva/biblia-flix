'use client'

import {LucideArrowBigLeftDash} from "lucide-react";
import {useParams, usePathname, useRouter} from "next/navigation";
import Button from "@/components/button/button";

type Props = {
    size?: 'small' | 'medium',
    backHistory?: ''
}

const BackButton = ({ size = 'small' }: Props) => {
    const router = useRouter()
    const params = useParams()
    const path = usePathname();

    const back = () => {
        const { book, chapter } = params
        if (book && chapter) {
            if (path.includes('quiz')) {
                router.push(`/${book}/${chapter}`)
                return
            }

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
