'use client'

import {LucideHome, LucideMenu, LucidePencil, LucideSearch, LucideSettings} from "lucide-react";
import {ElementType, useEffect, useState} from "react";
import menuActor from "@/machines/menu-machine/menu-machine";
import {usePathname, useRouter} from "next/navigation";
import Button from "@/components/button/button";
import ValidateUser from "@/components/validate-user/validate-user";
import SafeArea from "@/components/safe-area/safe-area";

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

const MenuItem = ({icon: Icon, text, onClick, isActive}: MenuItemProps) => {
  return (
    <button
      className={`flex flex-col justify-center items-center cursor-pointer ${isActive ? 'dark:text-netflix-white' : `text-gray-400`}`}
      onClick={onClick}>
      <Icon/>
      <p>{text}</p>
    </button>
  )
}

const MenuBar = () => {

  const router = useRouter();
  const path = usePathname();
  const [option, setOption] = useState<MenuOptions>(MenuOptions.HOME)
  const [showChristianNameModal, setShowChristianNameModal] = useState(false);

  menuActor.subscribe((state: any) => {
    setOption(state.value as MenuOptions)
    if (state.value === MenuOptions.SEARCH) {
      router.push('/search');
    } else if (state.value === MenuOptions.HOME) {
      router.push('/');
    }
  })

  const dispatchEventMachine = (option: MenuOptions) => {
    menuActor.send({type: option.toUpperCase()})
  }

  const setStateByPath = (path: string) => {
    if (path === '/search') {
      dispatchEventMachine(MenuOptions.SEARCH)
    } else if (path === '/') {
      dispatchEventMachine(MenuOptions.HOME)
    } else {
      dispatchEventMachine(MenuOptions.BOOK)
    }
  }

  useEffect(() => {
    setStateByPath(path)
  }, [path])

  const onClickChangeName = () => {
    setShowChristianNameModal(true)
  }

  const finishChangeName = () => {
    setShowChristianNameModal(false)
  }

  const closeMenu = () => {
    if (path.includes('settings')) {
      router.back()
      return
    }

    setStateByPath(path)
  }

  const goToSettings = () => {
    router.push('/settings')
  }

  return (
    <>
      <div
        className="flex gap-4 justify-around dark:bg-netflix-black dark:text-netflix-white shadow-inner w-full p-3 z-20">
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
      {
        option === MenuOptions.MENU && (
          <div className="fixed left-0 top-0 w-full h-screen z-40 dark:bg-netflix-black bg-netflix-light-bg">
            <SafeArea topDisable>
              <div className="flex flex-col p-4 justify-between h-screen pb-8">
                {/*Menu options*/}
                <div className="flex text-center w-full justify-center flex-1 items-center">
                  <ul className="flex flex-col gap-4">
                    <li className="cursor-pointer" onClick={onClickChangeName}>
                      <h1 className="flex items-center gap-6 text-xl hover:text-red-500"><LucidePencil/> Editar seu nome
                      </h1>
                    </li>
                    <li className="cursor-pointer" onClick={goToSettings}>
                      <h1 className="flex items-center gap-6 text-xl hover:text-red-500"><LucideSettings/> Configurações
                      </h1>
                    </li>
                    {/*TODO*/}
                    {/*<li className="cursor-pointer">*/}
                    {/*  <h1 className="text-xl hover:text-red-500">Versão da Bíblia (NVI)</h1>*/}
                    {/*</li>*/}
                  </ul>
                </div>
                <Button onClick={closeMenu}>Fechar</Button>
              </div>
            </SafeArea>
            <ValidateUser forceOpen={showChristianNameModal} onCancel={finishChangeName}
                          onConfirm={finishChangeName}/>
          </div>
        )
      }
    </>
  )
}

export default MenuBar