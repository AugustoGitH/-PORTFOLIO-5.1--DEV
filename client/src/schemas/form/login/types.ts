import type * as z from 'zod';

import { type schemaLogin } from '.';

export interface IFormLogin extends z.infer<typeof schemaLogin> {}
