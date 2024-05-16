'use client';

import { useContext } from 'react';
import { TableContext } from './table-context';

export function useTableContext() {
	const context = useContext(TableContext);
	if (!context) {
		throw new Error(
			'useTableContext must be used within a TableContextProvider'
		);
	}
	return context;
}
