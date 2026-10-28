import { Rocket, CodeXml, Lightbulb, Target } from "lucide-react";
import Btn from "./Btn";

const AboutMe = () => {

    const aboutCardData = [
        {label: 'Learn', text: 'Continuously learning modern technology and best practices.', icon: Rocket},
        {label: 'Build', text: 'Building real-world projects to apply my skills.', icon: CodeXml},
        {label: 'improve', text: 'Always looking for feedback to get better.', icon: Lightbulb},
        {label: 'Grow', text: 'On the path to becoming a full-stack developer.', icon: Target},
    ]
    return (
        <div className="flex h-90 w-full">
            <div className="w-6/12 flex flex-col pt-8 gap-4">
                <div className="flex flex-col gap-3 mb-3 justify-start">
                    <h5 className="text-[14px]  text-[#2DE2C5] font-bold">ABOUT ME</h5>
                    <h1 className="text-3xl font-bold">
                        My Journey
                    </h1>
                </div>
                <div>
                    <p className="text-[#CBD5E1]">
                        I'm currently focused on learning full-stack development, <br />
                        exploring modern wed tecnologies and building projects <br />
                        that help me grow as a developer. I enjoy solving problems, <br />
                        writing clean code, and turning ideas into functional <br />
                        web applications.
                    </p>
                </div>
                <div className="mt-4">
                    <Btn text={'Beyond My Journey'}/>
                </div>
            </div>
            <div className="w-6/12 grid grid-cols-2 gap-4 p-8">
                {
                    aboutCardData.map(data => (
                        <div key={data.label} className="p-4  border border-[#263449] rounded-lg">
                            <div className="mb-2">
                                <data.icon  className='text-[#2DE2C5]' size={32}/>
                            </div>
                            <h2 className="text-[14px]  font-bold">
                                {data.label}
                            </h2>
                            <p className="text-[#CBD5E1] text-[13px]">
                                {data.text}
                            </p>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default AboutMe;