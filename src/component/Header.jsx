import { NavLink } from "react-router";
import Btn from "./Btn";
import './header.css'
import { CodeXml } from "lucide-react";

const links = [
    {lable: 'Home', link: '/'},
    {lable: 'About', link: '/about'},
    {lable: 'Skills', link: '/skills'},
    {lable: 'Projects', link: '/projects'},
    {lable: 'Experience', link: '/experience'},
    {lable: 'Contact', link: '/contact'},

]

const Header = () => {
    return (
        <div className="flex">
            <div className="w-4/12 flex gap-2 items-center pl-4">
                <div className="logo text-[20px] font-bold">
                    <CodeXml className="font-bold text-[#2DE2C5] "/>
                </div>
                <div className="logoText text-[20px] font-bold">
                    Eyther
                </div>
            </div>
            <div className="w-8/12 flex justify-between">
                <div className="nav w-8/12 h-16 flex  justify-center items-center ">
                    <nav className="w-full flex justify-around">
                        {
                            links.map(nav => <NavLink key={nav.lable} className={'text-[12px] hover:text-[#2DE2C5] '} to={nav.link}> {nav.lable} </NavLink>)
                        }
                    </nav>
                </div>
                <div className="contactBtn h-16 w-4/12 flex justify-center items-center">
                    <Btn text={'Get In Touch'}></Btn>
                </div>
            </div>
        </div>
    );
};

export default Header;