import { Outlet } from "react-router-dom";
import { Header } from "../components/Header";

export function DefaultLayout() {
  return (
    <div style={{ padding: "0rem 10rem" }}>
      <Header />
      <Outlet></Outlet>
    </div>
  );
}
