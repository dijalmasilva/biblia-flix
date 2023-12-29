'use client'

import {useEffect, useRef, useState} from "react";

type Props = {
  children: React.ReactNode;
  bookAbbrev: string;
  chapterNumber: number;
  className?: string;
};

const ScrollAutomate = ({children, bookAbbrev, chapterNumber, className}: Props) => {
  const [isScrolling, setIsScrolling] = useState(true);
  const scrollContainerRef = useRef<any>(null);

  useEffect(() => {

    const handleScroll = () => {
      const scrollContainer = scrollContainerRef.current;
      if (!scrollContainer) return;

      const atBottom = scrollContainer.scrollTop + scrollContainer.clientHeight >= scrollContainer.scrollHeight - 5;

      if (atBottom) {
        const pattern = `${bookAbbrev}-${chapterNumber}`;
        const read = localStorage.getItem(`read`)
        if (read) {
          try {
            const readObject = JSON.parse(read) as string[]
            if (readObject.find((item) => item === pattern)) return;
            readObject.push(pattern)
            localStorage.setItem(`read`, JSON.stringify(readObject))
          } catch (e) {
            console.error(e)
          }
        }

        localStorage.setItem(`last-read`, `${bookAbbrev}-${chapterNumber}`);
        setIsScrolling(false);
      }
    };

    const scrollContainer = scrollContainerRef.current;

    if (scrollContainer) {
      // scrollContainer.style.scrollBehavior = "smooth"; disabled because it not permit to scroll manually
      scrollContainer.addEventListener("scroll", handleScroll);
    }

    const scrollInterval = isScrolling ? setInterval(() => {
      if (scrollContainer) {
        scrollContainer.scrollBy(0, 1);
      }
    }, 100) : null;


    return () => {
      if (scrollInterval) clearInterval(scrollInterval);
      if (scrollContainer) {
        scrollContainer.removeEventListener("scroll", handleScroll);
      }
    };
  }, [isScrolling, bookAbbrev, chapterNumber]); // Dependências do efeito

  return <div className={className ?? 'flex flex-col overflow-y-auto h-screen-without-menu-bar w-full px-4'}
              ref={scrollContainerRef}>{children}</div>;
};

export default ScrollAutomate;
