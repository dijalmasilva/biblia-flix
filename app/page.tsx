'use client'

import MenuBar from "@/components/menu-bar/menu-bar";
import Header from "@/components/header/header";


import CardBook from "@/components/card-book/card-book";
import Image from "next/image";
import {LucideInfo, LucidePlay, LucidePlus} from "lucide-react";
import SectionBook from "@/components/section-book/section-book";

export default function Home() {

    return (
        <main className="main">
            <div className="relative text-center">
                <Header />
                <div className="w-full h-[420px] relative backdrop-blur">
                    <Image src="/jesus-cross.png" fill style={{ objectFit: 'cover' }} alt="jesus" />
                    <div className="absolute inset-0 bg-black bg-opacity-[0.3]" />
                </div>
                <h1 className="mt-1 font-bold">Mateus</h1>
                <div className="flex gap-10 px-10 justify-between mt-3">
                    <button className="flex flex-col justify-center items-center">
                        <LucidePlus size={24} />
                        Sua lista
                    </button>
                    <button className="flex gap-2 px-6 justify-center items-center bg-gray-300 text-black rounded-lg">
                        <LucidePlay fill="black"/>
                        <span className="font-bold text-xl">Ler</span>
                    </button>
                    <button className="flex flex-col justify-center items-center">
                        <LucideInfo size={24} />
                        Info
                    </button>
                </div>
            </div>
            <SectionBook title="Pentateuco">
                <CardBook title="Gênesis" cover="/assets/covers/genesis.png" slug="gn" />
                <CardBook title="Exôdo" cover="/assets/covers/exodo.png" slug="ex" />
                <CardBook title="Levítico" cover="/assets/covers/levitico.png" slug="lv" />
                <CardBook title="Números" cover="/assets/covers/numeros.png" slug="nr" />
                <CardBook title="Deuterônomio" cover="/assets/covers/deuteronomio.png" slug="dt" />
            </SectionBook>
            <SectionBook title="Livros Históricos">
                <CardBook title="Josué" cover="/assets/covers/genesis.png" slug="gn" />
                <CardBook title="Juízes" cover="/assets/covers/exodo.png" slug="ex" />
                <CardBook title="Rute" cover="/assets/covers/levitico.png" slug="lv" />
                <CardBook title="I Samuel" cover="/assets/covers/numeros.png" slug="nr" />
                <CardBook title="II Samuel" cover="/assets/covers/numeros.png" slug="nr" />
                <CardBook title="I Reis" cover="/assets/covers/numeros.png" slug="nr" />
                <CardBook title="II Reis" cover="/assets/covers/numeros.png" slug="nr" />
                <CardBook title="I Crônicas" cover="/assets/covers/numeros.png" slug="nr" />
                <CardBook title="II Crônicas" cover="/assets/covers/numeros.png" slug="nr" />
                <CardBook title="Esdras" cover="/assets/covers/deuteronomio.png" slug="dt" />
                <CardBook title="Neemias" cover="/assets/covers/deuteronomio.png" slug="dt" />
                <CardBook title="Ester" cover="/assets/covers/deuteronomio.png" slug="dt" />
            </SectionBook>
            <SectionBook title="Livros Poéticos">
                <CardBook title="Jó" cover="/assets/covers/genesis.png" slug="gn" />
                <CardBook title="Salmos" cover="/assets/covers/exodo.png" slug="ex" />
                <CardBook title="Provérbios" cover="/assets/covers/levitico.png" slug="lv" />
                <CardBook title="Eclesiastes" cover="/assets/covers/numeros.png" slug="nr" />
                <CardBook title="Cantares" cover="/assets/covers/numeros.png" slug="nr" />
            </SectionBook>
            <SectionBook title="Profetas Maiores">
                <CardBook title="Isaías" cover="/assets/covers/genesis.png" slug="gn" />
                <CardBook title="Jeremias" cover="/assets/covers/exodo.png" slug="ex" />
                <CardBook title="Lamentações" cover="/assets/covers/levitico.png" slug="lv" />
                <CardBook title="Ezequiel" cover="/assets/covers/numeros.png" slug="nr" />
                <CardBook title="Daniel" cover="/assets/covers/numeros.png" slug="nr" />
            </SectionBook>
            <SectionBook title="Profetas Menores">
                <CardBook title="Oseias" cover="/assets/covers/genesis.png" slug="gn" />
                <CardBook title="Joel" cover="/assets/covers/exodo.png" slug="ex" />
                <CardBook title="Amós" cover="/assets/covers/levitico.png" slug="lv" />
                <CardBook title="Obadias" cover="/assets/covers/numeros.png" slug="nr" />
                <CardBook title="Jonas" cover="/assets/covers/numeros.png" slug="nr" />
                <CardBook title="Miqueias" cover="/assets/covers/numeros.png" slug="nr" />
                <CardBook title="Naum" cover="/assets/covers/numeros.png" slug="nr" />
                <CardBook title="Habacuque" cover="/assets/covers/numeros.png" slug="nr" />
                <CardBook title="Sofonias" cover="/assets/covers/numeros.png" slug="nr" />
                <CardBook title="Ageu" cover="/assets/covers/numeros.png" slug="nr" />
                <CardBook title="Zacarias" cover="/assets/covers/numeros.png" slug="nr" />
                <CardBook title="Malaquias" cover="/assets/covers/numeros.png" slug="nr" />
            </SectionBook>
            <SectionBook title="Evangelhos">
                <CardBook title="Mateus" cover="/assets/covers/genesis.png" slug="gn" />
                <CardBook title="Marcos" cover="/assets/covers/exodo.png" slug="ex" />
                <CardBook title="Lucas" cover="/assets/covers/levitico.png" slug="lv" />
                <CardBook title="João" cover="/assets/covers/numeros.png" slug="nr" />
            </SectionBook>
            <SectionBook title="História da Igreja Primitiva">
                <CardBook title="Atos" cover="/assets/covers/genesis.png" slug="gn" />
            </SectionBook>
            <SectionBook title="Epístolas ou Cartas Apostólicas (Paulo)">
                <CardBook title="Romanos" cover="/assets/covers/genesis.png" slug="gn" />
                <CardBook title="I Coríntios" cover="/assets/covers/exodo.png" slug="ex" />
                <CardBook title="II Coríntios" cover="/assets/covers/exodo.png" slug="ex" />
                <CardBook title="Gálatas" cover="/assets/covers/exodo.png" slug="ex" />
                <CardBook title="Efésios" cover="/assets/covers/exodo.png" slug="ex" />
                <CardBook title="Filipenses" cover="/assets/covers/exodo.png" slug="ex" />
                <CardBook title="Colossenses" cover="/assets/covers/exodo.png" slug="ex" />
                <CardBook title="I Tessalonicenses" cover="/assets/covers/exodo.png" slug="ex" />
                <CardBook title="II Tessalonicenses" cover="/assets/covers/exodo.png" slug="ex" />
                <CardBook title="I Timóteo" cover="/assets/covers/levitico.png" slug="lv" />
                <CardBook title="II Timóteo" cover="/assets/covers/levitico.png" slug="lv" />
                <CardBook title="Tito" cover="/assets/covers/numeros.png" slug="nr" />
            </SectionBook>
            <SectionBook title="Epístolas ou Cartas Apostólicas (Outros)">
                <CardBook title="Hebreus" cover="/assets/covers/genesis.png" slug="gn" />
                <CardBook title="Tiago" cover="/assets/covers/exodo.png" slug="ex" />
                <CardBook title="I Pedro" cover="/assets/covers/levitico.png" slug="lv" />
                <CardBook title="II Pedro" cover="/assets/covers/levitico.png" slug="lv" />
                <CardBook title="I João" cover="/assets/covers/numeros.png" slug="nr" />
                <CardBook title="II João" cover="/assets/covers/numeros.png" slug="nr" />
                <CardBook title="III João" cover="/assets/covers/numeros.png" slug="nr" />
                <CardBook title="Judas" cover="/assets/covers/numeros.png" slug="nr" />
            </SectionBook>
            <SectionBook title="Apocalipse ou Revelação">
                <CardBook title="Apocalipse" cover="/assets/covers/genesis.png" slug="gn" />
            </SectionBook>
            <MenuBar/>
            <div className="mb-20"/>
        </main>
    )
}
