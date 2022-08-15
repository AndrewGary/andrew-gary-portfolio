import React from "react";

const AboutMe = () => {
	return (
		<div
			id="aboutMe"
			className="border border-black flex flex-col items-center
            h-screen bg-gradient-to-b from-blue-100 via-blue-300 to-blue-500"
		>
			<div className="border border-green-400 w-1/2">
				<h2 className="text-4xl">My Story</h2>
				<div className="text-xl my-2">
					My name is Andrew Gary and I am a FullStack Developer making the
					transition from the glass art industry into tech. For the last 10
					years I have worked as a self employed glassblower.
				</div>
				<div className="text-xl my-2">
					Throughout my years as a glassblower I have always been passionate
					about technology and dabbled with coding. Over the past few years I
					have toyed with the idea of trying to get into the tech industry, and
					when my son was born mid 2021 I decided it was time to make the
					change.
				</div>
				<div className="text-xl my-2">
					I found out about Bloomtech's (FKA Lambda) FullStack Developer
					Bootcamp and quickly signed up. I loved the quick pace of the
					bootcamp, learning a new concept/subject every day was awesome.
					Fastforward 7 months and I had succesfully finished the curriculum.
				</div>
				<div className="text-xl my-2">
					By no means did the bootcamp teach me everything about Web
					Development, but it gave me a solid foundation of skills to develop
					profesional level web apps. Even more importantly it gave me the
					ability to learn new technologies in an effiecient manner.
				</div>
                <div className="text-xl my-2">
                    My passion for Web Development runs deep and it has almost become an obsession, I spend all of my freetime writing code and learning new skills for whatever projects I am working on at the time. I can't want until I can add another 40+ hours a week to learning and sharpening my skills as Web Developer.
                </div>
			</div>
		</div>
	);
};

export default AboutMe;
