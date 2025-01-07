import Navbar from "../components/navigation_bar/navbar";

export default function Home() {
	return (
		<div>
			{/* Creates the title */}
			<header className="header">
				<Navbar />
				<h1 className="header_text">Vietnamese Student Association (VSA)</h1>
			</header>
		</div>
	);
}