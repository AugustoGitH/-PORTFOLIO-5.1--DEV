/* eslint-disable react-hooks/exhaustive-deps */
import { type ComponentProps, useEffect, useRef, useState } from "react"

import * as S from "./styles"

interface IInputForEditingProps extends Omit<ComponentProps<"input">, "onChange"> {
  onChange?: (value: string | number | readonly string[]) => void,
  edited?: boolean,
  onEdit: () => void,
}

const InputForEditing = ({ value, placeholder, onChange, edited = false, onEdit, ...restProps }: IInputForEditingProps): JSX.Element => {
  const [valueInput, setValueInput] = useState<string | number | readonly string[]>(value ?? "")

  const inputRef = useRef<HTMLInputElement | null>(null)

  useEffect(() => {
    if (onChange) {
      onChange(valueInput)
    }
  }, [valueInput])


  useEffect(() => {
    setValueInput(value ?? valueInput)
  }, [value])

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
        value={valueInput}
        onChange={e => { setValueInput(e.target.value); }}
        {...restProps}
      />
      <button onClick={onEdit}>{edited ? "Concluir" : "Editar"}</button>
    </S.InputForEditing>
  )
}
export default InputForEditing