/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";

import { type IInputImagesPopUpProps, type IStateImages } from "../../types";
import InputImage from "./components/InputImage";
import * as S from "./styles"



const defineStateImages = (imagesSecondary: number): IStateImages => {
  const stateImages: IStateImages = {
    cover: {
      preview: "",
      fileImage: null
    }
  }
  for (let i = 0; i < imagesSecondary; i++) {
    stateImages[`image${i}`] = {
      preview: "",
      fileImage: null
    }
  }

  return stateImages
}

const InputImagesPopUp = ({ show, onClose, onChange, reset }: IInputImagesPopUpProps): JSX.Element => {
  const [stateImages, setStateImages] = useState<IStateImages>(defineStateImages(4))

  useEffect(() => {
    document.body.classList[show ? "add" : "remove"]("overflowY-none")
  }, [show])

  useEffect(() => {
    onChange(stateImages)
  }, [stateImages])

  useEffect(() => {
    if (reset) {
      setStateImages(prevStates =>
        Object.fromEntries(
          Object.entries(prevStates).map(([key]) => (
            [key, {
              preview: "",
              fileImage: null
            }]
          ))
        )
      )
    }
  }, [reset])

  return show ? (
    <S.InputImagesPopUp>
      <div className="card">
        <button onClick={onClose} className="button-close-popup">
          <i className='bx bx-x' />
        </button>
        <ul className="list-input-images">
          {
            Object.entries(stateImages).map(([key, value], index) => (
              <InputImage
                key={`${key}-${index}`}
                label={key === "cover" ? "Adicione a imagem de capa" : "Adicionar imagem"}
                value={value}
                onChange={img => {
                  setStateImages(prevStates => ({
                    ...prevStates,
                    [key]: img
                  }));
                }}
              />
            ))
          }
        </ul>
      </div>
    </S.InputImagesPopUp>
  ) : <></>
}

export default InputImagesPopUp