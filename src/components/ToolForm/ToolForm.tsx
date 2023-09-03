import UpdateToolInput from "../../controllers/UpdateTool/UpdateToolInput/UpdateToolInput";

interface ToolFormProps {
  tool: any; // Unfortunatly, time will not allow me to write an interface for a tool.
}

function ToolForm(props: ToolFormProps): React.ReactElement {
  return (
    <form>
      <UpdateToolInput toolId={props.tool.tool_uuid} type="text" name="title" defaultValue={props.tool.title} />
    </form>
  );
}

export default ToolForm;