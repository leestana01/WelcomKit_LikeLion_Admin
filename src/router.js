import { createBrowserRouter } from "react-router-dom";
import MainPage from "./pages/MainPage";
import Home from './Contents/Home/Home';
import MyInfo from "./Contents/MyInfo/MyInfo";
import Letters from "./Contents/Letters/Letters";
import MyTeam from "./Contents/MyTeam/MyTeam";

export default createBrowserRouter([
    {
        path: "/",
        element: <MainPage/>,
        children: [
            {
                path: "",
                element: <Home />
            },
            {
                path: "info",
                element: <MyInfo />
            },
            {
                path: "letters",
                element: <Letters />
            },
            {
                path: "team",
                element: <MyTeam />
            }
        ]
    }
]);