import { ReactElement } from "react";

export interface IRow {
  code: {
    index: number;
    value: string;
    isUpdatable: boolean;
  };
  name: {
    index: number;
    value: string;
    isUpdatable: boolean;
  };
  date: {
    index: number;
    value: string;
    isUpdatable: boolean;
  };
}

export interface IColumn {
  key: string;
  header: string;
  sortable?: boolean;
  filter?: boolean;
  align?: "left" | "right" | "center";
  body: (data: any) => ReactElement;
}
