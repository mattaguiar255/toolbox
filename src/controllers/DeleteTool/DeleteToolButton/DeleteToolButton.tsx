import { HTMLAttributes } from "react";
import TrashSVG from "../../../images/ComponentSVGs/TrashSVG";
import styles from "./DeleteToolButton.module.css";

interface DeleteToolButtonProps extends HTMLAttributes<HTMLButtonElement> {
  toolId?: string;
}

function DeleteToolButton(props: DeleteToolButtonProps): React.ReactElement {

  function handleDeleteToolButtonClick(): void {
    props.toolId && triggerDeleteTool(props.toolId);
  }

  return (
    <button
      { ...props }
      className={`circleButton ${styles.deleteToolButton} ${props.className}`}
      onClick={handleDeleteToolButtonClick}
    >
      <TrashSVG />
    </button>
  );

}

export default DeleteToolButton;


// Helper functions

function triggerDeleteTool(toolId: string): void {

  const formData = new FormData();
  formData.append("tool_uuid", toolId);

  fetch(process.env.REACT_APP_SERVER_URL_PHP + "/DeleteTool.php", {
    method: "POST",
    body: formData
  }).then(() => { window.location.href = `/` });
  
}