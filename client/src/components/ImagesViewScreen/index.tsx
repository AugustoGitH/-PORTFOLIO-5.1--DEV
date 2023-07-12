import { useEffect, useRef, useState } from 'react';


import * as S from './styles';
import { type IImagesViewScreenProps } from './types';

const ImagesViewScreen = ({
  viewScreen,
  onClose,
  images
}: IImagesViewScreenProps): JSX.Element => {
  const [focusImage, setFocusImage] = useState(viewScreen.mainImage);
  const [negativesCloses, setNegativesCloses] = useState<boolean[]>([]);
  const [notFocused, setNotFocused] = useState<string[] | []>(
    images.filter((img) => img !== viewScreen.mainImage)
  );
  const cardRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleClickSideCard = (ev: Event): void => {
      const { current: cardElement } = cardRef;
      if (!cardElement) return;
      const isContainCard = cardElement.contains(ev.target as Node);

      setNegativesCloses((prevNegatives) => [...prevNegatives, isContainCard]);
      if (!isContainCard && negativesCloses.length > 0) {
        onClose();
      }
    };
    document.addEventListener('click', handleClickSideCard);
    return () => {
      document.removeEventListener('click', handleClickSideCard);
    };
  }, [negativesCloses, onClose]);

  useEffect(() => {
    setNegativesCloses([]);
  }, [onClose]);

  useEffect(() => {
    setFocusImage(viewScreen.mainImage);
    setNotFocused(images.filter((img) => img !== viewScreen.mainImage));

    document.body.classList[viewScreen.show ? 'add' : 'remove'](
      'overflowY-none'
    );
  }, [viewScreen, images]);

  const handleFocusImage = (image: string): void => {
    setNotFocused([
      ...images.filter((img) => img !== image && img !== focusImage),
      focusImage
    ]);
    setFocusImage(image);
  };

  return viewScreen.show && viewScreen.mainImage ? (
    <S.ImagesViewScreen>
      <div className="card" ref={cardRef}>
        <button className="button-close" onClick={onClose}>
          <i className="bx bx-x"></i>
        </button>
        <div className="image-cover">
          <img
            key={focusImage}
            alt="Image do projeto focada"
            src={focusImage}
            width={400}
            height={300}
          />
          {
            focusImage === viewScreen.mainImage && (
              <S.MarkCover><i className='bx bxs-bookmark-alt'></i></S.MarkCover>
            )
          }

        </div>
        {notFocused.length > 0 && (
          <ul className="images-list">
            {notFocused.map((img, index) => (
              <li
                key={index}
                onClick={() => {
                  handleFocusImage(img);
                }}
              >
                {/* {
                  img === viewScreen.mainImage && (
                    <S.MarkCover><i className='bx bxs-bookmark-alt'></i></S.MarkCover>
                  )
                } */}
                <img
                  alt={`imagem secundaria ${index}`}
                  src={img}
                  width={100}
                  height={80}
                />
              </li>
            ))}
          </ul>
        )}
      </div>
    </S.ImagesViewScreen>
  ) : (
    <></>
  );
};

export default ImagesViewScreen;
