import { create } from 'domain';
import { text, integer, sqliteTable } from 'drizzle-orm/sqlite-core';

export type TestType = typeof test.$inferSelect;

export const test = sqliteTable('test', {
	id: integer('id').primaryKey({ autoIncrement: true }),
	name: text('name'),
	createdAt: integer('created_at', { mode: 'timestamp' }),
});
