import { ReactElement } from "react";

interface ICard {
  children: ReactElement | ReactElement[];
  className?: string;
  style?: React.CSSProperties;
  title?: string;
}

export default function Card({
  children,
  title,
  className,
  style,
}: ICard): ReactElement {
  return (
    <div
      className={`bg-white p-6 rounded-md shadow border border-slate-200 animate__animated animate__fadeIn ${className}`}
      style={style}
    >
      {title && (
        <h2 className="text-lg font-bold text-center mb-6 text-slate-600">
          {title}
        </h2>
      )}
      {children}
    </div>
  );
}
