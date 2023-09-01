import { RouterProvider } from "react-router-dom";
import initBrowserRouter from "./routes";
import Home from "./routes/Home";
import View from "./routes/View";

const router = initBrowserRouter({ Home, View });

function App(): React.ReactElement {
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
