import {LucideCross} from "lucide-react";

type Props = {
  width: string,
  height: string
}

const ImageFallback = ({ width, height }: Props) => {
  return (
    <div className="flex justify-center items-center bg-netflix-black" style={{ width, height }}>
      <LucideCross className="animate-beat w-[50%]" color="white" />
    </div>
  )
}

export default ImageFallback