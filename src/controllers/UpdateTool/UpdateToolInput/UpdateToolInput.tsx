import React, { InputHTMLAttributes, useRef } from 'react';
import HoverInput from '../../../components/HoverInput/HoverInput';

interface UpdateToolInputProps extends InputHTMLAttributes<HTMLInputElement> {
  toolId: string;
}

function UpdateToolInput(props: UpdateToolInputProps): React.ReactElement {

  // Used to trigger a tool update after user stops typing.
  const endpointTriggerTimer = useRef<any>(undefined);
  const timeoutMs = 2000;

  // Can't pass toolId to HoverInput because it renders an <input> element.
  // <input> elements don't have a toolId attribute.
  const { toolId, ...inputProps } = props;

  function handleOnChange(event: React.ChangeEvent<HTMLInputElement>): void {
    clearTimeout(endpointTriggerTimer.current);
    endpointTriggerTimer.current = setTimeout(() => {
      triggerToolUpdate(toolId, props.name ?? "", event.target.value);
    }, timeoutMs);
  }

  return <HoverInput { ...inputProps } onChange={ handleOnChange } />

}

export default UpdateToolInput;


// Helper functions

function triggerToolUpdate(toolId: string, column: string, value: string): void {
  
  console.log(toolId, column, value);

  const serverParams = new FormData();
  serverParams.append("tool_uuid", toolId);
  serverParams.append("column", column);
  serverParams.append("value", value);

  fetch(process.env.REACT_APP_SERVER_URL_PHP + "/UpdateTool.php", {
    method: "POST",
    body: serverParams
  });

}