import { useRef, useState } from "react";
import Card from "../../components/Card/Card";
import styles from "./Home.module.css"

function Home(): React.ReactElement {

  // Ideally you'd want an Array<Tool> but time is not allowing for the
  // definition of a full Tool interface.
  const [tools, setTools] = useState<Array<any> | null>(null);
  const hasMounted = useRef<boolean>(false);

  if (hasMounted.current === false) {
    hasMounted.current = true;
    fetch(process.env.REACT_APP_SERVER_URL_PHP + "/GetAllTools.php").then((response) => {
      response.json().then((data) => setTools(data));
    });
  }

  return (
    <div id={styles.cardFlexbox}>
      { 
        tools !== null &&
        <Card
          title={tools[1].title}
          img={tools[1].icon_link}
          shortDescription={tools[1].short_desc}
          linkURL={tools[1].docs_link}
        />
      }
    </div>
  );

}

export default Home;