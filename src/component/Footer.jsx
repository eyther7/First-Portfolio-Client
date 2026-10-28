import { Dot } from "lucide-react";
import { CodeXml } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

const Footer = () => {
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
                <div className="text-[14px] w-6/12 h-16 flex  justify-center items-center ">
                    <p>
                        Build
                    </p>
                    <Dot />
                    <p>
                        Learn
                    </p>
                    <Dot/>
                    <p>
                        Grow
                    </p>
                </div>
                <div className="text-2xl contactBtn h-16 w-6/12 flex justify-end gap-3 items-center">
                   <FaGithub/>
                   <FaLinkedin/>
                   <FaSquareXTwitter/>
                </div>
            </div>
        </div>
    );
};

export default Footer;