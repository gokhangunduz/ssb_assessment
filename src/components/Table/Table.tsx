import { IColumn, IRow } from "../../interfaces/table.interface";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { ReactElement } from "react";
import Card from "../Card/Card";

interface ITable {
  rows: IRow[];
  columns: IColumn[];
  isLoading: boolean;
}

export default function Table({
  rows,
  columns,
  isLoading,
}: ITable): ReactElement {
  return (
    <Card
      style={isLoading ? { backgroundColor: "rgba(0, 0, 0, 0.4)" } : {}}
      title="DataGrid"
      className="px-0 pb-0"
    >
      <DataTable
        className={`rounded-md ${
          rows &&
          columns &&
          !isLoading &&
          "animate__animated animate__fadeIn transition-all duration-500"
        }`}
        value={rows}
        paginator
        paginatorClassName="rounded-md"
        loading={isLoading}
        responsiveLayout="scroll"
        paginatorTemplate="CurrentPageReport FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink RowsPerPageDropdown"
        currentPageReportTemplate="Showing {first} to {last} of {totalRecords}"
        rows={20}
        rowHover
      >
        {columns?.map((col, index) => {
          return (
            <Column
              className="animate__animated animate__fadeIn p-0"
              key={index}
              field={col.key}
              header={col.header}
              sortable={col.sortable || false}
              filter={col.filter || false}
              align={col.align || "left"}
              body={col.body}
            />
          );
        })}
      </DataTable>
    </Card>
  );
}
