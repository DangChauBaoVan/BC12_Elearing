import Home from "containers/client/Home/Home";

export const clientRoutes = [
    {
        path: '/',
        component: Home,
        exact: true,
        isPrivate: false,
    }
];
export const adminRoutes = [];