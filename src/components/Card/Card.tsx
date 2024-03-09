import { ReactElement } from "react";

interface ICard {
  children: ReactElement | ReactElement[];
  title?: string;
}

export default function Card({ children, title }: ICard): ReactElement {
  return (
    <div className="bg-white p-6 rounded-md shadow border border-slate-200">
      {title && (
        <h2 className="text-xl w-full font-bold text-center mb-6">{title}</h2>
      )}
      {children}
    </div>
  );
}
