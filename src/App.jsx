import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import MyServices from "./components/MyServices";
import ContactMe from "./components/ContactMe";
import MySkills from "./components/MySkills";
import MyProjects from "./components/MyProjects";
import ClientReviews from "./components/ClientReviews";
import Footer from "./components/Footer";
import ScrollFadeIn from "./components/ScrollFadeIn";
import { Scroll } from "lucide-react";

function App() {
	return (
		<div className="relative min-h-screen">
			<Navbar />
			<ScrollFadeIn>
				<Hero />
			</ScrollFadeIn>

			<ScrollFadeIn>
				<MyServices />
			</ScrollFadeIn>

			<ContactMe />

			<MySkills />

			<ScrollFadeIn>
				<MyProjects />
			</ScrollFadeIn>

			<ClientReviews />

			<Footer />
		</div>
	);
}

export default App;
