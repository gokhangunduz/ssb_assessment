import { ReactElement } from "react";
import MainLayout from "./layouts/MainLayout";
import AppLayout from "./layouts/AppLayout";

export default function App(): ReactElement {
  return (
    <MainLayout>
      <AppLayout />
    </MainLayout>
  );
}
