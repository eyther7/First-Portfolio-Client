import { CodeXml, Minus, BrainCircuit, Bridge} from "lucide-react";

const Experience = () => {
    return (
        <div className="flex h-75 w-full">
            <div className="flex flex-col w-7/12  justify-center gap-4">

                <div className="flex flex-col justify-center gap-4">
                    <h5 className="text-[14px] text-[#2DE2C5] font-bold">
                        Experience
                    </h5>
                    <h1 className="text-3xl font-bold">
                        What I'm Doing Now
                    </h1>
                </div>
                <div className="flex">
                    <div className="flex flex-col gap-4">
                        <div className="flex">
                            <div className="flex justify-center items-center gap-3">
                                <div className="border p-2 rounded-full">
                                    <BrainCircuit />
                                </div>
                                <div>
                                    <h3 className="font-bold text-[#2DE2C5]">
                                        Learning Full-Stack Development
                                    </h3>
                                    <p className="text-[14px]">
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, doloremque animi ex veniam iste corrupti culpa ipsum officiis?
                                    </p>
                                </div>
                            </div>
                            <div className="flex justify-center items-center">
                                <div className="border border-[#2DE2C5] px-2 py-1 mt-2 rounded-4xl flex justify-center items-center">
                                    <h3 className="text-[12px] text-[#2DE2C5]">Current</h3>
                                </div>
                            </div>
                        </div>
                        <div className="flex">
                            <div className="flex justify-center items-center gap-3">
                                <div className="border p-2 rounded-full">
                                    <Bridge />
                                </div>
                                <div>
                                    <h3 className="font-bold">
                                        Building Projects
                                    </h3>
                                    <p className="text-[14px]">
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, doloremque animi ex veniam iste corrupti culpa ipsum officiis?
                                    </p>
                                </div>
                            </div>
                            <div className="flex justify-center items-center">
                                <div className="border px-2 py-1 mt-2 rounded-4xl flex justify-center items-center">
                                    <h3 className="text-[12px] ">Ongoing</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <div className="w-5/12 flex justify-center items-center">
                <div className="w-10/12 mx-auto flex flex-col gap-3 justify-center items-center border border-[#263449] rounded-lg h-9/12">
                    <CodeXml className="text-2xl font-bold text-[#2DE2C5] " />
                    <p className="text-center">
                        "Small steps every day <br /> lead to big results "
                    </p>
                    <Minus className="text-2xl font-bold text-[#2DE2C5] " />
                    
                </div>
            </div>
        </div>
    );
};

export default Experience;