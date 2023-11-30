import styles from "@/app/scrollbar.module.scss";
import CardBook from "@/components/card-book/card-book";
import {ReactNode} from "react";

type SectionBookProps = {
    title: string
    children: ReactNode
}

const SectionBook = ({ title, children }: SectionBookProps) => {
    return (
        <section className="mt-12">
            <h1 className="ml-4 pb-3 font-bold text-3xl">{title}</h1>
            <div className={`flex gap-2 overflow-auto ${styles.hideScrollbar} p-2 px-4`}>
                {children}
            </div>
        </section>
    )
}

export default SectionBook
