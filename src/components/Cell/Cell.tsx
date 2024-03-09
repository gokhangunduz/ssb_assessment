import { ReactElement } from "react";
import { toast } from "sonner";

interface ICell {
  value: string;
  isUpdatable: boolean;
}

export default function Cell({ value, isUpdatable }: ICell): ReactElement {
  function handleOnClick() {
    if (isUpdatable) {
      console.log("This cell is updatable");
    } else {
      toast.warning("This cell is not updatable");
    }
  }

  return (
    <div
      onClick={handleOnClick}
      className={`p-4 ${
        isUpdatable ? "cursor-pointer" : "cursor-not-allowed bg-slate-100"
      }`}
    >
      <p>{value}</p>
    </div>
  );
}
