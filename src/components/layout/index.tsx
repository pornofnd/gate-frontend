import { FC, ReactNode } from "react";
import "./layout.scss";
import Header from "components/Header";

interface ILayout {
  children: ReactNode;
}

export const Layout: FC<ILayout> = ({ children }) => {
  return (
    <div className="background">
      <Header />
      {children}
    </div>
  );
};
