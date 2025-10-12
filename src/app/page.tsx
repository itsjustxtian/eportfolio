import About from '@/components/About';
import Contact from '@/components/Contact';
import Experience from '@/components/Experience';
import LandingPage from '@/components/LandingPage';
import Projects from '@/components/Projects';
import SectionWithStars from '@/components/SectionWithBackground';

export default function Home() {
	return (
		<div className="min-h-screen flex flex-col bg-background font-poppins">
			<main>
				<section id="landing-page">
					<LandingPage />
				</section>
				<SectionWithStars id="about">
					<About />
				</SectionWithStars>
				<SectionWithStars id="experience">
					<Experience />
				</SectionWithStars>
				<SectionWithStars id="projects">
					<Projects />
				</SectionWithStars>
				<SectionWithStars id="contact">
					<Contact />
				</SectionWithStars>
			</main>
			<footer></footer>
		</div>
	);
}
