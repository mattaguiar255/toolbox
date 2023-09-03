import { RouterProvider } from "react-router-dom";
import initBrowserRouter from "./routes";
import Home from "./routes/Home/Home";
import View from "./routes/View/View";
import "./styles/reset.css";
import "./styles/variables.css";
import "./styles/font.css";
import "./styles/global-styles.css";

const router = initBrowserRouter({ Home, View });

function App(): React.ReactElement {
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
