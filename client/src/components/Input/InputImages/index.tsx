import { type MouseEventHandler, useState, useEffect } from "react";


import InputImagesPopUp from "./components/InputImagesPopUp";
import ShowCase from "./components/ShowCase";
import * as S from "./styles"
import { type IStateImages, type IInputImagesProps } from "./types";
import dataPreferenceForImages from "./utils/dataPreferenceForImages";











const InputImages = ({ onChange, reset = false, helperText, error = false }: IInputImagesProps): JSX.Element => {
  const [images, setImages] = useState<string[]>([])
  const [show, setShow] = useState(false)



  const handleOpenInputsSelectedImage: MouseEventHandler<HTMLButtonElement> = (ev) => {
    ev.preventDefault()
    setShow(true)
  }

  const handleChangeInputImages = (states: IStateImages): void => {
    if (onChange) {
      const stateFinaly = dataPreferenceForImages<string>(states, "data")
      onChange({
        cover: stateFinaly.cover,
        images: stateFinaly.images.filter(Boolean)
      })
      setImages([stateFinaly.cover, ...stateFinaly.images])
    }

  }

  useEffect(() => {
    if (reset) {
      setImages([])
    }
  }, [reset])

  return (
    <S.InputImageContainer error={error}>
      <button
        className="button-show-selected-images"
        onClick={handleOpenInputsSelectedImage}
      >
        <i className='bx bxs-image-add' />
        Escolha as imagens para o projeto
      </button>
      {helperText && (<small className="helper-text">{helperText}</small>)}
      <ShowCase images={images} />
      <InputImagesPopUp
        onChange={handleChangeInputImages}
        reset={reset}
        show={show}
        onClose={() => { setShow(false); }}
      />
    </S.InputImageContainer>
  )
}

export default InputImages