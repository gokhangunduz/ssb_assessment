import { ReactElement } from "react";

interface IInputLabel {
  label?: string;
  children: ReactElement;
}

export default function InputLabel({
  label,
  children,
}: IInputLabel): ReactElement {
  return (
    <label className="flex gap-2 items-center text-slate-600 font-semibold">
      {label}:{children}
    </label>
  );
}
