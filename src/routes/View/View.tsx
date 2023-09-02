import { useParams } from "react-router-dom";
import useFetchOnce from "../../hooks/useFetchOnce";
import styles from "./View.module.css";

function View(): React.ReactElement {

  const { toolId } = useParams<string>();

  const tools = useFetchOnce<Array<any>>(
    process.env.REACT_APP_SERVER_URL_PHP + "/GetToolById.php?tool_uuid=" + toolId,
    { method: "GET" }
  );

  const tool = tools !== null ? tools[0] : null;

  console.log(tools);

  return (
    <form id={styles.view}>

    </form>
  );

}

export default View;