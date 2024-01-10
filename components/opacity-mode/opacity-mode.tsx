'use client'

import {backgroundImageIsActive} from "@/helpers/background-image-helper/background-image-helper";

const OpacityMode = () => {
  const backgroundStatus = backgroundImageIsActive();

  return (
    <div className={`absolute inset-0 dark:bg-black bg-white z-[-1]`}
         style={{opacity: backgroundStatus === 'enabled' ? 0.7 : 1}}/>
  )
}

export default OpacityMode
