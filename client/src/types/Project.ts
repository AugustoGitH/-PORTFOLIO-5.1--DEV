import { type Document } from 'mongoose';

export type TProjectType = 'e-commerce' | 'web app' | 'lading page' | 'all';
export type TProjectTechnologiesUsed =
  | 'html5'
  | 'css3'
  | 'javascript'
  | 'firebase'
  | 'nodejs'
  | 'bootstrap'
  | 'mongodb'
  | 'sass'
  | 'typescript'
  | 'reactjs'
  | 'nextjs';

export interface IProjectImages {
  cover: string;
  images: string[];
}

export interface IActionRegister {
  previewDate: Date;
  idCustomer: string;
}

export type IRepositoryTechnologiesPoints = Record<string, number>;

export interface IProjectPublic {
  _id: string;
  orderOfFive: number;
  name: string;
  images: IProjectImages;
  type: TProjectType;
  technologiesUsed: TProjectTechnologiesUsed[];
  websiteLink: string;
  videoLink: string;
  repoId: number | null;
  views: IActionRegister[];
  likes: IActionRegister[];
  repositoryTechnologiesPoints: IRepositoryTechnologiesPoints;
  repoLink: string;
  favorite: boolean;
  createdAt: Date;
}

export type IProjectPrivate = IProjectPublic & Document;
