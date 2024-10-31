import { FC, ReactNode } from "react";
import "./layout.scss";
import Header from "components/Header";

interface ILayout {
  children: ReactNode;
}

export const Layout: FC<ILayout> = ({ children }) => {
  return (
    <main className="background">
      <Header />
      {children}
    </main>
  );
};
