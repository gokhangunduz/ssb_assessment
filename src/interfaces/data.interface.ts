export interface IData {
  code: string;
  name: string;
  date: string;
  isUpdatable: boolean;
}

export type IDataKeys = keyof IData;
