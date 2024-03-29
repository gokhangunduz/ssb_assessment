import { ReactElement } from "react";
import MainLayout from "./layouts/MainLayout";
import AppLayout from "./layouts/AppLayout";
import "primereact/resources/themes/lara-light-cyan/theme.css";
import { PrimeReactProvider } from "primereact/api";
import "primeicons/primeicons.css";
import { Provider } from "react-redux";
import { store } from "./apps/store";
import "animate.css";
import { Toaster } from "sonner";

export default function App(): ReactElement {
  return (
    <Provider store={store}>
      <PrimeReactProvider>
        <Toaster richColors position="top-center" />
        <MainLayout>
          <AppLayout />
        </MainLayout>
      </PrimeReactProvider>
    </Provider>
  );
}
