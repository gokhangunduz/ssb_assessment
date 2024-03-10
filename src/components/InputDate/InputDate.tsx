import { forwardRef } from "react";
import InputLabel from "../InputLabel/InputLabel";
import InputError from "../InputError/InputError";

interface IInputDate {
  label?: string;
  name?: string;
  required?: boolean;
  pattern?: string;
  minLength?: number;
  maxLength?: number;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
  error?: string;
  tip?: string;
}

const InputDate = forwardRef<HTMLInputElement, IInputDate>((props, ref) => {
  return (
    <div className="flex flex-col gap-2 w-fit relative">
      <InputLabel label={props.label}>
        <input
          type="date"
          className={`border border-slate-300 p-1 rounded scale-90 w-44 ${
            props.error && "!border-red-500"
          }`}
          {...props}
          ref={ref}
          title={props.tip}
        />
      </InputLabel>
      <InputError error={props.error} />
    </div>
  );
});

export default InputDate;
