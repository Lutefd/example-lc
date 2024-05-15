import { db } from './index';
import { test } from './schema';
import { faker } from '@faker-js/faker';

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
