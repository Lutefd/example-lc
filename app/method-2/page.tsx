import { db } from '@/server/db';

import { M2DatePickerWithRange } from './_components/m2-date-picker';
import M2Table from './_components/m2-table';
import { TableContextProvider } from './_components/context/table-context';

export default async function M2() {
	const data = await db.query.test.findMany();
	return (
		<main className="bg-background flex min-h-screen items-center justify-center">
			<TableContextProvider>
				<div className="max-w-[65rem]">
					<div className="flex flex-col gap-4 items-center justify-center">
						<M2DatePickerWithRange />
						<M2Table data={data} />
					</div>
				</div>
			</TableContextProvider>
		</main>
	);
}
