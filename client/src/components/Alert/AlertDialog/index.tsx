import { useEffect } from "react"
import * as S from "./styles"
import { IAlertDialogProps } from "./types"


const AlertDialog = ({ show, buttons, icon, title, message }: IAlertDialogProps): JSX.Element => {
  useEffect(() => {
    document.body.classList[show ? "add" : "remove"]("overflowY-none")
  }, [show])


  return show ? (
    <S.AlertDialog>
      <div className="card">
        <div className="card-content">
          {icon && icon}
          <div className="text-content">
            {title && (<span className="title">{title} </span>)}
            {message && (<span className="message">{message}</span>)}
          </div>
        </div>
        {buttons && (
          <div className="buttons-root">
            {buttons.action && (<button className="btn-action" onClick={buttons.action.on}>{buttons.action.placeholder}</button>)}
            {buttons.close && (<button className="btn-close" onClick={buttons.close.on}>{buttons.close.placeholder}</button>)}
          </div>
        )}
      </div>
    </S.AlertDialog>
  ) : <></>
}

export default AlertDialog