import { createBrowserRouter, Navigate } from "react-router";
import { AboutPage } from "../pages/about/AboutPage";
import { ProfilePage } from "../pages/profile/ProfilePage";
import { PrivateRoute } from "./PrivateRoute";
import { LoginPage } from "../pages/auth/LoginPage";

export const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <AboutPage />
    },
    {
        path: "/login",
        element: <LoginPage />
    },
    {
        path: "/profile",
        element: <PrivateRoute element={<ProfilePage />} />
    },
    {
        path: "*",
        element: <Navigate to='/' />
    },
]);
