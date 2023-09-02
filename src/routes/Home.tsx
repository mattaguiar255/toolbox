
// This is a temporary fetch for testing the PHP backend.
fetch(process.env.REACT_APP_SERVER_URL_PHP + "/GetAllTools.php").then((response) => {
  response.json().then((data) => {
    console.log(data);
  });
});

function Home(): React.ReactElement {
  return <div>This is the home page.</div>;
}

export default Home;