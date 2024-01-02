type Props = {
  children: React.ReactNode
  withPadding?: boolean
  topDisable?: boolean
  bottomDisable?: boolean
  leftDisable?: boolean
  rightDisable?: boolean
}

const SafeArea = ({children, withPadding = false, topDisable, rightDisable, leftDisable, bottomDisable}: Props) => {
  if (withPadding) {
    return (
      <div className={
        `${topDisable ? '' : `pt-[var(--inset-top)]`} 
         ${leftDisable ? '' : `pl-[var(--inset-left)]`}
         ${rightDisable ? '' : `pr-[var(--inset-right)]`}
         ${bottomDisable ? '' : `pb-[var(--inset-bottom)]`}`
      }>
        {children}
      </div>
    )
  }

  return (
    <div className={
      `${topDisable ? '' : `mt-[var(--inset-top)]`} 
       ${leftDisable ? '' : `ml-[var(--inset-left)]`}
       ${rightDisable ? '' : `mr-[var(--inset-right)]`}
       ${bottomDisable ? '' : `mb-[var(--inset-bottom)]`}`
    }>
      {children}
    </div>
  )
}

export default SafeArea
