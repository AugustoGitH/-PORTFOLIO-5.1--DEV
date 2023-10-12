import { ReactNode, useContext, useEffect, useState } from "react"
import ReactHtmlParser from 'react-html-parser';
import { TranslateContext } from "../../contexts/TranslateContext"
import ReactDOMServer from 'react-dom/server';
import translateString from "../../settings/translation/utils/translateString";

interface ITranslateProps {
  children: string | ReactNode
}

const Translate = ({ children }: ITranslateProps): JSX.Element => {
  const { language } = useContext(TranslateContext)
  const [childrenTrated, setChildrenTrated] = useState(children)

  useEffect(() => {
    const htmlStringTranslated = translateString(
      ReactDOMServer.renderToStaticMarkup(<>{children}</>),
      language
    )

    setChildrenTrated(ReactHtmlParser(htmlStringTranslated))

  }, [language])

  return (
    <>
      {
        childrenTrated
      }
    </>
  )
}

export default Translate