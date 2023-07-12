export interface IVierScreen {
  show: boolean;
  mainImage: string;
}
export interface IImagesViewScreenProps {
  viewScreen: IVierScreen;
  onClose: () => void;
  images: string[];
}
