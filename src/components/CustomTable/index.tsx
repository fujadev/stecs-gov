// DataTable.tsx
import React from 'react';
import { Table, Skeleton, LoadingOverlay } from '@mantine/core';

type Column<T> = {
	header: string;
	accessor?: keyof T | string;
	render?: (row: T, rowIndex: number) => React.ReactNode;
	tdClassName?: string;
	thClassName?: string;
};

export type DataTableProps<T> = {
	data: T[];
	columns: Column<T>[];
	getRowKey?: (row: T, index: number) => string | number;
	stickyHeaderOffset?: number;
	renderRowActions?: (row: T) => React.ReactNode;
	classNames?: {
		thead?: string;
		th?: string;
		tr?: string;
		td?: string;
	};
	emptyMessage?: string;
	loading?: boolean;
	skeletonRowCount?: number;
	overlayLoading?: boolean;
	overlayMessage?: string;
};

const CustomTable = <T,>({
	data = [],
	columns = [],
	getRowKey = (_row, i) => i,
	stickyHeaderOffset = 60,
	renderRowActions,
	classNames,
	emptyMessage = 'No records found',
	loading = false,
	skeletonRowCount = 6,
	overlayLoading = false,
	overlayMessage,
}: DataTableProps<T>) => {
	const colCount = columns.length + (renderRowActions ? 1 : 0);

	return (
		<div className="relative">
			<LoadingOverlay visible={overlayLoading} zIndex={20} overlayProps={{ blur: 2, backgroundOpacity: 0.25 }} loaderProps={{ type: 'oval', size: 'md' }} />
			{overlayLoading && overlayMessage && (
				<div className="pointer-events-none absolute inset-x-0 top-16 z-30 flex justify-center">
					<span className="rounded-full bg-white/80 px-3 py-1 text-xs font-medium text-[#003049] shadow">{overlayMessage}</span>
				</div>
			)}

			<Table
				horizontalSpacing="lg"
				verticalSpacing="md"
				stickyHeader
				stickyHeaderOffset={stickyHeaderOffset}
				classNames={{
					thead: `bg-[#F3F4F6] rounded-[200px] ${classNames?.thead ?? ''}`,
					th: `font-semibold text-[14px] text-[#747D82] p-[20px] first:rounded-tl-[20px] last:rounded-tr-[20px] ${classNames?.th ?? ''}`,
					td: `${classNames?.td ?? ''}`,
					tr: `text-[#003049] text-[14px] font-medium ${classNames?.tr ?? ''}`,
				}}
			>
				<Table.Thead>
					<Table.Tr>
						{columns.map((col, i) => (
							<Table.Th key={i} className={col.thClassName}>
								{col.header}
							</Table.Th>
						))}
						{renderRowActions && <Table.Th>Action</Table.Th>}
					</Table.Tr>
				</Table.Thead>

				<Table.Tbody>
					{/* First-load skeletons */}
					{loading &&
						Array.from({ length: skeletonRowCount }).map((_, r) => (
							<Table.Tr key={`skeleton-${r}`}>
								{Array.from({ length: colCount }).map((__, c) => (
									<Table.Td key={c}>
										<Skeleton height={16} radius="sm" />
									</Table.Td>
								))}
							</Table.Tr>
						))}

					{/* Empty state (only when NOT loading) */}
					{!loading && data.length === 0 && (
						<Table.Tr>
							<Table.Td colSpan={colCount}>
								<div className="py-6 text-center text-[#747D82]">{emptyMessage}</div>
							</Table.Td>
						</Table.Tr>
					)}

					{/* Data rows (only when NOT loading) */}
					{!loading &&
						data.map((row, rIdx) => (
							<Table.Tr key={getRowKey(row, rIdx)}>
								{columns.map((col, cIdx) => {
									const content = col.render ? col.render(row, rIdx) : String((row as any)[col.accessor as string] ?? '');
									return (
										<Table.Td key={cIdx} className={col.tdClassName}>
											{content}
										</Table.Td>
									);
								})}
								{renderRowActions && <Table.Td>{renderRowActions(row)}</Table.Td>}
							</Table.Tr>
						))}
				</Table.Tbody>
			</Table>
		</div>
	);
};

export default CustomTable;
