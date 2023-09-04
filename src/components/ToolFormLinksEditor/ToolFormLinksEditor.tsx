import React, { useContext, useEffect, useRef } from "react";
import UpdateLinkInput from "../../controllers/UpdateLink/UpdateLinkInput/UpdateLinkInput";
import PlusSVG from "../../images/ComponentSVGs/PlusSVG";
import styles from "./ToolFormLinksEditor.module.css";
import { SetLinksContext, SetLinksContextType } from "../ToolFormLinksEditorContext/ToolFormLinksEditorContext";
import useFetchOnce from "../../hooks/useFetchOnce";

interface ToolFormLinksEditorProps extends React.HTMLAttributes<HTMLDivElement> {
  toolId: string;
  links: Array<{ linkId: string, linkName?: string, linkURL: string }>;
}

function ToolFormLinksEditor(props: ToolFormLinksEditorProps): React.ReactElement {

  const [links, setLinks] = useContext<SetLinksContextType>(SetLinksContext);
  const nextLinkIdArray = useFetchOnce(process.env.REACT_APP_SERVER_URL_PHP + "/GetNextLinkId.php", { method: "GET" });
  const nextLinkId = useRef<number | null>(null);
    
  useEffect(() => setLinks(props.links), []);
  useEffect(() => {
    nextLinkId.current = parseInt(nextLinkIdArray?.[0].link_id);
  }, [nextLinkIdArray]);

  function handleNewLink(event: React.MouseEvent): void {

    event.preventDefault();

    if (!nextLinkId.current) return;

    triggerLinkCreate(props.toolId);

    nextLinkId.current++;
    
    setLinks(prev => [...prev, { linkId: nextLinkId.current! - 1 }]);

  }

  function handleDeleteLink(event: React.MouseEvent, linkId: string): void {

    event.preventDefault();
    
    if (!nextLinkId.current) return;

    triggerLinkDelete(linkId);
    setLinks(prev => [...prev.filter(link => link.linkId !== linkId)]);

  }

  const { toolId, links: linkProps, ...divProps } = props;

  return (
    <div { ...divProps } id={styles.linkEditor} className={props.className} >
      {
        links.map((link) => (
          <div key={link.linkId} className={styles.linkFlexbox}>
            <UpdateLinkInput
              className={styles.linkNameInput}
              linkId={link.linkId}
              name="link_name"
              defaultValue={link.linkName}
              placeholder="Link Name"
            />
            <div className={styles.linkURLInputContainer}>
              <UpdateLinkInput
                className={styles.linkURLInput}
                linkId={link.linkId}
                name="link"
                defaultValue={link.linkURL}
                placeholder="Link"
              />
              <button
                className={"circleBackground " + styles.deleteLinkButton}
                onClick={ (event) => handleDeleteLink(event, link.linkId) }
              >
                x
              </button>
            </div>
          </div>
        ))
      }
      <div style={{ textAlign: "center" }}>
        <button className={"circleBackground " + styles.addLinkButton} onClick={ handleNewLink }>
          <PlusSVG />
        </button>
      </div>
    </div>
  );

}

export default ToolFormLinksEditor;


// Helper functions
function triggerLinkCreate(toolId: string): void {

  const serverParams = new FormData();
  serverParams.append("tool_uuid", toolId);

  fetch(process.env.REACT_APP_SERVER_URL_PHP + "/CreateToolLink.php", {
    method: "POST",
    body: serverParams
  });

}

function triggerLinkDelete(link: string): void {

  const serverParams = new FormData();
  serverParams.append("link_id", link);

  fetch(process.env.REACT_APP_SERVER_URL_PHP + "/DeleteToolLink.php", {
    method: "POST",
    body: serverParams
  });

}