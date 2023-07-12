

import * as S from "./styles"

interface IShowCaseProps {
  images: string[]
}

const ShowCase = ({ images }: IShowCaseProps): JSX.Element => {
  return (
    <S.ShowCase>
      {
        images.map((image, index) => (
          <li key={`image-show-case-${index}`}>
            {
              image ? (
                <img
                  src={image}
                  alt={`imagem da preview da imagem ${index}`}
                  width={100}
                  height={50}
                />
              ) : <i className='bx bxs-image'></i>
            }
          </li>
        ))
      }
    </S.ShowCase>
  )
}

export default ShowCase