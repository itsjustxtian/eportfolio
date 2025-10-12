import React from 'react';
import TypingText from './ui/shadcn-io/typing-text';
import { ChevronsDown, Contact, FileUser } from 'lucide-react';
import { StarsBackground } from './animate-ui/components/backgrounds/stars';
import Link from 'next/link';

const LandingPage = () => {
	return (
		<div className="min-h-screen flex flex-col justify-center items-center font-poppins gap-4 my-0">
			<div
				id="intro"
				className="flex flex-col gap-2 justify-center items-center z-5 md:mx-[10rem] mx-[2rem]"
			>
				<p className="md:text-2xl text-center">Hello, my name is Christian.</p>
				<TypingText
					text={['I am a full-stack web and software developer.']}
					typingSpeed={75}
					pauseDuration={1500}
					showCursor={true}
					className="text-4xl md:text-6xl font-bold text-center max-w-screen"
					cursorClassName="h-8 md:h-12"
					textColors={['#ffcf99']}
					variableSpeed={{ min: 50, max: 120 }}
					startOnVisible
				/>
			</div>
			<div
				id="actions"
				className="flex flex-col justify-center items-center gap-6 z-5 mx-[10rem]"
			>
				<div className="flex flex-col md:flex-row justify-center items-center gap-6">
					<button className="text-nowrap cursor-pointer flex items-center gap-2 px-4 py-2 bg-white text-black hover:bg-white/80 hover:scale-102 transition-all duration-250 rounded-md">
						<FileUser /> <p>Download CV</p>
					</button>
					<Link
						href="#contact"
						scroll
						className="cursor-pointer flex items-center gap-2 px-4 py-2 bg-accent-2/50 hover:bg-accent-2/30 hover:scale-105 transition-all duration-250 rounded-md"
					>
						<Contact />
						Contact Me
					</Link>
				</div>
				<Link
					href="#about"
					scroll
					className="cursor-pointer flex items-center gap-2 px-4 py-2 hover:text-accent-1 transition-all duration-250 rounded-md"
				>
					View more
					<ChevronsDown />
				</Link>
			</div>
			<StarsBackground
				starColor="#FFF"
				className="absolute inset-0 flex items-center justify-center rounded-xl z-2"
			/>
		</div>
	);
};

export default LandingPage;
