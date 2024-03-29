import { ReactElement } from "react";
import { Button as ButtonPR } from "primereact/button";

interface IButton {
  label?: string;
  type?: "button" | "submit" | "reset";
  icon?: string;
  severity?: "secondary" | "success" | "info" | "warning" | "danger" | "help";
  outlined?: boolean;
  className?: string;
  disabled?: boolean;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

export default function Button({
  label,
  type,
  icon,
  severity,
  outlined,
  className,
  disabled,
  onClick,
}: IButton): ReactElement {
  return (
    <ButtonPR
      type={type}
      onClick={onClick}
      label={label}
      icon={icon}
      size="small"
      outlined={outlined}
      severity={severity}
      className={className}
      disabled={disabled}
    />
  );
}
