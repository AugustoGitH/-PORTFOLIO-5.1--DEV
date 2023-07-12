
import * as z from 'zod';

import { whiteListTechsUsedProject, whiteListTypesProject } from '../settings';
import { TProjectTechnologiesUsed, TProjectType } from '../../../types/Project';

const schemaCreateProject = z
  .object({
    name: z
      .string()
      .nonempty('O nome é obrigatório!')
      .min(4, 'O nome pode ter no mínimo 4 caracteres.')
      .max(47, 'O nome pode ter no máximo 47 caracteres.'),

    type: z
      .string()
      .nonempty('O tipo é obrigatório!')
      .refine((type) => whiteListTypesProject.includes(type as TProjectType), {
        message: 'O tipo selecionado é inválido!'
      })
      .default(''),

    technologiesUsed: z
      .array(z.string())
      .nonempty('Tecnologias mais usadas é obrigatório!')
      .min(2, 'É necessário selecionar ao menos duas tecnologias.')
      .refine((techsSelected) =>
        techsSelected.every((tech) =>
          whiteListTechsUsedProject.includes(tech as TProjectTechnologiesUsed)
        )
      )
      .default(['']),

    websiteLink: z
      .string()
      // .refine((value) => value === '' || regex.REGEX_URL_WEBSITE.test(value), {
      //   message: 'URL inválida!'
      // })
      .default('')
      .optional(),

    videoLink: z
      .string()
      // .refine((value) => value === '' || regex.REGEX_URL_YOUTUBE.test(value), {
      //   message: 'URL inválida!'
      // })
      .default('')
      .optional(),

    repoId: z
      .number()
      .refine((value) => !isNaN(Number(value)), {
        message: 'É necessário que o ID seja um número!'
      })
      .nullable()
      .optional(),

    images: z.object({
      cover: z.string().nonempty('É necessário selecionar a capa do projeto!'),
      images: z.array(z.string())
    }),

    repoLink: z
      .string()
      // .refine(
      //   (value) => value === '' || regex.REGEX_URL_REPO_GITHUB.test(value),
      //   {
      //     message: 'URL inválida!'
      //   }
      // )
      .default('')
      .optional()
  })
  .refine((data) => !(data.repoId && data.repoLink), {
    message:
      'Não é aceitavel que selecione o id do repositório e o link do repositório!',
    path: ['repoId']
  });
export default schemaCreateProject;
