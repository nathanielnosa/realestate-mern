import {
    createBrowserRouter,
    RouterProvider,
    Route,
    createRoutesFromElements
} from "react-router-dom";

import App from "../App";
import Home from "../pages/Home";
import About from "../pages/About";
import SignUp from "../pages/SignUp";
import Profile from "../pages/Profile";
import SignIn from "../pages/SignIn";
import PrivatePage from "../components/privateRoute/PrivatePage";


const RouterSetup = () => {
    const routers = createBrowserRouter(
        createRoutesFromElements(
            <Route path="/" element={<App />}>
                <Route index element={<Home />} />
                <Route path="/sign-up" element={<SignUp />} />
                <Route path="/sign-in" element={<SignIn />} />
                <Route path="/about" element={<About />} />
                <Route element={<PrivatePage />}>
                    <Route path="/profile" element={<Profile />} />
                </Route>

            </Route>
        )
    )
    return (
        <RouterProvider router={routers} />
    )
}

export default RouterSetup