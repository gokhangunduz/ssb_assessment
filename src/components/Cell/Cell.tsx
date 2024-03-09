import { reducerAddStageDataIndex } from "../../features/dataSlice";
import { useAppDispatch } from "../../hooks/redux.hook";
import { ReactElement } from "react";
import { toast } from "sonner";

interface ICell {
  value: string;
  isUpdatable: boolean;
  index: number;
}

export default function Cell({
  value,
  isUpdatable,
  index,
}: ICell): ReactElement {
  const dispatch = useAppDispatch();

  function handleOnClick() {
    if (isUpdatable) {
      dispatch(reducerAddStageDataIndex(index));
    } else {
      toast.warning("This cell is not updatable.");
    }
  }

  return (
    <div
      onClick={handleOnClick}
      className={`p-4 h-full ${
        isUpdatable ? "cursor-pointer" : "cursor-not-allowed bg-slate-100"
      }`}
    >
      <p>{value}</p>
    </div>
  );
}
