'use client'

import {LucideArrowBigLeftDash} from "lucide-react";
import {useRouter} from "next/navigation";

const BackButton = () => {
    const router = useRouter()

    const back = () => {
        router.back();
    }

    return (
        <div className="flex p-4">
            <button onClick={back} className="flex gap-1 bg-red-500 px-2 py-1 rounded z-10">
                <LucideArrowBigLeftDash/>
                Voltar
            </button>
        </div>
    )
}

export default BackButton
