import { ReactElement } from "react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

interface IMainLayout {
  children: ReactElement | ReactElement[];
}

export default function MainLayout({ children }: IMainLayout): ReactElement {
  return (
    <div>
      <Header />
      {children}
      <Footer />
    </div>
  );
}
