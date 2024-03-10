import { ReactElement } from "react";
import Header from "../components/Header/Header";

interface IMainLayout {
  children: ReactElement | ReactElement[];
}

export default function MainLayout({ children }: IMainLayout): ReactElement {
  return (
    <div>
      <Header />
      {children}
    </div>
  );
}
