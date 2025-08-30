"use client";

import { useState } from "react";
import { Table, TextInput, Select, Group, Badge } from "@mantine/core";

type Column<T> = {
  key: keyof T;
  label: string;
  render?: (value: any, row: T) => React.ReactNode;
};

interface DataTableProps<T> {
  columns: Column<T>[];
  data: T[];
  searchable?: boolean;
  filterOptions?: string[];
}

export function DataTable<T extends object>({
  columns,
  data,
  searchable = false,
  filterOptions = [],
}: DataTableProps<T>) {
  const [search, setSearch] = useState("");
  const [status, setStatus] = useState<string | null>(null);

  const filteredData = data.filter((row) => {
    const values = Object.values(row).join(" ").toLowerCase();
    const matchesSearch = values.includes(search.toLowerCase());
    const matchesStatus = status ? (row as any).status === status : true;
    return matchesSearch && matchesStatus;
  });

  return (
    <div className="p-6">
      {(searchable || filterOptions.length > 0) && (
        <Group mb="md" justify="space-between">
          {searchable && (
            <TextInput
              placeholder="Search..."
              value={search}
              onChange={(e) => setSearch(e.currentTarget.value)}
              className="w-[300px]"
            />
          )}
          {filterOptions.length > 0 && (
            <Select
              placeholder="All Status"
              value={status}
              onChange={setStatus}
              data={filterOptions}
              clearable
              className="w-[200px]"
            />
          )}
        </Group>
      )}

      <Table striped highlightOnHover withTableBorder>
        <Table.Thead>
          <Table.Tr>
            {columns.map((col) => (
              <Table.Th key={String(col.key)}>{col.label}</Table.Th>
            ))}
          </Table.Tr>
        </Table.Thead>
        <Table.Tbody>
          {filteredData.map((row, i) => (
            <Table.Tr key={i}>
              {columns.map((col) => (
                <Table.Td key={String(col.key)}>
                  {col.render
                    ? col.render((row as any)[col.key], row)
                    : (row as any)[col.key]}
                </Table.Td>
              ))}
            </Table.Tr>
          ))}
        </Table.Tbody>
      </Table>
    </div>
  );
}
