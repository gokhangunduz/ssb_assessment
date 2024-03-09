import { ReactElement } from "react";
import packageJSON from "../../../package.json";

export default function Footer(): ReactElement {
  return (
    <footer className="absolute bottom-0 w-full h-7 bg-white flex items-center justify-between px-6 shadow text-xs text-slate-600">
      <p>{packageJSON.name}</p>
      <p>v{packageJSON.version}</p>
    </footer>
  );
}
