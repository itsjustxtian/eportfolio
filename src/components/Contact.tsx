import React from 'react';
import { Github, Mail } from 'lucide-react';

const Contact = () => {
	return (
		<div className="flex flex-col gap-y-6 mb-6">
			<h1 className="text-left text-4xl md:text-6xl font-cal-sans my-6">
				Contact
			</h1>
			<div className="flex gap-2 items-center">
				<Mail />{' '}
				<a href="mail&#116;o&#58;%6Fc%6&#70;%6&#69;&#46;%&#54;&#51;hris&#116;iane&#64;g%6Da&#105;&#37;&#54;&#67;&#46;com">
					o&#99;on&#46;c&#104;&#114;i&#115;t&#105;ane&#64;&#103;mail&#46;com
				</a>
			</div>
			<div className="flex gap-2 items-center">
				<Github />
				<a href="https://github.com/itsjustxtian">itsjustxtian</a>
			</div>
		</div>
	);
};

export default Contact;
