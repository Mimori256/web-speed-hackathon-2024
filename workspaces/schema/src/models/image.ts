/* eslint-disable sort/object-properties */
import { randomUUID } from 'node:crypto';

import { sqliteTable, text, index } from 'drizzle-orm/sqlite-core';

export const image = sqliteTable(
  'image',
  {
    // primary key
    id: text('id')
      .primaryKey()
      .$defaultFn(() => randomUUID()),

    // columns
    alt: text('alt').notNull(),

    // metadata
    createdAt: text('created_at')
      .notNull()
      .$defaultFn(() => new Date().toISOString()),
    updatedAt: text('updated_at')
      .notNull()
      .$defaultFn(() => new Date().toISOString()),
  },
  (table) => ({
    idIdx: index('id').on(table.id),
  }),
);
