'use client'

import {useEffect, useRef, useState} from "react";
import ModalQuiz from "@/components/modal/modal-quiz";
import ControlScroll, {ControlScrollOptions} from "@/components/control-scroll/control-scroll";

type Props = {
  children: React.ReactNode;
  bookAbbrev: string;
  chapterNumber: number;
  className?: string;
};

const ScrollAutomate = ({children, bookAbbrev, chapterNumber, className}: Props) => {
  const [isScrolling, setIsScrolling] = useState(true);
  const [checkQuiz, setCheckQuiz] = useState(false);
  const [countTryQuiz, setCountTryQuiz] = useState(0);
  const scrollContainerRef = useRef<any>(null);
  const [scrollOptions, setScrollOptions] = useState<ControlScrollOptions>({
    isScrolling: false,
    speed: 1
  })

  const onFinishScroll = () => {
    if (countTryQuiz < 1) {
      setTimeout(() => {
        setCheckQuiz(true);
        setCountTryQuiz(countTryQuiz + 1);
      }, 2000)
    }

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
    } else {
      localStorage.setItem(`read`, JSON.stringify([pattern]))
    }

    localStorage.setItem(`last-read`, `${bookAbbrev}-${chapterNumber}`);
    setIsScrolling(false);
  }

  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;

    if (scrollContainer) {
      const atBottom = scrollContainer.scrollTop + scrollContainer.clientHeight >= scrollContainer.scrollHeight - 5;
      if (atBottom) {
        onFinishScroll();
      }
    }

    const handleScroll = () => {
      const scrollContainer = scrollContainerRef.current;
      if (!scrollContainer) return;

      const atBottom = scrollContainer.scrollTop + scrollContainer.clientHeight >= scrollContainer.scrollHeight - 5;

      if (atBottom) {
        onFinishScroll();
      }
    };

    if (scrollContainer) {
      // scrollContainer.style.scrollBehavior = "smooth"; disabled because it not permit to scroll manually
      scrollContainer.addEventListener("scroll", handleScroll);
    }

    const scrollInterval = isScrolling ? setInterval(() => {
      if (scrollContainer) {
        scrollContainer.scrollBy(0, scrollOptions.isScrolling ? scrollOptions.speed : 0);
      }
    }, 100) : null;


    return () => {
      if (scrollInterval) clearInterval(scrollInterval);
      if (scrollContainer) {
        scrollContainer.removeEventListener("scroll", handleScroll);
      }
    };
  }, [isScrolling, bookAbbrev, chapterNumber, scrollOptions]); // Dependências do efeito

  useEffect(() => {
    setTimeout(() => {
      setScrollOptions({...scrollOptions, isScrolling: true})
    }, 1000)
  }, []);

  return (
    <div className={className ?? 'flex flex-col overflow-y-auto h-screen-without-menu-bar w-full px-4'}
         ref={scrollContainerRef}>
      <ControlScroll onChange={setScrollOptions} />
      <ModalQuiz abbrev={bookAbbrev} chapter={chapterNumber} checkQuiz={checkQuiz}/>
      {children}
    </div>
  );
};

export default ScrollAutomate;
