"use client";
import Link from "next/link";
import Image from "next/image";
import vsa_logo from "../../assets/vsa-logo.webp";
import "./navbar.css";

export default function Navbar() {
	return (
		<nav className="navbar">
			<ul>
				<li>
					<Link href="/" style={{ padding: 10 }} >
						<Image className="logo" src={vsa_logo} alt="VSA Logo" priority={true}></Image>
					</Link>
				</li>
				<li>
					<Link href="/voting" style={{ padding: 20}}>Vote Now</Link>
				</li>
				<li>
					<Link href="/about_us" style={{ padding: 20}}>About Us</Link>
				</li>
			</ul>
		</nav>
	);
}