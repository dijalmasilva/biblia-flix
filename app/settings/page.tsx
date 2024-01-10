'use client'

import {useState} from "react";
import SafeArea from "@/components/safe-area/safe-area";
import BackButton from "@/components/back-button/back-button";
import {applyTheme, getInitialTheme, Theme} from "@/helpers/theme-helper/theme-helper";
import {backgroundImageIsActive, BackgroundImageType} from "@/helpers/background-image-helper/background-image-helper";

const SettingsPage = () => {
  const [theme, setTheme] = useState<Theme>(getInitialTheme())
  const [backgroundImage, setBackgroundImage] = useState<BackgroundImageType>(backgroundImageIsActive())

  const onChangeTheme = (e: any) => {
    const value = e.target.value as Theme
    setTheme(value)
    applyTheme(value)
    if (localStorage) {
      localStorage.setItem('theme', value)
    }
  }

  const onChangeBackgroundImage = (e: any) => {
    const value = e.target.value as BackgroundImageType
    setBackgroundImage(value)
    if (localStorage) {
      localStorage.setItem('backgroundImage', value.toString())
    }
  }

  return (
    <div>
      <SafeArea>
        <div className="flex flex-col items-center justify-center">
          <h1 className="text-2xl mt-2 font-bold">Configurações</h1>
          <hr/>
          <div className="flex flex-col mt-4 w-full px-4 gap-1">
            <label className="indent-1" htmlFor="theme">Tema</label>
            <select name="theme" id="theme" value={theme} onChange={onChangeTheme}
                    className="p-2 rounded-xl bg-white outline-none dark:bg-netflix-black">
              <option value="dark">Escuro</option>
              <option value="light">Claro</option>
              <option value="system">Sistema</option>
            </select>
          </div>
          <div className="flex flex-col mt-4 w-full px-4 gap-1">
            <label className="indent-1" htmlFor="theme">Imagem de fundo</label>
            <select name="theme" id="theme" value={String(backgroundImage)} onChange={onChangeBackgroundImage}
                    className="p-2 rounded-xl bg-white outline-none dark:bg-netflix-black">
              <option value="enabled">Ativado</option>
              <option value="disabled">Desativado</option>
            </select>
          </div>
          <BackButton/>
        </div>
      </SafeArea>
    </div>
  )
}

export default SettingsPage
