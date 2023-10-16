
import * as S from "./styles"


interface IImagesProjectProps {
  cover: string,
  images: string[]
}

const ImagesProject = ({ cover, images }: IImagesProjectProps): JSX.Element => {

  const createImagesProject = (): React.ReactNode[] => {
    if (!images) return [<li key={"image-create-1"} />, <li key={"image-create-2"} />, <li key={"image-create-images-3"} />, <li key={"image-create-4"} />];
    const imagesList = [];
    for (let i = 0; i < 4; i++) {
      imagesList.push(
        images[i] ? (
          <li key={i}>
            <img alt={`image-list-${i}`} src={images[i]} width={200} height={100} />
          </li>
        ) : (
          <li key={i}>
            <i className="bx bxs-image-alt" />
          </li>
        )
      );
    }
    return imagesList;
  };

  return (
    <S.ImagesProject>
      <div className="cover">
        <img src={cover} alt={`image-cover`} width={400} height={200} />
      </div>
      <ul className="images-sec">
        {
          createImagesProject()
        }
      </ul>
    </S.ImagesProject>
  )
}

export default ImagesProject