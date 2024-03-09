import { ReactElement, useMemo } from "react";
import { useAppSelector } from "../../hooks/redux.hook";
import Table from "../Table/Table";
import Cell from "../Cell/Cell";

export default function DataGrid(): ReactElement {
  const { datas } = useAppSelector((state) => state.data);

  const rows = useMemo(
    () =>
      datas?.map((data) => {
        return {
          code: {
            value: data?.code,
            isUpdatable: data?.isUpdatable,
          },
          name: {
            value: data?.name,
            isUpdatable: data?.isUpdatable,
          },
          date: {
            value: data?.date,
            isUpdatable: data?.isUpdatable,
          },
          isUpdatable: {
            value: data?.isUpdatable,
            isUpdatable: data?.isUpdatable,
          },
        };
      }),

    [datas]
  );

  const columns = useMemo(
    () => [
      {
        key: "code",
        header: "Code",
        body: ({ code }: { code: { value: string; isUpdatable: boolean } }) => {
          return <Cell value={code.value} isUpdatable={code.isUpdatable} />;
        },
      },
      {
        key: "name",
        header: "Name",
        body: ({ name }: { name: { value: string; isUpdatable: boolean } }) => {
          return <Cell value={name.value} isUpdatable={name.isUpdatable} />;
        },
      },
      {
        key: "date",
        header: "Date",
        body: ({ date }: { date: { value: string; isUpdatable: boolean } }) => {
          return <Cell value={date.value} isUpdatable={date.isUpdatable} />;
        },
      },
    ],
    []
  );

  return (
    <Table columns={columns} data={rows} loading={!Array.isArray(datas)} />
  );
}
