import React, { useState, createContext } from "react";

export type SetLinksContextType = [any[], React.Dispatch<React.SetStateAction<any[]>>];

export const SetLinksContext = createContext<SetLinksContextType>([[], () => {}]);

function ToolFormLinksEditorContext(props: { children: React.ReactNode }): React.ReactElement {

  const [links, setLinks] = useState<Array<any>>([]);

  return (
    <SetLinksContext.Provider value={ [links, setLinks] }>
      { props.children }
    </SetLinksContext.Provider>
  );

}

export default ToolFormLinksEditorContext;