'use client'

import {useState} from "react";

type Props = {
  size?: 'small' | 'medium'
  onClick?: () => void | Promise<void>
  children: React.ReactNode,
  className?: string
  type?: 'button' | 'submit' | 'reset'
}

const Button = ({size = 'small', onClick, children, className, type = 'button'}: Props) => {
  const [loading, setLoading] = useState<boolean>(false)

  const click = async () => {
    setLoading(true)
    if (onClick) {
      await onClick()
    }
    setLoading(false)
  }

  return (
    <button type={type} onClick={click} className={
      `shadow min-w-min min-h-min flex justify-center items-center gap-1 bg-white rounded-xl font-bold text-gray-800 ${size === 'small' ? 'text-md px-2 py-1' : 'text-lg px-4 py-2'} ${className}`
    }>
      {
        loading && (
          <svg className="animate-spin h-5 w-5 text-gray-800" xmlns="http://www.w3.org/2000/svg" fill="none"
               viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/>
            <path className="opacity-75" fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"/>
          </svg>
        )
      }
      {!loading && children}
    </button>
  )
}

export default Button
