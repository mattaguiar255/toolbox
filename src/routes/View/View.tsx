import { useParams } from "react-router-dom";

function View(): React.ReactElement {

  const { toolId } = useParams<string>();

  return <div>You are currently viewing tool { toolId }</div>;

}

export default View;