import { Dispatch, ReactNode, SetStateAction, createContext, useEffect, useState } from "react";
import storageKeys from "../../constants/storageKeys";
import forceTypeReturn from "../../utils/forceTypeReturn";
import { TLanguage } from "../../settings/translation/types";

interface ITranslateProviderProps {
  children: ReactNode
}

interface ITranslateContext {
  language: TLanguage,
  setLanguage: Dispatch<SetStateAction<TLanguage>>
}

export const TranslateContext = createContext<ITranslateContext>({} as ITranslateContext)



const TranslateProvider = ({ children }: ITranslateProviderProps) => {
  const preferenceLang = navigator.language === "pt-BR" ? "pt-br" : "en-us"
  const [language, setLanguage] = useState<TLanguage>(localStorage.getItem(storageKeys.LANGUAGE_PREFERENCE) as TLanguage ?? preferenceLang)

  useEffect(() => {
    localStorage.setItem(storageKeys.LANGUAGE_PREFERENCE, forceTypeReturn<TLanguage>(language))
  }, [language])

  return (
    <TranslateContext.Provider value={{ setLanguage, language }}>
      {children}
    </TranslateContext.Provider>
  )
}

export default TranslateProvider