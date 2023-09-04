import React, { useRef } from 'react';
import HoverInput from '../../../components/HoverInput/HoverInput';

interface UpdateLinkInputProps {
  linkId:     string;
}

function UpdateLinkInput(props: any): React.ReactElement {

  // Used to trigger a tool update after user stops typing.
  const endpointTriggerTimer = useRef<any>(undefined);
  const timeoutMs = 2000;

  // Can't pass toolId to HoverInput because it renders an <input> element.
  // <input> elements don't have a toolId attribute.
  const { linkId, ...otherProps } = props;

  function handleOnChange(event: any): void {

    props.onChange?.(event);

    clearTimeout(endpointTriggerTimer.current);
    endpointTriggerTimer.current = setTimeout(() => {
      triggerLinkUpdate(props.linkId, props.name, event.target.value);
    }, timeoutMs);

  }

  return <HoverInput { ...otherProps } onChange={ handleOnChange } />;

}

export default UpdateLinkInput;




// Helper functions

function triggerLinkUpdate(linkId: string, column: string, value: string): void {

  console.log("UPDATING LINK ID: ", linkId);

  const serverParams = new FormData();
  serverParams.append("link_id", linkId);
  serverParams.append("column", column);
  serverParams.append("value", value);

  fetch(process.env.REACT_APP_SERVER_URL_PHP + "/UpdateToolLink.php", {
    method: "POST",
    body: serverParams
  });

}
