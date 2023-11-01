import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import DashboardLayout from "../layout/DashboardLayout";
import CodingProblems from "../components/CodingProblems/CodingProblems";

const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout></MainLayout>,
        errorElement: <h1>Error Element</h1>,
        children: [
            {
                path: '/',
                element: <h3>Home</h3>
            },
            {
                path: '/coding-problems',
                element: <CodingProblems></CodingProblems>
            }
        ],
    },
    {
        path: '/admin',
        element: <DashboardLayout></DashboardLayout>,
        children: [
            {
                path: '/admin',
                element: <h1>Dashboard Home</h1>
            },
            {
                path: '/admin/blind75',
                element: <h2>Blind 75 Questions</h2>
            }
        ]
    }
])

export default router;