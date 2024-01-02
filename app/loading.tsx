import {LucideCross} from "lucide-react";

const LoadingPage = () => {
  return (
    <div className="h-full w-full flex justify-center items-center">
      <LucideCross size={48} className="animate-beat" />
    </div>
  )
}

export default LoadingPage
