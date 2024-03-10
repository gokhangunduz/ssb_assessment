import { ReactElement } from "react";

export default function Header(): ReactElement {
  return (
    <header className="w-full h-14 bg-white flex items-center justify-center shadow text-slate-600 font-bold animate__animated animate__fadeInDown">
      <h1>SSB Assessment</h1>
    </header>
  );
}
