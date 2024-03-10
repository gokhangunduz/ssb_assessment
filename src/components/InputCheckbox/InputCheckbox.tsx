import { ReactElement } from "react";
import { InputSwitch, InputSwitchChangeEvent } from "primereact/inputswitch";
import InputLabel from "../InputLabel/InputLabel";

interface IInputCheckbox {
  label?: string;
  checked: boolean;
  onChange?: (e: InputSwitchChangeEvent) => void;
}

export default function InputCheckbox({
  label,
  checked,
  onChange,
}: IInputCheckbox): ReactElement {
  return (
    <div className="flex h-full flex-col gap-2 items-center justify-center w-fit">
      <InputLabel label={label}>
        <InputSwitch
          className="scale-95"
          checked={checked}
          onChange={onChange}
        />
      </InputLabel>
    </div>
  );
}
