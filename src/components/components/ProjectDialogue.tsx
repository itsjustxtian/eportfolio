import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from '@/components/ui/dialog';
import Image from 'next/image';

type ProjectDialogueProps = {
	image: string;
	index: number;
};

const ProjectDialogue = ({ image, index }: ProjectDialogueProps) => {
	return (
		<Dialog>
			<DialogTrigger>
				<Image
					src={image}
					alt={`Project image ${index + 1}`}
					fill
					className="object-contain rounded-md hover:scale-105 transition-all duration-250"
					unoptimized
				/>
			</DialogTrigger>
			<DialogContent className="h-[90%] max-w-[90%]">
				<DialogHeader hidden>
					<DialogTitle>Are you absolutely sure?</DialogTitle>
					<DialogDescription>
						This action cannot be undone. This will permanently delete your
						account and remove your data from our servers.
					</DialogDescription>
				</DialogHeader>
				<Image
					src={image}
					alt={`Project image ${index + 1}`}
					fill
					className="object-contain rounded-md"
					unoptimized
				/>
			</DialogContent>
		</Dialog>
	);
};

export default ProjectDialogue;
