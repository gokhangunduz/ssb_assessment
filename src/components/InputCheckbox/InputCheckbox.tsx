import { ReactElement } from "react";
import { InputSwitch, InputSwitchChangeEvent } from "primereact/inputswitch";

interface IInputCheckbox {
  label?: string;
  error?: string;
  checked: boolean;
  onChange?: (e: InputSwitchChangeEvent) => void;
}

export default function InputCheckbox({
  label,
  error,
  checked,
  onChange,
}: IInputCheckbox): ReactElement {
  return (
    <div className="flex flex-col gap-2 items-center justify-center w-fit">
      <label className="flex gap-2 items-center text-slate-600 font-medium">
        {label}:
        <InputSwitch
          className="scale-95"
          checked={checked}
          onChange={onChange}
        />
      </label>
      <p className="text-xs mx-auto">
        {error ? <span className="text-red-500">{error}</span> : null}
      </p>
    </div>
  );
}
