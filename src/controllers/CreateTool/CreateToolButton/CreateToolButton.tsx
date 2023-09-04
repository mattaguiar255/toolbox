import { HTMLAttributes } from "react";
import PlusSVG from "../../../images/ComponentSVGs/PlusSVG";
import styles from "./CreateToolButton.module.css";

interface CreateToolButtonProps extends HTMLAttributes<HTMLButtonElement> {
  nextToolId?: string;
}

function CreateToolButton(props: CreateToolButtonProps): React.ReactElement {

  function handleCreateToolButtonClick(): void {
    props.nextToolId && triggerCreateEmptyTool(props.nextToolId);
  }

  return (
    <button
      { ...props }
      className={`circleButton ${styles.createToolButton} ${props.className}`}
      onClick={handleCreateToolButtonClick}
    >
      <PlusSVG />
    </button>
  );

}

export default CreateToolButton;


// Helper functions

function triggerCreateEmptyTool(nextToolId: string): void {
  fetch(process.env.REACT_APP_SERVER_URL_PHP + "/CreateEmptyTool.php", {
    method: "POST"
  }).then(() => { window.location.href = `/view/${nextToolId}` });
}