import {
  reducerAddStageDataIndex,
  reducerRemoveData,
} from "../../features/dataSlice";
import { useAppDispatch } from "../../hooks/redux.hook";
import { ReactElement } from "react";
import Button from "../Button/Button";
import { toast } from "sonner";

interface IActionCell {
  isUpdatable: boolean;
  index: number;
}

export default function ActionCell({
  index,
  isUpdatable,
}: IActionCell): ReactElement {
  const dispatch = useAppDispatch();

  function handleOnEdit() {
    if (isUpdatable) {
      dispatch(reducerAddStageDataIndex(index));
    } else {
      toast.warning("This cell is not updatable.");
    }
  }

  function handleOnDelete() {
    dispatch(reducerRemoveData(index));
  }
  return (
    <div
      className={`flex justify-end gap-4 p-1.5 ${
        !isUpdatable && "bg-slate-100"
      }`}
    >
      <Button
        type="button"
        onClick={handleOnEdit}
        icon="pi pi-pencil"
        severity="info"
      />
      <Button
        type="button"
        onClick={handleOnDelete}
        icon="pi pi-trash"
        severity="danger"
      />
    </div>
  );
}
