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

	/** Selection */
	selectable?: boolean;
	selectedKeys?: Array<string>; // controlled
	defaultSelectedKeys?: Array<string>; // uncontrolled
	onSelectionChange?: (keys: Array<string>) => void;
	/** Row-level control */
	isRowSelectable?: (row: T, index: number) => boolean; // default: all selectable
	/** Hide checkbox for non-selectable rows (otherwise disabled) */
	hideCheckboxWhenDisabled?: boolean;

	/** Visuals / behavior */
	stickyHeaderOffset?: number;
	renderRowActions?: (row: T) => React.ReactNode;
	classNames?: { thead?: string; th?: string; tr?: string; td?: string };
	emptyMessage?: string;

	/** Loading */
	loading?: boolean; // first-load skeletons
	skeletonRowCount?: number;
	overlayLoading?: boolean; // keeps rows visible, shows overlay (e.g., searching)
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
	isRowSelectable,
	hideCheckboxWhenDisabled = false,

	// visuals
	stickyHeaderOffset = 60,
	renderRowActions,
	classNames,
	emptyMessage = 'No records found',

	// loading
	loading = false,
	skeletonRowCount = 6,
	overlayLoading = false,
	overlayMessage,
}: DataTableProps<T>) => {
	const isMobile = useMediaQuery('(max-width: 768px)');
	const offset = isMobile ? 20 : stickyHeaderOffset;

	/** selection state (controlled or uncontrolled) */
	const controlled = selectedKeys !== undefined;
	const [internal, setInternal] = React.useState<Array<string | number>>(defaultSelectedKeys);
	const keys = controlled ? (selectedKeys as Array<string | number>) : internal;

	const setKeys = (next: Array<string | number>) => {
		if (!controlled) setInternal(next);
		onSelectionChange?.(next);
	};

	const keyOf = (row: T, idx: number) => getRowKey(row, idx);

	/** visible rows with selectability info */
	const visible = data.map((row, i) => ({
		key: keyOf(row, i),
		row,
		index: i,
		selectable: isRowSelectable ? isRowSelectable(row, i) : true,
	}));

	const selectedSet = React.useMemo(() => new Set(keys), [keys]);

	/** header checkbox logic (only counts selectable rows) */
	const selectableKeysOnPage = visible.filter((v) => v.selectable).map((v) => v.key);
	const selectedSelectableOnPage = selectableKeysOnPage.filter((k) => selectedSet.has(k));
	const hasSelectableOnPage = selectableKeysOnPage.length > 0;
	const allChecked = hasSelectableOnPage && selectedSelectableOnPage.length === selectableKeysOnPage.length;
	const someChecked = hasSelectableOnPage && !allChecked && selectedSelectableOnPage.length > 0;

	const toggleAllVisible = () => {
		if (allChecked) {
			// unselect all selectable visible rows
			const next = keys.filter((k) => !selectableKeysOnPage.includes(k));
			setKeys(next);
		} else {
			// add all selectable visible rows
			const merged = new Set([...keys, ...selectableKeysOnPage]);
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
			{/* Overlay for refetch/search */}
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
								<Checkbox aria-label="Select all rows" checked={allChecked} indeterminate={someChecked} onChange={toggleAllVisible} disabled={!hasSelectableOnPage} />
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

					{/* Empty state */}
					{!loading && data.length === 0 && (
						<Table.Tr>
							<Table.Td colSpan={colCount}>
								<div className="py-6 text-center text-[#747D82]">{emptyMessage}</div>
							</Table.Td>
						</Table.Tr>
					)}

					{/* Data rows */}
					{!loading &&
						visible.map(({ key, row, index, selectable: canSelect }) => {
							const checked = selectedSet.has(key);

							return (
								<Table.Tr key={key} className={!canSelect ? 'opacity-70' : undefined}>
									{selectable && (
										<Table.Td className="w-10">
											{hideCheckboxWhenDisabled && !canSelect ? null : (
												<Checkbox
													aria-label={`Select row ${index + 1}`}
													checked={checked}
													onChange={() => canSelect && toggleOne(key)}
													disabled={!canSelect}
													className={!canSelect ? 'cursor-not-allowed' : undefined}
												/>
											)}
										</Table.Td>
									)}

									{columns.map((col, cIdx) => {
										const content = col.render ? col.render(row as T, index) : String((row as any)[col.accessor as string] ?? '');
										return (
											<Table.Td key={cIdx} className={col.tdClassName}>
												{content}
											</Table.Td>
										);
									})}

									{renderRowActions && <Table.Td>{renderRowActions(row as T)}</Table.Td>}
								</Table.Tr>
							);
						})}
				</Table.Tbody>
			</Table>
		</div>
	);
};

export default CustomTable;
