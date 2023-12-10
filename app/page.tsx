import MenuBar from "@/components/menu-bar/menu-bar";
import Header from "@/components/header/header";
import CardBook from "@/components/card-book/card-book";
import Image from "next/image";
import {LucideInfo, LucidePlay, LucidePlus} from "lucide-react";
import SectionBook from "@/components/section-book/section-book";
import PresentationBook from "@/components/presentation-book/presentation-book";

export default function Home() {

    return (
        <main className="main">
            <div className="relative">
                <Header />
                <PresentationBook hasBack={false} image="/assets/covers/mt.png" slug="mt" title="Mateus" />
            </div>
            <SectionBook title="Pentateuco">
                <CardBook title="Gênesis" cover="/assets/covers/gn.png" slug="gn" />
                <CardBook title="Exôdo" cover="/assets/covers/ex.png" slug="ex" />
                <CardBook title="Levítico" cover="/assets/covers/lv.png" slug="lv" />
                <CardBook title="Números" cover="/assets/covers/nm.png" slug="nm" />
                <CardBook title="Deuterônomio" cover="/assets/covers/dt.png" slug="dt" />
            </SectionBook>
            <SectionBook title="Livros Históricos">
                <CardBook title="Josué" cover="/assets/covers/js.png" slug="js" />
                <CardBook title="Juízes" cover="/assets/covers/jz.png" slug="jz" />
                <CardBook title="Rute" cover="/assets/covers/rt.png" slug="rt" />
                <CardBook title="I Samuel" cover="/assets/covers/1sm.png" slug="1sm" />
                <CardBook title="II Samuel" cover="/assets/covers/2sm.png" slug="2sm" />
                <CardBook title="I Reis" cover="/assets/covers/1rs.png" slug="1rs" />
                <CardBook title="II Reis" cover="/assets/covers/2rs.png" slug="2rs" />
                <CardBook title="I Crônicas" cover="/assets/covers/1cr.png" slug="1cr" />
                <CardBook title="II Crônicas" cover="/assets/covers/2cr.png" slug="2cr" />
                <CardBook title="Esdras" cover="/assets/covers/ed.png" slug="ed" />
                <CardBook title="Neemias" cover="/assets/covers/ne.png" slug="ne" />
                <CardBook title="Ester" cover="/assets/covers/et.png" slug="et" />
            </SectionBook>
            <SectionBook title="Livros Poéticos">
                <CardBook title="Jó" cover="/assets/covers/jó.png" slug="jó" />
                <CardBook title="Salmos" cover="/assets/covers/sl.png" slug="sl" />
                <CardBook title="Provérbios" cover="/assets/covers/pv.png" slug="pv" />
                <CardBook title="Eclesiastes" cover="/assets/covers/ec.png" slug="ec" />
                <CardBook title="Cantares" cover="/assets/covers/ct.png" slug="ct" />
            </SectionBook>
            <SectionBook title="Profetas Maiores">
                <CardBook title="Isaías" cover="/assets/covers/is.png" slug="is" />
                <CardBook title="Jeremias" cover="/assets/covers/jr.png" slug="jr" />
                <CardBook title="Lamentações" cover="/assets/covers/lm.png" slug="lm" />
                <CardBook title="Ezequiel" cover="/assets/covers/ez.png" slug="ez" />
                <CardBook title="Daniel" cover="/assets/covers/dn.png" slug="dn" />
            </SectionBook>
            <SectionBook title="Profetas Menores">
                <CardBook title="Oseias" cover="/assets/covers/os.png" slug="os" />
                <CardBook title="Joel" cover="/assets/covers/jl.png" slug="jl" />
                <CardBook title="Amós" cover="/assets/covers/am.png" slug="am" />
                <CardBook title="Obadias" cover="/assets/covers/ob.png" slug="ob" />
                <CardBook title="Jonas" cover="/assets/covers/jn.png" slug="jn" />
                <CardBook title="Miqueias" cover="/assets/covers/mq.png" slug="mq" />
                <CardBook title="Naum" cover="/assets/covers/na.png" slug="na" />
                <CardBook title="Habacuque" cover="/assets/covers/hc.png" slug="hc" />
                <CardBook title="Sofonias" cover="/assets/covers/sf.png" slug="sf" />
                <CardBook title="Ageu" cover="/assets/covers/ag.png" slug="ag" />
                <CardBook title="Zacarias" cover="/assets/covers/zc.png" slug="zc" />
                <CardBook title="Malaquias" cover="/assets/covers/ml.png" slug="ml" />
            </SectionBook>
            <SectionBook title="Evangelhos">
                <CardBook title="Mateus" cover="/assets/covers/mt.png" slug="mt" />
                <CardBook title="Marcos" cover="/assets/covers/mc.png" slug="mc" />
                <CardBook title="Lucas" cover="/assets/covers/lc.png" slug="lc" />
                <CardBook title="João" cover="/assets/covers/jo.png" slug="jo" />
            </SectionBook>
            <SectionBook title="História da Igreja Primitiva">
                <CardBook title="Atos" cover="/assets/covers/atos.png" slug="atos" />
            </SectionBook>
            <SectionBook title="Epístolas ou Cartas Apostólicas (Paulo)">
                <CardBook title="Romanos" cover="/assets/covers/rm.png" slug="rm" />
                <CardBook title="I Coríntios" cover="/assets/covers/1co.png" slug="1co" />
                <CardBook title="II Coríntios" cover="/assets/covers/2co.png" slug="2co" />
                <CardBook title="Gálatas" cover="/assets/covers/gl.png" slug="gl" />
                <CardBook title="Efésios" cover="/assets/covers/ef.png" slug="ef" />
                <CardBook title="Filipenses" cover="/assets/covers/fp.png" slug="fp" />
                <CardBook title="Colossenses" cover="/assets/covers/cl.png" slug="cl" />
                <CardBook title="I Tessalonicenses" cover="/assets/covers/1ts.png" slug="1ts" />
                <CardBook title="II Tessalonicenses" cover="/assets/covers/2ts.png" slug="2ts" />
                <CardBook title="I Timóteo" cover="/assets/covers/1tm.png" slug="1tm" />
                <CardBook title="II Timóteo" cover="/assets/covers/2tm.png" slug="2tm" />
                <CardBook title="Tito" cover="/assets/covers/tt.png" slug="tt" />
                <CardBook title="Filemon" cover="/assets/covers/fm.png" slug="fm" />
            </SectionBook>
            <SectionBook title="Epístolas ou Cartas Apostólicas (Outros)">
                <CardBook title="Hebreus" cover="/assets/covers/hb.png" slug="hb" />
                <CardBook title="Tiago" cover="/assets/covers/tg.png" slug="tg" />
                <CardBook title="I Pedro" cover="/assets/covers/1pe.png" slug="1pe" />
                <CardBook title="II Pedro" cover="/assets/covers/2pe.png" slug="2pe" />
                <CardBook title="I João" cover="/assets/covers/1jo.png" slug="1jo" />
                <CardBook title="II João" cover="/assets/covers/2jo.png" slug="2jo" />
                <CardBook title="III João" cover="/assets/covers/3jo.png" slug="3jo" />
                <CardBook title="Judas" cover="/assets/covers/jd.png" slug="jd" />
            </SectionBook>
            <SectionBook title="Apocalipse ou Revelação">
                <CardBook title="Apocalipse" cover="/assets/covers/ap.png" slug="ap" />
            </SectionBook>
        </main>
    )
}
