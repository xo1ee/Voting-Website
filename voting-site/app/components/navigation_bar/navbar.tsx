import { Link } from "react-router-dom";
import Image from "next/image";
import vsa_logo from "../../assets/vsa-logo.webp";
import "./navbar.css";

// import Home from "../../pages/home";

export default function Navbar() {
	return (
		<nav className="navbar">
			<ul>
				<li>
					<Link to="/" style={{ padding: 10 }} >
						<Image className="logo" src={vsa_logo} alt="VSA Logo"></Image>
					</Link>
				</li>
				<li>
					<Link to="/Voting" style={{ padding: 20}}>Vote Now</Link>
				</li>
				<li>
					<Link to="/AboutUs" style={{ padding: 20}}>About Us</Link>
				</li>
			</ul>
		</nav>
	);
}