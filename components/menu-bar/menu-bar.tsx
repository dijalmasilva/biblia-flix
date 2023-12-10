'use client'

import {LucideHome, LucideMenu, LucideSearch} from "lucide-react";
import {ElementType, useEffect, useState} from "react";
import menuActor from "@/machines/menu-machine/menu-machine";
import {usePathname, useRouter} from "next/navigation";

enum MenuOptions {
    HOME = 'home',
    SEARCH = 'search',
    MENU = 'menu',
    BOOK = 'book'
}

type MenuItemProps = {
    icon: ElementType,
    text: string,
    onClick: () => void,
    isActive: boolean
}

const MenuItem = ({ icon: Icon, text, onClick, isActive }: MenuItemProps) => {
    return (
        <button className="flex flex-col justify-center items-center cursor-pointer" onClick={onClick}>
            <Icon color={isActive ? 'white' : 'gray'} />
            <p className={isActive ? 'text-white' : 'text-gray-400'}>{text}</p>
        </button>
    )
}

const MenuBar = () => {

    const router = useRouter();
    const path = usePathname();
    const [option, setOption] = useState<MenuOptions>(MenuOptions.HOME)

    menuActor.subscribe((state: { value: MenuOptions; }) => {
        setOption(state.value as MenuOptions)
        if (state.value === MenuOptions.SEARCH) {
            router.push('/search');
        } else if (state.value === MenuOptions.HOME) {
            router.push('/');
        }
    })

    const dispatchEventMachine = (option: MenuOptions) => {
        menuActor.send({ type: option.toUpperCase() })
    }

    useEffect(() => {
        if (path === '/search') {
            dispatchEventMachine(MenuOptions.SEARCH)
        } else if (path === '/') {
            dispatchEventMachine(MenuOptions.HOME)
        } else {
            dispatchEventMachine(MenuOptions.BOOK)
        }
    }, [path])

    return (
        <div className="fixed bottom-0 flex gap-4 justify-around bg-netflix-black text-netflix-white w-full p-3 z-20">
            <MenuItem
                onClick={() => dispatchEventMachine(MenuOptions.HOME)}
                icon={LucideHome}
                isActive={option === MenuOptions.HOME}
                text="Início"
            />
            <MenuItem
                onClick={() => dispatchEventMachine(MenuOptions.SEARCH)}
                icon={LucideSearch}
                isActive={option === MenuOptions.SEARCH}
                text="Buscar"
            />
            <MenuItem
                onClick={() => dispatchEventMachine(MenuOptions.MENU)}
                icon={LucideMenu}
                isActive={option === MenuOptions.MENU}
                text="Menu"
            />
        </div>
    )
}

export default MenuBar