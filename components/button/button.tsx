'use client'

type Props = {
  size?: 'small' | 'medium'
  onClick?: () => void
  children: React.ReactNode,
  className?: string
}

const Button = ({size = 'small', onClick, children, className}: Props) => {

  return (
    <button onClick={onClick} className={
      `flex justify-center items-center gap-1 bg-white rounded-xl font-bold text-gray-800 ${size === 'small' ? 'text-md px-2 py-1' : 'text-lg px-4 py-2'} ${className}`
    }>
      {children}
    </button>
  )
}

export default Button
