import React from 'react';

type experienceType = {
	company: string;
	title: string;
	startDate: string;
	endDate: string;
	responsibilities: string[];
};

const experience = [
	{
		company: 'Yoshii Software Solutions Philippines, Inc. [Internship]',
		title: 'Full Stack Developer',
		startDate: 'February 2025',
		endDate: 'April 2025',
		responsibilities: [
			"Developed a new product page for the company's IT products using Astro.js and React framework.",
			"Developed a functional map component that shows the company's product outlets and presents each outlet's contact information and pins their location onto the map.",
			'Planned technical approaches and actively coded and reviewed code.',
		],
	},
	{
		company: 'Gym Training Application',
		title: 'Freelance Full Stack Developer',
		startDate: 'May 2025',
		endDate: 'June 2025',
		responsibilities: [
			'Developed the UI/UX of a Gym Training Application using Flutter for clients to connect with gym trainers for a training session.',
			'Developed the backend to connect with Google Firebase for database management.',
		],
	},
];

const ExperienceCard = ({ experience }: { experience: experienceType }) => {
	return (
		<div>
			<h2 className="text-2xl font-semibold mb-2">{experience.company}</h2>
			<div id="information" className="flex gap-2 text-nowrap overflow-auto">
				<h3 className="italic mb-2">{experience.title}</h3>
				<p>|</p>
				<h3 className="italic">{experience.startDate}</h3>
				<p>-</p>
				<h3 className="italic">{experience.endDate}</h3>
			</div>
			<div id="responsibilities">
				<ul className="list-disc pl-5">
					{experience.responsibilities.map((responsibility, i) => (
						<li key={i}>{responsibility}</li>
					))}
				</ul>
			</div>
		</div>
	);
};

const Experience = () => {
	return (
		<div className="flex flex-col">
			<div id="section-title">
				<h1 className="text-left text-4xl md:text-6xl font-cal-sans my-6">
					Experience
				</h1>
			</div>
			<div id="content" className="flex flex-col md:px-30 gap-10">
				{experience.map((experience, i) => (
					<div key={i}>
						<ExperienceCard experience={experience} />
					</div>
				))}
			</div>
		</div>
	);
};

export default Experience;
