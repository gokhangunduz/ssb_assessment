import { forwardRef } from "react";
import { InputText as InputTextPR } from "primereact/inputtext";
import InputError from "../InputError/InputError";
import InputLabel from "../InputLabel/InputLabel";

interface IInputText {
  label?: string;
  name?: string;
  required?: boolean;
  pattern?: string;
  minLength?: number;
  maxLength?: number;
  placeholder?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
  error?: string;
  tip?: string;
}

const InputText = forwardRef<HTMLInputElement, IInputText>((props, ref) => {
  return (
    <div className="flex flex-col gap-2 w-fit relative">
      <InputLabel label={props.label}>
        <InputTextPR
          title={props.tip}
          type="text"
          className={`p-1 rounded w-40 ${props.error && "p-invalid"}`}
          {...props}
          ref={ref}
          placeholder={props.placeholder}
        />
      </InputLabel>
      <InputError error={props.error} />
    </div>
  );
});

export default InputText;
