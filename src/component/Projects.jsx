import { Link } from 'react-router';
import projects from '../../public/projects';


const Projects = () => {
    return (
        <div className="flex flex-col gap-4 h-128 w-full">
            <div className='flex justify-between'>
                <div className="flex flex-col h-22.5 justify-center gap-4">
                    <h5 className="text-[14px] text-[#2DE2C5] font-bold">
                        PROJECTS
                    </h5>
                    <h1 className="text-2xl font-bold">
                        Fetured Projects
                    </h1>
                </div>
                <div className='flex items-end mb-3'>
                    <Link className="text-[12px] flex items-center gap-3 text-[#2DE2C5] font-bold">View All Projects ... </Link>
                </div>
            </div>
            <div className="grid grid-cols-3 gap-5 mt-2">
                {
                    projects.map(project => (
                        <div key={project.name} className='flex flex-col gap-3 h-auto border border-[#263449] rounded-lg p-4'>
                            <div>
                                <img className="h-37.5 w-full rounded-lg object-cover" src="/hero.png" alt="" />
                            </div>
                            <div className='flex flex-col gap-3'>
                                <h4 className='font-bold'>
                                    {project.name}
                                </h4>
                                <div className='flex gap-2'>
                                    {
                                        project.technologies.map(data => <h3 key={data} className='text-[10px] font-semibold px-2 py-1 bg-[#0D1524] border border-[#263449] rounded-full'>{data}</h3>)
                                    }
                                </div>
                                <div>
                                    <p className='text-[14px] text-[#CBD5E1]'>
                                        {project.description}
                                    </p>
                                </div>
                                <Link className="text-[12px] flex items-center gap-3 text-[#2DE2C5] font-bold">View Projects ...</Link>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default Projects;