import { Outlet } from "react-router-dom";
// import { Header } from "../components/Headerii";
import { Header } from "../components/Header";

export function DefaultLayout() {
  return (
    <>
      <Header cartItems={1} />
      <Outlet></Outlet>
    </>
  );
}
