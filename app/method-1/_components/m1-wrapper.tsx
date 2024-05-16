'use client';

import { TestType } from '@/server/db/schema';
import { M1DatePickerWithRange } from './m1-date-picker';
import M1Table from './m1-table';
import { useState } from 'react';
import { DateRange } from 'react-day-picker';

function ClientComponentWrapper({ initialData }: { initialData: TestType[] }) {
	const [date, setDate] = useState<DateRange | undefined>({
		from: new Date(new Date().setDate(new Date().getDate() - 3)),
		to: new Date(new Date().setDate(new Date().getDate() + 3)),
	});
	return (
		<div className="flex flex-col gap-4 items-center justify-center">
			<M1DatePickerWithRange date={date!} setDate={setDate} />
			<M1Table data={initialData} date={date!} />
		</div>
	);
}

export default ClientComponentWrapper;
