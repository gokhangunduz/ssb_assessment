import { ReactElement } from "react";
import { Button as ButtonPR } from "primereact/button";

interface IButton {
  label: string;
  type?: "button" | "submit" | "reset";
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

export default function Button({
  label,
  type,
  onClick,
}: IButton): ReactElement {
  return (
    <ButtonPR
      type={type}
      onClick={onClick}
      label={label}
      icon={type === "reset" ? "pi pi-refresh" : "pi pi-check"}
      size="small"
      outlined={type === "reset" ? true : false}
    />
  );
}
