import React from 'react';

const skills = [
	{
		name: 'Javascript',
		png: 'https://img.icons8.com/?size=100&id=108784&format=png&color=000000',
	},
	{
		name: 'HTML',
		png: 'https://img.icons8.com/?size=100&id=20909&format=png&color=000000',
	},
	{
		name: 'C++',
		png: 'https://img.icons8.com/?size=100&id=40669&format=png&color=000000',
	},
	{
		name: 'CSS',
		png: 'https://img.icons8.com/?size=100&id=21278&format=png&color=000000',
	},
	{
		name: 'Tailwind CSS',
		png: 'https://img.icons8.com/?size=100&id=CIAZz2CYc6Kc&format=png&color=000000',
	},
	/*{
		name: 'Sass',
		png: 'https://img.icons8.com/?size=100&id=QBqFNfPPB2Kx&format=png&color=000000',
	},*/
	{
		name: 'Node.js',
		png: 'https://img.icons8.com/?size=100&id=hsPbhkOH4FMe&format=png&color=000000',
	},
	{
		name: 'Next.js',
		png: 'https://img.icons8.com/?size=100&id=MWiBjkuHeMVq&format=png&color=000000',
	},
	{
		name: 'React',
		png: 'https://img.icons8.com/?size=100&id=123603&format=png&color=000000',
	},
	{
		name: 'Flutter',
		png: 'https://storage.googleapis.com/cms-storage-bucket/icon_flutter.0dbfcc7a59cd1cf16282.png',
	},
	/*{
		name: 'Astro.js',
		png: 'https://img.icons8.com/?size=100&id=kXuRhjMIeKhk&format=png&color=000000',
	},*/
	{
		name: 'Git',
		png: 'https://img.icons8.com/?size=100&id=20906&format=png&color=000000',
	},
	{
		name: 'Figma',
		png: 'https://img.icons8.com/?size=100&id=zfHRZ6i1Wg0U&format=png&color=000000',
	},
	{
		name: 'Google Firebase',
		png: 'https://img.icons8.com/?size=100&id=62452&format=png&color=000000',
	},
	{
		name: 'Supabase',
		png: 'https://img.icons8.com/?size=100&id=sH0rW2TvYdr9&format=png&color=000000',
	},
	{
		name: 'Mongodb',
		png: 'https://img.icons8.com/?size=100&id=B403GJErHZpx&format=png&color=000000',
	},
];

type Skill = {
	name: string;
	png: string;
};

const About = () => {
	const rows = [
		skills.slice(0, 5), // Row 1
		skills.slice(5, 9), // Row 2
		skills.slice(9, 15), // Row 3
	];

	const SkillCard = ({ skill }: { skill: Skill }) => (
		<div className="flex flex-col items-center justify-center h-30 w-30 hover:scale-110 transition-all duration-250 border-2 rounded-lg">
			<img src={skill.png} alt={skill.name} className="h-20 w-20" />
			<p className="uppercase font-cal-sans text-sm text-center">
				{skill.name}
			</p>
		</div>
	);

	return (
		<div className="flex flex-col gap-y-6">
			<h1 className="text-right text-4xl md:text-6xl font-cal-sans my-6">
				About
			</h1>
			<div className="grid md:grid-cols-2 items-center gap-y-6">
				<div
					id="description"
					className="flex flex-col md:px-30 justify-center text-md text-justify leading-8"
				>
					<p className="indent-8">
						Hi, I'm Christian — a full-stack developer who finds comfort in
						solving problems and joy in learning something new every day.
						Whether it's debugging a stubborn API route, refining a UI layout,
						or exploring a fresh framework, I thrive on the challenge and the
						clarity that comes with cracking complex systems.
					</p>
					<p className="indent-8">
						I approach development with curiosity and care, always aiming to
						build clean, scalable solutions that feel intuitive to use and
						satisfying to maintain. My favorite part of the process? That moment
						when everything clicks — when the code works, the architecture makes
						sense, and the user experience feels just right.
					</p>
				</div>
				<div className="hidden md:flex flex-col items-center gap-4">
					{rows.map((row, i) => (
						<div key={i} className={`flex gap-4 justify-center`}>
							{row.map((skill) => (
								<SkillCard key={skill.name} skill={skill} />
							))}
						</div>
					))}
				</div>
				<div className="md:hidden flex flex-col overflow-scroll gap-y-4">
					<div className="flex items-center gap-4">
						{skills.map((skill, i) => (
							<div key={i} className={`flex gap-4 justify-center`}>
								<SkillCard key={skill.name} skill={skill} />
							</div>
						))}
					</div>
				</div>
			</div>
		</div>
	);
};

export default About;
