import { forwardRef, useEffect } from "react";

interface IInputText {
  type: "text" | "date";
  label?: string;
  name?: string;
  required?: boolean;
  pattern?: string;
  minLength?: number;
  maxLength?: number;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
  touched?: boolean;
  error?: string;
}

const InputText = forwardRef<HTMLInputElement, IInputText>((props, ref) => {
  return (
    <div className="flex flex-col gap-2 w-fit">
      <label className="flex gap-2 items-center">
        {props.label}:
        <input
          title="input-text"
          className="border border-slate-200 p-1 rounded"
          {...props}
          ref={ref}
        />
      </label>
      <p className="text-xs mx-auto">
        {props.touched && props.error ? (
          <span className="text-red-500">{props.error}</span>
        ) : null}
      </p>
    </div>
  );
});

export default InputText;
