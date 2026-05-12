import React from "react";
import styles from "./DataTable.module.scss";

export interface Column {
  id: string;
  label: string;
  sortable?: boolean;
}

export interface Row {
  id: string;
  cells: string[];
}

export interface DataTableProps {
  columns: Column[];
  rows: Row[];
  sortable?: boolean;
  ariaLabel?: string;
}

export const DataTable: React.FC<DataTableProps> = ({
  columns,
  rows,
  sortable = false,
  ariaLabel,
}) => {
  return (
    <div className={styles.dataTable}>
      <div className={styles.dataTable__wrapper}>
        <table className={styles.dataTable__table} aria-label={ariaLabel || "Data table"}>
          <thead className={styles.dataTable__thead}>
            <tr className={styles.dataTable__headerRow}>
              {columns.map((column) => (
                <th
                  key={column.id}
                  className={`${styles.dataTable__th} ${sortable && column.sortable ? styles["dataTable__th--sortable"] : ""}`}
                  scope="col"
                >
                  {column.label}
                  {sortable && column.sortable && (
                    <span className={styles.dataTable__sortIcon} aria-hidden="true">
                      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M6 9L12 15L18 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </span>
                  )}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className={styles.dataTable__tbody}>
            {rows.map((row, rowIndex) => (
              <tr key={row.id} className={styles.dataTable__row}>
                {row.cells.map((cell, cellIndex) => (
                  <td key={cellIndex} className={styles.dataTable__td}>
                    {cell}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
