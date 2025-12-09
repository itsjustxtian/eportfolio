import { Github, Globe } from 'lucide-react';
import React from 'react';
import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from '@/components/ui/carousel';
import Image from 'next/image';
import ProjectDialogue from './components/ProjectDialogue';

type Project = {
	name: string;
	description: string;
	technologies: string[];
	liveUrl?: string;
	repoUrl?: string;
	images?: string[];
	highlights?: string[];
};

const projects: Project[] = [
	{
		name: 'Video Game Inventory/Ascension Planner',
		description:
			'A web application that serves as an information system for characters and weapons of a video game and also has an inventory/ascension planner.',
		technologies: [
			'Astro.js',
			'React.js',
			'Tailwind CSS',
			'Shadcn.ui',
			'Supabase',
		],
		liveUrl: 'https://ascension-planner.netlify.app/',
		repoUrl: 'https://github.com/itsjustxtian/community-system',
		images: [
			'/demo/ascension-planner-tabs.gif',
			'/demo/ascension-planner-character-tab.gif',
			'/demo/ascension-planner-weapons-tab.gif',
			'/demo/ascension-planner-items-tab.gif',
			'/demo/ascension-planner-planner-tab.gif',
		],
		highlights: [
			'Developed an Ascension Planner System which allows users to create tasks which calculates the amount of items required to ascend a character to the target level.',
			'Designed a priority-based material queue that ensures newer tasks reflect accurate availability after older ones are fulfilled.',
		],
	},
	{
		name: 'DefectVision: An AI-Assisted Defect Detection System for Computer Motherboards',
		description:
			'DefectVision is a full-stack web application designed to interface with Raspberry Pi devices for real-time motherboard defect detection. It stores scan results, manages device communication, and leverages AI-powered image analysis.',
		technologies: [
			'Next.js',
			'Node.js',
			'MongoDB',
			'Shadcn.ui',
			'Ngrok',
			'Roboflow',
		],
		liveUrl: 'https://defect-vision.netlify.app/',
		repoUrl: 'https://github.com/itsjustxtian/defect-vision',
		images: [
			'/demo/defect-vision-dashboard.png',
			'/demo/defect-vision-start-scanning.png',
			'/demo/defect-vision-reports-table.png',
			'/demo/defect-vision-show-image.png',
			'/demo/defect-vision-demo.gif',
		],
		highlights: [
			'Established secure communication between the web app and Raspberry Pi using Ngrok tunnels and REST APIs to trigger device-side scanning commands.',
			"Integrated Roboflow's computer vision API to analyze motherboard images and detect defects with high accuracy.",
			'Designed a responsive UI using Shadcn.ui to display scan results and defect classifications in a user-friendly dashboard.',
			'Implemented backend logic with Node.js and MongoDB to store, retrieve, and manage scan data efficiently.',
			'Integrated an "Insight" feature which runs the image on OpenAI for an AI-generated analysis and defect detection report.',
		],
	},
];

const Projects = () => {
	return (
		<div className="flex flex-col min-h-screen justify-center gap-y-6">
			<h1 className="text-right text-4xl md:text-6xl font-cal-sans my-6">
				Projects
			</h1>
			<div id="content" className="flex flex-col gap-10">
				{projects.map((project, i) => (
					<div key={i} className="grid md:grid-cols-3">
						<div
							id="carousel"
							className={`md:col-span-2 md:px-20 flex items-center ${
								i % 2 === 0 ? 'order-1' : 'order-2'
							}`}
						>
							<div className="relative w-full max-h-[500px]">
								<Carousel className="w-full h-full">
									<CarouselContent>
										{project.images?.map((image, index) => (
											<CarouselItem key={index}>
												<div className="p-1">
													<div className="relative w-full min-h-[300px]">
														<ProjectDialogue image={image} index={index} />
													</div>
												</div>
											</CarouselItem>
										))}
									</CarouselContent>
									<CarouselPrevious className="absolute left-2 top-1/2 -translate-y-1/2 z-10" />
									<CarouselNext className="absolute right-2 top-1/2 -translate-y-1/2 z-10" />
								</Carousel>
							</div>
						</div>

						<div
							id="info"
							className={`col-span-1 flex-col space-y-[32px] ${
								i % 2 === 0 ? 'order-2' : 'order-1'
							}`}
						>
							<div className="flex flex-col space-y-[16px]">
								<h1 className="text-2xl font-bold">{project.name}</h1>
								<p className="text-justify indent-5">{project.description}</p>
							</div>
							<p>
								<p className="text-xl">
									<strong>Technologies Used:</strong>
								</p>{' '}
								{project.technologies.join(', ')}
							</p>
							{project.highlights && (
								<div id="highlights">
									<p className="text-xl">
										<strong>Highlights:</strong>
									</p>
									<ul className="list-disc pl-5 space-y-[16px]">
										<ul className="list-disc pl-5" />
										{project.highlights.map((highlight, i) => (
											<li key={i}>{highlight}</li>
										))}
									</ul>
								</div>
							)}
							<div
								id="links"
								className="mt-5 space-y-2 flex flex-col items-end"
							>
								{project.liveUrl && (
									<a
										href={project.liveUrl}
										className="flex items-center gap-2 cursor-pointer hover:text-accent-1 transition-all duration-250"
									>
										Live URL <Globe />
									</a>
								)}
								{project.repoUrl && (
									<a
										href={project.repoUrl}
										className="flex items-center gap-2 cursor-pointer hover:text-accent-1 transition-all duration-250"
									>
										Repository Link <Github />
									</a>
								)}
							</div>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default Projects;
