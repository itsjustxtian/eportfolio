import React from 'react';

const Footer = () => {
	return (
		<footer className="min-h-[50px] flex items-center justify-center font-cal-sans text-sm">
			<p>Christian Ocon © {new Date().getFullYear()}</p>
		</footer>
	);
};

export default Footer;
