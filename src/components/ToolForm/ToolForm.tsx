import UpdateToolInput from "../../controllers/UpdateTool/UpdateToolInput/UpdateToolInput";
import ToolFormLinksEditor from "../ToolFormLinksEditor/ToolFormLinksEditor";
import ToolFormLinksEditorContext from "../ToolFormLinksEditorContext/ToolFormLinksEditorContext";
import ToolFormSectionHeader from "../ToolFormSectionHeader/ToolFormSectionHeader";
import DefaultHammerSVG from "../../images/ComponentSVGs/DefaultHammerSVG";
import styles from "./ToolForm.module.css";

interface ToolFormProps {
  tool: any; // Unfortunatly, time will not allow me to write an interface for a tool.
}

function ToolForm(props: ToolFormProps): React.ReactElement {

  return (
    <form>
      <div id={styles.formHeaderFlex}>
        <UpdateToolInput
          id={styles.toolTitle}
          toolId={props.tool.tool_uuid}
          name="title"
          defaultValue={props.tool.title}
          placeholder="Title"
        />
        { props.tool.icon_link && <img id={styles.toolImage} src={props.tool.icon_link} alt="Tool" /> }
        { !props.tool.icon_link && <DefaultHammerSVG id={styles.toolImage} /> }
      </div>
      <div id={styles.formBody}>
        <div>
          <ToolFormSectionHeader sectionTitle="Details" />
          <div className={styles.inputSection}>
            <div className={styles.labelAndInputContainer}>
              <label className={styles.inputLabel} htmlFor={styles.toolIconLink}>Icon Link</label>
              <UpdateToolInput
                id={styles.toolDescription}
                className={styles.inputField}
                toolId={props.tool.tool_uuid}
                name="icon_link"
                defaultValue={props.tool.icon_link}
                placeholder="Icon Link"
              />
            </div>
            <div className={styles.labelAndInputContainer}>
              <label className={styles.inputLabel} htmlFor={styles.toolShortDescription}>Short Description</label>
              <UpdateToolInput
                id={styles.toolShortDescription}
                className={styles.inputField}
                toolId={props.tool.tool_uuid}
                name="short_desc"
                defaultValue={props.tool.short_desc}
                placeholder="Short Description"
              />
            </div>
            <div className={styles.labelAndInputContainer}>
              <label className={styles.inputLabel} htmlFor={styles.toolRefLink}>Reference Link</label>
              <UpdateToolInput
                id={styles.toolRefLink}
                className={styles.inputField}
                toolId={props.tool.tool_uuid}
                name="docs_link"
                defaultValue={props.tool.docs_link}
                placeholder="Reference Link"
              />
            </div>
            <div className={styles.labelAndInputContainer}>
              <label className={styles.inputLabel} htmlFor={styles.toolLongDescription}>Description</label>
              <UpdateToolInput
                isTextArea
                id={styles.toolLongDescription}
                className={styles.inputField}
                toolId={props.tool.tool_uuid}
                name="long_desc"
                defaultValue={props.tool.long_desc}
                placeholder="Description"
              />
            </div>
          </div>
        </div>
        <div>
          <ToolFormSectionHeader sectionTitle="Links" />
          <ToolFormLinksEditorContext>
            <ToolFormLinksEditor
              toolId={props.tool.tool_uuid}
              links={
                (() => {
                  const linkIds = props.tool.link_ids?.split(",");
                  const linkNames = props.tool.link_names?.split(",");
                  const linkURLs = props.tool.links?.split(",");
                  if (linkIds === undefined) return [];
                  return (
                    linkIds.map((linkId: string, index: number) => (
                      { linkId: linkId, linkName: linkNames?.[index], linkURL: linkURLs?.[index] }
                    ))
                  );
                })()
              }
            />
          </ToolFormLinksEditorContext>
        </div>
      </div>
    </form>
  );

}

export default ToolForm;