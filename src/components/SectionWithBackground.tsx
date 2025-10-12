import { StarsBackground } from '@/components/animate-ui/components/backgrounds/stars';

export default function SectionWithStars({
	id,
	children,
	frosted = false,
}: {
	id: string;
	children: React.ReactNode;
	frosted?: boolean;
}) {
	return (
		<section id={id} className="relative z-10">
			<StarsBackground
				starColor="#FFF"
				className={`absolute inset-0 -z-10 ${frosted ? '' : 'bg-none'}`}
			/>
			<div className="mx-[2rem] md:mx-[10rem]">{children}</div>
		</section>
	);
}
