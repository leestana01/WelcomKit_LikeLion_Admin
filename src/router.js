import { createBrowserRouter } from "react-router-dom";
import MainPage from "./pages/MainPage";
import Home from './Contents/Home/Home';

export default createBrowserRouter([
    {
        path: "/",
        element: <MainPage/>,
        children: [
            {
                path: "",
                element: <Home />
            }
        ]
    }
]);