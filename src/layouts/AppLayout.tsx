import { ReactElement } from "react";
import Form from "../components/Form/Form";
import DataGrid from "../components/DataGrid/DataGrid";

export default function AppLayout(): ReactElement {
  return (
    <div className="flex flex-col w-full py-8 px-2 sm:px-4 md:px-8 lg:px-16 xl:px-40 2xl:px-72 gap-8 animate__animated animate__fadeInUp">
      <Form />
      <DataGrid />
    </div>
  );
}
