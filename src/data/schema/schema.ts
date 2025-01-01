import { z } from 'zod';
import dayjs from 'dayjs';
import { DATE_FORMAT } from '../../constants/date';

import type { Status } from '../../types/status';
import type { Dayjs } from 'dayjs';

/**
 * Zod object schema type to be casted as ZodObject
 */
type ZObjectSchemaType = {
  id: z.ZodNumber;
  title: z.ZodString;
  description: z.ZodString;
  dateCreated: z.ZodEffects<z.ZodString, string, string>;
  status: z.ZodType<Status>;
  comments: z.ZodString;
};

/**
 * Custom zod enum schema that maps to `Status` type
 */
const statusSchema: z.ZodEnum<['Open', 'Closed', 'In Progress']> = z.enum([
  'Open',
  'Closed',
  'In Progress',
]);

/**
 * Schema to validate/check against mock json data.
 */
const schema: z.ZodObject<ZObjectSchemaType> = z.object({
  id: z.number().min(1),
  title: z.string().max(1200),
  description: z.string().max(1500),
  dateCreated: z.string().refine(
    (date: string): boolean => {
      const parsed: Dayjs = dayjs(date, DATE_FORMAT.default);

      return parsed.isValid() && parsed.format(DATE_FORMAT.default) === date;
    },
    {
      message: 'Date format is invalid. The default date format is: ' + DATE_FORMAT.default,
    }
  ),
  status: statusSchema,
  comments: z.string().max(1500),
});

/**
 * Array version of the mock data schema.
 */
export const schemaArray: z.ZodArray<
  z.ZodObject<
    ZObjectSchemaType,
    z.UnknownKeysParam,
    z.ZodTypeAny,
    {
      status: Status;
      id: number;
      title: string;
      description: string;
      dateCreated: string;
      comments: string;
    }
  >
> = z.array(schema);
