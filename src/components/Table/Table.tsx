import { ReactElement } from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import Card from "../Card/Card";

interface ITable {
  data: any[];
  columns: any[];
  loading: boolean;
}

export default function Table({
  data,
  columns,
  loading,
}: ITable): ReactElement {
  return (
    <Card
      style={loading ? { backgroundColor: "rgba(0, 0, 0, 0.4)" } : {}}
      title="DataGrid"
      className="px-0 pb-0"
    >
      <DataTable
        className={` ${
          data &&
          columns &&
          !loading &&
          "animate-fadeIn transition-all duration-500"
        }`}
        value={data}
        paginator
        loading={loading}
        responsiveLayout="scroll"
        paginatorTemplate="CurrentPageReport FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink RowsPerPageDropdown"
        currentPageReportTemplate="Showing {first} to {last} of {totalRecords}"
        rows={20}
        rowHover
      >
        {columns?.map((col: any, index: number) => {
          return (
            <Column
              style={col?.style || {}}
              className={`animate-fadeIn p-0 ${col?.className}`}
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
