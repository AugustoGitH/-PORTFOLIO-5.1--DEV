import {
  IProjectImages,
  TProjectTechnologiesUsed,
  TProjectType,
} from '../../types/Project'

export interface IFormCreateProject {
  name: string
  type: TProjectType
  technologiesUsed: TProjectTechnologiesUsed[]
  websiteLink: string
  videoLink: string
  repoId: number | null
  images: IProjectImages
  repoLink: string
}
