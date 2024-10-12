import { ReactNode } from "react";

export type MainProps = {
  children: ReactNode;
};

function Main({ children }: MainProps) {
  return <main className=''>{children}</main>;
}

export default Main;
