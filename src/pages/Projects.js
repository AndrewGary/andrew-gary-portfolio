import React from "react";
import { projects } from "../data/data";

const Projects = () => {
	return (
		<div id='projects' className="bg-gradient-to-b from-gray-900 to-gray-600 flex flex-col">
			<div className="flex flex-col">
				<h2 className="text-5xl mb-4">Projects</h2>
				<div className='flex flex-wrap w-full justify-evenly'>
					{projects.map((project, index) => {
						return (
							<a href={`/projectDetails/${index}`} key={index} className="flex flex-col items-center w-1/2 hover:opacity-50">
                                <div className="flex flex-col w-2/3 items-center">
                                    {project.name}
                                    <img className=" rounded-2xl h-auto w-4/5" src={project.image}/>
                                </div>
							</a>
						);
					})}
				</div>
			</div>
		</div>
	);
};

export default Projects;
