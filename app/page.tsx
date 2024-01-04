import Header from "@/components/header/header";
import CardBook from "@/components/card-book/card-book";
import SectionBook from "@/components/section-book/section-book";
import LastRead from "@/components/last-read/last-read";

export default function Home() {

  return (
    <main className="mb-8">
      <div className="relative">
        <Header/>
        <LastRead/>
      </div>
      <SectionBook title="Pentateuco">
        <CardBook title="Gênesis" slug="gn"/>
        <CardBook title="Exôdo" slug="ex"/>
        <CardBook title="Levítico" slug="lv"/>
        <CardBook title="Números" slug="nm"/>
        <CardBook title="Deuterônomio" slug="dt"/>
      </SectionBook>
      <SectionBook title="Livros Históricos">
        <CardBook title="Josué" slug="js"/>
        <CardBook title="Juízes" slug="jz"/>
        <CardBook title="Rute" slug="rt"/>
        <CardBook title="I Samuel" slug="1sm"/>
        <CardBook title="II Samuel" slug="2sm"/>
        <CardBook title="I Reis" slug="1rs"/>
        <CardBook title="II Reis" slug="2rs"/>
        <CardBook title="I Crônicas" slug="1cr"/>
        <CardBook title="II Crônicas" slug="2cr"/>
        <CardBook title="Esdras" slug="ed"/>
        <CardBook title="Neemias" slug="ne"/>
        <CardBook title="Ester" slug="et"/>
      </SectionBook>
      <SectionBook title="Livros Poéticos">
        <CardBook title="Jó" slug="jó"/>
        <CardBook title="Salmos" slug="sl"/>
        <CardBook title="Provérbios" slug="pv"/>
        <CardBook title="Eclesiastes" slug="ec"/>
        <CardBook title="Cantares" slug="ct"/>
      </SectionBook>
      <SectionBook title="Profetas Maiores">
        <CardBook title="Isaías" slug="is"/>
        <CardBook title="Jeremias" slug="jr"/>
        <CardBook title="Lamentações" slug="lm"/>
        <CardBook title="Ezequiel" slug="ez"/>
        <CardBook title="Daniel" slug="dn"/>
      </SectionBook>
      <SectionBook title="Profetas Menores">
        <CardBook title="Oseias" slug="os"/>
        <CardBook title="Joel" slug="jl"/>
        <CardBook title="Amós" slug="am"/>
        <CardBook title="Obadias" slug="ob"/>
        <CardBook title="Jonas" slug="jn"/>
        <CardBook title="Miqueias" slug="mq"/>
        <CardBook title="Naum" slug="na"/>
        <CardBook title="Habacuque" slug="hc"/>
        <CardBook title="Sofonias" slug="sf"/>
        <CardBook title="Ageu" slug="ag"/>
        <CardBook title="Zacarias" slug="zc"/>
        <CardBook title="Malaquias" slug="ml"/>
      </SectionBook>
      <SectionBook title="Evangelhos">
        <CardBook title="Mateus" slug="mt"/>
        <CardBook title="Marcos" slug="mc"/>
        <CardBook title="Lucas" slug="lc"/>
        <CardBook title="João" slug="jo"/>
      </SectionBook>
      <SectionBook title="História da Igreja Primitiva">
        <CardBook title="Atos" slug="atos"/>
      </SectionBook>
      <SectionBook title="Epístolas ou Cartas Apostólicas (Paulo)">
        <CardBook title="Romanos" slug="rm"/>
        <CardBook title="I Coríntios" slug="1co"/>
        <CardBook title="II Coríntios" slug="2co"/>
        <CardBook title="Gálatas" slug="gl"/>
        <CardBook title="Efésios" slug="ef"/>
        <CardBook title="Filipenses" slug="fp"/>
        <CardBook title="Colossenses" slug="cl"/>
        <CardBook title="I Tessalonicenses" slug="1ts"/>
        <CardBook title="II Tessalonicenses" slug="2ts"/>
        <CardBook title="I Timóteo" slug="1tm"/>
        <CardBook title="II Timóteo" slug="2tm"/>
        <CardBook title="Tito" slug="tt"/>
        <CardBook title="Filemon" slug="fm"/>
      </SectionBook>
      <SectionBook title="Epístolas ou Cartas Apostólicas (Outros)">
        <CardBook title="Hebreus" slug="hb"/>
        <CardBook title="Tiago" slug="tg"/>
        <CardBook title="I Pedro" slug="1pe"/>
        <CardBook title="II Pedro" slug="2pe"/>
        <CardBook title="I João" slug="1jo"/>
        <CardBook title="II João" slug="2jo"/>
        <CardBook title="III João" slug="3jo"/>
        <CardBook title="Judas" slug="jd"/>
      </SectionBook>
      <SectionBook title="Apocalipse ou Revelação">
        <CardBook title="Apocalipse" slug="ap"/>
      </SectionBook>
    </main>
  )
}
