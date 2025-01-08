import Navbar from "../components/navigation_bar/navbar";

export default function Home() {
	return (
		<div>
			{/* Creates the title */}
			<header className="header">
				<Navbar />
				<h1 className="text-5xl font-bold absolute left-1/2 top-[35%] transform -translate-x-1/2 text-center"
					>Vietnamese Student Association (VSA)
				</h1>
			</header>
		</div>
	);
}