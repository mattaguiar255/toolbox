import { useRef, useState } from "react";
import CardLink from "../../controllers/CardLink/CardLink";
import FixedPanel from "../../components/FixedPanel/FixedPanel";
import useFetchOnce from "../../hooks/useFetchOnce";
import styles from "./Home.module.css"

function Home(): React.ReactElement {

  const tools = useFetchOnce<Array<any>>(
    process.env.REACT_APP_SERVER_URL_PHP + "/GetAllTools.php",
    { method: "GET" }
  );

  return (
    <div>
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
      <FixedPanel position={{ bottom: "5%", right: "5%" }}>Fixed Panel</FixedPanel>
    </div>
  );

}

export default Home;