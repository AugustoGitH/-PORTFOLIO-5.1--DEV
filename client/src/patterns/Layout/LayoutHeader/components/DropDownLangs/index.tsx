import { useContext, useEffect, useRef, useState } from "react"
import * as S from "./styles"
import { TranslateContext } from "../../../../../contexts/TranslateContext"
import TitleItem from "../../../../../components/TitleItem"
import translateString from "../../../../../settings/translation/utils/translateString"
import { TLanguage } from "../../../../../settings/translation/types"



const DropDownLangs = () => {
  const { setLanguage, language: currentLang } = useContext(TranslateContext)
  const [showDropDown, setShowDropDown] = useState(false)
  const dropDownRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    const { current: dropDown } = dropDownRef
    if (showDropDown && dropDown) {
      const handleClickWindow = (ev: MouseEvent) => {
        if (!dropDown?.contains(ev.target as Node)) {
          setShowDropDown(false)
        }
      }
      document.addEventListener("click", handleClickWindow)
      return () => document.removeEventListener("click", handleClickWindow)
    }
  }, [showDropDown])

  const handleOpenDropDown = () => {
    setShowDropDown(prevShow => !prevShow)
  }
  const handleOption = (lang: TLanguage) => ({
    onClick: () => {
      setLanguage(lang)
      setShowDropDown(false)
    },
    className: currentLang === lang ? "active-lang" : ""
  })

  return (
    <S.DropDownLangs ref={dropDownRef}>
      <TitleItem title={showDropDown ? "" : translateString("Mudar idioma", currentLang)}>
        <button onClick={handleOpenDropDown}><i className='bx bxs-flag-alt' ></i><span className="lang-prev">{currentLang}</span></button>
      </TitleItem>
      {
        showDropDown && (
          <ul className="drop-down-langs" id="">
            <li {...handleOption("pt-br")}>pt-BR</li>
            <span className="line-vertical" />
            <li {...handleOption("en-us")}>en-US</li>
            <span className="line-vertical" />
            <li {...handleOption("es")}>es</li>
          </ul>
        )
      }
    </S.DropDownLangs>
  )
}

export default DropDownLangs



