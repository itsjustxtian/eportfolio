import Image from 'next/image';
import React from 'react';

const skills = [
	{
		name: 'Javascript',
		png: '/tech/javascript.png',
	},
	{
		name: 'HTML',
		png: '/tech/html-5.svg',
	},
	{
		name: 'C++',
		png: '/tech/cplusplus.svg',
	},
	{
		name: 'CSS',
		png: '/tech/css-logo.svg',
	},
	{
		name: 'Tailwind CSS',
		png: '/tech/tailwindcss.svg',
	},
	/*{
		name: 'Sass',
		png: 'https://img.icons8.com/?size=100&id=QBqFNfPPB2Kx&format=png&color=000000',
	},*/
	{
		name: 'Node.js',
		png: '/tech/node-js-96.png',
	},
	{
		name: 'Next.js',
		png: '/tech/next.js-96.png',
	},
	{
		name: 'React',
		png: '/tech/react-logo.png',
	},
	{
		name: 'Flutter',
		png: '/tech/flutter-logo.svg',
	},
	{
		name: 'Astro.js',
		png: '/tech/astro-logo.png',
	},
	{
		name: 'Git',
		png: '/tech/git-logo.svg',
	},
	{
		name: 'Figma',
		png: '/tech/figma-logo.svg',
	},
	{
		name: 'Google Firebase',
		png: '/tech/firebase-logo.svg',
	},
	{
		name: 'Supabase',
		png: '/tech/supabase-logo.png',
	},
	{
		name: 'Mongodb',
		png: '/tech/mongo-logo.png',
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
			{skill.png && (
				<div className="relative h-20 w-20">
					<Image
						src={skill.png}
						alt={skill.name}
						fill
						className="object-contain"
					/>
				</div>
			)}

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
				<div
					id="description"
					className="flex flex-col md:px-30 justify-center text-md text-justify leading-8"
				>
					<p className="indent-8">
						Hi, I&apos;m Christian — a full-stack developer who finds comfort in
						solving problems and joy in learning something new every day.
						Whether it&apos;s debugging a stubborn API route, refining a UI
						layout, or exploring a fresh framework, I thrive on the challenge
						and the clarity that comes with cracking complex systems.
					</p>
					<p className="indent-8">
						I approach development with curiosity and care, always aiming to
						build clean, scalable solutions that feel intuitive to use and
						satisfying to maintain. My favorite part of the process? That moment
						when everything clicks — when the code works, the architecture makes
						sense, and the user experience feels just right.
					</p>
				</div>
			</div>
		</div>
	);
};

export default About;
