import { Navigate, Outlet, RouteObject, useRoutes } from "react-router-dom";
import UsersList from "../pages/UsersList";
import Post from "../pages/Post";

export const appRoutes: RouteObject[] = [
  { path: "/", element: <Navigate to="users" replace /> },
  {
    path: "users",
    element: <Outlet />,
    children: [
      {
        index: true,
        element: <UsersList />,
      },
      { path: ":userId", element: <Post /> },
    ],
  },
  { path: "*", element: <Navigate to="users" replace /> },
];

export const Routes = () => {
  const routes = useRoutes(appRoutes);
  return routes;
};
