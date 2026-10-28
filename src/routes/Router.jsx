import { createBrowserRouter, RouterProvider } from "react-router";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/home/Home";
import Products from "../pages/products/Products";
import SignIn from "../pages/auth/SignIn";
import SignUp from "../pages/auth/SignUp";
import DashboardLayout from "../layouts/DashboardLayout";
import DashboardHome from "../pages/dashboard/DashboardHome";
import AdminLayout from "../layouts/AdminLayout";
import AdminDashboard from "../pages/admin/AdminDashboard";
import Profile from "../pages/dashboard/Profile";
import MyOrders from "../pages/dashboard/MyOrders";
import UpdateProfile from "../pages/dashboard/UpdateProfile";
import AllProducts from "../pages/admin/AllProducts";
import Users from "../pages/admin/Users";
import Orders from "../pages/admin/Orders";
import AddProduct from "../pages/admin/AddProduct";
import UpdateProduct from "../pages/admin/UpdateProduct";
import UpdateUser from "../pages/admin/UpdateUser";


const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout/>,
        children: [
            {
                index: true,
                element: <Home/>
            },
            {
                path: 'products',
                element: <Products/>
            },
            {
                path: 'signIn',
                element: <SignIn/>
            },
            {
                path: 'signUp',
                element: <SignUp/>
            }
        ]
    },
    {
        path: '/dashboard',
        element: <DashboardLayout/>,
        children: [
            {
                index: true,
                element: <DashboardHome/>
            },
            {
                path: 'profile',
                element: <Profile/>
            },
            {
                path: 'myOrders',
                element: <MyOrders/>
            },
            {
                path: 'updateProfile',
                element: <UpdateProfile/>
            }
        ]
    },
    {
        path: '/admin',
        element: <AdminLayout/>,
        children: [
            {
                index: true,
                element: <AdminDashboard/>
            },
            {
                path: 'allProducts',
                element: <AllProducts/>
            },
            {
                path: 'users',
                element: <Users/>
            },
            {
                path: 'orders',
                element: <Orders/>
            },
            {
                path: 'addProducts',
                element: <AddProduct/>
            },
            {
                path: 'updateProduct',
                element: <UpdateProduct/>
            },
            {
                path: 'updateUser',
                element: <UpdateUser/>
            }
        ]
    }
])

const Router = () => {
    return <RouterProvider router={router} />; 
};

export default Router;