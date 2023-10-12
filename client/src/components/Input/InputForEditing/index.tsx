/* eslint-disable react-hooks/exhaustive-deps */
import { type ComponentProps, useEffect, useRef } from "react"

import * as S from "./styles"

interface IInputForEditingProps extends ComponentProps<"input"> {
  edited?: boolean,
  onEdit: () => void,
}

const InputForEditing = ({ edited = false, onEdit, ...restProps }: IInputForEditingProps): JSX.Element => {

  const inputRef = useRef<HTMLInputElement | null>(null)


  useEffect(() => {
    if (inputRef.current && edited) {
      inputRef.current?.focus()
    }
  }, [edited])

  return (
    <S.InputForEditing>
      <input
        ref={inputRef}
        style={{ background: edited ? "#fff" : "" }}
        disabled={!edited}
        {...restProps}
      />
      <button onClick={onEdit}>{edited ? "Concluir" : "Editar"}</button>
    </S.InputForEditing>
  )
}
export default InputForEditing