import React, { useState, useEffect } from "react";
import { projects } from "../data/data";
import { useParams } from "react-router-dom";

const ProjectDetails = props => {

    const { index } = useParams();

    const [project, setProject ] = useState(projects[index]);

    return(
        <div className=" pb-4 text-gray-300 flex flex-col items-center pt-4 bg-gradient-to-b from-gray-900 to-gray-600 ">
            <h1 className="text-5xl my-2">Project Details</h1>
            <h2 className="text-3xl border-b my-3">{project.name}</h2>
            <a className="hover:opacity-50 my-3" href={project.siteLink}><img className="rounded-md w-" src={project.image}/></a>
            <div className="flex w-1/2 justify-evenly text-4xl">
                <a className="w-full py-4 hover:opacity-50 hover:border hover:border-slate-500 hover:rounded-lg" href={project.siteLink}>
                    View Project
                </a>
                <a className="w-full py-4 hover:opacity-50 hover:border hover:border-slate-500 hover:rounded-lg" href={project.gitHubLink}>
                    View Github
                </a>
            </div>
            <span className="w-1/2 my-3 text-xl">{project.description}</span>
            <span className="my-3">Tech Stack Used</span>
            {project.techUsed.map(tech => {
                return <span className="my-1">-{tech}</span>
            })}
        </div>
    )
}

export default ProjectDetails;