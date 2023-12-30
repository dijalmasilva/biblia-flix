'use client'

import {LucideArrowBigLeftDash} from "lucide-react";
import {useRouter} from "next/navigation";
import Button from "@/components/button/button";

type Props = {
    size?: 'small' | 'medium'
}

const BackButton = ({ size = 'small' }: Props) => {
    const router = useRouter()

    const back = () => {
        if (window.history?.length) {
            router.back();
        } else {
            router.push('/')
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
