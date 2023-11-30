'use client'

import {LucideHome, LucideMenu, LucideSearch} from "lucide-react";
import {ElementType, useState} from "react";
import menuActor from "@/machines/menu-machine/menu-machine";

enum MenuOptions {
    HOME = 'home',
    SEARCH = 'search',
    MENU = 'menu'
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

    const [option, setOption] = useState<MenuOptions>(MenuOptions.HOME)

    menuActor.subscribe((state) => {
        setOption(state.value as MenuOptions)
    })

    const dispatchEventMachine = (option: MenuOptions) => {
        menuActor.send({ type: option.toUpperCase() })
    }

    return (
        <div className="fixed bottom-0 flex gap-4 justify-around bg-netflix-black text-netflix-white w-full p-3">
            <MenuItem
                onClick={() => dispatchEventMachine(MenuOptions.HOME)}
                icon={LucideHome}
                isActive={option === MenuOptions.HOME}
                text="Home"
            />
            <MenuItem
                onClick={() => dispatchEventMachine(MenuOptions.SEARCH)}
                icon={LucideSearch}
                isActive={option === MenuOptions.SEARCH}
                text="Search"
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