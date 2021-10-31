import Home from "containers/client/Home/Home";
import SearchResult from "containers/client/SearchResult/SearchResult";

export const clientRoutes = [
    {
        path: '/',
        component: Home,
        exact: true,
        isPrivate: false,
    },
    {
        path: '/searchResult/:searchValue',
        component: SearchResult,
        exact: true,
        isPrivate: false,
    },
];
export const adminRoutes = [];