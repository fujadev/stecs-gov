// DataTable.tsx
import React from 'react';
import { Table, Skeleton, LoadingOverlay, Checkbox } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';

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

	/** NEW: selection */
	selectable?: boolean; // show checkbox column
	selectedKeys?: Array<string | number>; // controlled selection
	defaultSelectedKeys?: Array<string | number>; // uncontrolled initial selection
	onSelectionChange?: (keys: Array<string | number>) => void;

	stickyHeaderOffset?: number;
	renderRowActions?: (row: T) => React.ReactNode;
	classNames?: { thead?: string; th?: string; tr?: string; td?: string };
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

	// selection
	selectable = false,
	selectedKeys,
	defaultSelectedKeys = [],
	onSelectionChange,

	stickyHeaderOffset = 60,
	renderRowActions,
	classNames,
	emptyMessage = 'No records found',
	loading = false,
	skeletonRowCount = 6,
	overlayLoading = false,
	overlayMessage,
}: DataTableProps<T>) => {
	const isMobile = useMediaQuery('(max-width: 768px)');
	const offset = isMobile ? 20 : stickyHeaderOffset;

	// selection (controlled or uncontrolled)
	const controlled = selectedKeys !== undefined;
	const [internal, setInternal] = React.useState<Array<string | number>>(defaultSelectedKeys);
	const keys = controlled ? (selectedKeys as Array<string | number>) : internal;

	const setKeys = (next: Array<string | number>) => {
		if (!controlled) setInternal(next);
		onSelectionChange?.(next);
	};

	const keyOf = (row: T, idx: number) => getRowKey(row, idx);
	const visibleRowKeys = data.map((r, i) => keyOf(r, i));
	const selectedSet = React.useMemo(() => new Set(keys), [keys]);

	const selectedOnPage = visibleRowKeys.filter((k) => selectedSet.has(k));
	const allChecked = data.length > 0 && selectedOnPage.length === data.length;
	const someChecked = !allChecked && selectedOnPage.length > 0;

	const toggleAllVisible = () => {
		if (allChecked) {
			// unselect all visible
			const next = keys.filter((k) => !visibleRowKeys.includes(k));
			setKeys(next);
		} else {
			// add all visible (merge)
			const merged = new Set([...keys, ...visibleRowKeys]);
			setKeys([...merged]);
		}
	};

	const toggleOne = (rowKey: string | number) => {
		const next = new Set(keys);
		next.has(rowKey) ? next.delete(rowKey) : next.add(rowKey);
		setKeys([...next]);
	};

	const colCount = columns.length + (renderRowActions ? 1 : 0) + (selectable ? 1 : 0);

	return (
		<div className="relative overflow-x-auto sm:overflow-visible">
			{/* Overlay for search/refetch */}
			<LoadingOverlay visible={overlayLoading} zIndex={20} overlayProps={{ blur: 2, backgroundOpacity: 0.25 }} loaderProps={{ type: 'oval', size: 'md' }} />
			{overlayLoading && overlayMessage && (
				<div className="pointer-events-none absolute inset-x-0 top-16 z-30 flex justify-center">
					<span className="rounded-full bg-white/80 px-3 py-1 text-xs font-medium text-[#003049] shadow">{overlayMessage}</span>
				</div>
			)}

			<Table
				horizontalSpacing="lg"
				verticalSpacing="lg"
				stickyHeader
				stickyHeaderOffset={offset}
				classNames={{
					thead: `bg-[#F3F4F6] md:rounded-[200px] ${classNames?.thead ?? ''}`,
					th: `font-semibold text-[12px] text-center md:text-left md:text-[14px] text-[#747D82] p-[12px] first:rounded-tl-[20px] last:rounded-tr-[20px] md:p-[20px] md:first:rounded-tl-[20px] md:last:rounded-tr-[20px] ${classNames?.th ?? ''}`,
					td: `${classNames?.td ?? ''}`,
					tr: `text-[#003049] text-center md:text-left text-[12px] md:text-[14px] font-medium ${classNames?.tr ?? ''}`,
				}}
			>
				<Table.Thead>
					<Table.Tr>
						{selectable && (
							<Table.Th className="w-10">
								<Checkbox aria-label="Select all rows" checked={allChecked} indeterminate={someChecked} onChange={toggleAllVisible} />
							</Table.Th>
						)}

						{columns.map((col, i) => (
							<Table.Th key={i} className={col.thClassName}>
								{col.header}
							</Table.Th>
						))}

						{renderRowActions && <Table.Th>Action</Table.Th>}
					</Table.Tr>
				</Table.Thead>

				<Table.Tbody>
					{/* Skeletons on first load */}
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

					{/* Empty */}
					{!loading && data.length === 0 && (
						<Table.Tr>
							<Table.Td colSpan={colCount}>
								<div className="py-6 text-center text-[#747D82]">{emptyMessage}</div>
							</Table.Td>
						</Table.Tr>
					)}

					{/* Rows */}
					{!loading &&
						data.map((row, rIdx) => {
							const rowKey = keyOf(row, rIdx);
							const checked = selectedSet.has(rowKey);
							return (
								<Table.Tr key={rowKey}>
									{selectable && (
										<Table.Td className="w-10">
											<Checkbox aria-label={`Select row ${rIdx + 1}`} checked={checked} onChange={() => toggleOne(rowKey)} />
										</Table.Td>
									)}

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
							);
						})}
				</Table.Tbody>
			</Table>
		</div>
	);
};

export default CustomTable;
