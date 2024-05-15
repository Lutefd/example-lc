import { text, integer, sqliteTable } from 'drizzle-orm/sqlite-core';

export const test = sqliteTable('test', {
	id: integer('id').primaryKey({ autoIncrement: true }),
	name: text('name'),
});
