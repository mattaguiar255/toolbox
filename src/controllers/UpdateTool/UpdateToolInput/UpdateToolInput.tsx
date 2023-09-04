import React, { InputHTMLAttributes, TextareaHTMLAttributes, useRef } from 'react';
import HoverInput from '../../../components/HoverInput/HoverInput';
import HoverTextArea from '../../../components/HoverTextArea/HoverTextArea';

interface UpdateToolInputProps {
  toolId:     string;
  isTextArea?:  boolean;
}

function UpdateToolInput(props: any): React.ReactElement {

  // Used to trigger a tool update after user stops typing.
  const endpointTriggerTimer = useRef<any>(undefined);
  const timeoutMs = 2000;

  // Can't pass toolId to HoverInput because it renders an <input> element.
  // <input> elements don't have a toolId attribute.
  const { toolId, isTextArea, ...otherProps } = props;

  function handleOnChange(event: any): void {

    props.onChange?.(event);

    clearTimeout(endpointTriggerTimer.current);
    endpointTriggerTimer.current = setTimeout(() => {
      triggerToolUpdate(toolId, props.name ?? "", event.target.value);
    }, timeoutMs);

  }

  const Component = isTextArea ? HoverTextArea : HoverInput;

  return <Component { ...otherProps } onChange={ handleOnChange } />;

}

export default UpdateToolInput;


// Helper functions

function triggerToolUpdate(toolId: string, column: string, value: string): void {

  const serverParams = new FormData();
  serverParams.append("tool_uuid", toolId);
  serverParams.append("column", column);
  serverParams.append("value", value);

  fetch(process.env.REACT_APP_SERVER_URL_PHP + "/UpdateTool.php", {
    method: "POST",
    body: serverParams
  });

}