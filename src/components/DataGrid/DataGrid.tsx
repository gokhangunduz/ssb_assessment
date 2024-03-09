import { IColumn, IRow } from "../../interfaces/table.interface";
import { useAppSelector } from "../../hooks/redux.hook";
import ActionCell from "../ActionCell/ActionCell";
import { ReactElement, useMemo } from "react";
import Table from "../Table/Table";
import Cell from "../Cell/Cell";

export default function DataGrid(): ReactElement {
  const { datas } = useAppSelector((state) => state.data);

  const rows: IRow[] = useMemo(
    () =>
      datas?.map((data, index) => {
        return {
          code: {
            index: index,
            value: data?.code,
            isUpdatable: data?.isUpdatable,
          },
          name: {
            index: index,
            value: data?.name,
            isUpdatable: data?.isUpdatable,
          },
          date: {
            index: index,
            value: data?.date,
            isUpdatable: data?.isUpdatable,
          },
          action: {
            index: index,
            isUpdatable: data?.isUpdatable,
          },
        };
      }),

    [datas]
  );

  const columns: IColumn[] = useMemo(
    () => [
      {
        key: "code",
        header: "Code",
        align: "center",
        body: ({
          code,
        }: {
          code: { value: string; isUpdatable: boolean; index: number };
        }) => {
          return (
            <Cell
              index={code.index}
              value={code.value}
              isUpdatable={code.isUpdatable}
            />
          );
        },
      },
      {
        key: "name",
        header: "Name",
        align: "center",
        body: ({
          name,
        }: {
          name: { value: string; isUpdatable: boolean; index: number };
        }) => {
          return (
            <Cell
              index={name.index}
              value={name.value}
              isUpdatable={name.isUpdatable}
            />
          );
        },
      },
      {
        key: "date",
        header: "Date",
        align: "center",

        body: ({
          date,
        }: {
          date: { value: string; isUpdatable: boolean; index: number };
        }) => {
          return (
            <Cell
              index={date.index}
              value={date.value}
              isUpdatable={date.isUpdatable}
            />
          );
        },
      },
      {
        key: "action",
        header: "Action",
        align: "center",
        body: ({
          action,
        }: {
          action: { isUpdatable: boolean; index: number };
        }) => {
          return (
            <ActionCell index={action.index} isUpdatable={action.isUpdatable} />
          );
        },
      },
    ],
    []
  );

  return (
    <Table columns={columns} rows={rows} isLoading={!Array.isArray(datas)} />
  );
}
