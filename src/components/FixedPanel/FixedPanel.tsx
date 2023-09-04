import styles from "./FixedPanel.module.css";

interface FixedPanelProps {
  position?: { top?: number | string, left?: number | string, right?: number | string, bottom?: number | string }
  children?: React.ReactNode;
}

function FixedPanel(props: FixedPanelProps): React.ReactElement {

  const position = {
    top:    props.position?.top ?? "initial",
    bottom: props.position?.bottom ?? "initial",
    left:   props.position?.left ?? "initial",
    right:  props.position?.right ?? "initial"
  };

  return (
    <div
      className={styles.fixedPanel}
      style={position}
    >
      { props.children }
    </div>
  );

}

export default FixedPanel;