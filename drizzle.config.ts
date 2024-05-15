import { defineConfig } from 'drizzle-kit';
import { env } from './env.js';

export default defineConfig({
	schema: './server/db/schema.ts',
	dialect: 'sqlite',
	driver: 'turso',
	dbCredentials: {
		url: env.DATABASE_URL,
	},
	verbose: true,
	strict: true,
});
