import type * as z from 'zod';

import type schemaCreateProject from '.';

export interface IFormCreateProject
  extends z.infer<typeof schemaCreateProject> {}
