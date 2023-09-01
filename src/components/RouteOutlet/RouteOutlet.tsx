import { Outlet } from "react-router-dom";

function RouteOutlet(): React.ReactElement {
  return (
    <>
      <header>
        <h1>Toolbox</h1>
      </header>
      <main>
        <Outlet />
      </main>
    </>
  );
}

export default RouteOutlet;
