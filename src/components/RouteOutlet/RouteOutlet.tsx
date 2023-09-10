import { Outlet } from "react-router-dom";
import AppHeader from "../AppHeader/AppHeader";
import styles from "./RouteOutlet.module.css";

function RouteOutlet(): React.ReactElement {
  return (
    <div id={styles.routeOutlet}>
      <AppHeader />
      <main id={styles.main}>
        <Outlet />
      </main>
    </div>
  );
}

export default RouteOutlet;
