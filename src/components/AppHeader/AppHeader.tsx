import { Link } from "react-router-dom";
import ToolboxSVG from "../../images/ComponentSVGs/ToolboxSVG";
import styles from "./AppHeader.module.css";

function AppHeader(): React.ReactElement {

  return (
    <header id={styles.appHeader}>
      <Link id={styles.appHeaderLink} to="/">
        <ToolboxSVG id={styles.appHeaderSVG} />
        <span>Toolbox</span>
      </Link>
    </header>
  );

}

export default AppHeader;