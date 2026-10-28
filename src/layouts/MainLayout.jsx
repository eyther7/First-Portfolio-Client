import { Outlet } from "react-router";
import Header from "../component/Header";

const MainLayout = () => {
    return (
        <div className="min-h-screen w-full bg-[#080D18]">
            <div className="w-full h-16 bg-[#080D18] border-[#263449] border-b">
                <header className="h-16 max-w-275 mx-auto ">
                    <Header />
                </header>
            </div>
            <div className="w-full max-w-275 mx-auto ">

                <div className="w-full">
                    <Outlet />
                </div>
            </div>
        </div>
    );
};

export default MainLayout;