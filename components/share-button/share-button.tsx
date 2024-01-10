'use client'

import {Share} from "@capacitor/share";
import {Directory, Filesystem} from "@capacitor/filesystem";
import {useEffect, useState} from "react";

type Props = {
  blob: Blob,
  children: React.ReactNode,
  className?: string,
  title?: string,
  text?: string,
  dialogTitle?: string
  url?: string
}

const ShareButton = ({ blob, children, className, title, text, dialogTitle, url }: Props) => {

  const [canShare, setCanShare] = useState<boolean>(false)

  useEffect(() => {
    const checkCanShare = async () => {
      const { value } = await Share.canShare();
      setCanShare(value)
    }

    checkCanShare().then(() => {
      console.log('Can share?', canShare)
    })
  }, [])

  const onClick = async () => {
    try {
      if (canShare) {
        const reader = new FileReader()
        reader.readAsDataURL(blob)

        reader.onloadend = async () => {
          const base64data = reader.result as string;

          if (!base64data) return

          // create fileName from the current date and time
          const fileName = `${Date.now()}-bibliaflix.png`;

          await Filesystem.writeFile({
            path: fileName,
            data: base64data,
            directory: Directory.Cache,
          });

          const localUri = await Filesystem.getUri({
            directory: Directory.Cache,
            path: fileName,
          });

          await Share.share({
            title,
            text,
            url,
            files: [
              localUri.uri,
            ],
            dialogTitle,
          });
        };
      }
    } catch (e) {
      console.error(e)
    }
  }

  if (!canShare) {
    return null
  }

  return (
    <button className={`shadow text-netflix-white ${className}`} onClick={onClick}>{children}</button>
  )
}

export default ShareButton
