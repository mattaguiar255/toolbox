import { useRef, useState } from "react";
import CardLink from "../../controllers/CardLink/CardLink";
import FixedPanel from "../../components/FixedPanel/FixedPanel";
import CreateToolButton from "../../controllers/CreateTool/CreateToolButton/CreateToolButton";
import PlusSVG from "../../images/ComponentSVGs/PlusSVG";
import useFetchOnce from "../../hooks/useFetchOnce";
import styles from "./Home.module.css"

function Home(): React.ReactElement {

  const tools = useFetchOnce<Array<any>>(
    process.env.REACT_APP_SERVER_URL_PHP + "/GetAllTools.php",
    { method: "GET" }
  );

  const nextToolId = useFetchOnce<Array<any>>(
    process.env.REACT_APP_SERVER_URL_PHP + "/GetNextToolId.php",
    { method: "GET" }
  );

  return (
    <div>
      <div id={styles.cardFlexbox}>
        { tools !== null && tools.map((tool) => (
            <div key={tool.tool_uuid} className={styles.card}>
              <CardLink
                to={`/view/${tool.tool_uuid}`}
                title={tool.title || "<Title>"}
                img={tool.icon_link || undefined}
                shortDescription={tool.short_desc}
                linkURL={tool.docs_link || undefined} 
              />
            </div>
          ))
        }
      </div>
      <FixedPanel position={{ bottom: "5%", right: "3%" }}>
        <CreateToolButton nextToolId={nextToolId?.[0].tool_uuid} />
      </FixedPanel>
    </div>
  );

}

export default Home;