export interface IData {
  code: string;
  name: string;
  date: string;
  isUpdatable: boolean;
}

export type IStageDataIndex = number | null;

export type IDataKeys = keyof IData;
