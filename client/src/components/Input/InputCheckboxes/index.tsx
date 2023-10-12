
import { useState, useEffect, type ChangeEvent } from "react"

import * as S from "./styles"
import { type ICheckboxesProps, type ICheckboxProps } from "./types"



const Checkbox = ({ option, error, ...rest }: ICheckboxProps): JSX.Element => {
  const idCheckbox = Math.random().toString(16).substring(2)
  return (
    <S.Checkbox error={error}>
      <input type="checkbox" id={idCheckbox} className="inp-cbx" value={option.value} {...rest} />
      <label htmlFor={idCheckbox} className="cbx">
        <span>
          <svg height="10px" width="12px" />
        </span>
        <span>{option.label}</span>
      </label>
      <svg className="inline-svg">
        <symbol viewBox="0 0 12 10" id="check-4">
          <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
        </symbol>
      </svg>
    </S.Checkbox>
  )
}



const InputCheckboxes = ({ options, label, name, tagAnyone, onChange, value, reset, error = false, helperText }: ICheckboxesProps): JSX.Element => {
  const [selectedValues, setSelectedValues] = useState<string[]>(
    value ? Array.isArray(value) ? value : [value] : []
  )

  const handleCheckboxChange = (event: ChangeEvent<HTMLInputElement>): void => {
    const { value, checked } = event.target
    if (checked) {
      const valueTrated = [...(tagAnyone ? selectedValues : []), value]
      handleChangeEmit(valueTrated)
      setSelectedValues(valueTrated);
    } else {
      const valueTrated = selectedValues.filter(val => val !== value)
      handleChangeEmit(valueTrated)
      setSelectedValues(valueTrated);
    }
  }

  const handleChangeEmit = (selectValue: string | string[]): void => {
    if (onChange) {
      onChange({
        name,
        value: selectValue.length === 1 && !tagAnyone ? selectValue[0] :
          selectValue.length === 0 && !tagAnyone ? "" :
            selectValue
      })
    }
  }

  useEffect(() => {
    if (reset) {
      setSelectedValues([])
    }
  }, [reset])

  useEffect(() => {
    if (value !== undefined) {
      setSelectedValues(Array.isArray(value) ? value : [value])
    }
  }, [value])


  return (
    <S.Checkboxes error={error}>
      <p>{label}</p>
      <div className="check-boxes-list">
        {
          options.map((option, index) => (
            <Checkbox option={option} key={index} onChange={handleCheckboxChange} checked={selectedValues.includes(option.value)} error={error} />
          ))
        }
      </div>
      {helperText && (<small className="helper-text">{helperText}</small>)}
    </S.Checkboxes>
  )
}

export default InputCheckboxes