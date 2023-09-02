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
      <Card
        title="TypeScript"
        img="https://pbs.twimg.com/profile_images/1648471227416346625/v84A9gXA_400x400.png"
        shortDescription="JavaScript with Types"
        linkURL="https://www.typescriptlang.org/"
      />
    </div>
  );

}

export default Home;