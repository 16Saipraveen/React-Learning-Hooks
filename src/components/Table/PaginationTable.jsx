import React, { useMemo } from "react";
import { useTable, usePagination } from "react-table";
import MOCK_DATA from "./MOCK_DATA.json";
import { COLUMNS } from "./columns";
import "./Table.css";

export const PaginationTable = () => {
  const columns = useMemo(() => COLUMNS, []);
  const data = useMemo(() => MOCK_DATA, []);
  const table = useTable(
    {
      columns,
      data,
    },
    usePagination
  );

  const {
    getTableBodyProps,
    getTableProps,
    headerGroups,
    page,
    prepareRow,
    nextPage,
    previousPage,
    canPreviousPage,
    canNextPage,
    pageOptions,
  } = table;

  return (
    <>
      <table {...getTableProps()}>
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th {...column.getHeaderProps()}>{column.render("Header")}</th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {page.map((row) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map((cell) => {
                  return (
                    <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
      <div>
        <button onCLick={() => previousPage()} disabled={!canPreviousPage}>{`<`}</button>
        <button onCLick={() => previousPage()} disabled={!canPreviousPage}>
          {1}
        </button>
        <button onCLick={() => previousPage()} disabled={!canPreviousPage}>
          {2}
        </button>
        ...
        <button onClick={() => nextPage()} disabled={!canNextPage}>
          {pageOptions.length-1}
        </button>
        <button onClick={() => nextPage()} disabled={!canNextPage}>
          {pageOptions.length}
        </button>
        <button onClick={() => nextPage()} disabled={!canNextPage}>{`>`}</button>
      </div>
    </>
  );
};
