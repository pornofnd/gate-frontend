import { FC, ReactNode} from "react";

interface ILayout {
  children: ReactNode;
}

export const Layout: FC<ILayout> = ({ children }) => {
  return <div className="background">{children}</div>;
};
