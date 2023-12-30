'use client'

import {LucideFastForward, LucideMoreHorizontal, LucidePause, LucidePlay, LucideX} from "lucide-react";
import {useEffect, useState} from "react";

export type ControlScrollOptions = {
  speed?: number;
  isScrolling?: boolean;
}

type Props = {
  onChange?: (options: ControlScrollOptions) => void;
}

const ControlScroll = ({onChange}: Props) => {
  const [isScrolling, setIsScrolling] = useState(true);
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
         className={`fixed z-40 bg-netflix-black py-1 rounded-3xl duration-500 ${showButtons ? 'px-3' : 'px-1'}`}
         style={{bottom: 80, right: 8}}>
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