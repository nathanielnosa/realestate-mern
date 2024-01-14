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
import UpdateProfile from "../pages/UpdateProfile";
import Settings from "../pages/Settings";


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
                    <Route path="/update-profile" element={<UpdateProfile />} />
                    <Route path="//settings" element={<Settings />} />

                </Route>


            </Route>
        )
    )
    return (
        <RouterProvider router={routers} />
    )
}

export default RouterSetup