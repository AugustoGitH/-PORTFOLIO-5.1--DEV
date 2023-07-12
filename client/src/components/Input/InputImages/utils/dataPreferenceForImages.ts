/* eslint-disable @typescript-eslint/consistent-type-assertions */
import { type IStateImages } from '../types';

interface IStatesTrated<T extends string | File> {
  cover: T;
  images: T[];
}

const dataPreferenceForImages = <T extends string | File>(
  stateImages: IStateImages,
  type: 'data' | 'file'
): IStatesTrated<T> => {
  const previewStateImages = Object.fromEntries(
    Object.entries(stateImages).map(([key, value]) => [
      key,
      value[type === 'data' ? 'preview' : 'fileImage']
    ])
  );

  const images = Object.entries(previewStateImages)
    .filter(([key]) => key.includes('image'))
    .map(([, value]) => value);

  return {
    cover: previewStateImages.cover,
    images
  } as IStatesTrated<T>;
};

export default dataPreferenceForImages;
