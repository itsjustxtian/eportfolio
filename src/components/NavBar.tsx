'use client';

import Link from 'next/link';
import React from 'react';
import { useEffect, useState } from 'react';

const links = [
	{
		name: 'Landing Page',
		link: '#landing-page',
	},
	{
		name: 'About',
		link: '#about',
	},
	{
		name: 'Experience',
		link: '#experience',
	},
	{
		name: 'Projects',
		link: '#projects',
	},
	{
		name: 'Contact',
		link: '#contact',
	},
];

const NavBar = () => {
	const [scrolled, setScrolled] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			setScrolled(window.scrollY > 50); // adjust threshold as needed
		};

		handleScroll();

		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	}, []);

	return (
		<div
			className={`hidden md:flex justify-end items-center gap-8 sticky top-0 px-[10rem] h-[6rem] font-poppins text-lg z-[100] transition-all duration-250 ${
				scrolled ? 'bg-foreground/5 backdrop-blur-md shadow' : ''
			}`}
		>
			{links.map((link) => (
				<Link
					key={link.link}
					href={link.link}
					className="cursor-pointer hover:text-accent-1 transition-all duration-250"
				>
					{link.name}
				</Link>
			))}
		</div>
	);
};

export default NavBar;
