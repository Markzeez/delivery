"use client";

import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  getSortedRowModel,
  useReactTable,
  type SortingState,
} from "@tanstack/react-table";
import { useState } from "react";
import { ChevronUp, ChevronDown } from "lucide-react";

type Package = {
  id: string;
  trackingCode: string;
  senderName: string;
  senderPhone: string;
  receiverName: string;
  receiverPhone: string;
  status: string;
  createdAt: Date;
};

const columnHelper = createColumnHelper<Package>();

const formatStatusLabel = (status: string) => {
  return status
    .toLowerCase()
    .split("_")
    .map((word) => word[0].toUpperCase() + word.slice(1))
    .join(" ");
};

const columns = [
  columnHelper.accessor("trackingCode", {
    header: "Tracking code",
    cell: (info) => (
      <span className="font-semibold text-slate-900">{info.getValue()}</span>
    ),
    size: 150,
  }),
  columnHelper.accessor("senderName", {
    header: "Sender",
    cell: (info) => {
      const pkg = info.row.original;
      return (
        <div>
          <div className="text-slate-900">{info.getValue()}</div>
          <div className="text-xs text-slate-500">{pkg.senderPhone}</div>
        </div>
      );
    },
    size: 200,
  }),
  columnHelper.accessor("receiverName", {
    header: "Receiver",
    cell: (info) => {
      const pkg = info.row.original;
      return (
        <div>
          <div className="text-slate-900">{info.getValue()}</div>
          <div className="text-xs text-slate-500">{pkg.receiverPhone}</div>
        </div>
      );
    },
    size: 200,
  }),
  columnHelper.accessor("status", {
    header: "Status",
    cell: (info) => (
      <span className="inline-flex rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-slate-700">
        {formatStatusLabel(info.getValue())}
      </span>
    ),
    size: 130,
  }),
  columnHelper.accessor("createdAt", {
    header: "Date",
    cell: (info) => (
      <span className="text-slate-500">
        {new Date(info.getValue()).toLocaleDateString()}
      </span>
    ),
    size: 120,
  }),
];

interface PackagesTableProps {
  data: Package[];
}

export default function PackagesTable({ data }: PackagesTableProps) {
  const [sorting, setSorting] = useState<SortingState>([]);

  const table = useReactTable({
    data,
    columns,
    state: {
      sorting,
    },
    onSortingChange: setSorting,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
  });

  const SortIcon = ({
    column,
  }: {
    column: ReturnType<typeof table.getHeaderGroups>[0]["headers"][0]["column"];
  }) => {
    const isSorted = column.getIsSorted();
    if (!isSorted)
      return (
        <div className="size-4 text-slate-400">
          <ChevronUp className="size-3 float-left" />
          <ChevronDown className="size-3 float-right" />
        </div>
      );
    return isSorted === "asc" ? (
      <ChevronUp className="size-4 text-slate-700" />
    ) : (
      <ChevronDown className="size-4 text-slate-700" />
    );
  };

  return (
    <div className="overflow-x-auto rounded-3xl border border-slate-200">
      <table className="w-full border-collapse text-left text-sm">
        <thead className="sticky top-0 bg-slate-50 text-slate-600">
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <th
                  key={header.id}
                  className="cursor-pointer select-none px-4 py-4 font-medium hover:bg-slate-100"
                  onClick={header.column.getToggleSortingHandler()}
                >
                  <div className="inline-flex items-center gap-2">
                    {flexRender(
                      header.column.columnDef.header,
                      header.getContext()
                    )}
                    {header.column.getCanSort() && (
                      <SortIcon column={header.column} />
                    )}
                  </div>
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody>
          {table.getRowModel().rows.length === 0 ? (
            <tr>
              <td
                className="px-4 py-6 text-slate-600"
                colSpan={columns.length}
              >
                No packages match the current search and filter criteria.
              </td>
            </tr>
          ) : (
            table.getRowModel().rows.map((row) => (
              <tr key={row.id} className="border-t border-slate-200">
                {row.getVisibleCells().map((cell) => (
                  <td
                    key={cell.id}
                    className="px-4 py-4"
                  >
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </td>
                ))}
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}
