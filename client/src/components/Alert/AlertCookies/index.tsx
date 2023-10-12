

import { useEffect, useState } from "react"

import * as S from "./styles"
import storageKeys from "../../../constants/storageKeys"


const AlertCookies = (): JSX.Element => {
  const isAuthCookies = JSON.parse(localStorage.getItem(storageKeys.AUTH_COOKIES) ?? "false")
  const [show, setShow] = useState(false)

  useEffect(() => {
    if (!isAuthCookies) {
      setShow(true)
    }
  }, [isAuthCookies])


  const handleClickClose = (): void => {
    localStorage.setItem(storageKeys.AUTH_COOKIES, "true")
    setShow(false)
  }

  return show ? (
    <S.AlertCookies>
      <div className="card">
        <h4><i className='bx bxs-cookie'></i>Esse site usa cookies</h4>
        <p>Este site armazena cookies no seu navegador para melhorar a sua experiência. Ao continuar navegando no site, você concorda com o uso de cookies.</p>
        <button onClick={handleClickClose}>Aceitar</button>
      </div>
    </S.AlertCookies>
  ) : <></>
}


export default AlertCookies