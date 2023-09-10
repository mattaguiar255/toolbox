import { useParams } from "react-router-dom";
import ToolForm from "../../components/ToolForm/ToolForm";
import FixedPanel from "../../components/FixedPanel/FixedPanel";
import DeleteToolButton from "../../controllers/DeleteTool/DeleteToolButton/DeleteToolButton";
import useFetchOnce from "../../hooks/useFetchOnce";
import styles from "./View.module.css";

function View(): React.ReactElement {

  const { toolId } = useParams<string>();

  const tools = useFetchOnce<Array<any>>(
    process.env.REACT_APP_SERVER_URL_PHP + "/GetToolById.php?tool_uuid=" + toolId,
    { method: "GET" }
  );

  return (
    <div id={styles.view}>
      { tools?.length !== undefined && tools.length > 0 && <ToolForm tool={tools[0]} /> }
      { tools?.length == 0 && <p id={styles.toolSearchFailed}>Could not find the specified tool.</p> }
      <FixedPanel position={{ bottom: "3%", right: "3%" }}>
        <DeleteToolButton toolId={tools?.[0]?.tool_uuid} />
      </FixedPanel>
    </div>
  );

}

export default View;