import {LucideCross} from "lucide-react";

const LoadingPage = () => {
  return (
    <div className="h-screen w-full flex justify-center items-center">
      <LucideCross size={48} className="animate-beat" />
    </div>
  )
}

export default LoadingPage
