import technologies from "../../public/technologes";

const Skills = () => {

    return (
        <div className="flex flex-col h-75 w-full">
            <div className="flex flex-col h-30 justify-center gap-4">
                <h5 className="text-[14px] text-[#2DE2C5] font-bold">
                    SKILLS
                </h5>
                <h1 className="text-3xl font-bold">
                    Technologies I Work With
                </h1>
                <p>
                    Here are the technologies I'm and using to build modern web applications.
                </p>
            </div>
            <div className="flex justify-around items-center h-42.5 mt-2">
                {
                    technologies.map(tech => (
                        <div key={tech.label} className="h-37.5 w-37.5 flex flex-col justify-center items-center gap-4">
                            <img className="h-15 w-15" src={tech.image} alt="" />
                            <div className="flex flex-col justify-center items-center gap-0.5">
                                <h3 className="text-[14px] font-bold">
                                    {tech.label}
                                </h3>
                                <h5 className="text-[11px] text-[#CBD5E1]">
                                    {tech.title}
                                </h5>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default Skills;