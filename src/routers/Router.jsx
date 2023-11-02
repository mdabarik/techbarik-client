import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import AdminLayout from "../layout/AdminLayout";
import Home from "../pages/Admin/Home";
import Categories from "../pages/Admin/Categories";

const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout></MainLayout>,
        errorElement: <h1>Error Element</h1>,
        children: [
            {
                index: true,
                element: <h3>Home</h3>
            },
            {
                path: '/coding-problems',
                element: <h1>Coding problems</h1>
            }
        ],
    },
    {
        path: '/admin',
        element: <AdminLayout></AdminLayout>,
        children: [
            {
                index: true,
                element: <Home></Home>
            },
            {
                path: 'problems',
                element: <h2>Blind 75 Questions</h2>
            },
            {
                path: 'categories',
                element: <Categories></Categories>
            }
        ]
    }
])

export default router; 