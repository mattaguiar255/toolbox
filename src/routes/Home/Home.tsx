import Card from "../../components/Card/Card";
import styles from "./Home.module.css"

// This is a temporary fetch for testing the PHP backend.
fetch(process.env.REACT_APP_SERVER_URL_PHP + "/GetAllTools.php").then((response) => {
  response.json().then((data) => {
    console.log(data);
  });
});

function Home(): React.ReactElement {

  return (
    <div id={styles.cardFlexbox}>
      <Card />
    </div>
  );

}

export default Home;