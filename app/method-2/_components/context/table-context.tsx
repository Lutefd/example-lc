'use client';

import { addDays } from 'date-fns';
import {
	useState,
	createContext,
	type Dispatch,
	type SetStateAction,
} from 'react';
import { DateRange } from 'react-day-picker';

export const TableContext = createContext<{
	date: DateRange | undefined;
	setDate: Dispatch<SetStateAction<DateRange | undefined>>;
} | null>(null);

export const TableContextProvider = ({
	children,
}: {
	children: React.ReactNode;
}) => {
	const [date, setDate] = useState<DateRange | undefined>({
		from: new Date(new Date().setDate(new Date().getDate() - 3)),
		to: new Date(new Date().setDate(new Date().getDate() + 3)),
	});
	return (
		<TableContext.Provider
			value={{
				date,
				setDate,
			}}
		>
			{children}
		</TableContext.Provider>
	);
};
