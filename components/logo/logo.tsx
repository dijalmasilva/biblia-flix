import { Expletus_Sans } from "next/font/google";

const expletusSans = Expletus_Sans({ subsets: ['latin'] })

const Logo = () => {
    return (
        <h1
            className={`${expletusSans.className} text-4xl text-red-500 font-bold`}
            style={{ textShadow: '2px 2px rgba(0,0,0, 0.9)'}}
        >
            Biblia Flix
        </h1>
    )
}

export default Logo
