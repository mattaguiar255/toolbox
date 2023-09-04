import UpdateToolInput from '../../controllers/UpdateTool/UpdateToolInput/UpdateToolInput';
import styles from './ToolFormSectionHeader.module.css';

interface ToolFormSectionHeaderProps {
  sectionTitle:   string;
}

function ToolFormSectionHeader(props: ToolFormSectionHeaderProps): React.ReactElement {

  return (
    <div className={styles.sectionHeader}>
      <div className={styles.sectionTitle}>{ props.sectionTitle }</div>
    </div>
  );

}

export default ToolFormSectionHeader;