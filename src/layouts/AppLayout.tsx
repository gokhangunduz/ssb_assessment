import { ReactElement } from "react";
import Form from "../components/Form/Form";
import Table from "../components/Table/Table";

export default function AppLayout(): ReactElement {
  return (
    <div className="flex flex-col w-full py-8 px-96 gap-8">
      <Form />
      <Table />
    </div>
  );
}
