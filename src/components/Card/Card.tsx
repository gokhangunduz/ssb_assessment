import { ReactElement } from "react";

interface ICard {
  children: ReactElement | ReactElement[];
}

export default function Card({ children }: ICard): ReactElement {
  return (
    <div className="bg-white p-6 rounded-md shadow border border-slate-200">
      {children}
    </div>
  );
}
