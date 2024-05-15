import { test } from './schema';
import { faker } from '@faker-js/faker';
import 'dotenv/config';
import { drizzle } from 'drizzle-orm/libsql';
import { createClient } from '@libsql/client';
import * as schema from './schema';
import 'dotenv/config';
import { env } from '@/env';
const client = createClient({
	url: env.DATABASE_URL,
});
export const db = drizzle(client, {
	schema,
});

const seed = async () => {
	const data: (typeof test.$inferInsert)[] = [];
	for (let i = 0; i < 15; i++) {
		data.push({
			name: faker.person.fullName(),
		});
	}
	console.log('Seed started');
	await db.insert(test).values(data);
	console.log('Seed completed');
};

void seed();
