import { RouterProvider } from "react-router-dom";
import initBrowserRouter from "./routes";
import Home from "./routes/Home";
import View from "./routes/View";
import "./styles/variables.css";
import "./styles/font.css";
import "./styles/reset.css";

const router = initBrowserRouter({ Home, View });

function App(): React.ReactElement {
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
