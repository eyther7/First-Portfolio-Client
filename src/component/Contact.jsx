
import { Mail } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import Btn from "./Btn";
import { Link } from "react-router";


const Contact = () => {
    return (
        <div className="flex items-center h-80  w-full">
            <div className="flex flex-col w-4/12 h-30 justify-center gap-4">
                <h5 className="text-[14px] text-[#2DE2C5] font-bold">
                    Contact
                </h5>
                <h1 className="text-3xl font-bold">
                    Let's Work Together
                </h1>
                <p className="text-[14px]">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odit placeat laboriosam minus?
                </p>
            </div>
            <div className="h-9/12 w-px bg-[#263449]"></div>
            <div className="flex w-8/12">
                <div className="flex w-4/12 justify-center flex-col pl-6 gap-3">
                    <Link to={'/'} className="flex hover:text-[#2DE2C5] items-center gap-3">
                        <Mail /> <h3>E-mail</h3>
                    </Link>
                    <Link to={'/'} className="flex hover:text-[#2DE2C5] items-center gap-3 ">
                        <FaLinkedin className="text-[20px]" /> <h3>LinkDin</h3>
                    </Link>
                    <Link to={'/'} className="flex hover:text-[#2DE2C5] items-center gap-3 ">
                        <FaGithub className="text-[20px]" /> <h3>GitHub</h3>
                    </Link>
                </div>
                <div className=" w-8/12">
                    <div className="m-4 p-5 flex flex-col gap-2 border border-[#263449] rounded-lg">
                        <div className="flex flex-col gap-2">
                            <div className="flex justify-between ">
                                <input className="bg-[#0D1524] h-7.5 text-[14px] border w-20/41 border-[#263449] rounded-lg pl-2" type="text" placeholder="Name" /> <input className="bg-[#0D1524] h-7.5 text-[14px] border w-20/41 border-[#263449] rounded-lg pl-2" type="email" placeholder="Email" />
                            </div>
                            <textarea className=" text-[14px] bg-[#0D1524] h-20 border w-full border-[#263449] rounded-lg pl-2" name="message" placeholder="Message" id=""></textarea>
                        </div>
                        <Btn text={'Send Message'} type={'primary'} height={'h-10'} width={'w-full'}/> 
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;