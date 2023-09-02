import { Outlet } from "react-router-dom";
import AppHeader from "../AppHeader/AppHeader";

function RouteOutlet(): React.ReactElement {
  return (
    <>
      <AppHeader />
      <main>
        <Outlet />
      </main>
    </>
  );
}

export default RouteOutlet;
