import { useRoutes } from "react-router-dom";
import MainRoutes from "./MainRoutes";

const AppRoutes = () => {
    return useRoutes([<MainRoutes/>])
}

export default AppRoutes