import React, {useEffect, useRef} from 'react';
import {LucideCross} from "lucide-react";
import styles from './cross-animatiom.module.scss'

const CrossAnimationIcon = () => {
  const crossRef = useRef<any>(null);
  const [explode, setExplode] = React.useState(true);

  useEffect(() => {
    if (crossRef.current) {
      crossRef.current.addEventListener('animationend', () => {
        setExplode(false);
      });
    }
  }, []);

  return (
    <LucideCross ref={crossRef} className={`${explode ? styles.explode : styles.crossBeat}`}/>
  )
}

export default CrossAnimationIcon;
