import { useRef, useState } from "react";
import CardLink from "../../controllers/CardLink/CardLink";
import styles from "./Home.module.css"
import useFetchOnce from "../../hooks/useFetchOnce";

function Home(): React.ReactElement {

  const tools = useFetchOnce<Array<any>>(
    process.env.REACT_APP_SERVER_URL_PHP + "/GetAllTools.php",
    { method: "GET" }
  );

  return (
    <div id={styles.cardFlexbox}>
      { tools !== null && tools.map((tool) => (
          <CardLink
            key={tool.tool_uuid}
            to={`/view/${tool.tool_uuid}`}
            title={tool.title}
            img={tool.icon_link || undefined}
            shortDescription={tool.short_desc}
            linkURL={tool.docs_link} 
          />
        ))
      }
    </div>
  );

}

export default Home;