
import { type MutableRefObject, useEffect, useState } from "react"


import * as S from "./styles"

interface IButtonNavigationAidHomeProps {
  refs: {
    about: MutableRefObject<HTMLDivElement | null>,
    portfolio: MutableRefObject<HTMLDivElement | null>
  }
}

const ButtonNavigationAidHome = ({ refs }: IButtonNavigationAidHomeProps): JSX.Element => {
  const [sectionCurrent, setSectionCurrent] = useState<"portfolio" | "about">("portfolio")


  const onScroll = (): void => {
    const { current: about } = refs.about
    if (about) {
      const distanceAboutTheTop = about.getBoundingClientRect().top
      setSectionCurrent((distanceAboutTheTop - 550) <= 0 ? "about" : "portfolio")
    }
  }

  useEffect(() => {
    document.addEventListener("scroll", onScroll)
    return () => { document.removeEventListener("scroll", onScroll); }
  }, [onScroll])

  const handleredirectClient = (): void => {
    window.location.href = sectionCurrent === "about" ? "#portfolio-section" : "#about-section"
  }

  return (
    <S.ButtonNavigationAidHome onClick={handleredirectClient}>
      {
        sectionCurrent === "about" ? <i className='bx bx-windows'></i> : <i className='bx bxs-user'></i>
      }
    </S.ButtonNavigationAidHome>
  )
}

export default ButtonNavigationAidHome