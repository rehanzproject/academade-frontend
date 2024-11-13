import React, { useMemo } from "react";
import { useTable } from "react-table";
import { LIST_COLUMN_ORDERS } from "./columns";

function OrdersTable({ newData }) {
  const columns = useMemo(() => LIST_COLUMN_ORDERS, []);
  const data = useMemo(() => newData, []);

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({
      columns,
      data,
    });

  return (
    <section className="flex flex-col gap-3 drop-shadow-lg shadow-lg rounded-2xl w-9/12 p-5 bg-light-blue/20">
      <h1 className="font-bold text-xl">Recent Orders</h1>

      <table {...getTableProps()} className="border-collapse w-full">
        <thead className="rounded-t-lg">
          {headerGroups.map((headerGroup, idx) => (
            <tr {...headerGroup.getHeaderGroupProps()} key={idx}>
              {headerGroup.headers.map((column, index) => (
                <th
                  key={index}
                  {...column.getHeaderProps()}
                  className="text-center p-3 text-xs font-semibold border-y-2 border-secondary-10"
                >
                  {column.render("Header")}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows?.length ? (
            rows?.map((row, key) => {
              prepareRow(row);
              return (
                <tr
                  {...row.getRowProps()}
                  key={key}
                  className="even:bg-gray-150 hover:bg-light-blue/30 border-y-2 border-secondary-10"
                >
                  {row.cells.map((cell, keys) => (
                    <td
                    key={keys}
                      {...cell.getCellProps()}
                      className="text-center p-3 text-xs"
                    >
                      {cell.render("Cell")}
                    </td>
                  ))}
                </tr>
              );
            })
          ) : (
            <tr>
              <td colSpan={5} className="text-center p-5">
                Belum ada pemesanan course!
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </section>
  );
}

export default OrdersTable;
