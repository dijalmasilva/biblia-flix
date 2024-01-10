'use client'

import {ReactNode} from "react";

type Props = {
  title: string
  description?: string
  isOpen: boolean,
  children?: ReactNode
}

const Modal = ({
  title,
  isOpen,
  description,
  children,
}: Props) => {

  if (!isOpen) return null

  return (
    <div className="fixed top-0 left-0 h-screen w-screen z-30 text-netflix-white">
      <div className="absolute top-0 left-0 h-full w-full bg-black opacity-80 z-30"/>
      {/*{ modal content }*/}
      <div className="absolute flex justify-center items-center h-full w-full top-0 left-0 z-40">
        <div className="bg-netflix-black rounded-xl py-4 px-6 min-w-[280px]">
          <div className="p-2 text-center">
            <h1 className="font-bold text-xl">{title}</h1>
            { description && <p className="font-light">{description}</p>}
          </div>
          <div className="flex flex-col gap-4">
            {children}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Modal