import React from "react";

const Table = ({ columns, rows }) => {
  return (
    <div className="w-full ">
      <table className="w-full">
        <thead>
          <tr className="bg-secondary">
            {columns?.map((column) => {
              return (
                <th className={column?.headerClassName}>
                  {column?.headerName}
                </th>
              );
            })}
          </tr>
        </thead>
        <tbody>
          {rows?.map((row, index) => {
            return (
              <tr>
                {columns?.map((column) => {
                  return (
                    <td className={`py-2 border-b ${column?.cellClassName}`}>
                      {column?.renderCell
                        ? column?.renderCell({
                            value: row[column?.accessor],
                            row,
                          })
                        : row[column?.accessor]}
                    </td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
