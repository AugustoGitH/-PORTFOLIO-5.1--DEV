export interface IChangeInputImages {
  cover: string;
  images: string[];
}

export interface IInputImagesProps {
  onChange?: (images: IChangeInputImages) => void;
  reset?: boolean;
  error?: boolean;
  helperText?: string;
}

export interface IImageSelected {
  preview: string;
  fileImage: File | null;
}

export interface IInputImagesPopUpProps {
  onClose: () => void;
  onChange: (image: IStateImages) => void;
  show: boolean;
  reset: boolean;
}

export interface IStateImages extends Record<string, IImageSelected> {}

export interface IInputImageProps {
  onChange: (image: IImageSelected) => void;
  label: string;
  value: IImageSelected;
}
