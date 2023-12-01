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
                <CardBook title="Números" cover="/assets/covers/numeros.png" slug="nm" />
                <CardBook title="Deuterônomio" cover="/assets/covers/deuteronomio.png" slug="dt" />
            </SectionBook>
            <SectionBook title="Livros Históricos">
                <CardBook title="Josué" cover="/assets/covers/genesis.png" slug="js" />
                <CardBook title="Juízes" cover="/assets/covers/exodo.png" slug="jz" />
                <CardBook title="Rute" cover="/assets/covers/levitico.png" slug="rt" />
                <CardBook title="I Samuel" cover="/assets/covers/numeros.png" slug="1sm" />
                <CardBook title="II Samuel" cover="/assets/covers/numeros.png" slug="2sm" />
                <CardBook title="I Reis" cover="/assets/covers/numeros.png" slug="1rs" />
                <CardBook title="II Reis" cover="/assets/covers/numeros.png" slug="2rs" />
                <CardBook title="I Crônicas" cover="/assets/covers/numeros.png" slug="1cr" />
                <CardBook title="II Crônicas" cover="/assets/covers/numeros.png" slug="2cr" />
                <CardBook title="Esdras" cover="/assets/covers/deuteronomio.png" slug="ed" />
                <CardBook title="Neemias" cover="/assets/covers/deuteronomio.png" slug="ne" />
                <CardBook title="Ester" cover="/assets/covers/deuteronomio.png" slug="et" />
            </SectionBook>
            <SectionBook title="Livros Poéticos">
                <CardBook title="Jó" cover="/assets/covers/genesis.png" slug="jó" />
                <CardBook title="Salmos" cover="/assets/covers/exodo.png" slug="sl" />
                <CardBook title="Provérbios" cover="/assets/covers/levitico.png" slug="pv" />
                <CardBook title="Eclesiastes" cover="/assets/covers/numeros.png" slug="ec" />
                <CardBook title="Cantares" cover="/assets/covers/numeros.png" slug="ct" />
            </SectionBook>
            <SectionBook title="Profetas Maiores">
                <CardBook title="Isaías" cover="/assets/covers/genesis.png" slug="is" />
                <CardBook title="Jeremias" cover="/assets/covers/exodo.png" slug="jr" />
                <CardBook title="Lamentações" cover="/assets/covers/levitico.png" slug="lm" />
                <CardBook title="Ezequiel" cover="/assets/covers/numeros.png" slug="ez" />
                <CardBook title="Daniel" cover="/assets/covers/numeros.png" slug="dn" />
            </SectionBook>
            <SectionBook title="Profetas Menores">
                <CardBook title="Oseias" cover="/assets/covers/genesis.png" slug="os" />
                <CardBook title="Joel" cover="/assets/covers/exodo.png" slug="jl" />
                <CardBook title="Amós" cover="/assets/covers/levitico.png" slug="am" />
                <CardBook title="Obadias" cover="/assets/covers/numeros.png" slug="ob" />
                <CardBook title="Jonas" cover="/assets/covers/numeros.png" slug="jn" />
                <CardBook title="Miqueias" cover="/assets/covers/numeros.png" slug="mq" />
                <CardBook title="Naum" cover="/assets/covers/numeros.png" slug="na" />
                <CardBook title="Habacuque" cover="/assets/covers/numeros.png" slug="hc" />
                <CardBook title="Sofonias" cover="/assets/covers/numeros.png" slug="sf" />
                <CardBook title="Ageu" cover="/assets/covers/numeros.png" slug="ag" />
                <CardBook title="Zacarias" cover="/assets/covers/numeros.png" slug="zc" />
                <CardBook title="Malaquias" cover="/assets/covers/numeros.png" slug="ml" />
            </SectionBook>
            <SectionBook title="Evangelhos">
                <CardBook title="Mateus" cover="/assets/covers/genesis.png" slug="mt" />
                <CardBook title="Marcos" cover="/assets/covers/exodo.png" slug="mc" />
                <CardBook title="Lucas" cover="/assets/covers/levitico.png" slug="lc" />
                <CardBook title="João" cover="/assets/covers/numeros.png" slug="jo" />
            </SectionBook>
            <SectionBook title="História da Igreja Primitiva">
                <CardBook title="Atos" cover="/assets/covers/genesis.png" slug="atos" />
            </SectionBook>
            <SectionBook title="Epístolas ou Cartas Apostólicas (Paulo)">
                <CardBook title="Romanos" cover="/assets/covers/genesis.png" slug="rm" />
                <CardBook title="I Coríntios" cover="/assets/covers/exodo.png" slug="1co" />
                <CardBook title="II Coríntios" cover="/assets/covers/exodo.png" slug="2co" />
                <CardBook title="Gálatas" cover="/assets/covers/exodo.png" slug="gl" />
                <CardBook title="Efésios" cover="/assets/covers/exodo.png" slug="ef" />
                <CardBook title="Filipenses" cover="/assets/covers/exodo.png" slug="fp" />
                <CardBook title="Colossenses" cover="/assets/covers/exodo.png" slug="cl" />
                <CardBook title="I Tessalonicenses" cover="/assets/covers/exodo.png" slug="1ts" />
                <CardBook title="II Tessalonicenses" cover="/assets/covers/exodo.png" slug="2ts" />
                <CardBook title="I Timóteo" cover="/assets/covers/levitico.png" slug="1tm" />
                <CardBook title="II Timóteo" cover="/assets/covers/levitico.png" slug="2tm" />
                <CardBook title="Tito" cover="/assets/covers/numeros.png" slug="tt" />
                <CardBook title="Filemon" cover="/assets/covers/numeros.png" slug="fm" />
            </SectionBook>
            <SectionBook title="Epístolas ou Cartas Apostólicas (Outros)">
                <CardBook title="Hebreus" cover="/assets/covers/genesis.png" slug="hb" />
                <CardBook title="Tiago" cover="/assets/covers/exodo.png" slug="tg" />
                <CardBook title="I Pedro" cover="/assets/covers/levitico.png" slug="1pe" />
                <CardBook title="II Pedro" cover="/assets/covers/levitico.png" slug="2pe" />
                <CardBook title="I João" cover="/assets/covers/numeros.png" slug="1jo" />
                <CardBook title="II João" cover="/assets/covers/numeros.png" slug="2jo" />
                <CardBook title="III João" cover="/assets/covers/numeros.png" slug="3jo" />
                <CardBook title="Judas" cover="/assets/covers/numeros.png" slug="jd" />
            </SectionBook>
            <SectionBook title="Apocalipse ou Revelação">
                <CardBook title="Apocalipse" cover="/assets/covers/genesis.png" slug="ap" />
            </SectionBook>
            <MenuBar/>
            <div className="mb-20"/>
        </main>
    )
}
