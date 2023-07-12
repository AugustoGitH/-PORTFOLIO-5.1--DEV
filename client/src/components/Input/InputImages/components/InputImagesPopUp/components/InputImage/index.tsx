/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, type ChangeEventHandler, useState, type MouseEventHandler } from "react";








import * as S from "./styles"
import { IImageSelected, IInputImageProps } from "../../../../types";


const InputImage = ({ label, onChange, value }: IInputImageProps): JSX.Element => {
  const [imageSelected, setImageSelected] = useState<IImageSelected>({
    preview: value?.preview ?? "",
    fileImage: value?.fileImage ?? null
  })
  const idLabel = Math.random().toString(16).substring(2, 16)

  useEffect(() => {
    if (value) {
      setImageSelected(value)
    }

  }, [value])

  const handleImageSelect: ChangeEventHandler<HTMLInputElement> = (event) => {
    event.preventDefault()
    const files = event.target.files

    if (files?.length === 0 || !files) return;

    const file = files[0]

    const reader = new FileReader();
    reader.onload = (e: any) => {
      const newImageSelected = {
        preview: e.target.result,
        fileImage: file
      }
      onChange(newImageSelected)
      setImageSelected(newImageSelected)
    };
    reader.readAsDataURL(file);
  }

  const handleDeleteImage: MouseEventHandler<HTMLButtonElement> = (ev): void => {
    ev.preventDefault()
    onChange({
      preview: "",
      fileImage: null
    })
    setImageSelected({
      fileImage: null,
      preview: ""
    })
  }

  return (
    <S.InputImage>
      <label htmlFor={idLabel}>
        <i className='bx bxs-image image-icon'></i>
        <span>{label}</span>
        {imageSelected.preview && (
          <img
            src={imageSelected.preview}
            alt={idLabel}
            width={400}
            height={300}
          />
        )}

        <ul className="buttons-edit">
          {
            imageSelected.preview && (
              <button className="delete-image" onClick={handleDeleteImage}>
                <i className='bx bxs-trash-alt' />
              </button>
            )
          }
        </ul>

      </label>
      <input id={idLabel} type="file" onChange={handleImageSelect} />
    </S.InputImage>
  )
}

export default InputImage