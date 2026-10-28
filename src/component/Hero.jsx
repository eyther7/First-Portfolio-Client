import Btn from "./Btn";

const Hero = () => {
    return (
        <div className="flex h-100 w-full">
            <div className="w-6/12 flex flex-col justify-center gap-6">
                <div className="flex flex-col gap-3 justify-start">
                    <h5 className="text-[14px]  text-[#2DE2C5] font-bold">HELLO, I'M A DEVELOPER</h5>
                    <h1 className="text-3xl font-bold bg-linear-to-r from-[#2DE2C5] to-white bg-clip-text text-transparent">
                        Turning Ideas Into <br /> Full-Stack Applications
                    </h1>
                </div>
                <div>
                    <p>
                        I'm a passionate developer learning full-Stack development <br /> and building real-world projects with mordern technologes <br /> like React, Node.js, Express.js, MongoDb and Tailwind CSS.
                    </p>
                </div>
                <div className="flex gap-6">
                    <Btn type={'primary'} text={'View My Projects'}/> <Btn text={'Contact'}/>
                </div>
            </div>
            <div className="w-6/12 flex justify-center items-center">
                <img className="h-87.5" src="/hero.png" alt="" />
            </div>
        </div>
    );
};

export default Hero;