import { type IStateImages } from '../types';

const defineStateImages = (imagesSecondary: number): IStateImages => {
  const stateImages: IStateImages = {
    cover: {
      preview: '',
      fileImage: null
    }
  };
  for (let i = 0; i < imagesSecondary; i++) {
    stateImages[`image${i}`] = {
      preview: '',
      fileImage: null
    };
  }

  return stateImages;
};

export default defineStateImages;
