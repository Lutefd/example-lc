'use client';
import React from 'react';
import {
	Table,
	TableBody,
	TableCaption,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from '@/components/ui/table';
import { TestType } from '@/server/db/schema';
import { useTableContext } from './context/useTableContext';

function M2Table({ data }: { data: TestType[] }) {
	const { date } = useTableContext();
	const filteredData = data.filter((row) => {
		if (!date || !date.from || !date.to || !row.createdAt) {
			return true;
		}
		const toDate = new Date(date.to);
		toDate.setHours(23, 59, 59, 999);
		return row.createdAt >= date.from && row.createdAt <= toDate;
	});

	return (
		<Table className="min-w-full">
			<TableHeader>
				<TableRow>
					<TableHead className="">Name</TableHead>
					<TableHead>Id</TableHead>
					<TableHead>Data de Criação</TableHead>
				</TableRow>
			</TableHeader>
			<TableBody>
				{filteredData.map((row) => (
					<TableRow key={row.id}>
						<TableCell>{row.name}</TableCell>
						<TableCell>{row.id}</TableCell>
						<TableCell>
							{row.createdAt?.toLocaleDateString('pt-BR', {
								year: 'numeric',
								month: 'long',
								day: 'numeric',
							})}
						</TableCell>
					</TableRow>
				))}
			</TableBody>
		</Table>
	);
}

export default M2Table;
