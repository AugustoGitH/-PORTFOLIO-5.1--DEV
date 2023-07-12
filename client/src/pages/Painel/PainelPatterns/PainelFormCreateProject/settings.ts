import { TProjectTechnologiesUsed, TProjectType } from "../../../../types/Project";


interface IOptionTypeProject {
  label: string;
  value: TProjectType;
}

interface IOptionTProjectTechnologieUsed {
  label: string;
  value: TProjectTechnologiesUsed;
}

export const optionsTypeProject: IOptionTypeProject[] = [
  {
    label: 'All',
    value: 'all'
  },
  {
    label: 'Lading Page',
    value: 'lading page'
  },
  {
    label: 'Web App',
    value: 'web app'
  },
  {
    label: 'E-Commerce',
    value: 'e-commerce'
  }
];

export const optionsTechnologiesUsedProject: IOptionTProjectTechnologieUsed[] =
  [
    {
      label: 'HTML5',
      value: 'html5'
    },
    {
      label: 'CSS3',
      value: 'css3'
    },
    {
      label: 'JavaScript',
      value: 'javascript'
    },
    {
      label: 'Firebase',
      value: 'firebase'
    },
    {
      label: 'NodeJS',
      value: 'nodejs'
    },
    {
      label: 'Bootstrap',
      value: 'bootstrap'
    },
    {
      label: 'MongoDB',
      value: 'mongodb'
    },
    {
      label: 'SASS',
      value: 'sass'
    },
    {
      label: 'TypeScript',
      value: 'typescript'
    },
    {
      label: 'ReactJS',
      value: 'reactjs'
    },
    {
      label: 'NextJS',
      value: 'nextjs'
    }
  ];
