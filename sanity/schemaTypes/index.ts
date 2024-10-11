import { type SchemaTypeDefinition } from 'sanity'

import photo from './photo';
import album from './album';
import category from './category';

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [photo, album, category],
}
