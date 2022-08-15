import React from "react";
import Projects from "./Projects";
import AboutMe from "./AboutMe";
import Contact from "./Contact";

const HomePage = () => {

    return(
        <div className="flex flex-col">
            <Projects />
            <AboutMe />
            <Contact />
        </div>
    )
}

export default HomePage;