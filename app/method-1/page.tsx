import { db } from '@/server/db';
import Image from 'next/image';
import { json } from 'stream/consumers';
import M1Table from './_components/m1-table';
import { M1DatePickerWithRange } from './_components/m1-date-picker';
import ClientComponentWrapper from './_components/m1-wrapper';

export default async function M1() {
	const data = await db.query.test.findMany();
	return (
		<main className="bg-background flex min-h-screen items-center justify-center">
			<div className="max-w-[65rem]">
				<ClientComponentWrapper initialData={data} />
			</div>
		</main>
	);
}
