'use client'

import {LucideFastForward, LucideMoreHorizontal, LucidePause, LucidePlay, LucideX} from "lucide-react";
import {useEffect, useState} from "react";
import SafeArea from "@/components/safe-area/safe-area";

export type ControlScrollOptions = {
  speed: number;
  isScrolling?: boolean;
}

type Props = {
  onChange?: (options: ControlScrollOptions) => void;
  scrollingValue?: boolean
}

const ControlScroll = ({onChange, scrollingValue}: Props) => {
  const [isScrolling, setIsScrolling] = useState(scrollingValue);
  const [speed, setSpeed] = useState(1);
  const [showButtons, setShowButtons] = useState(true);

  useEffect(() => {
    if (onChange) {
      onChange({
        speed,
        isScrolling
      })
    }
  }, [isScrolling, speed, onChange]);

  useEffect(() => {
    setIsScrolling(scrollingValue)
  }, [scrollingValue]);

  const onPause = () => {
    setIsScrolling(!isScrolling);
  }

  const onDecreaseSpeed = () => {
    if (speed > 1) {
      setSpeed(speed - 1);
    }
  }

  const onIncreaseSpeed = () => {
    if (speed < 3) {
      setSpeed(speed + 1);
    }
  }

  return (
    <div id="scroll-control"
         className={`shadow fixed z-40 bg-netflix-black text-netflix-white mt-[var(--inset-top)] py-1 rounded-3xl duration-500 ${showButtons ? 'px-3' : 'px-1'}`}
         style={{top: 10, right: 8}}>
      <div className="flex flex-row-reverse gap-3">
        <div className="bg-red-500 rounded-3xl p-1 cursor-pointer duration-500"
             onClick={() => setShowButtons(!showButtons)}>
          {showButtons ? <LucideX/> : <LucideMoreHorizontal/>}
        </div>
        {
          showButtons && (
            <div className="flex gap-3">
              <div className="flex justify-center items-center">
                <span className="text-md text-gray-600">x{speed}</span>
              </div>
              <div className="flex gap-4">
                <button onClick={onDecreaseSpeed} className="scale-x-[-1]">
                  <LucideFastForward/>
                </button>
                <button onClick={onPause} className="duration-500">
                  {isScrolling ? <LucidePause/> : <LucidePlay/>}
                </button>
                <button onClick={onIncreaseSpeed}>
                  <LucideFastForward/>
                </button>
              </div>
            </div>
          )
        }
      </div>
    </div>
  )
}

export default ControlScroll